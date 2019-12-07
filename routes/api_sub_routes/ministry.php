<?php 

/**
 * Private routes
 */
Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function() {
	/**
	 * Ministry Endpoints
	*/
	Route::post('/ministry', 'MinistryController@store')->name('ministry.store');
	Route::put('/ministry', 'MinistryController@update')->name('ministry.update');
	Route::delete('/ministry', 'MinistryController@destroy')->name('ministry.destroy');
	/**
	 * /Ministry Endpoints
	 */
});

/**
 * Public routes
 */
Route::group(['prefix' => 'v1'], function() {
	/**
	 * Ministry Endpoints
	 */
	Route::get('/ministries', 'MinistryController@index')->name('ministry.index');
	Route::get('/ministry/{id}', 'MinistryController@show')->name('ministry.show');
	/**
	* /Ministry Endpoints
	*/
});