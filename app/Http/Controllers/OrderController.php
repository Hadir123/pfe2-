<?php

namespace App\Http\Controllers;
use App\Events\StatusLiked;
use App\Providers\orderService;
use Illuminate\Http\Request;
use Pusher\Pusher;
use Illuminate\Support\Facades\Auth;
Use App\Notifications\MyFirstNotification;
use Illuminate\Support\Facades\Notification;
use Illuminate\Notifications\Notifiable;
class OrderController extends Controller
{
    //

    protected $OrderService;
    public function __construct()
	{
		$this->OrderService =new orderService();
    }
    protected  function create(Request $request)
    {
$res= $this->OrderService->create($request);
//Notification::send(Auth::user(), new MyFirstNotification($res));

return response()->json(['status'=>'success', 'data'=>$res]);

    }
    protected function all()
    {
        return $this->OrderService->all();
    }
    protected function orderById()
    {
return $this->OrderService->orderById();
    }
    function orderAuth()
    {
        return $this->OrderService->orderById2();
    }
function find ($id)
{
    return $this->OrderService->find($id);
}
function Update(Request $req)
{
    return $this->OrderService->update($req);
}
}
