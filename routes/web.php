<?php
Auth::routes();
//Route::get('test', "DynamicBanner\OperationsController@graphTopClicks");
Route::get('email', "Tradeshow\OperationsController@email");
/*
 |--------------------------------------------------------------------------
 | Admin routes
 |--------------------------------------------------------------------------
 |
 */
// Admin area
Route::group(['prefix' => 'admin-area', 'middleware' => ['auth', 'isAdmin']], function ()
{
    Route::resource('users', 'UserController');
    Route::view('users-logs', 'users.logs');
    Route::resource('roles', 'RoleController');
    Route::resource('permissions', 'PermissionController');
    Route::view('console', 'console.console');
    Route::post('console-command', "SelfManagementController@command_exec");

    //Dynamic Banners
    Route::view('dynamic-banners', 'dynamic-banners.actions');

    //Bug Report
    Route::view('bug-report/dashboard', 'bug-report.dashboard');

    // Closed List Area
    Route::view('closed-list-area/blog', 'closed-list.blog');
    Route::view('closed-list-area/blog-category', 'closed-list.blog-category');
    Route::view('closed-list-area/advertising', 'closed-list.advertising');
    Route::view('closed-list-area/brands', 'closed-list.brands');
    Route::view('closed-list-area/brands-access', 'closed-list.brands-access');
    Route::view('closed-list-area/catalogue', 'closed-list.catalogue');
    Route::view('closed-list-area/direct', 'closed-list.direct');
    Route::view('closed-list-area/ebook', 'closed-list.ebook');
    Route::view('closed-list-area/ebook-category', 'closed-list.ebook-category');
    Route::view('closed-list-area/email', 'closed-list.email');
    Route::view('closed-list-area/cta', 'closed-list.cta');
    Route::view('closed-list-area/cta-color', 'closed-list.cta-color');
    Route::view('closed-list-area/form', 'closed-list.form');
    Route::view('closed-list-area/form-category', 'closed-list.form-category');
    Route::view('closed-list-area/form-page', 'closed-list.form-page');
    Route::view('closed-list-area/form-page-position', 'closed-list.form-page-position');
    Route::view('closed-list-area/infographic', 'closed-list.infographic');
    Route::view('closed-list-area/lead-token', 'closed-list.lead-token');
    Route::view('closed-list-area/level', 'closed-list.level');
    Route::view('closed-list-area/network', 'closed-list.network');
    Route::view('closed-list-area/network-lead-state', 'closed-list.network-lead-state');
    Route::view('closed-list-area/network-category', 'closed-list.network-category');
    Route::view('closed-list-area/phone', 'closed-list.phone');
    Route::view('closed-list-area/plattform', 'closed-list.plattform');
    Route::view('closed-list-area/press', 'closed-list.press');
    Route::view('closed-list-area/showroom', 'closed-list.showroom');
    Route::view('closed-list-area/social-network', 'closed-list.social-network');
    Route::view('closed-list-area/social-network-category', 'closed-list.social-network-category');
    Route::view('closed-list-area/source', 'closed-list.source');
    Route::view('closed-list-area/source-category', 'closed-list.source-category');
    Route::view('closed-list-area/website', 'closed-list.website');
    Route::view('closed-list-area/tradeshow', 'closed-list.tradeshow');
    Route::view('closed-list-area/tradeshow-edition', 'closed-list.tradeshow-edition');
    Route::view('closed-list-area/tradeshow-time', 'closed-list.tradeshow-time');
    Route::view('closed-list-area/tradeshow-associate', 'closed-list.tradeshow-associate');
});

// Personal area
Route::group(['prefix' => 'personal-area', 'middleware' => ['auth']], function ()
{
    Route::view('bug-report', 'bug-report.client-list');
});

/*
 |--------------------------------------------------------------------------
 | *--- Authenticated routes --*
 |--------------------------------------------------------------------------
 |
 |--------------------------------------------------------------------------
 | Views
 |--------------------------------------------------------------------------
 |
*/

Route::group(['middleware' => ['auth']], function ()
{
    Route::get('/', "HomeController@homeRedirect");

    /**
     * Leads Area
     * Return Leads Area view
     */
    Route::prefix('leads-area')->group(function ()
    {
        Route::view('dashboard', 'leads.dashboard');
        Route::view('leads', 'leads.leads');
        Route::view('leads-forms', 'leads.leads-forms');

        Route::view('manual-import-leads', 'leads.manual-import');
        Route::view('manual-import-leads-dashboard', 'leads.manual-import-dashboard');
        Route::view('manual-import-leads/edit/{id}', 'leads.edit');
        Route::view('manual-import-leads-dashboard/edit/{id}', 'leads.edit');

        Route::view('opportunities', 'leads.opportunities');
        Route::view('create', 'leads.create');
    });

    /**
     * Campaigns Area
     * Return Campaigns Area view
     */
    Route::prefix('campaigns-area')->group(function ()
    {
        Route::view('dashboard', 'campaigns.dashboard');

        Route::prefix('create')->group(function () {
            Route::view('parent', 'campaigns.create-parent');
            Route::view('child', 'campaigns.create-child');
            Route::view('association', 'campaigns.associate-child');
        });
    });

    /**
     * Opportunities Area
     * Return Opportunities Area view
     */
    Route::prefix('budget-area')->group(function ()
    {
        Route::view('dashboard', 'budget.dashboard');
        Route::view('insert-budget', 'budget.insert-budget');
        Route::view('edit-budget', 'budget.edit-budget');

    });

   /**
    * Fairs Area
    * Return Fairs Area view
    */
    Route::prefix('fairs-area')->group(function ()
    {
        Route::view('dashboard', 'fairs.dashboard');
        Route::view('fairs', 'fairs.fairs');
        Route::view('create', 'fairs.create');
        Route::view('edit', 'fairs.edit');
        Route::view('actions', 'fairs.actions');
    });

    /**
    * Workflow Area
    * Return Fairs Area view
    */
    Route::view('workflow', 'workflow.dashboard');

    /**
     * Cross Area
     * Return Cross Area view
     */
    Route::prefix('cross-area')->group(function ()
    {
        Route::view('dashboard',  'cross.dashboard');
        Route::view('cross', 'cross.cross');
    });

    /*
     |--------------------------------------------------------------------------
     | *--- Axios routes ---*
     |--------------------------------------------------------------------------
     |
     | Brands
     |--------------------------------------------------------------------------
     |
    /*
     * Get-Brands
     * Return Brands
     * Response JSON
     */
    Route::get('get-brands', "BrandController@brands");


    /*
     * Get-tradeshow-list
     * Return Tradeshow List leads
     * Response JSON
     */
    Route::get('get-tradeshow-list', "ComboBoxController@tradeshows");

    /*
     * Get-tradeshow-edition-list
     * Return tradeshow Edition List
     * Response JSON
     */
    Route::get('get-tradeshow-edition-list', "ComboBoxController@tradeshow_editions");

    /*
     * Get-tradeshow-edition-list
     * Return tradeshow Edition List
     * Response JSON
     */
    Route::get('get-tradeshow-time-list', "ComboBoxController@tradeshow_times");

    /*
     * Get-sf-parent-campaign-
     * Return sf-parent-campaign
     * Response JSON
     */
    Route::post('get-campaign-parent', "Tradeshow\SalesForceCampaignsController@index");

    /*
     * Get-sf-campaign-status
     * Return sf-campaign-status
     * Response JSON
     */
    Route::post('get-campaign-status-list', "Tradeshow\SalesForceCampaignsController@campaign_status");

    /*
     * Create-sf-parent-campaign
     * Return sf-campaign-status
     * Response JSON
     */
    Route::post('create-parent-campaign', "Tradeshow\SalesForceCampaignsController@create");

    /*
     * Associate-sf-parent-campaign
     * Return sf-campaign-status
     * Response JSON
     */
    Route::post('associate-child-campaign', "Tradeshow\SalesForceCampaignsController@map_brand_2_campaign");

    /*
     * Get-Campaigns
     * Return Highlights leads
     * Response JSON
     */
    Route::post('get-campaigns-list', "Tradeshow\SalesForceCampaignsController@index");

    /*
     * Get-Brands-only (no all brands)
     * Return Highlights leads
     * Response JSON
     */
    Route::get('get-banners-categories', 'DynamicBanner\OperationsController@categoriesList');

    /*
     * Get-Brands-only (no all brands)
     * Return Highlights leads
     * Response JSON
     */
    Route::get('get-brands-only', "BrandController@brands_only");

    /*
     * Get-Category-Blog
     * Return Category Blog
     * Response JSON
     */
    Route::get('get-category-blog', "ComboBoxController@blog_category_list");

    /*
     * Get-Category-Blog
     * Return Category Blog
     * Response JSON
     */
    Route::get('get-ebook-category', "ComboBoxController@ebook_categories_list");

    /*
     * Get-Level
     * Return Level
     * Response JSON
     */
    Route::get('get-level', "ComboBoxController@level_list");

    /*
     |--------------------------------------------------------------------------
     | Cross
     |--------------------------------------------------------------------------
     |
    /*
     * Post-cross-create
     * Return Cross Create
     * Response JSON
     */
    Route::post('cross/create', 'Cross\OperationsController@store');

    /*
     |--------------------------------------------------------------------------
     | Countrys
     |--------------------------------------------------------------------------
     |
    /*
     * Post-countrys
     * Return Countrys List
     * Response JSON
     */
    Route::post('countrys-list', 'Country\CountryController@country');

    /*
     * Post-states
     * Return States List
     * Response JSON
     */
    Route::post('states-list', 'Country\CountryController@state');

    /*
     * Post-leads-manual-check
     * Return Lead id lead duplicated or advance to create
     * Response JSON
     */
    Route::post('leads-manual-check', 'ManualImport\ManualInsertController@manualImportChecker');

    /*
    *
    * Post-resend-sf
    * Return Lead Edit
    * Response JSON
    */
    Route::post('resend-sf', 'ManualImport\ManualInsertController@saveToSalesForceResend');

    /*
     * Post-leads-manual-create
     * Return Lead Create
     * Response JSON
     */
    Route::post('leads-manual-create', 'ManualImport\ManualInsertController@create');

    /*
     * Post-leads-manual-edit
     * Return Lead Edit
     * Response JSON
     */
    Route::post('get-lead-manual-edit', 'ManualImport\ManualInsertController@edit');
    /*
     *
     * Post-leads-manual-edit-post
     * Return Lead Edit
     * Response JSON
     */
    Route::post('leads-manual-edit', 'ManualImport\ManualInsertController@update');

    /*
     * Get-status
     * Return Status List
     * Response JSON
     */
    Route::get('status', 'Cross\ComboController@status_list');

    /*
     * Get-leads-sources
     * Return Sources List
     * Response JSON
     */
    Route::get('sources', 'ComboBoxController@source');

    /*
     * Get-leads-sources
     * Return Sources List
     * Response JSON
     */
    Route::post('source-category', 'ComboBoxController@source_category');

    /*
     * Get-leads-sources-type
     * Return Sources List
     * Response JSON
     */
    Route::post('source-type', 'ComboBoxController@source_types');

    /*
     * Get-leads-sources-SubTypes
     * Return Sources SubTypes List
     * Response JSON
     */
    Route::post('source-subType', 'ComboBoxController@source_sub_types');

    /*
     * Get-leads-sources-industry
     * Return Sources industry List
     * Response JSON
     */
    Route::post('get-industry', 'ComboBoxController@industry');

    /*
     * Get-contact_role
     * Return contact role list
     * Response JSON
     */
    Route::post('get-contact_role', 'ManualImport\ComboBoxController@lead_role');

    /*
     * Get-leads-mkt-type
     * Return Mkt type List
     * Response JSON
     */
    Route::post('get-mkt-type', 'ManualImport\ComboBoxController@mkt_type');

    /*
     * Get-leads-type
     * Return Leads type List
     * Response JSON
     */
    Route::get('leads-type', 'ComboBoxController@lead_type');

    /*
     * Post-budget
     * Return Budget Week
     * Response JSON
     */
    Route::post('budget-week', 'Budget\ComboController@price');

    /*
     * Post-insert-budget
     * Return Budget insert
     * Response JSON
     */
    Route::post('budget-insert', 'Budget\OperationsController@budget_create');

    /*
     * Get-budget-years
     * Return Budget years
     * Response JSON
     */
    Route::get('get-budget-years', 'Budget\ComboController@get_current_years');

    /*
     * Get-brand-access
     * Return Brand Access
     * Response JSON
     */
    Route::get('get-brand-access', 'ComboBoxController@brand_access_list');

    /*
     * Post-edit-budget
     * Return Budget edit
     * Response JSON
     */
    Route::post('budget-edit', 'Budget\OperationsController@budget_edit');

    /*
     |--------------------------------------------------------------------------
     | Highlights
     |--------------------------------------------------------------------------
     |
     * Post-highlights-leads
     * Return Highlights leads
     * Response JSON
     */
    Route::post('highlights/leads-highlights', "Lead\HighlightController@index");

    /*
     |--------------------------------------------------------------------------
     | Graphs
     |--------------------------------------------------------------------------
     |
    /*
     * Post-graph-leads
     * Return Graphs leads
     * Response JSON
     */
    Route::post('graphs/totalLeads-graph', "Lead\GraphsController@index");

    /*
     * Post-graph-leads
     * Return Graphs leads
     * Response JSON
     */
    Route::post('graphs/totalLeads-graph-uniques', "Lead\GraphsController@index_uniques");

    /*
     * Post-cross-found-user
     * Return Graphs cross-found-user
     * Response JSON
     */
    Route::post('graphs/cross-found-user-graph', "Cross\GraphsController@leads_by_me_found");

    /*
     * Post-cross-notFound-general
     * Return Graphs cross-notFound-general
     * Response JSON
     */
    Route::post('graphs/cross-notFound-graph', "Cross\GraphsController@leads_by_me_not_found");

    /*
     * Post-cross-found-general
     * Return Graphs cross-found-general
     * Response JSON
     */
    Route::post('graphs/cross-found-general-graph', "Cross\GraphsController@leads_by_brand");


    /*
     * Post-cross-found-users
     * Return Graphs cross-found-user
     * Response JSON
     */
    Route::post('graphs/cross-found-users-graph', "Cross\GraphsController@leads_by_network");


    /*
     * Post-graphs-fairs
     * Return Graphs fairs
     * Response JSON
     */
    Route::post('graphs/fairs-graph', 'Tradeshow\GraphsController@graph');

    /*
     * Post-graphs-fairs
     * Return Graphs fairs
     * Response JSON
     */
    Route::post('graphs/fairs-graph-client-type', "Cross\GraphsController@leads_by_brand");

    /*
     * Post-graphs-budget
     * Return Graphs budget
     * Response JSON
     */
    Route::post('graphs/budget-graph', 'Budget\GraphsController@main_graph');

    /*
     * Post-graphs/manual-import-dashboard-user
     * Return Graphs budget
     * Response JSON
     */
    Route::post('graphs/manual-import-dashboard-brand', 'ManualImport\GraphsController@leads_created_by_brand');
    Route::post('graphs/manual-import-dashboard-user', 'ManualImport\GraphsController@leads_created_by_user');

    /*
     * Post-add-banner
     * Return Banner
     * Response JSON
     */
    Route::post('add-dynamic-banner', 'DynamicBanner\OperationsController@store');
    Route::post('edit-dynamic-banner', 'DynamicBanner\OperationsController@update');

    /*
     * Post-graph-dynamic-banners-top-clicks
     * Return Graphs Dynamic Banners Top Clicks
     * Response JSON
     */
    Route::post('graphs/top-banners-clicks-graph', "DynamicBanner\OperationsController@graphTopClicks");
    Route::post('graphs/top-banners-clicks-graph-doughnut', "DynamicBanner\OperationsController@graphTopClicks");

    /*
     |--------------------------------------------------------------------------
     | Tables
     |--------------------------------------------------------------------------
     |
    /*
     * Post-table-users-logs
     * Return Table logs
     * Response JSON
     */
    Route::post('tables/users-logs-table', 'LogController@index');

    /*
     * Post-table-users-logs
     * Return Table logs
     * Response JSON
     */
    Route::post('tables/dynamic-banners-table', 'DynamicBanner\TablesController@table');
    Route::post('tables/dynamic-banners-table/delete', 'DynamicBanner\OperationsController@delete');

    /*
     * Post-table-leads
     * Return Table leads
     * Response JSON
     */
    Route::post('tables/totalLeads-table', 'Lead\TablesController@lead_table');

    /*
     * Post-table-leads-forms
     * Return Table leads forms
     * Response JSON
     */
    Route::post('tables/leads-forms-table', 'Lead\TablesController@form_table');

    /*
     * Post-table-leads-manual-import
     * Return Table leads manual import
     * Response JSON
     */
    Route::post('tables/manual-import-leads-table', 'ManualImport\TableController@index');

    /*
     * Post-table-leads
     * Return Table leads
     * Response JSON
     */
    Route::post('tables/opportunities-table', 'Lead\SalesforceOportunitiesController@get_leads_oportunities');

    /*
     * Post-table-leads-uniques
     * Return Table leads uniques
     * Response JSON
     */
    Route::post('tables/totalLeads-table-uniques', 'Lead\TablesController@lead_table_uniques');

    /*
     * Post-tables-fairs
     * Return Tables fairs
     * Response JSON
     */
    Route::post('tables/fairs-table', 'Tradeshow\TablesController@listing');

    /*
     * Post-tables-fairs-client-commun
     * Return Tables fairs Cleint Commun
     * Response JSON
     */
    Route::post('tables/fairs-client-common-table', 'Tradeshow\TablesController@client_common');

    /*
     * Post-tables-cross
     * Return Tables cross
     * Response JSON
     */
    Route::post('tables/cross-table', 'Cross\TablesController@lead_table');
    Route::post('tables/fairs-actions-table', 'LogController@index');

    /*
     * Post-table-cross-dashboard
     * Return Tables Cross dashboard
     * Response JSON
     */
    Route::post('tables/cross-table-dashboard', 'Cross\TablesController@leads_found_by_team_members');

    /*
     * Post-table-cross-dashboard
     * Return Tables Cross dashboard
     * Response JSON
     */
    Route::post('tables/budget-table', 'Budget\TablesController@budget_table');

    /*
     * Post-table-blog
     * Return Tables Blog
     * Response JSON
     */
    Route::post('tables/table-blog', 'ClosedTables\BlogController@blog_table');

    // Delete by {ID}
    Route::post('tables/table-blog/delete', 'ClosedTables\BlogController@blog_delete');

    /*
     * Post-table-blog-category
     * Return Tables Blog Category
     * Response JSON
     */
    Route::post('tables/table-blog-category', 'ClosedTables\BlogController@blog_category_table');

    // Delete by {ID}
    Route::post('tables/table-blog-category/delete', 'ClosedTables\BlogController@blog_category_delete');

    /*
     * Post-table-advertising
     * Return Tables Advertising
     * Response JSON
     */
    Route::post('tables/table-advertising', 'ClosedTables\AdvertisingController@advertising_table');

    // Delete by {ID}
    Route::post('tables/table-advertising/delete', 'ClosedTables\AdvertisingController@advertising_delete');

    /*
     * Post-table-brands
     * Return Tables Brands
     * Response JSON
     */
    Route::post('tables/table-brands', 'ClosedTables\BrandsController@brand_table');

    // Delete by {ID}
    Route::post('tables/table-brands/delete', 'ClosedTables\BrandsController@brand_delete');

    /*
     * Post-table-brands-access
     * Return Tables Brands Access
     * Response JSON
     */
    Route::post('tables/table-brands-access', 'ClosedTables\BrandsController@brand_access_table');

    // Delete by {ID}
    Route::post('tables/table-brands-access/delete', 'ClosedTables\BrandsController@brand_access_delete');

    /*
     * Post-table-catalogue
     * Return Tables Catalogue
     * Response JSON
     */
    Route::post('tables/table-catalogue', 'ClosedTables\CatalogueController@catalogue_table');

    // Delete by {ID}
    Route::post('tables/table-catalogue/delete', 'ClosedTables\CatalogueController@catalogue_delete');

    /*
     * Post-direct-contact
     * Return Tables Direct Contact
     * Response JSON
     */
    Route::post('tables/table-direct-contact', 'ClosedTables\DirectContactController@direct_contact_table');

    // Delete by {ID}
    Route::post('tables/table-direct-contact/delete', 'ClosedTables\DirectContactController@direct_contact_delete');

    /*
     * Post-ebook
     * Return Tables Ebook
     * Response JSON
     */
    Route::post('tables/table-ebook', 'ClosedTables\EbookController@ebook_table');

    // Delete by {ID}
    Route::post('tables/table-ebook/delete', 'ClosedTables\EbookController@ebook_delete');

    /*
     * Post-ebook-category
     * Return Tables Ebook Category
     * Response JSON
     */
    Route::post('tables/table-ebook-category', 'ClosedTables\EbookController@ebook_category_table');

    // Delete by {ID}
    Route::post('tables/table-ebook-category/delete', 'ClosedTables\EbookController@ebook_category_delete');

    /*
     * Post-phone
     * Return Tables Phone
     * Response JSON
     */
    Route::post('tables/table-phone', 'ClosedTables\PhoneController@phone_table');

    // Delete by {ID}
    Route::post('tables/table-phone/delete', 'ClosedTables\PhoneController@phone_delete');

    /*
     * Post-plattform
     * Return Tables Plattform
     * Response JSON
     */
    Route::post('tables/table-plattform', 'ClosedTables\PlataformsController@platforms_table');

    // Delete by {ID}
    Route::post('tables/table-plattform/delete', 'ClosedTables\PlataformsController@platforms_delete');

    /*
     * Post-press
     * Return Tables Press
     * Response JSON
     */
    Route::post('tables/table-press', 'ClosedTables\PressController@press_table');

    // Delete by {ID}
    Route::post('tables/table-press/delete', 'ClosedTables\PressController@press_delete');

    /*
     * Post-showroom
     * Return Tables Showroom
     * Response JSON
     */
    Route::post('tables/table-showroom', 'ClosedTables\ShowroomController@showroom_table');

    // Delete by {ID}
    Route::post('tables/table-showroom/delete', 'ClosedTables\ShowroomController@showroom_delete');

    /*
     * Post-email
     * Return Tables Email
     * Response JSON
     */
    Route::post('tables/table-email', 'ClosedTables\EmailController@email_table');

    // Delete by {ID}
    Route::post('tables/table-email/delete', 'ClosedTables\EmailController@email_delete');

    /*
     * Post-cta
     * Return Tables Cta
     * Response JSON
     */
    Route::post('tables/table-cta', 'ClosedTables\CtaController@cta_table');

    // Delete by {ID}
    Route::post('tables/table-cta/delete', 'ClosedTables\CtaController@cta_delete');

    /*
     * Post-cta-color
     * Return Tables Cta-color
     * Response JSON
     */
    Route::post('tables/table-cta-color', 'ClosedTables\CtaController@cta_color_table');

    // Delete by {ID}
    Route::post('tables/table-cta-color/delete', 'ClosedTables\CtaController@cta_color_delete');

    /*
     * Post-form
     * Return Tables Form
     * Response JSON
     */
    Route::post('tables/table-form', 'ClosedTables\FormController@form_table');

    // Delete by {ID}
    Route::post('tables/table-form/delete', 'ClosedTables\FormController@form_delete');

    /*
     * Post-form-page
     * Return Tables Form Page
     * Response JSON
     */
    Route::post('tables/table-form-page', 'ClosedTables\FormController@form_page_table');

    // Delete by {ID}
    Route::post('tables/table-form-page/delete', 'ClosedTables\FormController@form_page_delete');

    /*
     * Post-form-page-position
     * Return Tables Form Page Position
     * Response JSON
     */
    Route::post('tables/table-form-page-position', 'ClosedTables\FormController@form_page_position_table');

    // Delete by {ID}
    Route::post('tables/table-form-page-position/delete', 'ClosedTables\FormController@form_page_position_delete');

    /*
     * Post-infographic
     * Return Tables Infographic
     * Response JSON
     */
    Route::post('tables/table-infographic', 'ClosedTables\InfographicController@infographic_table');

    // Delete by {ID}
    Route::post('tables/table-infographic/delete', 'ClosedTables\InfographicController@infographic_delete');

    /*
     * Post-lead-token
     * Return Tables Lead Token
     * Response JSON
     */
    Route::post('tables/table-lead-token', 'ClosedTables\LeadTokenController@lead_token_brand_table');

    // Delete by {ID}
    Route::post('tables/table-lead-token/delete', 'ClosedTables\LeadTokenController@Lead_token_brand_delete');

    /*
     * Post-level
     * Return Tables Level
     * Response JSON
     */
    Route::post('tables/table-level', 'ClosedTables\LevelController@level_table');

    // Delete by {ID}
    Route::post('tables/table-level/delete', 'ClosedTables\LevelController@level_delete');

    /*
     * Post-network-lead-state
     * Return Tables Network Lead State
     * Response JSON
     */
    Route::post('tables/table-network-lead-state', 'ClosedTables\NetworkController@network_lead_state_table');

    // Delete by {ID}
    Route::post('tables/table-network-lead-state/delete', 'ClosedTables\NetworkController@network_lead_state_delete');

    /*
     * Post-network-category
     * Return Tables Network category
     * Response JSON
     */
    Route::post('tables/table-network-category', 'ClosedTables\NetworkController@network_category_table');

    // Delete by {ID}
    Route::post('tables/table-network-category/delete', 'ClosedTables\NetworkController@network_lead_state_delete');

    /*
     * Post-social-network
     * Return Tables Social Network
     * Response JSON
     */
    Route::post('tables/table-social-network', 'ClosedTables\SocialNetworkController@social_network_table');

    // Delete by {ID}
    Route::post('tables/table-social-network/delete', 'ClosedTables\SocialNetworkController@social_network_delete');

    /*
     * Post-social-network-category
     * Return Tables Social Network
     * Response JSON
     */
    Route::post('tables/table-social-network-category', 'ClosedTables\SocialNetworkController@social_network_category_table');

    // Delete by {ID}
    Route::post('tables/table-social-network-category/delete', 'ClosedTables\SocialNetworkController@social_network_category_delete');

    /*
     * Post-source
     * Return Tables Source
     * Response JSON
     */
    Route::post('tables/table-source', 'ClosedTables\SourceController@source_table');

    // Delete by {ID}
    Route::post('tables/table-source/delete', 'ClosedTables\SourceController@source_delete');

    /*
     * Post-source-category
     * Return Tables Source Category
     * Response JSON
     */
    Route::post('tables/table-source-category', 'ClosedTables\SourceController@source_category_table');

    // Delete by {ID}
    Route::post('tables/table-source-category/delete', 'ClosedTables\SourceController@source_category_delete');

    /*
     * Post-website
     * Return Tables Website
     * Response JSON
     */
    Route::post('tables/table-website', 'ClosedTables\WebsiteController@website_table');

    // Delete by {ID}
    Route::post('tables/table-website/delete', 'ClosedTables\WebsiteController@website_delete');

    /*
     * Post-tradeshow-edition
     * Return Tables Tradeshow Edition
     * Response JSON
     */
    Route::post('tables/table-tradeshow-edition', 'ClosedTables\TradeshowController@tradeshow_edition_table');

    // Delete by {ID}
    Route::post('tables/table-tradeshow-edition/delete', 'ClosedTables\TradeshowController@tradeshow_edition_delete');

    /*
     * Post-tradeshow-time
     * Return Tables Tradeshow Time
     * Response JSON
     */
    Route::post('tables/table-tradeshow-time', 'ClosedTables\TradeshowController@tradeshow_time_table');

    // Delete by {ID}
    Route::post('tables/table-tradeshow-time/delete', 'ClosedTables\TradeshowController@tradeshow_time_delete');

    /*
     * Post-tradeshow-associate
     * Return Tables Tradeshow Associate
     * Response JSON
     */
    Route::post('tables/table-tradeshow-associate', 'ClosedTables\TradeshowController@tradeshow_tradeshow_edition_table');

    // Delete by {ID}
    Route::post('tables/table-tradeshow-associate/delete', 'ClosedTables\TradeshowController@tradeshow_tradeshow_edition_delete');

    /*
     * Post-tradeshow
     * Return Tables Tradeshow
     * Response JSON
     */
    Route::post('tables/table-tradeshow', 'ClosedTables\TradeshowController@tradeshow_table');

    // Delete by {ID}
    Route::post('tables/table-tradeshow/delete', 'ClosedTables\TradeshowController@tradeshow_delete');

    /*
     |--------------------------------------------------------------------------
     | Bug Report
     |--------------------------------------------------------------------------
     |
    /*
     * Post-bug-report Admin
     * Return Tables Bug Report Admin
     * Response JSON
     */
    Route::post('tables/bug-report-table', 'BugReportController@table_list');

    // Delete by {ID}
    Route::post('tables/bug-report-table/delete', 'BugReportController@table_delete');

    /*
     * Post-bug-report-client
     * Return Tables Bug Report Client
     * Response JSON
     */
    Route::post('tables/bug-report-client-table', 'BugReportController@table_client_list');

    /*
     |--------------------------------------------------------------------------
     | Maps
     |--------------------------------------------------------------------------
     |
    /*
     * Post-maps-leads
     * Return Maps leads
     * Response JSON
     */
    Route::post('maps/totalLeads-map', 'Lead\MapsController@lead_map');

    /*
     * Post-maps-leads-uniques
     * Return Maps leads uniques
     * Response JSON
     */
    Route::post('maps/totalLeads-map-uniques', 'Lead\MapsController@lead_map_uniques');

    /*
     |--------------------------------------------------------------------------
     | Fairs
     |--------------------------------------------------------------------------
     |
    /*
     * Post-get-fairs name
     * Return fairs list name
     * Response JSON
     */
    Route::post('get-fairs/fairs', 'Tradeshow\ComboController@all_fairs');

    /*
     * Post-get-fairs name
     * Return fairs list name
     * Response JSON
     */
    Route::post('get-campaign-sf', 'Tradeshow\SalesForceCampaignsController@index');

    /*
     * Post-get-fairs name
     * Return fairs list name
     * Response JSON
     */
    Route::post('get-client-acquired', 'Tradeshow\ComboController@tradeshow_client_acquire');

    /*
     * Post-get-fairs
     * Return fairs list location
     * Response JSON
     */
    Route::post('get-fairs/location', 'Tradeshow\ComboController@all_editions');

    /*
     * Post-get-fairs
     * Return fairs list time
     * Response JSON
     */
    Route::post('get-fairs/name', 'Tradeshow\ComboController@all_times');

    /*
     * Post-get-active-fairs
     * Return active fairs list
     * Response JSON
     */
    Route::post('get-active-fairs', 'Tradeshow\ComboController@all_available_fairs');

    /*
     * Post-get-fairs-cat
     * Return fairs cat list
     * Response JSON
     */
    Route::post('fairs-cat', 'Tradeshow\ComboController@tradeshow_category');

    /*
     * Post-get-fairs-cat
     * Return fairs cat list
     * Response JSON
     */
    Route::post('fairs/create', 'Tradeshow\OperationsController@store');

    /*
     * Post-edit-tradeshow-user
     * Return tradeshow user
     * Response JSON
     */
    Route::post('fairs/edit', 'Tradeshow\OperationsController@update');

    /*
     * Post-edit-tradeshow-user
     * Return tradeshow user
     * Response JSON
     */
    Route::post('edit/tradeshow/user', 'Tradeshow\OperationsController@show_update_data');

    /*
     |--------------------------------------------------------------------------
     | Closed Lists Insert
     |--------------------------------------------------------------------------
     |
    /*
     * Post-blog-insert
     * Return blog insert
     * Response JSONTableController
     */
    Route::post('closed-list/blog-insert', 'ClosedTables\BlogController@blog_create');

    /*
     * Post-blog-category-insert
     * Return blog insert
     * Response JSON
     */
    Route::post('closed-list/blog-category-insert', 'ClosedTables\BlogController@blog_category_create');

    /*
     * Post-advertising-insert
     * Return advertising insert
     * Response JSON
     */
    Route::post('closed-list/advertising-insert', 'ClosedTables\AdvertisingController@advertising_create');

    /*
     * Post-brand-insert
     * Return advertising insert
     * Response JSON
     */
    Route::post('closed-list/brands-insert', 'ClosedTables\BrandsController@brand_create');

    /*
     * Post-brand-access-insert
     * Return brand access insert
     * Response JSON
     */
    Route::post('closed-list/brand-access-insert', 'ClosedTables\BrandsController@brand_access_create');

    /*
     * Post-catalogue-insert
     * Return catalogue insert
     * Response JSON
     */
    Route::post('closed-list/catalogue-insert', 'ClosedTables\CatalogueController@catalogue_create');

    /*
     * Post-direct-contact-insert
     * Return direct-contact insert
     * Response JSON
     */
    Route::post('closed-list/direct-contact-insert', 'ClosedTables\DirectContactController@direct_contact_create');

    /*
     * Post-ebook-insert
     * Return ebook insert
     * Response JSON
     */
    Route::post('closed-list/ebook-insert', 'ClosedTables\EbookController@ebook_create');

    /*
     * Post-ebook-category-insert
     * Return ebook category insert
     * Response JSON
     */
    Route::post('closed-list/ebook-category-insert', 'ClosedTables\EbookController@ebook_category_create');

    /*
     * Post-email-insert
     * Return email insert
     * Response JSON
     */
    Route::post('closed-list/email-insert', 'ClosedTables\EmailController@email_create');

    /*
     * Post-cta-insert
     * Return cta insert
     * Response JSON
     */
    Route::post('closed-list/cta-insert', 'ClosedTables\CtaController@cta_create');

    /*
     * Post-cta-color-insert
     * Return cta color insert
     * Response JSON
     */
    Route::post('closed-list/cta-color-insert', 'ClosedTables\CtaController@cta_color_create');

    /*
     * Post-form-insert
     * Return form insert
     * Response JSON
     */
    Route::post('closed-list/form-insert', 'ClosedTables\FormController@form_create');

    /*
     * Post-form-category-insert
     * Return form category insert
     * Response JSON
     */
    Route::post('closed-list/form-category-insert', 'ClosedTables\FormController@form_categories_create');

    /*
     * Post-form-page-insert
     * Return form page insert
     * Response JSON
     */
    Route::post('closed-list/form-page-insert', 'ClosedTables\FormController@form_page_create');

    /*
     * Post-form-page-position-insert
     * Return form page position insert
     * Response JSON
     */
    Route::post('closed-list/form-page-position-insert', 'ClosedTables\FormController@form_page_positions_create');

    /*
     * Post-infographic-insert
     * Return infographic
     * Response JSON
     */
    Route::post('closed-list/infographic-insert', 'ClosedTables\InfographicController@infographic_create');

    /*
     * Post-lead-token-insert
     * Return Lead token
     * Response JSON
     */
    Route::post('closed-list/lead-token-insert', 'ClosedTables\LeadTokenController@lead_token_brand_create');

    /*
     * Post-level
     * Return Level
     * Response JSON
     */
    Route::post('closed-list/level-insert', 'ClosedTables\LevelController@level_create');

    /*
     * Post-network
     * Return Network
     * Response JSON
     */
    Route::post('closed-list/network-insert', 'ClosedTables\NetworkController@network_create');

    /*
     * Post-network-lead-state
     * Return Network
     * Response JSON
     */
    Route::post('closed-list/network-lead-state-insert', 'ClosedTables\NetworkController@network_lead_state_create');

    /*
     * Post-network-category
     * Return Network
     * Response JSON
     */
    Route::post('closed-list/network-category-insert', 'ClosedTables\NetworkController@network_category_create');

    /*
     * Post-phone
     * Return Phone
     * Response JSON
     */
    Route::post('closed-list/phone-insert', 'ClosedTables\PhoneController@phone_create');

    /*
     * Post-plattform
     * Return Plattform
     * Response JSON
     */
    Route::post('closed-list/plattform-insert', 'ClosedTables\PlataformsController@plataform_create');

    /*
     * Post-press
     * Return press
     * Response JSON
     */
    Route::post('closed-list/press-insert', 'ClosedTables\PressController@presses_create');

    /*
     * Post-showroom
     * Return Showroom
     * Response JSON
     */
    Route::post('closed-list/showroom-insert', 'ClosedTables\ShowroomController@showroom_create');

    /*
     * Post-social-network
     * Return Social Network
     * Response JSON
     */
    Route::post('closed-list/social-network-insert', 'ClosedTables\SocialNetworkController@social_network');

    /*
     * Post-social-network-category
     * Return Social Network Category
     * Response JSON
     */
    Route::post('closed-list/social-network-category-insert', 'ClosedTables\SocialNetworkController@social_network_categories_create');

    /*
     * Post-source
     * Return Source
     * Response JSON
     */
    Route::post('closed-list/source-insert', 'ClosedTables\SourceController@sources_create');

    /*
     * Post-source-category
     * Return Source Category
     * Response JSON
     */
    Route::post('closed-list/source-category-insert', 'ClosedTables\SourceController@sources_categories_create');

    /*
     * Post-website
     * Return Website
     * Response JSON
     */
    Route::post('closed-list/website-insert', 'ClosedTables\WebsiteController@website_create');

    /*
     * Post-tradeshow
     * Return Tradeshow
     * Response JSON
     */
    Route::post('closed-list/tradeshow-insert', 'ClosedTables\TradeshowController@tradeshow_create');

    /*
     * Post-tradeshow-edition
     * Return Tradeshow Edition
     * Response JSON
     */
    Route::post('closed-list/tradeshow-edition-insert', 'ClosedTables\TradeshowController@tradeshow_edition_create');

    /*
     * Post-tradeshow-time
     * Return Tradeshow Time
     * Response JSON
     */
    Route::post('closed-list/tradeshow-time-insert', 'ClosedTables\TradeshowController@tradeshow_time_create');

    /*
     * Post-tradeshow-associate
     * Return Tradeshow Associate
     * Response JSON
     */
    Route::post('closed-list/tradeshow-associate-insert', 'ClosedTables\TradeshowController@tradeshow_tradeshow_edition_create');

    /*
     * Post-tradeshow-associate
     * Return Tradeshow Associate
     * Response JSON
     */
    Route::post('closed-list/tradeshow-associate-active', 'ClosedTables\TradeshowController@tradeshow_tradeshow_edition_active');

    /*
     |--------------------------------------------------------------------------
     | Bug Report Insert
     |--------------------------------------------------------------------------
     |
    /*
     * Post-bug-report-insert
     * Return Bug Report Insert
     * Response JSON
     */
    Route::post('bug-report/insert', 'BugReportController@report_create');

    /*
     * Post-bug-report-by-id
     * Return Bug Report By Id
     * Response JSON
     */
    Route::post('get-bug-report-id', 'BugReportController@show_update_data');

    /*
     * Post-bug-report-edit
     * Return Bug Report Edit
     * Response JSON
     */
    Route::post('edit/bug-report', 'BugReportController@report_edit');

    /*
     |--------------------------------------------------------------------------
     | Campaigns
     |--------------------------------------------------------------------------
     |
    /*
     * Post-table-campaigns
     * Return Table campaigns
     * Response JSON
     */
    Route::post('tables/campaigns-table', 'Campaigns\TablesController@index');

    /*
    * Post-campaigns-graph
    * Return top 10 Campaign
    * Response JSON
    */
    Route::post('graphs/campaigns-graph', 'Campaigns\GraphsController@top_campaigns_name');
});