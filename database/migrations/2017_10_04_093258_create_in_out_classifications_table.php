<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInOutClassificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('in_out_classifications', function (Blueprint $table) 
        {
            $table->increments('id');
            $table->integer("type_classification_id");
            $table->integer('type_nameable_id')->nullable();
            $table->string('type_nameable_type')->nullable();
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
        Schema::dropIfExists('in_out_classifications');
    }
}
