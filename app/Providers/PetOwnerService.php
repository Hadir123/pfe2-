<?php

namespace App\Providers;
use Illuminate\Http\Request;
use App\Http\Requests\RegistrationFormRequest;
use App\Http\Resources\PetOwenrRessource;
use Illuminate\Support\Facades\Mail;
use App\Mail\PetownerMail;
use App\PetOwner;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Redis;
use Illuminate\Notifications\Notifiable;
use App\Repositories\PetOwnerRepository;
use App\Notifications\MyFirstNotification;

use Illuminate\Contracts\Mail\Mailer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;

class PetOwnerService extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    protected $user;
    protected $user1;
    public function __construct()
    {
    $this->user=new PetOwnerRepository(new PetOwner());
    $this->user1 = new UserService();
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
    function create(RegistrationFormRequest  $request)
    {if( $request->validated())
         { $user = new UserService();
        $request2 = new \Illuminate\Http\Request();
$res =$user->create($request);
$attributes=[];
        $request2->replace(['user_id' => $res->id,

        ]);
       $attributes=$request2->all();
       $this->user->create($attributes);
       $this->user1->sendEmail($res->email);
    return $res;
}
else return false ;
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
if ($this->user->attachVet($request->id_petOwner,$request->id_vet))
return true ;
else
return false ;
}
public function index()
{/*$petOwners=$this->user->all();
$this->pharmacy->all();
    $i=0;
    $user=[];
    foreach($petOwners as $petOwner)
    {
       $user[$i]=$this->user1->show($petOwner->user_id);
       $i++;
    }
    return $user ;
*/
return PetOwenrRessource::collection($this->user->allWithPaginate());
}
public function showPetOwner($id)
{
   return $this->user1->show($id);

}
public function Update(Request $request)
{if($user= $this->user1->update($request))
    return $user ;
    else return false ;
}
public function index2()
 {
$petOwners=$this->user->all();

    $i=0;
    $user=[];
    foreach($petOwners as $petOwner)
    {
       $user[$i]=$this->user1->show($petOwner->user_id);
       $i++;
    }
    return $user ;
 }
}
