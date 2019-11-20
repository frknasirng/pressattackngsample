<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Mail\PasswordReset;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\LogoutRequest;
use App\Http\Requests\Auth\ResetPasswordRequest;
use App\Http\Requests\Auth\SendPasswordResetMailRequest;
use App\Http\Requests\Auth\ConfirmPasswordResetTokenRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

use Illuminate\Support\Facades\Auth;

use DB;

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
			$response = ['message' => "Something went wrong..."];
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

		$user = User::where('email', $email)->first();

		try {
			//code...
			$token = app('auth.password.broker')->createToken($user);

			//Create Password Reset Token
			DB::table('password_resets')->insert([
				'email' => $user->email,
				'token' => $token
			]);
		} catch (\Throwable $th) {
			//throw $th;
			return response('', 200);
		}

		$link = env('APP_URL', 'http://127.0.0.1:8000') . '/#/auth/password/reset/' . $token . '/' . urlencode($user->email);

		try {
			// Mail::to($request->user())->send(new PasswordReset($link));
			// return response()->json(
			// 	[
			// 		'message' => 'Token created successfully'
			// 	],
			// 	200
			// );
			return (new \App\Mail\PasswordReset($link))->render();
		} catch (\Exception $e) {
			return response('', 200);
		}
	}

	/**
	 * 
	 */
	public function confirmPasswordResetToken (ConfirmPasswordResetTokenRequest $request) {
		$email = $request->only('email');
		$token = $request->only('token');

		$user = User::where('email', $email)->get();

		// Validate the token
		$tokenData = DB::table('password_resets')
						->where('token', $token)->first();
		
		if ($tokenData) {
			return response()->json(
				[
					'valid' => 'true',
					'message' => 'Token is valid'
				],
				200
			);
		} else {
			return response()->json(
				[
					'valid' => 'false',
					'message' => 'Token is invalid'
				],
				422
			);
		}
	}

	/**
	 * 
	 */
	public function resetPassword (ResetPasswordRequest $request) {
		$email = $request->only('email');
		$password = Hash::make($request['password']);

		$user = User::where('email', $email)->first();

		$user->password = $password;

		if ($user->save()) {
			DB::table('password_resets')->where('email', $user->email)->delete();

			return response()->json(
				[
					'message' => 'Password changed successfully'
				],
				200
			);
		} else {
			$response = ['message' => "Something went wrong..."];
			return response()->json(
				$response,
				422
			);
		}
	}
}
