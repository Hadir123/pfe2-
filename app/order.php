<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class order extends Model
{
    protected $fillable = [

'subTotalPrice',
'totalPrice',
 'RxOrderDate',
    'statusName',
'pharmacy_id',


'address_id',
   'payment_id',
   'veterinary_id',

   'pet_id'
    ];

public function vet()
{
   return $this->hasOne(Vet::class);
}
public function pet()
{
    return $this->hasOne(Pet::class);
}
public function petowner()
{
return $this->hasOne(PetOwner::class);
}

}

