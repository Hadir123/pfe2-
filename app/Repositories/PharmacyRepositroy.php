<?php

namespace App\Repositories;
use App\Pharmacie;
use Illuminate\Support\Facades\DB;

class PharmacyRepositroy
{
protected $model ;

    public function __construct(Pharmacie $pharmacy)
    {
        $this->model = $pharmacy;
    }
    function create ($attribue)
{
    return $this->model->create($attribue);
}
/*function all ()
{
    return $this->model->all();
}
function find ($city,$street,$code,$adress)
{
    return $this->model->where(['city'=>$city,'street'=>$street,'postal_code'=>$code,'adresse'=>$adress])->first();
}
function findById($id)
{
    return $this->model->where('id',$id)->first();
}
*/
}
