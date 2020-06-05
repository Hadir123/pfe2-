<?php

namespace App\Providers;

use App\Repositories\VetRepository;
use App\Vet;
use Illuminate\Http\Request;
use App\Http\Requests\RegistrationFormRequest;
use Illuminate\Support\ServiceProvider;

use function GuzzleHttp\Promise\all;

class VetService extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public $vet ;
    public $user ;

    public function __construct()
    {
    $this->vet=new VetRepository(new Vet());
    $this->user= new UserService() ;
    }
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
public function Login(Request $request)
    {$input = $request->only('email', 'password');
$request2 = new \Illuminate\Http\Request();
$request2->replace(['email' => $request->email]);
$vet1=$this->user->findByEmail($request2);
if ($vet1)
    {
if( $this->vet->find($vet1->id))
    {
    return $vet1;
    }
    }
else
    return false ;
    }
public function Status ($id)
    { if ($this->user->Status($id)===true)
             return true ;
     else
            return false ;
    }

    public function showVet($id)
    {
      return $this->vet->find($id);

    }
    public function index()
{$vets=$this->vet->all();

    $i=0;
    $user=[];
    foreach($vets as $vet)
    {
       $user[$i]=$this->user->show($vet->user_id);
       $i++;
    }
    return $user ;

}
function create(RegistrationFormRequest  $request)
{if( $request->validated())
     { $user = new UserService();
    $request2 = new \Illuminate\Http\Request();

$res =$user->create($request);
$attributes=[];
    $request2->replace(['user_id' => $res->id,
'fax'=>$request->fax,'directLine'=>$request->directLine,'speciality'=>$request->speciality , 'is_superviseur'=>$request->is_superviseur
    ]);
   $attributes=$request2->all();
   $this->vet->create($attributes);
   $this->user->sendEmail($request->email);
return $res;
}
else return false ;
}
public function Update(Request $request)
{
    if($user= $this->vet->update($request->user_id,$request->speciality,$request->directLine,$request->fax))
    return $user ;
    else return false ;
}
public function attachPetOwner(Request $request)
{$add=[];
    $careful=new  PetOwnerVetService() ;
   $add= $request->id_petOwner;
     $i=0;
while($i<count($add))
{if($careful->create($add[$i],$request->id_vet))
    $i++;
    else
    $i++;

}
if($i===count($add))
return true ;
else
return false ;
}
function Careful($id)
{   $careful=new  PetOwnerVetService() ;
    return $careful->Careful($id);
}
}
