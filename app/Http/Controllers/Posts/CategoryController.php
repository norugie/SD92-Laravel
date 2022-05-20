<?php

namespace App\Http\Controllers\Posts;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
     /**
     * Return data for /categories page
     * 
     * @return \Illuminate\View\View
     */
    public function categoriesIndex ()
    {
        return view ( 'cms.posts.categories' );
    }
}
