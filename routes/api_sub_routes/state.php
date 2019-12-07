<?php 

/**
/**
 * Private routes
 */
Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function() {
	/**
	 * State Endpoints
	*/
	Route::put('/state/{id}', 'StateController@update')->name('state.update');
	/**
	 * /State Endpoints
	 */
});

/**
 * Public routes
 */
Route::group(['prefix' => 'v1'], function() {
	Route::get('/states', 'StateController@index')->name('state.index');
	Route::get('/state/{id}', 'StateController@show')->name('state.show');
});