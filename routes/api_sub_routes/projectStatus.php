<?php 

/**
 * Private routes
 */
Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function() {
	Route::post('/projectStatus', 'ProjectStatusController@store')->name('projectStatus.store');
	Route::put('/projectStatus/{id}', 'ProjectStatusController@update')->name('projectStatus.update');
	Route::delete('/projectStatus', 'ProjectStatusController@destroy')->name('projectStatus.destroy');
});

/**
 * Public routes
 */
Route::group(['prefix' => 'v1'], function() {
	Route::get('/projectStatuses', 'ProjectStatusController@index')->name('projectStatus.index');
	Route::get('/projectStatus/{id}', 'ProjectStatusController@show')->name('projectStatus.show');
});