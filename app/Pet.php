<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    //
    protected $table = 'pets';

    /**
     * @var array
     */
    protected $guarded = [];

}
