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
            $table->unsignedBigInteger('breed_id');
            $table->unsignedBigInteger('species_id');
            $table->unsignedBigInteger('pet_owner_id');
            $table->string('animal_name');
            $table->string('gender');
            $table->double('current_weight');
            $table->string('current_weight_unit');
            $table->string('Color');
            $table->date('date_of_birth');
            $table->date('date_of_death')->nullable();


            $table->timestamps();
           $table->foreign('pet_owner_id')->references('user_id')->on('Pet_Owners')->onDelete('cascade');
           $table->foreign('species_id')->references('id')->on('species');
           $table->foreign('breed_id')->references('id')->on('breeds');


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
