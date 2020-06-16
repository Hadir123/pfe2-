<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Drug extends Model
{
    protected $table='drugs';
    protected $fillable = [
        'drugName', 'DrugTradeName'
        //'image_url', 'password',

    ];
    public function elementPrescriptions() {

        return $this->hasMany (elementPrescpection::class);
    }
}
