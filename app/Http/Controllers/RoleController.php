<?php

namespace App\Http\Controllers;

use App\Role;
use App\Permission;
use Illuminate\Http\Request;
use App\Http\Requests\Role\NewRequest;
use App\Http\Requests\Role\UpdateRequest;
use App\Http\Requests\Role\DeleteRequest;
use App\Http\Resources\RolesPermissionsResource;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = Role::all();
        $permissions = Permission::all();

		return RolesPermissionsResource::collections(compact('roles', 'permissions'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NewRequest $request)
    {
		$role = Role::create($request->only('name'));
        if ($role) {
			return response()->json(
				[
					'message' => 'Role created successfully',
					'role' =>$role
				],
				201
			);
		} else {
			return response()->json(
				[
					'message' => 'Something went wrong...Try again'
				],
				500
			);
		}
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function show(Role $role)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, $id)
    {
        if($role = Role::findOrFail($id)) {
            // admin role has everything
            if($role->name === 'Admin') {
                $role->syncPermissions(Permission::all());
                return redirect()->route('roles.index');
            }

            $permissions = $request->get('permissions', []);
            $role->syncPermissions($permissions);
			
			return response()->json(
				[
					'message' => 'Role updated'
				],
				200
			);
        } else {
            return response()->json(
				[
					'message' => 'Something went wrong...Try again'
				],
				500
			);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        //
    }
}
