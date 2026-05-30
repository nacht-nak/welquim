<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MediaController extends Controller
{
    public function upload(Request $request): JsonResponse
    {
        $request->validate([
            'file' => 'required|file|max:5120',
            'folder' => 'nullable|string|max:100',
        ]);

        $folder = $request->input('folder', 'uploads');
        $path = $request->file('file')->store($folder, 'public');

        return response()->json([
            'path' => $path,
            'url' => asset('storage/'.$path),
        ]);
    }
}
