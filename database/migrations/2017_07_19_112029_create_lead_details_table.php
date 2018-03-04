<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLeadDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lead_details', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('lead_id')->unsigned();
            $table->string('job_position')->nullable();
            $table->integer('industry_id')->unsigned()->nullable();
            $table->string('company')->nullable();
            $table->string('phone')->nullable();
            $table->string('mobile')->nullable();
            $table->string('website')->nullable();
            $table->string('address')->nullable();
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
        Schema::dropIfExists('lead_details');
    }
}
