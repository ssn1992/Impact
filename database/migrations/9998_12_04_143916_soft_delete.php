<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SoftDelete extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function ($table) {
            $table->softDeletes();
        });
        Schema::table('sources', function ($table) {
            $table->softDeletes();
        });
        Schema::table('source_categories', function ($table) {
            $table->softDeletes();
        });
        Schema::table('brands', function ($table) {
            $table->softDeletes();
        });
        Schema::table('forms', function ($table) {
            $table->softDeletes();
        });
        Schema::table('blogs', function ($table) {
            $table->softDeletes();
        });
        Schema::table('blog_categories', function ($table) {
            $table->softDeletes();
        });
        Schema::table('ebooks', function ($table) {
            $table->softDeletes();
        });
        Schema::table('ebook_categories', function ($table) {
            $table->softDeletes();
        });
        Schema::table('platforms', function ($table) {
            $table->softDeletes();
        });
        Schema::table('leads', function ($table) {
            $table->softDeletes();
        });
        Schema::table('lead_requests', function ($table) {
            $table->softDeletes();
        });
        Schema::table('ctas', function ($table) {
            $table->softDeletes();
        });
        Schema::table('direct_contacts', function ($table) {
            $table->softDeletes();
        });
        Schema::table('social_network_crosses', function ($table) {
            $table->softDeletes();
        });
        Schema::table('levels', function ($table) {
            $table->softDeletes();
        });
        Schema::table('lead_details', function ($table) {
            $table->softDeletes();
        });
        Schema::table('network_categories', function ($table) {
            $table->softDeletes();
        });
        Schema::table('network_leads', function ($table) {
            $table->softDeletes();
        });
        Schema::table('form_pages', function ($table) {
            $table->softDeletes();
        });
        Schema::table('form_page_positions', function ($table) {
            $table->softDeletes();
        });
        Schema::table('network_lead_states', function ($table) {
            $table->softDeletes();
        });
        Schema::table('countries', function ($table) {
            $table->softDeletes();
        });
        Schema::table('country_states', function ($table) {
            $table->softDeletes();
        });
        Schema::table('country_continents', function ($table) {
            $table->softDeletes();
        });
        Schema::table('cta_colors', function ($table) {
            $table->softDeletes();
        });
        Schema::table('lead_types', function ($table) {
            $table->softDeletes();
        });
        Schema::table('showrooms', function ($table) {
            $table->softDeletes();
        });
        Schema::table('lead_classes', function ($table) {
            $table->softDeletes();
        });
        Schema::table('lead_token_brands', function ($table) {
            $table->softDeletes();
        });
        Schema::table('budgets', function ($table) {
            $table->softDeletes();
        });
        Schema::table('websites', function ($table) {
            $table->softDeletes();
        });
        Schema::table('advertisings', function ($table) {
            $table->softDeletes();
        });
        Schema::table('emails', function ($table) {
            $table->softDeletes();
        });
        Schema::table('crosses', function ($table) {
            $table->softDeletes();
        });
        Schema::table('tradeshows', function ($table) {
            $table->softDeletes();
        });
        Schema::table('social_networks', function ($table) {
            $table->softDeletes();
        });
        Schema::table('social_network_categories', function ($table) {
            $table->softDeletes();
        });
        Schema::table('catalogues', function ($table) {
            $table->softDeletes();
        });
        Schema::table('presses', function ($table) {
            $table->softDeletes();
        });
        Schema::table('infographics', function ($table) {
            $table->softDeletes();
        });
        Schema::table('phones', function ($table) {
            $table->softDeletes();
        });
        Schema::table('brand_accesses', function ($table) {
            $table->softDeletes();
        });
        Schema::table('partner_brands', function ($table) {
            $table->softDeletes();
        });
        Schema::table('tradeshow_editions', function ($table) {
            $table->softDeletes();
        });
        Schema::table('tradeshow_tradeshow_edition', function ($table) {
            $table->softDeletes();
        });
        Schema::table('tradeshow_times', function ($table) {
            $table->softDeletes();
        });
        Schema::table('lead_categories', function ($table) {
            $table->softDeletes();
        });
        Schema::table('tradeshow_campaigns', function ($table) {
            $table->softDeletes();
        });
        Schema::table('network_crosses', function ($table) {
            $table->softDeletes();
        });
        Schema::table('type_classifications', function ($table) {
            $table->softDeletes();
        });
        Schema::table('social_network_types', function ($table) {
            $table->softDeletes();
        });
        Schema::table('occupations', function ($table) {
            $table->softDeletes();
        });
        Schema::table('partner_brand_types', function ($table) {
            $table->softDeletes();
        });
        Schema::table('cross_types', function ($table) {
            $table->softDeletes();
        });
        Schema::table('bug_reports', function ($table) {
            $table->softDeletes();
        });
        Schema::table('social_network_sub_types', function ($table) {
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
        //
    }
}
