<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistrationFormRequest;
use App\User;
use App\PetOwner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use Symfony\Component\HttpFoundation\Response;

//use App\Providers\PetOwnerService;
use App\Notifications\MyFirstNotification;

use Illuminate\Contracts\Mail\Mailer;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Mail;
use App\Mail\PetownerMail;
use App\Providers\PetOwnerService;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Redis;
use Illuminate\Notifications\Notifiable;


class PeetOwnerController extends APIController
{ public $adresse ;
    protected $petownerservice;
    public function __construct()
	{
		$this->petownerservice =new PetOwnerService();
	}

 public function register(RegistrationFormRequest $request)
    {
       // $request->password=bcrypt(Str::random());

     /* $user=new User();
      $user->email=$request->email ;
       $user->name=$request->name ;
       $user->last_name=$request->last_name ;
       $user->password=bcrypt($request->password);
      // $user->age=$request->age ;
       $user->gender=$request->gender;
       $user->phone=$request->phone;
       $user->status='active';
      $user->date_of_birth=$request->date_of_birth;
     $result=$this->NewAdresse($request->city ,$request->street, $request->postal_code,$request->adresse);
       $user->adresse_id=$result;
       $user->password=bcrypt(Str::random());
        $user->save();
            $petOwner =new PetOwner() ;
            $petOwner->user_id=$user->id ;


            $res=DB::table('table__hospitals')->first();
            $petOwner->hospital_id=$res->id;*/
if($user=$this->petownerservice->create($request))

                {     $this->sendEmail($user->email);
                     $res= $this->sendNotif();
                             return response()->json([
                              'success'=>true,
                              'user'=>$user//,'notif'=>$res
                              ]
                              ,200);
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
public function sendNotif()
{    //$user = DB::table('users')->where('id',$id)->get()->first();
    $details = [

        'greeting' => 'Hi Artisan',

        'body' => 'This is my first notification from ItSolutionStuff.com',

        'thanks' => 'Thank you for using ItSolutionStuff.com tuto!',

        'actionText' => 'View My Site',

        'actionURL' => url('/'),
        'order_id'=>'hi'


    ];
    Notification::send(Auth::user(), new MyFirstNotification($details));
return response()->json(['user'=>Auth::user()]);
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

public function show($id)
{$userr=new User();
    $user = DB::table('users')->where('id',$id)->get()->first();
$userr=$user;
  $adresse=DB::table('table_adresse')->where(['id'=>$userr->adresse_id])->get();
    return response()->json([
       'user'=>$user,
       'adresse'=>$adresse
       ]);
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
public function Update(Request $request)
{$email=DB::table('users')->where(['email'=>$request->email])->count();
    if($email>1)
    {
if($emil2=DB::table('users')->where(['email'=>$request->email,'id'=>$request->id])->count())
        {
            if($emil2===1)
{
    $user= DB::table('users')->where('id',$request->id)->update(['name'=>$request->name ,'last_name'=>$request->last_name ,'phone'=>$request->phone ,'date_of_birth'=>$request->date_of_birth]);
    return response()->json(['success'=>true,
    'count'=>$email,
    'user' =>$user ]);
}

             else
 //if
  //($user= DB::table('users')->where('id',$request->id)->update(['name'=>$request->name ,'last_name'=>$request->last_name ,'email'=>$request->email,'phone'=>$request->phone ,'date_of_birth'=>$request->date_of_birth]))
    {

//$this->updateAdreese($request->adreese_id, $request->adree)

return response()->json(['success'=>false,
'count'=>$email]
);}
//->update(['name'=>$request->name ,'last_name'=>$request->last_name ,'email'=>$request->email,'phone'=>$request->phone ,'date_of_birth'=>$request->date_of_birth]))

        }
        else

return response()->json(['success'=>false]);



}
else
{$user= DB::table('users')->where('id',$request->id)->update(['name'=>$request->name ,'last_name'=>$request->last_name ,'phone'=>$request->phone ,'date_of_birth'=>$request->date_of_birth]);
return response()->json(['success'=>true,
'count'=>$email, 'user' =>$user]);}
}
}
