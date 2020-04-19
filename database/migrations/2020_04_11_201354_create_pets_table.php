<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pets', function (Blueprint $table) {
            $table->id();
            $table->string('animal_name');
            $table->string('gender');
            $table->string('breed');
            $table->double('current_weight');
            $table->string('current_weight_unit');
            $table->string('Color');
            $table->date('date_of_birt');
            $table->date('date_of_death');
            $table->unsignedBigInteger('pet_owner_id');
            $table->timestamps();
            $table->foreign('pet_owner_id')->references('id')->on('Pet_Owners')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pets');
    }
}
