<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PetOwenrRessource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {return [
        'email'=>$this->user->email ,
        'name'=>$this->user->name ,
        'id'=>$this->user->id ,
        'gender'=>$this->user->gender ,
        'last_name'=>$this->user->last_name,
        'adresse_id'=>$this->user->adresse_id ,
        //'adresse'=>$this->adresse->city ,
         'phone'=>$this->user->phone,
         'date_of_birth'=>$this->user->date_of_birth ,
         'age'=>$this->user->age ,
'status'=>$this->user->status,

            ];
        return parent::toArray($request);
    }
}
