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

    public function postsCreateNewPostPage ()
    {
        $categories = Category::where('cat_status', 'Active')->get();

        return view ( 'cms.posts.create.posts', compact('categories'));
    }

    public function postsCreateNewPost (Request $request)
    {
        $post = new Post;
        $post->post_slug = "PST" . rand(1111111111,9999999999);
        $post->post_title = $request->post_title;
        $post->post_type = $request->post_opt_type;
        dd($post);
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
