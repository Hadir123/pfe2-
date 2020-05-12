<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->double('phone');
            $table->string('image_url')->nullable();
            $table->enum('status',['active','desactive']);

            $table->date('date_of_birth');

            $table->string('gender');
            $table->unsignedBigInteger('adresse_id');
            $table->rememberToken();
            $table->timestamps();
            $table->foreign('adresse_id')->references('id')->on('table_adresse');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
