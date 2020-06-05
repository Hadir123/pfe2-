<?php

namespace App\Providers;

use App\PetOwnerVet;
use App\Repositories\PetOwnerVetRepository;
use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;

class PetOwnerVetService extends ServiceProvider
{public $vetPetOnwer ;
    public $user ;

    public function __construct()
    {
    $this->vetPetOnwer=new PetOwnerVetRepository(new PetOwnerVet());

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
    public function create($id1 ,$id2)
{

if($this->vetPetOnwer->create($id1,$id2) )

return true ;
else
return false ;
}
function Careful($id)
{
    return $this->vetPetOnwer->CarfulTeam($id);
}
}
