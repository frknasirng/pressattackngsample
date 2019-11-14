<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\LogoutRequest;
use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
	/**
	 * 
	 */
    public function register (RegisterRequest $request) {
	
		$request['password'] = Hash::make($request['password']);
		$user = User::create($request->toArray());

		Auth::guard('web')->login($user);
	
		$token = $user->createToken(str_replace(' ', '_', env('APP_NAME')).'_token')->accessToken;
		$response = ['token' => $token];
	
		return response()->json(
			$response,
			201
		);
	
	}

	/**
	 * 
	 */
	public function login (LoginRequest $request) {
		$credentials = $request->only('email', 'password');

        if (Auth::guard('web')->attempt($credentials)) {
			// Authentication passed...
			$token = $user->createToken(str_replace(' ', '_', env('APP_NAME')).'_token')->accessToken;
			$response = ['token' => $token];
			return response()->json(
				$response,
				200
			);
        } else {
			$response = [message => "Something went wrong..."];
			return response()->json(
				$response,
				422
			);
		}
	
	}

	/**
	 * 
	 */
	public function logout (Request $request) {

		$token = $request->user()->token();
		$token->revoke();

		Auth::guard('web')->logout();
	
		$response = 'You have been succesfully logged out!';
		return response()->json(
			$response,
			200
		);
	
	}
}
