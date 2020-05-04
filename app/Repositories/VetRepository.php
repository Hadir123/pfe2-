<?php

namespace App\Repositories;

use App\Vet ;

use Illuminate\Support\Facades\DB;

class VetRepository
{
protected $model ;

    public function __construct(Vet $vet)
    {
        $this->model = $vet ;
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
   return $this->model->where('user_id',$id);
}


}
