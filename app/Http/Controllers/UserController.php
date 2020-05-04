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

class UserController extends Controller
{    protected $user;
    public function __construct()
	{
		$this->user = new UserService()
;	}
 public function index()
 {
    $user= DB::table('users')->get(['email','id'])->toArray();
return $user ;
 }
 public function show($id)
{
    $task =DB::table('pets')->where('pet_owner_id',$id)->get()->toArray();

    if (!$task) {
        return response()->json([
            'success' => false,
            'message' => 'Sorry, task with id ' . $id . ' cannot be found.'
        ], 400);
    }

    return $task;
}
public function Notif()
{$user =Auth::user();
    $notif = DB::table('notifications')->where('notifiable_id',$user->id)->get()->toArray();
return $notif;
}
public function create(RegistrationFormRequest $req)
{try
    {
        if($this->user->create($req))
 return response()->json([
    'success' => true,]);
    else

return response()->json([
    'success' => false,]);
       } catch (Exception $e) {
           return response()->json(['error' => $e->getMessage()], 500);




}
}
}
