<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{    protected $user;
    public function __construct()
    {
        $this->user = JWTAuth::parseToken()->authenticate();
    }
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
}
