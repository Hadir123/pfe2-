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
                              'data'=>$user],200);
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


}
