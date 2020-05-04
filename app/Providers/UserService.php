<?php

namespace App\Providers;
use Illuminate\Support\Str;
use App\Http\Controllers\AdresseController;
use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;
use App\Repositories\UserRepositroy;
use App\User;
use App\Http\Requests\RegistrationFormRequest;
use Exception;

use App\Providers\AdresseService;
use Illuminate\Support\Facades\Redis;

class UserService extends ServiceProvider
{
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
}
