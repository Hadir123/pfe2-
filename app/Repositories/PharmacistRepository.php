<?php

namespace App\Repositories ;
use App\Pharmacist;
use Illuminate\Support\Facades\DB;

class PharmacistRepositroy
{
protected $model ;

    public function __construct(Pharmacist $pharmacy)
    {
        $this->model = $pharmacy;
    }
    function create ($attribue)
{
    return $this->model->create($attribue);
}
}
