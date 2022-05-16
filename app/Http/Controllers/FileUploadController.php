<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileUploadController extends Controller
{
    public function uploadImage (Object $file, String $type)
    {
        // Set path for image
        if ($type === 'editor' ? $url = '/images/posts' : $url = '/images/thumbnails');
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
