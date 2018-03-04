<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNetworkLeadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('network_leads', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('lead_id')->unsigned();
            $table->integer('social_network_id')->unsigned();
            $table->string('link')->nullable()->default(NULL);
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
        Schema::dropIfExists('network_leads');
    }
}
