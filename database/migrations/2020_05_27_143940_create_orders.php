<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrders extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pharmacy_id');
            $table->foreign('pharmacy_id' )->references('id')->on('pharmacies')->onDelete('cascade');

            $table->unsignedBigInteger('pharmacist_id')->nullable();
            $table->foreign('pharmacist_id')->references('id_user')->on('pharmaciests')->onDelete('cascade');

            $table->unsignedBigInteger('address_id');
            $table->foreign('address_id' )->references('id')->on('table_adresse')->onDelete('cascade');

            $table->unsignedBigInteger('payment_id');
            $table->foreign('payment_id' )->references('id')->on('payements')->onDelete('cascade');

            $table->unsignedBigInteger('veterinary_id');
            $table->foreign('veterinary_id')->references('user_id')->on('vets')->onDelete('cascade');

            $table->unsignedBigInteger('pet_id');
            $table->foreign('pet_id')->references('id')->on('pets')->onDelete('cascade');


            $table->double('subTotalPrice');
            $table->double('totalPrice');
            $table->date('RxOrderDate');
            $table->string('statusName');
            $table->string('statutsJustification')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
