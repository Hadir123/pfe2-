<?php

namespace App\Providers;

use App\Drug;
use Illuminate\Support\ServiceProvider;
use App\Repositories\DrugRepository;
class DrugService extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */

    protected $drug;
    public function __construct()
    {
        $this->drug=new DrugRepository(new Drug());

    }
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

function all2()
{
 // $pet=new  PetOwnerService();
return $this->drug->all() ;
}
public function find($id){

    return $this->drug->find($id);
}

}
