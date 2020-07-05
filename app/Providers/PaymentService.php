<?php

namespace App\Providers;

use App\Repositories\PaymentRepository;
use Illuminate\Support\ServiceProvider;
use App\Payment;
use Illuminate\Http\Request;

class PaymentService extends ServiceProvider
{
    protected $payment;
    public function __construct()
    {
    $this->payment=new PaymentRepository(new Payment());
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
    {$attr=$request->all() ;
        return $this->payment->create($request->all());
    }
}
