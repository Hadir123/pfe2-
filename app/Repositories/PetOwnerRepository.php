<?php

namespace App\Repositories;
use App\PetOwner;

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

}
