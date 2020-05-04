<?php

namespace App\Repositories;

use App\Adresse;

use Illuminate\Support\Facades\DB;

class AdresseRepository
{
protected $model ;

    public function __construct(Adresse $adresse)
    {
        $this->model = $adresse ;
    }
    function create ($attribue)
{
    return $this->model->create($attribue);
}
function all ()
{
    return $this->model->all();
}
function find ($city,$street,$code,$adress)
{
   // $res=DB::table('table_adresse')->where(['city'=>$city,'street'=>$street,'postal_code'=>$code,'adresse'=>$adress])->first();

   return $this->model->where(['city'=>$city,'street'=>$street,'postal_code'=>$code,'adresse'=>$adress])->first();
}

}
