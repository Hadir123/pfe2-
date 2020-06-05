<?php

namespace App\Repositories;

use App\PetOwnerVet;

use Illuminate\Support\Facades\DB;

class PetOwnerVetRepository
{
protected $model ;

    public function __construct(PetOwnerVet $vet)
    {
        $this->model = $vet;
    }
    function create ($petowner,$vet)
{$res=DB::table('vet_pet_careful')->insert([ 'id_petOwner'=>$petowner ,
    'id_vet'=>$vet
    ]);
    return $res ;
}
function all ()
{
    return $this->model->all();
}
function find($id)
{$user=  $this->model->where('id_vet',$id)->first();
    return $user;
}

function CarfulTeam($id)
{

    $res=DB::table('vet_pet_careful')->where('id_vet',$id)->get() ;
    return $res ;
}
}
