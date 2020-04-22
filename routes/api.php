<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('login', 'ApiController@login');
Route::post('loginVet', 'VetController@loginVet');
Route::post('loginPetOwner', 'PeetOwnerController@loginPetOwner');


Route ::post('SendPasswordRasetLink','ResetPasswordController@SendEmail');
Route ::post('restPassword','ChangerPasswordController@process');

Route::group(['middleware' => 'auth.jwt'], function () {
    Route::get('logout', 'ApiController@logout');
    //PetOwners
    Route::post('addPetOwner', 'PeetOwnerController@register');
    Route::post('attache_vet', 'PeetOwnerController@attachVet');
    Route::get('PetOwners','PeetOwnerController@index');
    Route::get('PetOwnerChangeStatus/{id}','PeetOwnerController@ChangeStatus');
    // vets
    Route::get('Vets','VetController@index');

    Route::post('addVet', 'VetController@register');

     //all
    Route::get('Users','UserController@index');
    Route::get('pet/{id}','UserController@show');

    Route::post('tasks', 'TaskController@store');
    Route::put('tasks/{id}', 'TaskController@update');
    Route::delete('tasks/{id}', 'TaskController@destroy');

});
