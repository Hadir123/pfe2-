<?php

namespace App\Http\Controllers;

use App\Providers\PharmacistService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
class PharmacistController extends Controller
{
    //
    protected $pharmacistService;
    public function __construct()
	{
		$this->pharmacistService =new PharmacistService();
	}
    public function createAdmin(Request $request)
{
    if($pharmacy=$this->pharmacistService->createAdmin($request))

    {        return response()->json([
                  'success'=>true,
                  'pharmacy'=>$pharmacy//,'notif'=>$res
                  ]
                  ,200);
    }
else
       return response()->json([
           'success' => false,

       ],Response::HTTP_UNPROCESSABLE_ENTITY);

}
}
