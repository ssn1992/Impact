<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLeadCampaignsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lead_campaigns', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('lead_request_id');
            $table->integer('campaign_source_id');
            $table->string('name');
            $table->string('medium')->nullable();
            $table->string('term')->nullable();
            $table->string('content')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lead_campaigns');
    }
}
