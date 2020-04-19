<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableHospitals extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('table__hospitals', function (Blueprint $table) {
            $table->id();
            $table->string('hospital_name');
            $table->string('email')->unique();
            $table->double('fax');
            $table->integer('phone')->unique();
            $table->string('website_host');
            $table->unsignedBigInteger('adresse_id');
            $table->foreign('adresse_id')->references('id')->on('table_adresse');

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
        Schema::dropIfExists('table__hospitals');
    }
}
