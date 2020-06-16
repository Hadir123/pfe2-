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
function findByIdPharmcy($id)
{
    return $this->model->where('pharmacy_id',$id)->first();
}
function all()
{
    return $this->model->paginate(1);
}

}
