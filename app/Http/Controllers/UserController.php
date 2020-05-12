<?php

namespace App\Http\Controllers;
use Exception;
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

 public function show($id)
{
  /*  $task =DB::table('pets')->where('pet_owner_id',$id)->get()->toArray();

    if (!$task) {
        return response()->json([
            'success' => false,
            'message' => 'Sorry, task with id ' . $id . ' cannot be found.'
        ], 400);
    }

    return $task;*/

    return $this->user->show($id);
}
public function Notif()
{
return $this->user->Notif();
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
}
