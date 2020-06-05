<?php

namespace App\Repositories;

use App\Adresse;
use App\Pet;
use Illuminate\Support\Facades\DB;

class PetRepository
{
protected $model ;

    public function __construct(Pet $pet)
    {
        $this->model = $pet;
    }
    function create ($attribue)
{
    return $this->model->create($attribue);
}
function all ()
{
    return $this->model->all();
}
function find ($id)
{

   return $this->model->where('pet_owner_id',$id)->first();
}
function breed($breed)
{
    $res=DB::table('breeds')->where('breed',$breed)->first() ;
    return  $res ;

}
function species ($species)
{
    $res=DB::table('species')->where('speciers',$species)->first() ;
    return  $res ;

}
function allSpecies()
{
 return    $res=DB::table('species')->get()->toArray();
}
function allBreeds()
{
 return    $res=DB::table('breeds')->get()->toArray() ;
}
function findByPetOwner($id)
{
    return $res=$this->model->where('pet_owner_id',$id)->get() ;
}

}
