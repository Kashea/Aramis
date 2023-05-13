<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;



class UserController extends Controller
{
    public function register(Request $request)
    {
        // Validate that the required fields are not empty
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'password' => 'required',
            'email' => 'required|email|unique:users',
            'phone' => 'required',
            'address' => 'required',
        ]);

        if ($validator->fails()) {
            // Return a response with validation errors
            return response()->json($validator->errors(), 400);
        }

        // Create a new user instance
        $user = new User();
        $user->name = $request->input('name');
        $user->password = Hash::make($request->input('password'));
        $user->email = $request->input('email');
        $user->phone = $request->input('phone');
        $user->address = $request->input('address');
        $user->api_token = Str::random(60); // Generate a random API token

        // Save the user in the database
        $user->save();

        // Return a response indicating success
        return response()->json(['message' => 'User registered successfully'], 200);
    }

    public function login(Request $request)
    {
        // Validate that the required fields are not empty
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            // Return a response with validation errors
            return response()->json($validator->errors(), 400);
        }

        $credentials = $request->only('email', 'password');

        if (!auth()->attempt($credentials)) {
            // Authentication failed
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        // Retrieve the authenticated user
        $user = auth()->user();

        // Generate a new API token for the user
        $apiToken = Str::random(60);
        $user->api_token = $apiToken;
        $user->save();

        // Return a response with the user's token
        return response()->json(['token' => $apiToken], 200);
    }
}
