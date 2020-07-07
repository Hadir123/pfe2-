<?php

namespace App\Http\Resources;


use App\Adresse;
use App\elementPrescpection;
use App\Payment;
use App\orderItem;
use App\Http\Resources\orderItemRessource;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Pet ;
use App\User ;
use App\Vet ;
use App\Pharmacie ;
class OrderDetails extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    { $pet=Pet::find($this->pet_id);
        $petowner=User::find($pet->pet_owner_id);
$vet = new Vet() ;
$vet2=User::find($this->veterinary_id);
$vet=$vet->where('user_id',$this->veterinary_id)->first();
$elem=new orderItem();
$elems=$elem=$elem->where('order_id' ,$this->id)->get()->toArray()  ;

$ELmpre=[];
for( $i=0;$i<count($elem); $i++)
{//$aux=new elementPrescpection();

    //$aux= new ElementPrespectionRessource($aux->where('gpCode',$elem[$i]['element_prespection_id'])->first());
   $elem[$i]=new orderItemRessource($elem[$i]);



}
        return [
        'id'=>$this->id ,
        'petName'=>Pet::find($this->pet_id)->animal_name,
       'petownr_name'=>$petowner->name ,
       'petowner_lastName'=>$petowner->last_name ,
       'petowner_email'=>$petowner->email ,
       'petowner_phone'=>$petowner->phone ,
       'methodePayment'=>Payment::find($this->payment_id),
       'adresse'=>Adresse::find($this->address_id),
       'price'=>$this->totalPrice,
       'Status'=>$this->statusName,
       'date'=>$this->RxOrderDate,
       'VetName'=>User::find($this->veterinary_id)->name ,
       'VetLastName'=>User::find($this->veterinary_id)->last_name ,
       'vetEmail'=>User::find($this->veterinary_id)->email ,
       'vetphone'=>User::find($this->veterinary_id)->phone,

       'VetDirectNumbre'=>$vet->directLine,
       'DateUpdate'=>$this->updated_at,
       'pharmacyName'=>Pharmacie::find($this->pharmacy_id)->pharmacyName ,
       'element'=> $elem,

        ];
        return parent::toArray($request);
    }
}
