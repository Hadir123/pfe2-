<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDrugsTreatmentPlans extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('drugs_treatment_plans', function (Blueprint $table) {
            $table->integer('element_prescription_id');
          $table->foreign('element_prescription_id' )->references('gpCode')->on('element_prescription')->onDelete('cascade');
            $table->unsignedBigInteger('treatmentPlaid');
            $table->foreign('treatment_plan_id')->references('id')->on('treatment_plans')->onDelete('cascade');
            $table->primary(['treatment_plan_id', 'element_prescription_id'],'id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('drugs_treatment_plans');
    }
}
