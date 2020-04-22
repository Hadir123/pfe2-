<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistrationFormRequest;
use App\User;
use App\PetOwner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use Symfony\Component\HttpFoundation\Response;

use Illuminate\Contracts\Mail\Mailer;

use Illuminate\Support\Facades\Mail;
use App\Mail\PetownerMail;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Support\Facades\Redis;

class PeetOwnerController extends APIController
{ public $adresse ;


 public function register(RegistrationFormRequest $request)
    {
       $user=new User();
       $user->email=$request->email ;
       $user->name=$request->name ;
       $user->last_name=$request->last_name ;
       $user->password=bcrypt($request->password);
       $user->age=$request->age ;
       $user->gender=$request->gender;
       $user->phone=$request->phone;
       $user->status='active';
       $user->date_of_birth=$request->date_of_birth;
       $result=$this->NewAdresse($request->city ,$request->street, $request->postal_code,$request->adresse);
        $user->adresse_id=$result;
        $user->save();
            $petOwner =new PetOwner() ;
            $petOwner->user_id=$user->id ;


            $res=DB::table('table__hospitals')->first();
            $petOwner->hospital_id=$res->id;
               if($petOwner->save())
                        {$this->sendEmail($user->email);
                        return response()->json([
                              'success'=>true,
                              'user'=>$user],200);
                        }

                   else
                   return response()->json([
                       'success' => false,

                   ],Response::HTTP_UNPROCESSABLE_ENTITY);


    }
 public function loginPetOwner(Request $request)
    {
        $input = $request->only('email', 'password');
        $token = null;
        $user=DB::table('users')->where('email',$request->email)->first();

            if($user)
            {
                $petOwner=DB::table('pet_owners')->where('user_id',$user->id)->first();
                if ($petOwner)
                     {
                        if (!$token = JWTAuth::attempt($input))
                         {
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

                     }
                }
                 else
                {
                    return response()->json(['error' => 'User Undefined'], 401);

                }


    }



public function sendEmail($email)
{
Mail::to($email)->send(new PetownerMail());

}
public function attachVet(Request $request)
{
$res=DB::table('vet_pet_careful')->insert([ 'id_petOwner'=>$request->id_petOwner ,
'id_vet'=>$request->id_vet

]);
if ($res)
return response()->json(['ok'=>'ok']);
else
return response()->json(['ok'=>'Not Ok']);

}
public function index()
{$petOwner= new PetOwner();
$petOwner=null ;
   $petOwners= DB::table('pet_owners')->get();

$i=0;
$user=[];
foreach($petOwners as $petOwner)
{
   $user[$i]=$this->showw($petOwner->user_id);
   $i++;
}
return $user ;

}
public function showw($id)
{
    $user = DB::table('users')->where('id',$id)->get();
    return $user;
}
public function ChangeStatus($id)
{
    $user = DB::table('users')->where('id',$id)->get()->first();
$users = new User();
$users=$user;
    if ($users->status=="active")
    {
        $user= DB::table('users')->where('id',$id)->update(['status'=>'desactive']);
    }
else
$user= DB::table('users')->where('id',$id)->update(['status'=>'active']);
if($user)
    return response()->json(['ok'=>'ok']);
 else
 return response()->json(['ok'=>'niok']);

}
}
