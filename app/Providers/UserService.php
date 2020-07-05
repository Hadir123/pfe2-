<?php

namespace App\Providers;
use Illuminate\Support\Str;
use App\Http\Controllers\AdresseController;
use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;
use App\Repositories\UserRepositroy;
use App\User;
use Illuminate\Support\Facades\Crypt;

use App\Mail\PetownerMail;
use Illuminate\Support\Facades\Mail;
use App\Repositories\PetOwnerRepository;
use App\Notifications\MyFirstNotification;
use Illuminate\Support\Facades\Hash;
use Validator;

use Dingo\Api\Exception\ResourceException;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Dingo\Api\Exception\StoreResourceFailedException;
use Illuminate\Support\Facades\Notification;


use Illuminate\Support\Facades\Password;
use Illuminate\ {

    Notifications\DatabaseNotification
};
use App\Http\Requests\RegistrationFormRequest;
use App\PetOwner;
use Exception;
use Illuminate\Support\Facades\Auth;

use App\Providers\AdresseService;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Redis;

class UserService extends ServiceProvider
{  use Notifiable;
    /**
     * Register services.
     *
     * @return void
     */
    protected $user ;

    public function __construct()
    {
    $this->user=new UserRepositroy(new User());
    }
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
function all ()
{
//$attributes=$request->all();
 return $this->user->all();
}
function create(RegistrationFormRequest $request)
{

$addr = new AdresseService();
    $request2 = new \Illuminate\Http\Request();

    $request2->replace(['city' => $request->city,
    'street'=>$request->street,
    'postal_code'=>$request->postal_code,
    'adresse'=>$request->adresse]);

if($res=$addr->find($request2))

$adresse_id=$res->id ;
else

  {$res=$addr->create($request2);
    $adresse_id=$res->id ;

  }
  $attributes =[];

  $request2->replace(['name' => $request->name ,
  'last_name'=>$request->last_name,
   'email'=>$request->email,
   'password'=>bcrypt(Str::random()),
   'phone'=>$request->phone ,
   'status'=>'active',
'date_of_birth'=>$request->date_of_birth,
'gender'=>$request->gender ,
  'adresse_id'=> $adresse_id]) ;
   $attributes=$request2->all();
$res= $this->user->create($attributes);
$this->sendEmail($request->email );
   return $res;


}
public function findByEmail(Request $request)
{
    $attribute=$request->email ;
    return $this->user->findByEmail($attribute);
}
public function Status ($id)
    {
        if ($this->user->status($id)==='active')
        return true ;
        else
        return false ;
    }
public function show($id)
{$resulta = $this->user->find($id);
return $resulta;
}
function update (Request $request)
{
      if ($this->user->update($request->id,$request->name ,$request->last_name ,$request->email,$request->phone ,$request->date_of_birth,$request->adresse_id))
   { $user=$this->show($request->id);
    return $user;}
    else
   return  false ;
}
function changeStatus($id)
{
     if($this->user->changeStatus($id))
     return true ;
     else
     false ;
}
public function Notif()
{$user2 =Auth::user() ;

 $notif=  $this->user->Notification(Auth::user()->id);

for($i=0 ;$i<count($notif);$i++)
{$data2 = json_decode($notif[$i]->data, true);

    $data[$i]=$data2;
}

 return $data;

}
public function CountNotif()
{
$user=Auth::user() ;
return $this->user->CountNotif($user->id) ;
}
public function sendEmail($email)
{
Mail::to($email)->send(new PetownerMail());

}

function createPharmacyAdmin(Request $request)
{
    $attributes=$request->all();
    $res= $this->user->create($attributes);

       return $res;
}
public function ProfilUpdate (Request $request)
{
$request->validate([
    'name' => 'required|string',
            'email' => 'required|email',
           /*'password'=>'required|password',
          'NewPassword' => 'required|string|min:6|max:10',*/
            'last_name'=>'required|max:60',
            'phone'=>'required|max:10',


]);
//$user->update((['password'=> bcrypt($request->password)]));

//
$usere=Auth::user();

if($u=$this->update($request))
{
//$usere->Update() ;
if($request->password!==null)
{
 if($this->passwordCorrect($request))
{
  if($this->user->updateMotDePasse($usere->id,bcrypt($request->newPassword)))
   return true;
}
else
return false ;
}
return $this->show($usere->id);
}
else
return false ;
}

public function updatePhoto(Request $request)
{

  $usere =Auth::user();

  if($request->hasFile('image')){
    $image = $request->file('image');
         $fileNam=$usere->id.$image->getClientOriginalName();
$path=$request->file('image')->move(public_path('/'),$fileNam);
$photourl=url('/'.$fileNam);

$usere =Auth::user();
$u = new  User();
$u->where('id',$usere->id)->update(['image_url'=>$photourl]);
  // $usere->image_url=$image ;
//$usere->Update() ;
            return response()->json(['url'=>$photourl]);
  }else
  return response()->json([

      'user'=>'no'
  ]);
}
private function passwordCorrect(Request $request)
{$usere =Auth::user();
    if (Hash::check($request->get('password'), Auth::user()->password)) {
        return true;
        //add logic here
       }
       else return false ;
}
public function login(Request $request)
{$input = $request->only('email', 'password');
$request2 = new \Illuminate\Http\Request();
$request2->replace(['email' => $request->email]);
$vet1=$this->user->findByEmail($request->email);
if ($vet1)
    {$vet=new VetService () ;
if($vet->findById($vet1->id))
    {
    return 1;
    }else{
$petowner=new PetOwnerService() ;

    if($petowner->findById($vet1->id))
    return 2 ;
     else
    {
$pharmacist=new PharmacistService() ;
if($pharmacist->findById($vet1->id))
return 3 ;
    }
}
    }
else
    return false ;
    }

}
