<?php

namespace App\Providers;
use Illuminate\Support\Str;

use App\Pharmacist;
use App\Repositories\PharmacistRepositroy;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;
class PharmacistService extends ServiceProvider
{protected $pharmacy;
        public function __construct()
        {
            $this->pharmacy=new PharmacistRepositroy(new Pharmacist());

        }
    /**
     * Register services.
     *
     * @return void
     */
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
public function createAdmin(Request $request)
{
$user= new UserService();
    $validatedData = $request->validate([
        'name' => 'required|string',
        'email' => 'required|email|unique:users',
      //  'password' => 'required|confirmed|string|min:6|max:10',
        'last_name'=>'required|max:60',
        'phone'=>'required|max:10',
        'gender'=>'required|max:10',
        'date_of_birth'=>'required|date',
        'pharmacy_id'=>'required',
        'adresse_id'=>'required'

    ]);
    if ($validatedData)
   { $request2 = new \Illuminate\Http\Request();
    $request2->replace(['name' => $request->name ,
  'last_name'=>$request->last_name,
   'email'=>$request->email,
   'password'=>bcrypt(Str::random()),
   'phone'=>$request->phone ,
   'status'=>'active',
'date_of_birth'=>$request->date_of_birth,
'gender'=>$request->gender ,
  'adresse_id'=> $request->adresse_id]) ;


   $res=$user->createPharmacyAdmin($request2);
   $request->replace(['id_user'=>$res->id,'pharmacy_id'=>$request->pharmacy_id,'admin'=>1]);
   $attributes=$request->all();
return $this->pharmacy->create($attributes);
   }
   else return false;
}

}
