<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ElementPrespectionRessource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
            return [

                "gpCode"=>$this->gpCode,
                "drug_id"=>$this->drug_id,
                "drugName"=>$this->drug->drugName,
                "drugTradeName"=>$this->drug->DrugTradeName,
                "drugTypeName"=>$this->drugType->drugTypeName,
                "drugFromName"=>$this->drugForm->drugFormName,
                "drugStrengthName"=>$this->drugStrength->drugStrenghtName,
                "size"=>$this->size,
                "price"=>$this->price

            ];

            return parent::toArray($request);


    }
}
