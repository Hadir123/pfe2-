<?php

namespace App\Providers;

use App\Events\StatusLiked;
use App\Http\Resources\OrderRessource;
use App\Repositories\OrderRepository;
use Illuminate\Support\ServiceProvider;
use App\Notifications\MyFirstNotification;

use App\order ;
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
$this->sendNotif($request->RxOrderDate, $request->pharmacy_id,$res2 );
//event(new StatusLiked($res2));
//$this->sendNotif($request->RxOrderDate, Auth::user()->id) ;

return  $res2;

}

public function sendNotif($date ,$reciver ,$details)
{   $pharmacy=new PharmacistService() ;
    $pharmacy=$pharmacy->findByIdPharmacy($reciver);
    // Notification pour le client
    Notification::send(Auth::user(), new MyFirstNotification($details));
    //Notification pour le pharmacien Admin
    Notification::send($pharmacy, new MyFirstNotification($details));
    Event(new StatusLiked(Auth::user() ));
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
public function orderById($id)
{
    $pet= new PetService() ;
$order=[];
    $res=$pet->ShowPetOwner($id);
    foreach($res as $pet)
    {$aux=$pet['id'];
    $order[count($order)]= OrderRessource::collection($this->order->orderById($aux));
       // return $res[$i];
      // $order[$i]=$res[$i]['id'];
    }
   // $order=new OrderRessource($this->order->orderById($id));
    return $order;

}
}
