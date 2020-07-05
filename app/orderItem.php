<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class orderItem extends Model
{
    //

            protected $fillable = ['order_id' , 'refils_id','element_prespection_id','quantité','description'];
}
