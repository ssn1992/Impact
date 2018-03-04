<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNetworkCrossesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('network_crosses', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("user_id")->unsigned();
            $table->integer("lead_id")->unsigned();
            $table->integer("network_lead_id")->unsigned();
            $table->integer("network_lead_state_id")->unsigned();
            $table->integer("brand_id")->unsigned();
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
        Schema::dropIfExists('network_crosses');
    }
}
