<?php

use Illuminate\Http\Request;

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

/**
 * Private routes
 */
Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function() {
	/**
     * User Routes
     */
	Route::post('/logout', 'AuthController@logout')->name('logout');
    Route::get('/user', 'UserController@authenticatedUser');
    Route::get('/users', 'UserController@index');
    Route::get('/user/{id}', 'UserController@show');
    Route::post('/user', 'UserController@store');
    Route::put('/user', 'UserController@update');
    Route::put('/user/{id}/changePassword', 'UserController@changeUserPassword');
    Route::delete('/user', 'UserController@destroy');
    /**
     * End User Routes
     */
});

/**
 * Public routes
 */
Route::group(['prefix' => 'v1'], function() {
	Route::post('/login', 'AuthController@login')->name('login.api');
	Route::post('/register', 'AuthController@register')->name('register.api');
});
