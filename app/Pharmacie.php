<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pharmacie extends Model
{
    //
    protected $table='pharmacies';
    protected $fillable = [
        'adresse_id','pharmacyName','email','phone'
    ];
}
