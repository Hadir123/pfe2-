<?php

namespace App\Http\Controllers;
use App\Mail\ResetPasswordMail;
use App\User;
use Illuminate\Contracts\Mail\Mailer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

//use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;

class ResetPasswordController extends Controller
{public $token ;
    public function SendEmail(Request $request ) {
        if (!$this->validatEmail($request->email))
        {
return $this->failedResponse() ;
        }
$this->send($request->email);
return $this->SuccessResponse() ;
    }
    public function validatEmail($email)
    {
        return  !! User::where('email',$email)->first();
    }
public function failedResponse()
{
return response()->json([
    'error'=>'Email does\'t exist'
],Response::HTTP_NOT_FOUND);
}
public function send($email)
{ $token= $this->createToken($email);
    $this->token=$token;
Mail::to($email)->send(new ResetPasswordMail($this->token->token));

}
public function createToken($email)
{$oldToken=DB::table('reset_password')->where('email',$email)->get('token')->first();
if($oldToken)
{
    return $oldToken;
}
    $tokenn = Str::random(60);
    $this->saveToken($tokenn,$email);
return $tokenn ;
}
public function saveToken($tokenn, $email)
{
    DB::table('reset_password')->insert([
        'email'=>$email,
        'token'=>$tokenn,
        'created_at' =>Carbon::now()
    ]);
}
public function SuccessResponse()
{
return response()->json([
    'data'=>'Reset Email is send successfully , please  check your inbox',
    'token'=>$this->token->token
],Response::HTTP_OK);
}
}

