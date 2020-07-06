<?php

namespace App\Providers;

use App\Pet;
use Illuminate\Http\Request;

use Illuminate\Support\ServiceProvider;

class PetService extends ServiceProvider
{protected $pet ;

    public function __construct()
    {
    $this->pet=new \App\Repositories\PetRepository(new Pet());
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
    function create(Request $request)
    {
       $validat= $request->validate([
            'animal_name' => 'required|string|max:255',

            'breed_id' => 'required',
            'species_id' => 'required',
            'gender' => 'required',
            'current_weight' => 'required',
            'current_weight_unit'=>'required',
            'color'=>'required|string',
            'date_of_birth'=>'required|date'
        ]);

        if($validat)
        {
$attributes =$request->all() ;
           return  $this->pet->create($attributes);

        }
        else
        return false ;
    }
    public function breeds()
    {
        return $this->pet->allBreeds();
    }
    public function species()
    {
        return $this->pet->allSpecies();
    }
    public function ShowPetOwner($id)
    { return $this->pet->findByPetOwner($id);
    }
    public function findByPet($id)
    {
        return $this->pet->findByPet($id);
    }
}
