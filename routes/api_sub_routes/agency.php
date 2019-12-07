<?php 

/**
 * Private routes
 */
Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function() {
	/**
      * Agency Endpoints
      */
	Route::post('/agency', 'AgencyController@store')->name('agency.store');
	Route::put('/agency', 'AgencyController@update')->name('agency.update');
	Route::delete('/agency', 'AgencyController@destroy')->name('agency.destroy');
	/**
	 * /Agency Endpoints
	 */
});

/**
 * Public routes
 */
Route::group(['prefix' => 'v1'], function() {
	/**
	 * Agency Endpoints
	*/
	Route::get('/agencies', 'AgencyController@index')->name('agency.index');
	Route::get('/agency/{id}', 'AgencyController@show')->name('agency.show');
	/**
	 * /Agency Endpoints
	 */
});