<?php 

/**
 * Private routes
 */
Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function() {

});

/**
 * Public routes
 */
Route::group(['prefix' => 'v1'], function() {
	
});