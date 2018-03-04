<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;


class CreateDinamicBannerImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dinamic_banner_images', function (Blueprint $table) {
            $table->increments('id');
            $table->string("keyword");
            $table->integer("brand_id");
            $table->string("category");
            $table->string("url_redirect");
            $table->string("link_image");
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
        Schema::dropIfExists('dinamic_banner_images');
    }
}
