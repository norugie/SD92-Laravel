<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('post_slug');
            $table->string('post_title');
            $table->enum('post_type', ['Post', 'Media'])->default('Post');
            $table->foreignId('user_id')->constrained();
            $table->foreignId('department_id')->constrained();
            $table->string('post_thumbnail')->default('post_thumbnail.jpg');
            $table->mediumText('post_desc')->nullable();
            $table->longText('post_content')->nullable();
            $table->enum('post_social', ['No', 'Yes'])->default('No');
            $table->enum('post_ssd', ['No', 'Yes'])->default('No');
            $table->enum('post_ss', ['No', 'Yes'])->default('No');
            $table->enum('post_gcc', ['No', 'Yes'])->default('No');
            $table->enum('post_nlc', ['No', 'Yes'])->default('No');
            $table->enum('post_status', ['Active', 'Archived']);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
