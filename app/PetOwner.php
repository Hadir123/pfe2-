<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PetOwner extends Model
{
    //
    protected $table='pet_owners';
    protected $fillable = [
        'user_id',


    ];
    public function Vets()
    {
        return $this->hasMany(Vet::class);
    }
    public function pets()
    {
        return $this->hasMany(Pet::class);
    }
}
