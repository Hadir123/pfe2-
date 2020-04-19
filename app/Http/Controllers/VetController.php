<?php

namespace App\Http\Controllers;

use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Http\Request;
use App\User;
use App\Vet;
use App\Http\Controllers\APIController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class VetController extends  APIController
{

 public function register(Request $request)
    {
       $user=new User();
       $user->email=$request->email ;
       $user->name=$request->name ;
       $user->last_name=$request->last_name ;
       $user->password=bcrypt($request->password);
       $user->age=$request->age ;
       $user->gender=$request->gender;
       $user->phone=$request->phone;
       $user->date_of_birth=$request->date_of_birth;
       $result=$this->NewAdresse($request->city ,$request->street, $request->postal_code,$request->adresse);
        $user->adresse_id=$result;
        $user->save();
            $vet =new Vet() ;
            $vet->user_id=$user->id ;
            $vet->is_superviseur=$request->is_superviseur;
            $vet->speciality=$request->speciality;
            $res=DB::table('table__hospitals')->first();
            $vet->hospital_id=$res->id;
                    if ($vet->save())
                          return response()->json(['helo'=>'ok']);


                    else
                          return response()->json(['helo'=>'no']);


    }
    public function loginVet(Request $request)
    {$input = $request->only('email', 'password');
        $token = null;

        $user=DB::table('users')->where('email',$request->email)->first();

if($user)
{
    $vet=DB::table('vets')->where('user_id',$user->id)->first();
   if ($vet)
{


    if (!$token = JWTAuth::attempt($input)) {
        return response()->json(['error' => 'Email or password invalid'], 401);
    }


        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
        ]);
    }
    else
    {
        return response()->json(['error' => 'Not Vet'], 401);

   }   }
else
{
    return response()->json(['error' => 'User Undefined'], 401);

}


    }

 public function index()
 {$vets= new Vet();
$vet=null ;
    $vets= DB::table('vets')->get();

$i=0;
$user=[];
foreach($vets as $vet)
{
    $user[$i]=$this->showw($vet->user_id);
    $i++;
}
return $user ;

}
public function showw($id)
{
    $user = DB::table('users')->where('id',$id)->get();
    return $user;
}

 }

