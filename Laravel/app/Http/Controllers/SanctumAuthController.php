<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Laravel\Sanctum\HasApiTokens;

class SanctumAuthController extends Controller
{
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users,email|max:255',
            'password' => 'required|confirmed|min:8',
        ]);

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);

        $accessToken = $user->createToken('auth_token');

        return response()->json([
            'user' => $user,
            'token' => $accessToken->plainTextToken,
        ], 201);
    }

    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email|max:255',
            'password' => 'required|min:8',
        ]);

        if (Auth::attempt($validatedData)) {
            $user = Auth::user();

            $accessToken = $user->createToken('auth_token');

            return response()->json([
                'user' => $user,
                'token' => $accessToken->plainTextToken,
            ]);
        }

        return response()->json([
            'error' => 'Invalid credentials',
        ], 401);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'Token revoked',
        ]);
    }
}
