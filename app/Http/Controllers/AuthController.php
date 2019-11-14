<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\LogoutRequest;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
	/**
	 * 
	 */
    public function register (RegisterRequest $request) {
	
		$request['password'] = Hash::make($request['password']);
		$user = User::create($request->toArray());
	
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

        if (Auth::attempt($credentials)) {
			// Authentication passed...
			$token = $user->createToken(str_replace(' ', '_', env('APP_NAME')).'_token')->accessToken;
			$response = ['token' => $token];
			return response()->json(
				$response,
				200
			);
        } else {
			$response = [message => "Cant really tell"];
			return response()->json(
				$response,
				422
			);
		}

		$response = [message => "Somthing went wrong"];

		return response()->json(
			$response,
			422
		);
	
	}

	/**
	 * 
	 */
	public function logout (LogoutRequest $request) {

		$token = $request->user()->token();
		$token->revoke();
	
		$response = 'You have been succesfully logged out!';
		return response()->json(
			$response,
			200
		);
	
	}
}
