<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File; 

class FileUploadController extends Controller
{
    public function uploadImage (Request $request, String $type)
    {
        // $file_location = json_encode(['location'=>"localhost:8000/images/posts/Annotation 2020-07-21 112834.png"]);
        $file = $request->file('file');
        // Set path for image
        if ($type === 'editor' ? $url = '/images/posts' : $url = '/images/' . $type);
        $path = url($url) . '/' . $file->getClientOriginalName();
        $file_name_to_store = $path;

        // Upload image to designated image folder
        $file->move(public_path($url), $file->getClientOriginalName());

        if ($type === 'editor' ? $file_location = json_encode([ 'location' => $file_name_to_store ]) : $file_location = $file->getClientOriginalName());

        return $file_location;
    }

    public function deleteImage (File $file)
    {
        // $filename = $request->filename;
        // $path = public_path() . '/images/posts/' . $filename;
        // if(File::exists( $path )) File::delete($path);
    }
}
