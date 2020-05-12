<?php

namespace App\Repositories;

use App\Vet ;

use Illuminate\Support\Facades\DB;

class VetRepository
{
protected $model ;

    public function __construct(Vet $vet)
    {
        $this->model = $vet;
    }
    function create ($attribues)
{
    return $this->model->create($attribues);
}
function all ()
{
    return $this->model->all();
}
function find($id)
{$user=  $this->model->where('user_id',$id)->first();
    return $user;
}
function update($id,$speciality,$directLine,$fax)
{
   return $this->model->where('user_id',$id)->update(['speciality'=>$speciality,'directLine'=>$directLine ,'fax'=>$fax]);
}
public function attachPetOwer($petowner ,$vet)
{
    $res=DB::table('vet_pet_careful')->insert([ 'id_petOwner'=>$petowner ,
    'id_vet'=>$vet
    ]);
    return $res ;
}
function CarfulTeam($id)
{

    $res=DB::table('vet_pet_careful')->where('id_vet',$id)->get() ;
    return $res ;
}
}
