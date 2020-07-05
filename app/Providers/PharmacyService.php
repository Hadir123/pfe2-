<?php

namespace App\Providers;

use App\Http\Resources\PharmacyRessource;
use App\Pharmacie;
use App\Pharmacist;
use App\Repositories\PharmacyRepository;
use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;

class PharmacyService extends ServiceProvider
{  protected $pharmacy;
protected $adresse;
    public function __construct()
    {
    $this->pharmacy=new \App\Repositories\PharmacyRepository(new Pharmacie());
    $this->adresse= new AdresseService() ;
    }
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    function create(Request $request)
{
    $addr = new AdresseService();
    $validatedData = $request->validate([
        'email' => 'required|email|unique:pharmacies',
        'pharmacyName'=>'required|string',
        'phone'=>'required|max:10',
        'city'=>'required',
        'adresse'=>'required',
        'street'=>'required',
        'postal_code'=>'required',
    ]);
    if ($validatedData)
   { $request2 = new \Illuminate\Http\Request();
    $request2->replace(['city' =>$request->city,
    'street'=>$request->street,
    'postal_code'=>$request->postal_code,
    'adresse'=>$request->adresse]);
    if($res=$addr->find($request2))
    $adresse_id=$res->id ;
    else
      {$res=$addr->create($request2);
        $adresse_id=$res->id ;
      }

   $request->replace([
'pharmacyName'=>$request->pharmacyName,'email'=>$request->email,'phone'=>$request->phone,'fax'=>$request->fax,'adresse_id' => $adresse_id,
    ]);
   $attributes=$request->all();
return $this->pharmacy->create($attributes);
   }
   else return false;
}
/*function find (Request $request)
{
    $city=$request->city ;
    $street=$request->street;
   $code= $request->postal_code;
    $adresse=$request->adresse;
     return $this->pharmacy->find($city,$street,$code,$adresse);

}**/
function findById($id)
{
return $this->pharmacy->findById($id);
}
function update(Request $request)
{    $addr = new AdresseService();

    $validatedData = $request->validate([
        'email' => 'required|email|unique:pharmacies',
        'pharmacyName'=>'required|string',
        'phone'=>'required|max:10',

    ]);
   if ($validatedData)
   {
     if($this->pharmacy->update($request->id , $request->pharmacyName,$request->email,$request->phone ,$request->fax,$request->adresse_id))

return $this->findById($request->id) ;
else
return false;
   }
else
return false ;
}
public function index()
{
   return PharmacyRessource::collection($this->pharmacy->all());

}
public function indexe()
{
    return PharmacyRessource::collection($this->pharmacy->all2());

}
}
