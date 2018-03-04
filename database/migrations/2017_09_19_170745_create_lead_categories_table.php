<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLeadCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lead_categories', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("lead_id")->unsigned();
            $table->integer("lead_class_id")->unsigned();
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
        Schema::dropIfExists('lead_categories');
    }
}
