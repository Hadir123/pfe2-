<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableVetPetCareful extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vet_pet_careful', function (Blueprint $table) {
            $table->unsignedBigInteger('id_petOwner');
            $table->unsignedBigInteger('id_vet');
            $table->foreign('id_petOwner')->references('user_id')->on('Pet_Owners')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('id_vet')->references('user_id')->on('vets')->onDelete('cascade')->onUpdate('cascade');
            $table->primary(['id_vet', 'id_petOwner']);


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('table__vet__pet__careful');
    }
}
