<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLeadRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lead_requests', function (Blueprint $table) 
        {
            $table->increments('id');
            $table->integer('lead_id')->unsigned();
            $table->integer('brand_id')->unsigned();
            $table->integer('country_id')->unsigned();
            $table->integer('state_id')->unsigned()->nullable();
            $table->string('city')->nullable();
            $table->string('country_detected')->nullable();
            $table->string('region_detected')->nullable();
            $table->string('browser_language')->nullable();
            $table->integer('source_id')->unsigned();
            $table->integer('source_categoryable_id')->unsigned();
            $table->string('source_categoryable_type')->nullable();
            $table->integer('interested_nameable_id')->nullable();
            $table->string('interested_nameable_type')->nullable();
            $table->integer('interested_categoryable_id')->nullable();
            $table->string('interested_categoryable_type')->nullable();
            $table->integer('lead_class_id')->unsigned()->nullable();
            $table->integer('lead_type_id')->unsigned()->nullable();
            $table->integer('lead_potencial')->unsigned()->nullable();
            $table->string('url_origin')->nullable();
            $table->string('url_converted')->nullable();
            $table->string('heard_about')->nullable();
            $table->integer('cta_id')->unsigned()->nullable();
            $table->integer('cta_color_id')->unsigned()->nullable();
            $table->integer('form_page_id')->unsigned()->nullable();
            $table->integer('form_page_position_id')->unsigned()->nullable();
            $table->string('salesforce_id')->nullable();
            $table->string("more_info")->nullable();
            $table->longtext('lead_path')->nullable();
            $table->string('referrer')->nullable(); 
            $table->timestamps();
        });
    }

    /**
    *  Reverse the migrations.
    *
    * @return void
    */

    public function down()
    {
        Schema::dropIfExists('lead_requests');
    }
}