<?php
namespace App\Http\Controllers;

use App\User;
use App\Role;
use Illuminate\Http\Request;
use App\Http\Requests\User\NewRequest;
use App\Http\Requests\User\UpdateRequest;
use App\Http\Requests\User\DelRequest;
use App\Http\Requests\User\ChangePasswordRequest;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use Auth;

class UserController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index () {
        $users = User::latest()->paginate();
        return UserResource::collection($users);
	}
	
    public function authenticatedUser () {
        $user = User::findOrFail(Auth::user()->id);
        
        return new UserResource($user);
	}

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store (NewRequest $request) {
		$user = new User();
		
        $user->name = $request->input('name');
        $user->email = $request->input('email');
		$user->password = Hash::make($request->input('password'));
		
        if($user->save()) {
            // Handle the user roles
			$this->syncPermissions($request, $user);

            return response()->json([
                'success' => 1,
                'message' => 'user added successfully'
            ]);
        }
	}
	
    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show ($id) {
        $user = User::findOrFail($id);
        return new UserResource($user);
	}
	
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request) {
		$user = User::findOrFail($request->input('id'));
		
        $user->name = $request->input('name');
		$user->email = $request->input('email');

		// Handle the user roles
		$this->syncPermissions($request, $user);
		
        if($user->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'user updated successfully'
            ]);
        }
	}
	
    public function changeUserPassword(ChangePasswordRequest $request) {
        $user = User::findOrFail($request->input('id'));
        $user->password = bcrypt($request->input('password'));
        if($user->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'user password changed successfully'
            ], 200);
        } else {
            return response()->json([
                'success' => 0,
                'message' => 'an error occurred...try again'
            ], 500);
        }
	}
	
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(DelRequest $request) {
		if ( Auth::user()->id === $request->input('id') ) {
			return response()->json([
                'success' => 0,
                'message' => 'currently logged in user can not be deleted'
            ], 422);
		}

        $user = User::findOrFail($request->input('id'));
        $user->roles()->detach();
        
        if($user->delete()) {
            return response()->json([
                'success' => 1,
                'message' => 'user deleted successfully'
            ]);
        }
	}
	
	private function syncPermissions(Request $request, $user) {
		// Get the submitted roles
		$roles = $request->get('roles', []);
		$permissions = $request->get('permissions', []);

		// Get the roles
		$roles = Role::find($roles);

		// check for current role changes
		if( ! $user->hasAllRoles( $roles ) ) {
			// reset all direct permissions for user
			$user->permissions()->sync([]);
		} else {
			// handle permissions
			$user->syncPermissions($permissions);
		}

		$user->syncRoles($roles);

		return $user;
	}
}
