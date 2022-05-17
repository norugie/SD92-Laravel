<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Web routes for the SD92 District Website(s). These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group.
| Please refrain from rearranging the order of the routes as it
| could affect some of the functionalities.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/error', function () {
    return view('error');
});

Route::get('/signin', [AuthController::class, 'signin']);
Route::get('/callback', [AuthController::class, 'callback']);
Route::get('/signout', [AuthController::class, 'signout']);

Route::group(['middleware' => 'authAD', 'prefix' => 'cms'], function(){
    Route::get('/dashboard', [DashboardController::class, 'index']);

    Route::group(['prefix' => 'posts'], function(){
        Route::controller('PostController')->group(function(){
            Route::group(['prefix' => 'posts'], function(){
                Route::get('/', 'postsPostsIndex');
                Route::get('/create', 'postsCreateNewPostPage');
                Route::post('/create', 'postsCreateNewPost');
            });
            Route::get('/links', 'postsLinksIndex');
            Route::get('/categories', 'postsCategoriesIndex');
        }); 
    });

    Route::controller('FileUploadController')->group(function(){
        Route::post('/upload/{type}', 'uploadImage');
        Route::post('/delete/{type}', 'deleteImage');
    });
});
