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
    protected $address ;

    public function __construct()
    {
    $this->address=new \App\Repositories\AdresseRepository(new Adresse());
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
 return $this->address->all();
}
    function create(Request $request)
{
    $attributes=$request->all() ;
return $this->address->create($attributes);
}
function find (Request $request)
{
    $city=$request->city ;
    $street=$request->street;
   $code= $request->postal_code;
    $adresse=$request->adresse;
     return $this->address->find($city,$street,$code,$adresse);

}
function findById($id)
{
return $this->address->findById($id);
}
function update(Request $request)
{

if($res=$this->find($request))

return $res->id ;
else

  {$res=$this->create($request);
   return $res->id ;

  }
}

}
