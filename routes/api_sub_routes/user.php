<?php 

/**
 * Private routes
 */
Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function() {
	/**
     * User Endpoints
     */
	Route::post('/logout', 'AuthController@logout')->name('logout.api');
	Route::get('/user', 'UserController@authenticatedUser')->name('user.auth');
	Route::get('/users', 'UserController@index')->name('user.browse');
	Route::get('/user/{id}', 'UserController@show')->name('user.show');
	Route::post('/user', 'UserController@store')->name('user.store');
	Route::put('/user', 'UserController@update')->name('user.update');
	Route::put('/user/{id}/changePassword', 'UserController@changeUserPassword')->name('user.change-password');
	Route::delete('/user', 'UserController@destroy')->name('user.delete');
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

	Route::group(['prefix' => 'password'], function () {
		Route::post('/sendResetLink', 'AuthController@sendPasswordResetLink')->name('password-reset-link.api');
		Route::post('/confirmPasswordResetToken', 'AuthController@confirmPasswordResetToken')->name('confirm-password-reset-token.api');
		Route::post('/reset', 'AuthController@resetPassword')->name('reset-password.api');
    });
});