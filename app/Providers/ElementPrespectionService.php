<?php

namespace App\Providers;

use App\elementPrescpection;
use App\Repositories\ElementPrespectionRepository;
use Illuminate\Support\ServiceProvider;

class ElementPrespectionService extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    protected $element;
    public function __construct()
    {
    $this->element=new ElementPrespectionRepository(new elementPrescpection());

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
    public function find($id){

        return $this->element->find($id);
    }
}
