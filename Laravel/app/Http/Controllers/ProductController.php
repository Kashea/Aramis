<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'discounted_price' => 'nullable|numeric',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName);
        } else {
            return response()->json(['message' => 'Image is required'], 400);
        }

        $product = new Product();
        $product->title = $request->title;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->discounted_price = $request->discounted_price;
        $product->image = $imageName;

        $product->save();

        return response()->json([
            'message' => 'Product created successfully!',
            'product' => $product,
        ], 201);
    }

    public function index()
    {
        $products = Product::all();

        return response()->json($products);
    }

    public function show(Product $product)
    {
        return response()->json($product);
    }
}
