<?php

namespace App\Http\Controllers;

use App\Http\Resources\ElementPrespectionRessource as ResourcesElementPrespectionRessource;
use App\Providers\DrugService;
use Illuminate\Http\Request;
use Exception;

use App\Resource\ElementPrespectionRessource;
class DrugController extends Controller
{



    protected $durgservice;
    public function __construct()
	{
		$this->drugservice =new DrugService();
    }
    public function indexe()
    {
        return $this->drugservice->all2();
    }
    public function getElementPrescriptions($id) {
        try {

            $drug = $this->drugservice->find($id);

            return ResourcesElementPrespectionRessource::collection($drug->elementPrescriptions);

           } catch(Exception $e) {

               $errRespnse = ["error" =>$e->getMessage()];
               return response($errRespnse,404);
           }
    }
}
