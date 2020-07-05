<?php

namespace App\Http\Controllers;

use App\Providers\PharmacistService;
use App\Providers\PharmacyService;
use Symfony\Component\HttpFoundation\Response;


use Illuminate\Http\Request;

class PharmacyController extends Controller
{

    protected $pharmacyservice;
    public function __construct()
	{
		$this->pharmacyservice =new PharmacyService();
	}

 public function register(Request $request)
    {
        if($pharmacy=$this->pharmacyservice->create($request))

                {        return $pharmacy ;
                }
         else
                   return response()->json([
                       'success' => false,

                   ],Response::HTTP_UNPROCESSABLE_ENTITY);
    }
    public function indexe ()
    {return $this->pharmacyservice->index() ;
/*$u=new PharmacistService() ;
return $u->index () ;*/
    }
    function find($id)
    {   $pharmacy=$this->pharmacyservice->findById($id);
         $adress = new AdresseController() ;
        $res=$adress->findById($pharmacy->adresse_id);
        return response()->json(['pharmacy'=>$pharmacy,
        'adresse'=>$res]);
    }
    function update(Request $request)
    {
        return $this->pharmacyservice->update($request);
    }
function all()
{
    return $this->pharmacyservice->indexe();
}
}
