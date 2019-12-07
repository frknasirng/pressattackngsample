<?php 

/**
 * Private routes
 */
Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function() {
	/**
	 * Project Endpoints
	*/
	Route::post('/project', 'ProjectController@store')->name('project.store');
	Route::post('/project/bulkUpload', 'ProjectController@storeInBulk')->name('project.storeInBulk');
	Route::put('/project/{id}', 'ProjectController@update')->name('project.update');
	Route::delete('/project', 'ProjectController@destroy')->name('project.destroy');
	/**
	 * /Project Endpoints
	 */
});

/**
 * Public routes
 */
Route::group(['prefix' => 'v1'], function() {
	/**
	 * Project Endpoints
	*/
	Route::get('/projects/{filter?}/{filterId?}', 'ProjectController@index')->name('project.browse');
	Route::get('/project/{id}', 'ProjectController@show')->name('project.show');
	/**
	 * /Project Endpoints
	 */
});