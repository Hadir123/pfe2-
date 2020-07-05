<?php

namespace App\Repositories;

use App\orderItem;
use App\Pharmacie;
use Illuminate\Support\Facades\DB;

class OrderItemRepository
{
protected $model ;

    public function __construct(orderItem $order)
    {
        $this->model = $order;
    }
    function create ($attribue)
{
    return $this->model->create($attribue);
}
}
