<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistrationFormRequest;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use Symfony\Component\HttpFoundation\Response;
use App\Providers\PetOwnerService;

class PeetOwnerController extends APIController
{   public $adresse;
    protected $petownerservice;
    public function __construct()
	{
		$this->petownerservice =new PetOwnerService();
	}

 public function register(RegistrationFormRequest $request)
    {
        if($user=$this->petownerservice->create($request))

                {
                    // $res= $this->sendNotif();
                             return response()->json([
                              'success'=>true,
                              'user'=>$user//,'notif'=>$res
                              ]
                              ,200);
                }
         else
                   return response()->json([
                       'success' => false,

                   ],Response::HTTP_UNPROCESSABLE_ENTITY);
    }
 /*public function loginPetOwner(Request $request)
    {
        $input = $request->only('email', 'password');
        $token = null;
        $user=DB::table('users')->where('email',$request->email)->first();

            if($user)
            {
                $petOwner=DB::table('pet_owners')->where('user_id',$user->id)->first();
                if ($petOwner)
                     {
                        if (!$token = JWTAuth::attempt($input))
                         {
                             return response()->json(['error' => 'Email or password invalid'], 401);
                        }


                        return response()->json([
                                    'access_token' => $token,
                                     'token_type' => 'bearer',
                                                 ]);
                    }
                 else
                    {
                 return response()->json(['error' => 'Not Vet'], 401);

                     }
                }
                 else
                {
                    return response()->json(['error' => 'User Undefined'], 401);

                }


    }*/

public function attachVet(Request $request)
{
if ($this->petownerservice->attachVet($request))
return response()->json(['ok'=>'ok']);
else
return response()->json(['ok'=>'Not Ok']);

}
public function index()
{
return $this->petownerservice->index() ;
}
public function all()
{
    return $this->petownerservice->index2();
}
public function show($id)
{
  $petOwner =$this->petownerservice->showPetOwner($id);
  $adress = new AdresseController() ;
  $res=$adress->findById($petOwner->adresse_id);
      return response()->json([
       'user'=>$petOwner,
      'adresse'=>$res
       ]);
}

public function Update(Request $request)
{
if ($user=$this->petownerservice->Update($request))
        return response()->json(['success'=>true,
 'user' =>$user]);
 else
        return response()->json(['success'=>false,
]);
}


}
