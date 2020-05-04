<?php

namespace App\Providers;

use App\Repositories\VetRepository;
use App\Vet;
use Illuminate\Http\Request;

use Illuminate\Support\ServiceProvider;

class VetService extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public $vet ;
    public $user ;

    public function __construct()
    {
    $this->vet=new VetRepository(new Vet());
    $this->user= new UserService() ;
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
public function Login(Request $request)
    {$input = $request->only('email', 'password');
$request2 = new \Illuminate\Http\Request();
$request2->replace(['email' => $request->email]);
$vet1=$this->user->findByEmail($request2);
if ($vet1)
    {
if( $this->vet->find($vet1->id))
    {
    return $vet1;
    }
    }
else
    return false ;
    }
public function Status ($id)
    { if ($this->user->Status($id)===true)
             return true ;
     else
            return false ;
    }


}
