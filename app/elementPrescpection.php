<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class elementPrescpection extends Model
{
    //
    protected $table='element_prescription';
    protected $fillable=["drug_id","drug_type_id","drug_form_id","drug_strength_id","size","price"];
    public function drug(){
        return  $this->belongsTo(Drug::class);
      }

    public function drugType(){
        return $this->belongsTo(DrugType::class);
     }

     public function drugForm(){
        return  $this->belongsTo(DrugForms::class);
     }

     public function DrugStrength(){
        return $this->belongsTo(DrugStrength::class);
     }
}
