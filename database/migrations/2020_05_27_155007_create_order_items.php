<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderItems extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_items', function (Blueprint $table) {
           $table->unsignedBigInteger('order_id');
           $table->foreign('order_id' )->references('id')->on('orders')->onDelete('cascade');

            $table->integer('element_prespection_id');
            $table->foreign('element_prespection_id' )->references('gpCode')->on('element_prescription')->onDelete('cascade');

            $table->unsignedBigInteger('refils_id')->nullable();
            $table->foreign('refils_id')->references('id')->on('refils')->onDelete('cascade');

            $table->integer('quantité');

            $table->string('description');
            $table->primary(['order_id', 'element_prespection_id']);

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
        Schema::dropIfExists('order_items');
    }
}
