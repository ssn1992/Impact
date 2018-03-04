<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTradeshowTradeshowEditionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tradeshow_tradeshow_edition', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("tradeshow_id")->unsigned();
            $table->integer("tradeshow_edition_id")->unsigned();
            $table->integer("tradeshow_times_id")->unsigned();
            $table->boolean('active')->default(false); 
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
        Schema::dropIfExists('tradeshow_tradeshow_edition');
    }
}
