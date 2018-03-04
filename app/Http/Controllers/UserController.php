<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Brand;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Auth;
use Session;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware(['auth', 'isAdmin']);
    }

    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        $users = User::all();
        $brands = Brand::all();

        return view('users.index')->with(['users' => $users, 'brands' => $brands]);
    }

    /**
    * Show the form for creating a new resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function create()
    {
        //Get all roles and pass it to the view
        $roles = Role::get();
        $brands = Brand::pluck('name', 'id');

        return view('users.create', ['roles'=>$roles, 'brands' => $brands]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function store(Request $request)
    {
        //Validate name, email and password fields
        $this->validate($request, [
            'name'      =>'required|max:120',
            'email'     =>'required|email|unique:users',
            'password'  =>'required|min:6|confirmed',
            'brand_id'  =>'required'
        ]);

        $user = new User;
        $user->email = $request->email;
        $user->name  = $request->name;
        $user->password = bcrypt($request->password);
        $user->brand_id = $request->brand_id;

        $user->save();

        $roles = $request['roles'];
        if (isset($roles))
        {

            foreach ($roles as $role)
            {
                $role_r = Role::where('id', '=', $role)->firstOrFail();
                $user->assignRole($role_r);
            }

            return redirect()->route('users.index')
            ->with('flash_message','User successfully added.');
        }
    }
    /**
    * Display the specified resource.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function show($id)
    {
        return redirect('users');
    }

    /**
    * Show the form for editing the specified resource.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function edit($id)
    {
        $user   = User::findOrFail($id); //Get user with specified id
        $roles  = Role::get(); //Get all roles
        $brands = Brand::pluck('name', 'id');

        return view('users.edit', ['user' => $user, 'roles' => $roles, 'brands' => $brands]);
    }

    /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id); //Get role specified by id

        if ($request->password == null) {
            //Validate name, email and password fields
            $this->validate($request, [
                'name'      =>'required|max:120',
                'email'     =>'required|email|unique:users,email,'.$id,
                'brand_id'  =>'required',
            ]);

            $input = $request->only(['name', 'email', 'brand_id']); //Retreive the name, email and password fields

        } else {
            //Validate name, email and password fields
            $this->validate($request, [
                'name'      =>'required|max:120',
                'email'     =>'required|email|unique:users,email,'.$id,
                'password'  =>'required|min:6|confirmed',
                'brand_id'  =>'required',
            ]);

            $input = $request->only(['name', 'email', 'brand_id']);
            $user->password = bcrypt($request->password);
            $user->save();
        }

        $roles = $request['roles']; //Retreive all roles
        $user->fill($input)->save();

        if (isset($roles))
        {
            $user->roles()->sync($roles);  //If one or more role is selected associate user to roles
        }
        else
        {
            $user->roles()->detach(); //If no role is selected remove exisiting role associated to a user
        }
        return redirect()->route('users.index')
            ->with('flash_message','User successfully edited.');
    }

    /**
    * Remove the specified resource from storage.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function destroy($id)
    {
    //Find a user with a given id and delete
        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->route('users.index')
            ->with('flash_message','User successfully deleted.');
    }
}