<?php

namespace App\Http\Controllers;

use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Http\Request;
use App\User;
use App\Vet;
use App\Http\Controllers\APIController;
use App\Http\Requests\RegistrationFormRequest;
use App\Providers\VetService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class VetController extends  APIController
{ protected $VetService;
    protected $userController ;
    public function __construct()
	{
        $this->VetService = new VetService();
    $this->userController= new UserController() ;}

 public function register(RegistrationFormRequest $request)
    {return $this->VetService->create($request);
/*
       $user=new User();
       $user->email=$request->email ;
       $user->name=$request->name ;
       $user->last_name=$request->last_name ;
       $user->password=bcrypt($request->password);
       $user->age=$request->age ;
       $user->gender=$request->gender;
       $user->phone=$request->phone;
       $user->date_of_birth=$request->date_of_birth;
       $result=$this->NewAdresse($request->city ,$request->street, $request->postal_code,$request->adresse);
        $user->adresse_id=$result;
        $user->save();
            $vet =new Vet() ;
            $vet->user_id=$user->id ;
            $vet->is_superviseur=$request->is_superviseur;
            $vet->speciality=$request->speciality;
            $res=DB::table('table__hospitals')->first();
            $vet->hospital_id=$res->id;
                    if ($vet->save())
                          return response()->json(['helo'=>'ok']);


                    else
                          return response()->json(['helo'=>'no']);

*/
    }
    public function loginVet(Request $request)
    {$input = $request->only('email', 'password');
        $token = null;
                if($res=$this->VetService->login($request))
                        {
                        if($this->VetService->Status($res->id)===true)
                        { if (!$token = JWTAuth::attempt($input)) {
                      return response()->json(['error' => 'Email or password invalid'], 401);
                                                                 }
                        return response()->json([
                                    'access_token' => $token,
                                         'token_type' => 'bearer',
                                                ]);
                         }
                 else
                        return response()->json(['error' => 'desactive account '], 401);
                        }
             else
          { return response()->json(['error' => 'Not Vet'], 401);
          }
    }

    public function index()
    {return $res =$this->VetService->index() ;
     /*   $res2=$this->VetService->all() ;

    return response()->json(['user'=>$res,
    'info'=>$res2]);*/
    }
    public function all2(){
  $res2=$this->VetService->all() ;

    return response()->json(['user'=>$res2,
    'info'=>$res2]);
    }
public function show($id)
{
   $vet= $this->VetService->showVet($id);
   $user=$this->userController->show($id);

  $adress = new AdresseController() ;
  $res=$adress->findById($user->adresse_id);
   return response()->json(['user'=>$user,'vet'=>$vet,'adrrese'=>$res]);

}
public function Update(Request $request)
{
if ($this->VetService->Update($request))
{$vet=$this->VetService->showVEt($request->id);
        return response()->json(['success'=>true,
 'user' =>$vet]);}
 else
        return response()->json(['success'=>false,
]);
}
public function attachPetOwner(Request $request)
{
if ($this->VetService->attachPetOwner($request))
return response()->json(['ok'=>'ok']);
else
return response()->json(['ok'=>'Not Ok']);

}
public function carfulTeam($id)
{
    return $this->VetService->Careful($id) ;

}
public function DeletePetOwner(Request $request)
{
    if($this->VetService->DeletePetOwner($request))
    return response()->json((['ok'=>'ok']));
    else
    return response()->json(['ok'=>'Not Ok']);
}

 }

