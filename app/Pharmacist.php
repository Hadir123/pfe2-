<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pharmacist extends Model
{
    //
    protected $table='pharmaciests';
    protected $fillable = [
        'id_user','pharmacy_id','admin'
    ];
}
