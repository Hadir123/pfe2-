<?php

namespace App\Repositories;

use App\Drug;
use App\elementPrescpection;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Element;

class ElementPrespectionRepository
{
protected $model ;

    public function __construct(elementPrescpection $element)
    {
        $this->model = $element ;
    }


function all ()
{
    return $this->model->all();
}
public function find($id){

    return elementPrescpection::where('gpCode',$id)->first() ;

}

}
