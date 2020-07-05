<?php

namespace App\Repositories;


use App\Refils;
use Illuminate\Support\Facades\DB;

class RefilsRepositroy
{
protected $model ;

    public function __construct(Refils $order)
    {
        $this->model = $order;
    }
    function create ($attribue)
{
    return $this->model->create($attribue);
}
}
