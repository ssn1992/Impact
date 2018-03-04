<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTradeshowCampaignsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tradeshow_campaigns', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('brand_id')->unsigned();
            $table->integer("tradeshow_tradeshow_edition_id")->unsigned();
            $table->string("campaign_SF");
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
        Schema::dropIfExists('tradeshow_campaigns');
    }
}
