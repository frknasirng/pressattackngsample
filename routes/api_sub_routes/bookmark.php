<?php 

/**
 * Private routes
 */
Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function() {
	/**
      * Bookmark Endpoints
      */
	Route::post('/bookmark', 'BookmarkController@store')->name('bookmark.store');
	Route::delete('/bookmark', 'BookmarkController@destroy')->name('bookmark.destroy');
	/**
	 * /Bookmark Endpoints
	 */
});