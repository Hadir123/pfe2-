<?php

namespace App\Repositories;


use App\Payment;

use Illuminate\Support\Facades\DB;

class PaymentRepository
{
protected $model ;

    public function __construct(Payment $order)
    {
        $this->model = $order;
    }
    function create ($attribue)
{
    return $this->model->create($attribue);
}
}
