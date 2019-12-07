<?php 

/**
 * Private routes
 */
Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function() {
	Route::post('/threadPost', 'ThreadPostController@store')->name('threadPost.store');
	Route::put('/threadPost/{id}', 'ThreadPostController@update')->name('threadPost.update');
	Route::delete('/threadPost', 'ThreadPostController@destroy')->name('threadPost.destroy');
});

/**
 * Public routes
 */
Route::group(['prefix' => 'v1'], function() {
	Route::get('/threadPosts/{projectId?}', 'ThreadPostController@index')->name('threadPost.index');
	Route::get('/threadPost/{id}', 'ThreadPostController@show')->name('threadPost.show');
});