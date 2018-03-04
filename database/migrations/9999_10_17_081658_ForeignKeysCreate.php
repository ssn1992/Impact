<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ForeignKeysCreate extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) 
        {
            $table->foreign('brand_id')->references('id')->on('brands')->onDelete('cascade');
        });

        Schema::table('blogs', function (Blueprint $table)
        {
            $table->foreign('blog_category_id')->references('id')->on('blog_categories')->onDelete('cascade');
            $table->foreign('level_id')->references('id')->on('levels')->onDelete('cascade');
        });

        Schema::table('ebooks', function (Blueprint $table) 
        {
            $table->foreign('ebook_category_id')->references('id')->on('ebook_categories')->onDelete('cascade');
        });

        Schema::table('countries', function (Blueprint $table) 
        {
            $table->foreign('continent_id')->references('id')->on('country_continents')->onDelete('cascade');
        });

        Schema::table('lead_details', function (Blueprint $table) 
        {
            $table->foreign('lead_id')->references('id')->on('leads')->onDelete('cascade');
        });

        Schema::table('network_leads', function (Blueprint $table) 
        {
            $table->foreign('social_network_id')->references('id')->on('social_networks')->onDelete('cascade');
        });

        Schema::table('social_networks', function (Blueprint $table) {
            $table->foreign('level_id')->references('id')->on('levels')->onDelete('cascade');
        });

        Schema::table('brand_accesses', function (Blueprint $table) {
            $table->foreign('brand_id')->references('id')->on('brands')->onDelete('cascade');
            $table->foreign('brand_access')->references('id')->on('brands')->onDelete('cascade');
        });

        Schema::table('budgets', function (Blueprint $table) {
            $table->foreign('brand_id')->references('id')->on('brands')->onDelete('cascade');
        });

        Schema::table('tradeshow_tradeshow_edition', function (Blueprint $table) 
        {
            $table->foreign('tradeshow_id')->references('id')->on('tradeshows')->onDelete('cascade');
            $table->foreign('tradeshow_edition_id')->references('id')->on('tradeshow_editions')->onDelete('cascade');
            $table->foreign('tradeshow_times_id')->references('id')->on('tradeshow_times')->onDelete('cascade');
        });

        Schema::table('lead_categories', function (Blueprint $table) 
        {
            $table->foreign('lead_id')->references('id')->on('leads')->onDelete('cascade');
            $table->foreign('lead_class_id')->references('id')->on('lead_classes')->onDelete('cascade');
            $table->foreign('brand_id')->references('id')->on('brands')->onDelete('cascade');
        });



        Schema::table('network_crosses', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('lead_id')->references('id')->on('leads')->onDelete('cascade');
            $table->foreign('network_lead_id')->references('id')->on('network_leads')->onDelete('cascade');
            $table->foreign('network_lead_state_id')->references('id')->on('network_lead_states')->onDelete('cascade');
            $table->foreign('brand_id')->references('id')->on('brands')->onDelete('cascade');
        });
        
        /*Schema::table('banner_dinamicos', function (Blueprint $table) {
            $table->foreign('brand_id')->references('id')->on('brands')->onDelete('cascade');
            $table->foreign('banner_sub_type_id')->references('id')->on('banner_sub_types')->onDelete('cascade');
        });

        Schema::table('banner_sub_types', function (Blueprint $table) {
            $table->foreign('banner_type_id')->references('id')->on('banner_types')->onDelete('cascade');
        });*/

        Schema::table('lead_requests', function (Blueprint $table) 
        {
            $table->foreign('lead_id')->references('id')->on('leads')->onDelete('cascade');
            $table->foreign('brand_id')->references('id')->on('brands')->onDelete('cascade');
            $table->foreign('country_id')->references('id')->on('countries')->onDelete('cascade');
            $table->foreign('state_id')->references('id')->on('country_states')->onDelete('cascade');
            $table->foreign('source_id')->references('id')->on('sources')->onDelete('cascade');
            $table->foreign('lead_class_id')->references('id')->on('lead_classes')->onDelete('cascade');
            $table->foreign('lead_type_id')->references('id')->on('lead_types')->onDelete('cascade');
            $table->foreign('cta_id')->references('id')->on('ctas')->onDelete('cascade');
            $table->foreign('cta_color_id')->references('id')->on('cta_colors')->onDelete('cascade');
            $table->foreign('form_page_id')->references('id')->on('form_pages')->onDelete('cascade');
            $table->foreign('form_page_position_id')->references('id')->on('form_page_positions')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

    } 
}
