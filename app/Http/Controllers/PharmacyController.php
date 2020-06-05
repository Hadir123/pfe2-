<?php

namespace App\Http\Controllers;

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
}
