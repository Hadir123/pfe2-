<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DrugForms extends Model
{
    protected $fillable = ['drugFormName'];

    public function elementPrescriptions() {

        return $this->hasMany(elementPrescpection::class);
    }
}
