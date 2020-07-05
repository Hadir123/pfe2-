<?php
use Illuminate\Support\Facades\Storage;

namespace App\Http\Controllers;
use Exception;
use Illuminate\Support\Str;
//use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Crypt;

use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Support\Facades\Hash;

use App\Http\Requests\RegistrationFormRequest;
use App\Providers\UserService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Controllers\AdresseController;
class UserController extends Controller
{    protected $user;
    public function __construct()
	{
		$this->user = new UserService()
;	}
public function Login(Request $request)
{$input = $request->only('email', 'password');
    $token = null;
            if($res=$this->user->login($request))
                    {
                 //   if($this->VetService->Status($res->id)===true)
                    //{
                        if (!$token = JWTAuth::attempt($input)) {
                  return response()->json(['error' => 'Email or password invalid'], 401);
                                                             }
                    return response()->json([
                                'access_token' => $token,
                                     'token_type' => 'bearer',
                                     'res'=>$res
                                            ]);
                     }
           /*  else
                    return response()->json(['error' => 'desactive account '], 401);
                    }*/
         else
      { return response()->json(['error' => 'Not Vet'], 401);
      }
}
 public function show($id)
{
    return $this->user->show($id);
}
public function Profil()
{
    $user1 =Auth::user();
    $adress = new AdresseController() ;
    $res=$adress->findById($user1->adresse_id);

 $user1=$this->show($user1->id);
 return response()->json([
    'user'=>$user1,
   'adresse'=>$res
    ]);
}

public function Notif()
{
return  response()->json(['notification'=>$this->user->Notif(),
'count'=>$this->user->CountNotif()]);
}
public function create(RegistrationFormRequest $req)
{try
    { if($this->user->create($req))
 return response()->json([
    'success' => true,]);
    else

return response()->json([
    'success' => false,]);
       } catch (Exception $e) {
           return response()->json(['error' => $e->getMessage()], 500);
}
}
function ChangeStatus ($id)
{
if($this->user->changeStatus($id))
    return response()->json(['ok'=>'ok']);
 else
 return response()->json(['ok'=>'niok']);
}
public function Update(Request $request)
{
if ($user=$this->user->update($request))
        return response()->json(['success'=>true,
 'user' =>$user]);
 else
        return response()->json(['success'=>false,
]);
}
public function Tof (Request $request)
{$this->validate($request, array(

    'image' => 'image|mimes:jpeg,png,jpg,gif,svg,PNG,JPG',
  ));
  //save the data to the database
return $this->user->updatePhoto($request);

}
public function  ProfilUpdate(Request $request)
{
   if ($this->user->ProfilUpdate($request))
    return response()->json(['success'=>true,
]);
else
    return response()->json(['success'=>false,
]);


}

}
