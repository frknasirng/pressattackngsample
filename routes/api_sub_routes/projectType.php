<?php 

/**
 * Private routes
 */
Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function() {
	Route::post('/projectType', 'ProjectTypeController@store')->name('projectType.store');
	Route::put('/projectType/{id}', 'ProjectTypeController@update')->name('projectType.update');
	Route::delete('/projectType', 'ProjectTypeController@destroy')->name('projectType.destroy');
});

/**
 * Public routes
 */
Route::group(['prefix' => 'v1'], function() {
	Route::get('/projectTypes', 'ProjectTypeController@index')->name('projectType.index');
	Route::get('/projectType/{id}', 'ProjectTypeController@show')->name('projectType.show');
});