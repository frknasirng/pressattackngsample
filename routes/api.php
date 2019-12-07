<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

require_once('api_sub_routes/agency.php');
require_once('api_sub_routes/bookmark.php');
require_once('api_sub_routes/localGovernment.php');
require_once('api_sub_routes/ministry.php');
require_once('api_sub_routes/post.php');
require_once('api_sub_routes/project.php');
require_once('api_sub_routes/projectStatus.php');
require_once('api_sub_routes/projectType.php');
require_once('api_sub_routes/state.php');
require_once('api_sub_routes/threadPost.php');
require_once('api_sub_routes/user.php');