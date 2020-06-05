<?php

namespace App\Http\Controllers;

use App\Providers\PetService;
use Illuminate\Http\Request;

class PetController extends Controller
{

    protected $pet ;

    public function __construct()
    {
    $this->pet=new PetService() ;
    }


    public function breedAndSpecies()
    {
$breeds=$this->pet->breeds();
$species=$this->pet->species() ;
return response()->json([
    'breeds'=>$breeds ,
    'species'=>$species
]);
    }
    public function create(Request $request)
    {
        return $this->pet->create($request);
    }
public  function showPetOwnr($id)
{
return $this->pet->ShowPetOwner($id);
}
}
