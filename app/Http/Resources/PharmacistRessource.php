<?php

namespace App\Http\Resources;

use App\Pharmacie;
use Illuminate\Http\Resources\Json\JsonResource;
use App\User ;
class PharmacistRessource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */

    public function toArray($request)
    {$user=new User() ;
    $user=User::find($this->id_user);
        return [
        'email'=>$this->pharmacy_id,
        'adresse'=>Pharmacie::find($this->pharmacy_id),
        'name'=>$user->name ,
        'id'=>$user->id ,
        'gender'=>$user->gender ,
        'last_name'=>$user->last_name,
        'adresse_id'=>$user->adresse_id ,
        //'adresse'=>$this->adresse->city ,
         'phone'=>$user->phone,
         'date_of_birth'=>$user->date_of_birth ,


         'status'=>$user->status,

            ];
        return parent::toArray($request);
    }
}
