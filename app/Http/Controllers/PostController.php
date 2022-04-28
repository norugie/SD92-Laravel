<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Post;
use App\Models\Link;
use App\Models\Category;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // Posts
    public function postsPostsIndex ()
    {
        $posts = Post::all()->sortByDesc('id');

        return view ( 'cms.posts.posts', compact('posts'));
    }

    public function postsCreateNewPost ()
    {
        $categories = Category::where('cat_status', 'Active')->get();

        return view ( 'cms.posts.create.posts', compact('categories'));
    }

    // Categories
    public function postsCategoriesIndex ()
    {
        return view ( 'cms.posts.categories' );
    }

    // Links
    public function postsLinksIndex ()
    {
        return view ( 'cms.posts.links' );
    }
}
