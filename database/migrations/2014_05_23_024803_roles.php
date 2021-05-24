<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Roles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('role_name');
        });

        DB::table('roles')->insert(
            array(
                [
                    'role_name' => 'Administrator'
                ],
                [
                    'role_name' => 'Editor'
                ],
                [
                    'role_name' => 'School Editor'
                ],
                [
                    'role_name' => 'GCC/SS Editor'
                ],
                [
                    'role_name' => 'NLC Editor'
                ]
            )
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles');
    }
}
