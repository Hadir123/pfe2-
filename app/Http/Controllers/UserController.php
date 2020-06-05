<?php
use Illuminate\Support\Facades\Storage;

namespace App\Http\Controllers;
use Exception;
use Illuminate\Support\Str;
//use Intervention\Image\Facades\Image;
use Image ;
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
public function Tof (Request $request)
{$this->validate($request, array(

    'image' => 'image|mimes:jpeg,png,jpg,gif,svg,PNG,JPG',
  ));
  //save the data to the database

  $usere =Auth::user();

    if($request->hasFile('image')){
      $image = $request->file('image');
           $fileNam=$usere->id.$image->getClientOriginalName();
$path=$request->file('image')->move(public_path('/'),$fileNam);
$photourl=url('/'.$fileNam);

  $usere =Auth::user();
$u = new  User();
$u->where('id',$usere->id)->update(['image_url'=>$photourl]);
    // $usere->image_url=$image ;
//$usere->Update() ;
              return response()->json(['url'=>$photourl]);
    }else
    return response()->json([

        'user'=>'no'
    ]);

}

}
