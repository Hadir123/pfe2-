<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
Use App\elementPrescpection ;
use App\Refils;
class orderItemRessource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $aux=new elementPrescpection();

        $aux= new ElementPrespectionRessource($aux->where('gpCode',$this['element_prespection_id'])->first());
        return [

           'quatite'=>$this['quantité'],
           'discription'=>$this['description'],
           'refils'=>Refils::find($this['refils_id']) ,
          'elemnt'=>$aux,


        ];
        return parent::toArray($request);
    }
}
