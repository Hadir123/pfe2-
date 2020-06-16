<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Adresse extends Model
{
    //
  public  $table='table_adresse';
  protected $fillable = [
    'city', 'street', 'postal_code','adresse'
];

public function user()
{
return $this->hasMany(User::class);
}
public function vet()
{
    return $this->belongsTo(Vet::class);

}
}
