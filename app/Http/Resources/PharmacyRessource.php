<?php

namespace App\Http\Resources;

use App\Pharmacist;
use App\User ;
use Illuminate\Http\Resources\Json\JsonResource;

class PharmacyRessource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {$pharmacist=new Pharmacist();
        $pharmacist=$pharmacist->where('pharmacy_id',$this->id)->first();
    $user=User::find($pharmacist->id_user);
        return [
        'email'=>$this->email ,
        'pharmacyName'=>$this->pharmacyName ,
        'id'=>$this->id ,
'admin'=>$user ,
        'adresse_id'=>$this->adresse_id ,
        //'adresse'=>$this->adresse->city ,
         'phone'=>$this->phone,
      //  'admin' =>Pharmacist::find($this->id)->pharmacist()->where('pharmacy_id', $this->id)->first()
            ];
        return parent::toArray($request);
    }
}
