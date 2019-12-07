<?php 

/**
 * Private routes
 */
Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function() {
	/**
	 * Local Government Endpoints
	*/
	Route::put('/localGovernment/{id}', 'LocalGovernmentController@update')->name('localGovernment.update');
	/**
	 * /Local Government Endpoints
	 */
});

/**
 * Public routes
 */
Route::group(['prefix' => 'v1'], function() {
	Route::get('/localGovernments', 'LocalGovernmentController@index')->name('localGovernment.index');
	Route::get('/localGovernment/{id}', 'LocalGovernmentController@show')->name('localGovernment.show');
});