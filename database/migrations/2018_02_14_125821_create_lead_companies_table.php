<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLeadCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lead_companies', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('description');
            $table->string('industry');
            $table->string('facebook');
            $table->string('instagram');
            $table->string('linkedin');
            $table->string('pinterest');
            $table->integer('country_id')->unsigned();
            $table->integer('state_id')->unsigned();
            $table->string('city');
            $table->string('address');
            $table->string('website');
            $table->string('employees_nr');
            $table->string('more_info');
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
        Schema::dropIfExists('lead_companies');
    }
}
