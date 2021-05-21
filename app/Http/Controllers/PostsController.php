<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function index ()
    {
        $viewData = $this->loadViewData();
        return view ( 'cms.posts.posts', $viewData );
    }
}
