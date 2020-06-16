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
    public function pharmacist()
    {
        return $this->hasMany(Pharmacist::class);
    }

    public function adresse()
    {
        return $this->hasOne(Adresse::class);

    }
    public function pharmacistAdmin()
    {
return $this->hasOne(Pharmacist::class);
    }
}
