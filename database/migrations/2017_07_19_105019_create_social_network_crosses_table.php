<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSocialNetworkCrossesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('social_network_crosses', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('social_network_id')->unique()->index()->comment('This is a ID of the social networks but this ones are the used for cross');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('social_network_crosses');
    }
}
