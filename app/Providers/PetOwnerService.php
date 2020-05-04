<?php

namespace App\Providers;
use Illuminate\Http\Request;
use App\Http\Requests\RegistrationFormRequest;

use App\PetOwner;
use App\Repositories\PetOwnerRepository;
use Error;
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
        'hospital_id'=>'1',
        ]);
       $attributes=$request2->all();
       $this->user->create($attributes);
    return $res;
}
else return false ;
}
}
