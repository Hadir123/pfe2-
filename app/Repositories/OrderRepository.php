<?php
namespace App\Repositories;

use App\order;
use Illuminate\Support\Facades\DB;

class OrderRepository
{
protected $model ;

    public function __construct(order $order)
    {
        $this->model = $order;
    }
    function create ($attribue)
{
    return $this->model->create($attribue);
}
function all ()
{
    return $this->model->paginate(10);
}
function orderById($id)
{
    return $this->model->where('pet_id',$id)->get() ;
}

}
