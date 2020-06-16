<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DrugType extends Model
{
    protected $fillable = ['drugTypeName','handling','margin'];

    public function elementPrescriptions() {

        return $this->hasMany(elementPrescription::class);
    }







}
