<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pharmacist extends Model
{
    //
    protected $table='pharmaciests';
    protected $fillable = [
        'id_user','pharmacy_id','admin'
    ];
 public function pharmacie()
 {
     return $this->belongsTo(Pharmacie::class);
 }
    public function User()
    {
        return $this->belongsTo(User::class);
    }
    public function adresse()
    {
        return $this->hasOne(Adresse::class);

    }
}
