<?php

namespace App\Http\Controllers;

use App\Http\Resources\ElementPrespectionRessource;
use App\Providers\elementPrescpectionService;
use App\Providers\ElementPrespectionService;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Http\Client\Request as ClientRequest;
use Symfony\Component\CssSelector\Parser\Shortcut\ElementParser;

class ElementPrespectionController extends Controller
{
    //
    protected $elementservice;
    public function __construct()
	{
		$this->elementservice =new ElementPrespectionService();
    }

    public function getElementPrescriptions($id) {
        try {

            //return ( $this->elementservice->find($id));

            return new ElementPrespectionRessource($this->elementservice->find($id));

           } catch(Exception $e) {

               $errRespnse = ["error" =>$e->getMessage()];
               return response($errRespnse,404);
           }
        }
public function ProductList(Request $req )
      {
//$i=$req->body ;
//$taille=count($req->body)  ;
$tab=[];
$elm =[] ;
$tab=$req->ok;
for ( $i=0;$i<count($tab);$i++)
{
$elm[$i]=$this->getElementPrescriptions($tab[$i]);
}
//$taille=count($tab) ;
//array?
return response()->json(['j'=>$elm ]);   }

}
