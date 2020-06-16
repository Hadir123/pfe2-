<?php

use App\Http\Controllers\DrugController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
Route ::get('pharmacist/{id}','PharmacistController@FindByIdPharmacy');
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

Route::get('Drug/{id}','DrugController@getElementPrescriptions');
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
    Route::get('PetOwnerChangeStatus/{id}','UserController@ChangeStatus');
    Route::get('PetOwner/{id}','PeetOwnerController@show');
    Route::post('PetOwnerUpdate','PeetOwnerController@Update');
    Route::get('PetOwners','PeetOwnerController@index');
    Route::get('PetOwners2','PeetOwnerController@all');
    // vets
    //Route::get('Vets','VetController@index');
    Route::get('VetChangeStatus/{id}','UserController@ChangeStatus');
//    Route::post('addVet', 'VetController@register');
    Route::get('Vet/{id}','VetController@show');
    Route::get('CarefulTeam/{id}','VetController@carfulTeam');
    Route::post('VetUpdate','VetController@Update');
    Route::post('attaPetowner', 'VetController@attachPetOwner');
    Route::post('addVet', 'VetController@register');
    Route::post('DeletePetowner', 'VetController@DeletePetOwner');
    Route::get('Vets','VetController@index');

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
Route::get('pharmacies','PharmacyController@indexe');
Route::get('pharmacy/{id}','PharmacyController@find');
Route::post('UpdatePharmacy','PharmacyController@update');

//FindByIdPharmacy
//Route ::get('pharmacist/{id}','PharmacistController@FindByIdPharmacy');

/// Profil Profil
Route::get('Profil','UserController@Profil');
Route::post('tof','UserController@Tof');
Route::post('ProfilUpdate','UserController@ProfilUpdate');
   /// Drug
   Route ::get('Drugs', 'DrugController@indexe');
   Route::get('Drug/{id}','DrugController@getElementPrescriptions');

});
