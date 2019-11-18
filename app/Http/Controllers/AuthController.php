<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\LogoutRequest;
use App\Http\Requests\Auth\ResetPasswordRequest;
use App\Http\Requests\Auth\SendPasswordResetMailRequest;
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
			$token = Auth::guard('web')->user()->createToken(str_replace(' ', '_', env('APP_NAME')).'_token')->accessToken;
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

	/**
	 * 
	 */
	public function sendPasswordResetLink (SendPasswordResetMailRequest $request) {
		$email = $request->only('email');

		$user = User::where('email', $email)->get();

		$token = app(Illuminate\Auth\Passwords\PasswordBroker::class)->createToken($user);

		$link = env('APP_URL') . '/api/v1/password/reset/' . $token . '/email/' . urlencode($user->email);

		try {
			//Here send the link with CURL with an external email API 
			return true;
		} catch (\Exception $e) {
			return false;
		}
	}

	/**
	 * 
	 */
	public function resetPassword (ResetPasswordRequest $request) {
		$email = $request->only('email');
		$password = Hash::make($request['password']);

		$user = User::where('email', $email)->get();

		$user->password = $password;

		if ($user->save()) {
			return response()->json(
				[$message => 'Password changed successfully'],
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
}
