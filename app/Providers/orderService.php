<?php

namespace App\Providers;

use App\Events\StatusLiked;
use App\Http\Resources\OrderDetails;
use App\Http\Resources\OrderRessource;
use App\Repositories\OrderRepository;
use Illuminate\Support\ServiceProvider;
use App\Notifications\MyFirstNotification;
use App\User ;
use App\order ;
use App\PetOwner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Pusher\Pusher;
use Illuminate\Support\Facades\Notification;
use Illuminate\Notifications\Notifiable;
use PayPal\Api\Order as ApiOrder;

class orderService extends ServiceProvider
{    use Notifiable;

    protected $order;
    public function __construct()
    {
    $this->order= new OrderRepository(new order());
    }/**
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
    public function create(Request $request)
    {
        $request2 = new \Illuminate\Http\Request();
$payment=new PaymentService();
if($request->paymentDate!=null)
{$request2->replace(['paymentMethode'=>$request->paymentMethode, 'paymentDate'=>$request->paymentDate]);}
else
{
    $request2->replace(['paymentMethode'=>$request->paymentMethode]);
}
$res=$payment->create($request2);
$id_payment=$res->id;
$usere =Auth::user();
$usere=$usere->id;
$request2->replace(['subTotalPrice'=>$request->subTotalPrice,
'totalPrice'=>$request->total ,
 'RxOrderDate'=>$request->RxOrderDate,
    'statusName'=>'created',
'pharmacy_id'=>$request->pharmacy_id,


'address_id'=>$request->adresse_id,
   'payment_id'=>$id_payment ,
   'veterinary_id'=>$usere,

   'pet_id'=>$request->pet_id
]);
$attr=$request2->all();
$res2= $this->order->create($attr);
$id_order=$res2->id ;
$this->sendNotif($request->RxOrderDate, $request->pharmacy_id,$res2 , $request->pet_id);
$orderItem=new orderItemService() ;
$tab=[];
$tab=$request->elements;
for ($i=0;$i<count($tab);$i++){
if($request->elements[$i]['autorefill']===false)
{$request2->replace([
    'order_id'=>$id_order,
    'element_prespection_id'=> $request->elements[$i]['gp_code']
    ,
'quantité'=> $request->elements[$i]['qty'],
'description'=>$request->elements[$i]['discription']
]);
//$orderItem->create($request2);
}
else
{$refils=new RefilsService() ;
       $request2->replace(['startDate'=>$request->RxOrderDate,
    'number'=>$request->elements[$i]['refills'],
     'rest'=>$request->elements[$i]['refills']
     ,'endDate'=>$request->elements[$i]['endDate']]);
$res=$refils->create($request2);
$refil_id=$res->id;
$request2->replace([
    'order_id'=>$id_order,
    'element_prespection_id'=> $request->elements[$i]['gp_code'],
    'refils_id'=>$refil_id,
'quantité'=> $request->elements[$i]['qty'],

'description'=>$request->elements[$i]['discription'],
]);

}
$orderItem->create($request2);




}
Event(new StatusLiked(Auth::user() ));
return  $res2;

}

public function sendNotif($date ,$reciver ,$details , $pet)
{   $pharmacy=new PharmacistService() ;
    $pharmacy=$pharmacy->findByIdPharmacy($reciver);
    $petowen=new PetService() ;
    $petowenr=$petowen->findByPet($pet);
    $user= new UserService();
    $petownerNot=$user->find($petowenr['pet_owner_id']);

    // Notification pour le client
    Notification::send(Auth::user(), new MyFirstNotification($details));
    //Notification pour le pharmacien Admin
    Notification::send($pharmacy, new MyFirstNotification($details));
    //Notification client
    Notification::send($petownerNot, new MyFirstNotification($details));

    //SMS pour le  client
    $basic  = new \Nexmo\Client\Credentials\Basic('8d0fbac6', '2peegGfzOl7RmzOB');
    $client = new \Nexmo\Client($basic);
    $message = $client->message()->send([
        'to' => '21624883495',
        'from' => 'Hagyard Clinc',
        'text' => 'Hello , You have a new Order in the'.$date
    ]);
}
public function all()
{
    return OrderRessource::collection($this->order->all());
}
public function orderById()
{ $user=Auth::User() ;
    $pharmacist=new PetOwnerService();
    $usser=$pharmacist->findById($user->id);
    $pet= new PetService() ;
$order=[];
    $res=$pet->ShowPetOwner($usser->user_id);
    foreach($res as $pet)
    {$aux=$pet['id'];
    $order[count($order)]= OrderRessource::collection($this->order->orderById($aux));
       // return $res[$i];
      // $order[$i]=$res[$i]['id'];
    }
   // $order=new OrderRessource($this->order->orderById($id));
    return $order;

}
public function orderbyId2()
{ $user=Auth::User() ;
$pharmacist=new PharmacistService();
$usser=$pharmacist->findById($user->id);
$order =[];
if($usser)
{
 $order[count($order)]= OrderRessource::collection($this->order->orderByPharmacy($usser['pharmacy_id']));

}
else
{$vet=new VetService() ;
    $usser=$vet->findById($user->id);

if($usser)
{
    $order[count($order)]= OrderRessource::collection($this->order->OrderByIdVet($user->id));
}
}

return $order ;

}
function find ($id)
{
    return new OrderDetails($this->order->find($id));
}
function update(Request $req)
{
    $status=$req->status ;
    $id=$req->id ;
    if( $this->order->updateStatus($id , $status))
    {
        $orders=$this->order->find($id);
     $this->sendNotifUpdate( $orders->veterinary_id,$orders,$orders->pet_id, $status,$orders->id);
        return $orders;
    }
    else
    return false ;
}
public function sendNotifUpdate($reciver ,$details , $pet,$status,$id)
{
    $petowen=new PetService() ;
    $petowenr=$petowen->findByPet($pet);
    $user= new UserService();
    $petownerNot=$user->find($petowenr['pet_owner_id']);
$vet=new VetService();
$vet=$vet->findById($reciver);
$user2= new UserService();
$vet=$user2->find($vet->user_id);

    //Notification pour le pharmacien Admin
   Notification::send($vet, new MyFirstNotification($details));
    //Notification client
    Notification::send($petownerNot, new MyFirstNotification($details));

    //SMS pour le  client
    $basic  = new \Nexmo\Client\Credentials\Basic('cf0ead93', '6Ql6SUXtRTHSlAuN');
    $client = new \Nexmo\Client($basic);

    $message = $client->message()->send([
        'to' => '21655340732',
        'from' => 'Hagyard Clinc',
        'text' => 'Hello , The status of your order numbre '.$id.' :changed to '.$status
    ]);
}
}
