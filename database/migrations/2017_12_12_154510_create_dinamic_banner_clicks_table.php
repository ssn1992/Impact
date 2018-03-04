<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDinamicBannerClicksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dinamic_banner_clicks', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("dinamic_banner_image_id");
            $table->integer("clicks");
            $table->integer("placements");
            $table->date("date");
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
        Schema::dropIfExists('dinamic_banner_clicks');
    }
}
