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
    Route::post('addVet', 'VetController@register');



     //all
    //Route::get('Users','UserController@index');
    Route::get('Notif','UserController@Notif');
    Route::post('UserUpdate','UserController@Update');

   // Route::get('pet/{id}','PetController@ShowPetOwner');
//Adrresse
   Route::post('AdressUpdate','AdresseController@Update');
Route ::post('AddPet','PetController@create');
   Route::get('BreedAndSpecies','PetController@breedAndSpecies');

   Route::get('pet/{id}','PetController@showPetOwnr');
//pharmacy

Route ::post('AddPharmacy','PharmacyController@register');
Route ::post('AddPharmacien','PharmacistController@createAdmin');


/// Profil Profil
Route::get('Profil','UserController@Profil');
Route::post('tof','UserController@Tof');
});
