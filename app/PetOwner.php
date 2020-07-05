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
    public function User()
    {
        return $this->belongsTo(User::class);
    }
    public function Order()
    {
        return $this->hasMany(PetOwner::class);
    }
}
