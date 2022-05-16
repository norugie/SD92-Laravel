<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Post;
use App\Models\Link;
use App\Models\Category;
use App\Http\Controllers\FileUploadController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File; 

class PostController extends Controller
{
    public function __construct ()
    {
        $this->file = new FileUploadController;
    }

    // Posts
    public function postsPostsIndex ()
    {
        $posts = Post::all()->sortByDesc('id');

        return view ( 'cms.posts.posts', compact('posts'));
    }

    public function postsCreateNewPostPage ()
    {
        $categories = Category::where('cat_status', 'Active')->where('id', '!=', 2)->get();

        return view ( 'cms.posts.create.posts', compact('categories'));
    }

    public function postsCreateNewPost (Request $request)
    {
        // Validate content
        $request->validate( 
            [
                'post_title' => 'required'
            ],
            [
                'post_title.required' => 'This field is required.'
            ]
        );

        // Initialize Post object
        $post = new Post;

        // Post content
        $post->post_slug = 'PST' . date('YmdHis') . '-' . rand(11111111111111,99999999999999);
        $post->post_title = $request->post_title;
        $post->post_type = $request->post_opt_type;
        $post->post_desc = $request->post_desc;
        $post->post_content = $request->post_content;
        $post->post_social = $request->post_sm_autopost;
        $post->post_ssd = $request->post_ssd_autopost;
        $post->post_ss = $request->post_ss_autopost;
        $post->post_gcc = $request->post_gcc_autopost;
        $post->post_nlc = $request->post_nlc_autopost;

        // Post author and assigned school site
        $post->user_id = session('userID');
        $post->department_id = session('schoolToPost');

        // Post thumbnail
        if($request->file('post_thumbnail')) $post->post_thumbnail = $this->file->uploadImage($request->file('post_thumbnail'), 'thumbnail');

        // Post save info
        $post->save();
    
        // Post categories
        if($request->post_categories_id ? $categories = explode(',', $request->post_categories_id) : $categories = ['2']);
        $post->categories()->attach($categories);

        // Log activity
        $message = 'A new post has been created: <b>' . $post->post_title . '</b>';
        $this->inputLog(session('userID'), session('schoolToPost'), $message);
        
        return redirect('cms/posts/posts')
            ->with('status', 'success')
            ->with('message', $message);
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
