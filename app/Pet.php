<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use PayPal\Api\Order;

class Pet extends Model
{
    //
    protected $table = 'pets';

    /**
     * @var array
     */
    protected $fillable = [
        'animal_name','pet_owner_id', 'breed_id', 'species_id','gender','current_weight','current_weight_unit', 'color','date_of_birth'


    ];
    protected $guarded = [];
    public function petowner()
    {
        return $this->hasOne(PetOwner::class);

    }
    public function Order()
    {
        return $this->hasMany(Order::class);
    }
}
