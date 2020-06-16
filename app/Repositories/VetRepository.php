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
    return $this->model->paginate(5);
}
function find($id)
{$user=  $this->model->where('user_id',$id)->first();
    return $user;
}
function update($id,$speciality,$directLine,$fax)
{
   return $this->model->where('user_id',$id)->update(['speciality'=>$speciality,'directLine'=>$directLine ,'fax'=>$fax]);
}


}
