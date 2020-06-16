<?php

namespace App\Repositories;
use Illuminate\Support\Facades\DB;

use App\User ;
class UserRepositroy
{
protected $model ;


    public function __construct(User $user)
    {
        $this->model = $user ;
    }
    function create ($attribue)
{return $this->model->create($attribue);

}
function all ()
{
    return $this->model->paginate(5);
}
function  findByEmail($email)
{
    return $this->model->where('email',$email)->first();

}
function status($id)
{
    $resulta =$this->model->where('id',$id)->first();
    return $resulta->status;
}
function find($id)
{$user=  $this->model->where('id',$id)->first();
    return $user;
}
function update($id,$name,$last_name,$email,$phone,$date_of_birth,$adr)
{
   return $this->model->where('id',$id)->update(['name'=>$name ,'last_name'=>$last_name ,'email'=>$email,'phone'=>$phone ,'date_of_birth'=>$date_of_birth,'adresse_id'=>$adr]);
}
function changeStatus ($id)
{ $users =$this->model->where('id',$id)->get()->first();

    if ($users->status=="active")
    {
        $user=$this->model->where('id',$id)->update(['status'=>'desactive']);
    }
else
$user=$this->model->where('id',$id)->update(['status'=>'active']);
return $user ;
}
public function Notification($id)
{
    $notif = DB::table('notifications')->where('notifiable_id',$id)->get()->toArray();
return $notif;
}
public function updateMotDePasse($id , $passe)
{
    $user=$this->model->where('id',$id)->update(['password'=>$passe]);
}
}

