<?php

namespace App\Http\Controllers\Posts;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LinkController extends Controller
{
    /**
     * Return data for /links page
     * 
     * @return \Illuminate\View\View
     */
    public function linksIndex ()
    {
        return view ( 'cms.posts.links' );
    }
}
