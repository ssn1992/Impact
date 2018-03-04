<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterLeadDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('lead_details', function (Blueprint $table)
        {
            $table->integer('lead_company_id')->unsigned()->nullable()->after('referrer');
            $table->integer('age')->nullable()->after('lead_company_id');
            $table->integer('photo')->nullable()->after('age');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
