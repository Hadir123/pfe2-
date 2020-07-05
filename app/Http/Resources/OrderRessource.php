<?php

namespace App\Http\Resources;

use App\Pet;
use App\Pharmacie;
use Illuminate\Http\Resources\Json\JsonResource;
Use App\User ;
class OrderRessource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {//$user=User::where('id',$this->pet_owner_id);
        $pet=Pet::find($this->pet_id);
        $petowner=User::find($pet->pet_owner_id);
        return [
        'id'=>$this->id ,
        'petName'=>Pet::find($this->pet_id)->animal_name,
       'petownr_name'=>$petowner->name ,
       'petowner_lastName'=>$petowner->last_name ,
       'price'=>$this->totalPrice,
       'Status'=>$this->statusName,
       'date'=>$this->RxOrderDate,
       'VetName'=>User::find($this->veterinary_id)->name ,
       'VetLastName'=>User::find($this->veterinary_id)->last_name ,
       'DateUpdate'=>$this->updated_at,
       'pharmacyName'=>Pharmacie::find($this->pharmacy_id)->pharmacyName ,
       /* 'userName'=>$this->->gender ,
        'last_name'=>$this->user->last_name,
        'adresse_id'=>$this->user->adresse_id ,
        //'adresse'=>$this->adresse->city ,
         'phone'=>$this->user->phone,
         'date_of_birth'=>$this->user->date_of_birth ,
         'age'=>$this->user->age ,
'status'=>$this->user->status,*/
    ];
        return parent::toArray($request);
    }
}
