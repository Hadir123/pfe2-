<?php

namespace App\Providers;

use App\orderItem;
use App\Repositories\OrderItemRepository;
use Illuminate\Http\Request;

use Illuminate\Support\ServiceProvider;

class orderItemService extends ServiceProvider
{

    protected $order;
    public function __construct()
    {
    $this->order=new OrderItemRepository(new orderItem());
    }
    /**
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
$attr=$request->all();

$this->order->create($attr);
    }
}
