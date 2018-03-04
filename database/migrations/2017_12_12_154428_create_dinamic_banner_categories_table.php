<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDinamicBannerCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dinamic_banner_categories', function (Blueprint $table) {
            $table->increments('id');
            $table->string("name");
            $table->timestamps();
        });
        DB::table('dinamic_banner_categories')->insert(
            array(
                [
                    'id' => '1',
                    'name' => 'Default Image'
                ],
            )
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dinamic_banner_categories');
    }
}
