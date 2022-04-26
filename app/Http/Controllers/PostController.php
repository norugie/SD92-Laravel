<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Post;
use App\Models\Link;
use App\Models\Category;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function postsPostsIndex ()
    {
        $posts = Post::all()->sortByDesc('id');

        return view ( 'cms.posts.posts', [
            'posts' => $posts
        ]);
    }

    public function postsLinksIndex ()
    {
        return view ( 'cms.posts.links' );
    }

    public function postsCategoriesIndex ()
    {
        return view ( 'cms.posts.categories' );
    }
}
