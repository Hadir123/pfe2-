<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PetOwnerVet extends Model
{
    //

    protected $table='vet_pet_careful';
    protected $fillable = [
        'id_petOwner','id_vet'
    ];
}
