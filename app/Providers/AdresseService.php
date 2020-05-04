<?php

namespace App\Providers;

use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;
use App\Repositories\AdresseRepository;
use App\Adresse ;

class AdresseService extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    protected $user ;

    public function __construct()
    {
    $this->user=new \App\Repositories\AdresseRepository(new Adresse());
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
    function create(Request $request)
{
    $attributes=$request->all() ;
return $this->user->create($attributes);
}
function find (Request $request)
{
    $city=$request->city ;
    $street=$request->street;
   $code= $request->postal_code;
    $adresse=$request->adresse;
     return $this->user->find($city,$street,$code,$adresse);

}
}
