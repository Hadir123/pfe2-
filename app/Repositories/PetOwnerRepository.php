<?php

namespace App\Repositories;
use App\PetOwner;
use Illuminate\Support\Facades\DB;

class PetOwnerRepository
{
protected $model ;


    public function __construct(PetOwner $pizza)
    {
        $this->model = $pizza;
    }
    function create ($attribue)
{
    return $this->model->create($attribue);
}
function all ()
{
    return $this->model->all();
}
public function attachVet($petowner ,$vet)
{
    $res=DB::table('vet_pet_careful')->insert([ 'id_petOwner'=>$petowner ,
    'id_vet'=>$vet
    ]);
    return $res ;
}
public function indexe ()
{
    $petOwners= DB::table('pet_owners')->all();
    return $petOwners;
}
}
