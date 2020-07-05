<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangePassword;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class ChangerPasswordController extends Controller
{
    //
    public function process(ChangePassword $request)
    {
return $this->getPasswordRestTableRow($request)->count()>0 ?$this->ChangePassword($request) :$this->tokenNotFound();
    }
    private function getPasswordRestTableRow($request)
    {
return DB::table('reset_password')->where(['email'=>$request->email,'token'=>$request->restToken]);
    }
    private function tokenNotFound()
    {
return response()->json(['error'=>'Email is invalid'],Response::HTTP_UNPROCESSABLE_ENTITY);
     }
     public function ChangePassword($request)
    {
$user=User::where('email',$request->email)->first();
$user->update((['password'=> bcrypt($request->password)]));
$this->getPasswordRestTableRow($request)->delete();
return response()->json(['data'=>'Password Successfully Changed '],Response::HTTP_CREATED);
    }
public function ChangePassword2(Request $request)
    {
$user=User::where('email',$request->email)->first();
$user->update((['password'=> bcrypt($request->password)]));
//$this->getPasswordRestTableRow($request)->delete();
return response()->json(['data'=>'Password Successfully Changed '],Response::HTTP_CREATED);
}
}

