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
Route::post('addVet', 'VetController@register');

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
    Route::get('PetOwnerChangeStatus/{id}','UserController@ChangeStatus');
    Route::get('PetOwner/{id}','PeetOwnerController@show');
    Route::post('PetOwnerUpdate','PeetOwnerController@Update');
    // vets
    Route::get('Vets','VetController@index');
    Route::get('VetChangeStatus/{id}','UserController@ChangeStatus');
//    Route::post('addVet', 'VetController@register');
    Route::get('Vet/{id}','VetController@show');
    Route::get('CarefulTeam/{id}','VetController@carfulTeam');
    Route::post('VetUpdate','VetController@Update');
    Route::post('attaPetowner', 'VetController@attachPetOwner');




     //all
    //Route::get('Users','UserController@index');
    Route::get('Notif','UserController@Notif');
    Route::post('UserUpdate','UserController@Update');

    Route::get('pet/{id}','UserController@show');
//Adrresse
   Route::post('AdressUpdate','AdresseController@Update');

    Route::post('tasks', 'TaskController@store');
    Route::put('tasks/{id}', 'TaskController@update');
    Route::delete('tasks/{id}', 'TaskController@destroy');

});
