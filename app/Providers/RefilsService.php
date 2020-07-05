<?php

namespace App\Providers;

use App\Refils;
use App\Repositories\RefilsRepositroy;
use Illuminate\Support\ServiceProvider;
use Illuminate\Http\Request;

class RefilsService extends ServiceProvider
{


      protected $refils;
    public function __construct()
    {
    $this->refils=new RefilsRepositroy(new Refils());
    }/****
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
return $this->refils->create($request->all());

    }
}
