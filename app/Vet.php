<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vet extends Model
{  public  $table='Vets';

    protected $fillable = [
        'user_id', 'is_superviseur','speciality','fax','directLine'


    ];
    public function PetOwner()
    {
        return $this->hasMany(PetOwner::class);
    }
}