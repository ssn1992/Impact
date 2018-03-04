<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SearchLeadTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('search_leads', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('lead_id')->unsigned();
            $table->integer('brand_id')->unsigned();
            $table->string('search_parameter');
            $table->integer('source_id')->unsigned();
            $table->integer('source_categoryable_id')->unsigned();
            $table->string('source_categoryable_type')->nullable();
            $table->integer('country_id')->unsigned();
            $table->integer('state_id')->unsigned()->nullable();
            $table->string('city')->nullable();
            $table->string('country_detected')->nullable();
            $table->string('region_detected')->nullable();
            $table->string('browser_language')->nullable();
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
        Schema::dropIfExists('search_leads');
    }
}
