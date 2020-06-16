<?php

namespace App\Repositories;

use App\Drug;

use Illuminate\Support\Facades\DB;

class DrugRepository
{
protected $model ;

    public function __construct(Drug $drug)
    {
        $this->model = $drug ;
    }


function all ()
{
    return $this->model->all();
}
public function find($id){

    return Drug::findOrFail($id);

}

}
