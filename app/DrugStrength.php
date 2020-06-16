<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DrugStrength extends Model
{ protected $fillable = ['drugStrenghtName'];

    public function elementPrescriptions() {

        return  $this->hasMany(elementPrescription::class);
     }
}
