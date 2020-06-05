<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableElementPrescription extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('element_prescription', function (Blueprint $table) {
            $table->integer('gpCode');
         $table->primary ('gpCode');  // note, this is a *primary* key
         $table->unsignedBigInteger('drug_id');
         $table->foreign('drug_id')->references('id')->on('drugs')->onDelete('cascade')
         ->onUpdate('cascade');
         $table->unsignedBigInteger('drug_type_id');
         $table->foreign('drug_type_id')->references('id')->on('drug_types')->onDelete('cascade')
         ->onUpdate('cascade');
         $table->unsignedBigInteger('drug_form_id');
         $table->foreign('drug_form_id')->references('id')->on('drug_forms')->onDelete('cascade')
         ->onUpdate('cascade');
         $table->unsignedBigInteger('drug_strength_id');
         $table->foreign('drug_strength_id')->references('id')->on('drug_strengths')->onDelete('cascade')
         ->onUpdate('cascade');
         $table->string('size');
         $table->double('price');
         $table->double('handling');
         $table->double('margin');


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
        Schema::dropIfExists('table__element_prescription');
    }
}
