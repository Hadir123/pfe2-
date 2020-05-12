<?php

namespace App\Http\Controllers;

use App\Providers\AdresseService;
use Illuminate\Http\Request;

class AdresseController extends Controller
{

    protected $address ;

    public function __construct()
    {
    $this->address=new AdresseService() ;
    }

function all ()
{

 return $this->address->all();
}
    function create(Request $request)
{

return $this->address->create($request);
}
function find (Request $request)
{

    return $this->address->find($request);

}
function findById($id)
{
return $this->address->findById($id);
}
function update(Request $request)
{if ($user= $this->address->update($request))
    return response()->json(['success'=>true,
'adresse_id' =>$user]);
else
    return response()->json(['success'=>false,
]);

}
}
