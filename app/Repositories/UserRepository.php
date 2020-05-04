<?php

namespace App\Repositories;

use App\User ;
class UserRepositroy
{
protected $model ;


    public function __construct(User $user)
    {
        $this->model = $user ;
    }
    function create ($attribue)
{return $this->model->create($attribue);

}
function all ()
{
    return $this->model->all();
}
function  findByEmail($email)
{
    return $this->model->where('email',$email)->first();

}
function status($id)
{
    $resulta =$this->model->where('id',$id)->first();
    return $resulta->status;
}

}
