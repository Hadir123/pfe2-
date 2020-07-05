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
    public function User()
    {
        return $this->belongsTo(User::class);
    }
    public function adresse()
    {
        return $this->hasOne(Adresse::class);

    }
    public function Notification()
    {
        return $this->hasMany(Notification::class);
    }
}
