const { mix } = require('laravel-mix');

/**
 * Webpack mix map
 *
 *
 *
 *

 mix.webpackConfig({
    devtool: "inline-source-map"
});
 *
 * **/

 mix.options({
    uglify: {
        uglifyOptions: {
            compress: {
                drop_console: true,
            }
        }
    },
});

/**Mix-Variable**/
/****************/
/******/mix/*****/
/****************/

/*
 |--------------------------------------------------------------------------
 | Master dependencies
 |--------------------------------------------------------------------------
 */
/**-JS-**/
.js('resources/assets/js/master/main/master.js', 'public/js/master')

/**-SASS-**/
.sass('resources/assets/sass/master/master.scss', 'public/css/master')

/*
|--------------------------------------------------------------------------
| Plugins
|
|--------------------------------------------------------------------------
| Password Plugin
|--------------------------------------------------------------------------
*/
/**-JS-**/
.js('resources/assets/js/plugins/password-plugin.js', 'public/js/plugins/password-plugin')

/*
|--------------------------------------------------------------------------
| Console dependencies
|--------------------------------------------------------------------------
*/
/**-JS-**/
.js('resources/assets/js/console/console.js', 'public/js/console')

/*
 |--------------------------------------------------------------------------
 | Login dependencies
 |--------------------------------------------------------------------------
 */
/**-JS-**/
.js('resources/assets/js/login/login.js', 'public/js/login')

/**-SASS-**/
.sass('resources/assets/sass/login/login.scss', 'public/css/login')

/*
|--------------------------------------------------------------------------
| Leads dependencies
|--------------------------------------------------------------------------
*/
/**-JS-**/
.js('resources/assets/js/leads/dashboard.js', 'public/js/leads')
.js('resources/assets/js/leads/leads.js', 'public/js/leads')
.js('resources/assets/js/leads/leads-forms.js', 'public/js/leads')
.js('resources/assets/js/leads/manual-import-leads.js', 'public/js/leads')
.js('resources/assets/js/leads/manual-import-leads-dashboard.js', 'public/js/leads')
.js('resources/assets/js/leads/opportunities.js', 'public/js/leads')
.js('resources/assets/js/leads/manual-import-edit-leads.js', 'public/js/leads')
.js('resources/assets/js/leads/create.js', 'public/js/leads')

/*
|--------------------------------------------------------------------------
| Campaign dependencies
|--------------------------------------------------------------------------
*/
/**-JS-**/
.js('resources/assets/js/campaigns/dashboard.js', 'public/js/campaigns')
.js('resources/assets/js/campaigns/create-parent.js', 'public/js/campaigns')
.js('resources/assets/js/campaigns/create-child.js', 'public/js/campaigns')
.js('resources/assets/js/campaigns/associate-child.js', 'public/js/campaigns')

/*
|--------------------------------------------------------------------------
| Budget dependencies
|--------------------------------------------------------------------------
*/
/**-JS-**/
.js('resources/assets/js/budget/insert-budget.js', 'public/js/budget')
.js('resources/assets/js/budget/edit-budget.js', 'public/js/budget')
.js('resources/assets/js/budget/dashboard.js', 'public/js/budget')

/*
|--------------------------------------------------------------------------
| Fairs
|--------------------------------------------------------------------------
*/
/**-JS-**/
.js('resources/assets/js/fairs/dashboard.js', 'public/js/fairs')
.js('resources/assets/js/fairs/fairs.js', 'public/js/fairs')
.js('resources/assets/js/fairs/create.js', 'public/js/fairs')
.js('resources/assets/js/fairs/actions.js', 'public/js/fairs')

/*
 |--------------------------------------------------------------------------
 | Cross dependencies
 |--------------------------------------------------------------------------
 */
/**-JS-**/
.js('resources/assets/js/cross/dashboard.js', 'public/js/cross')
.js('resources/assets/js/cross/cross.js', 'public/js/cross')

/*
 |--------------------------------------------------------------------------
 | Workflow dependencies
 |--------------------------------------------------------------------------
 */
/**-JS-**/
.js('resources/assets/js/workflow/dashboard.js', 'public/js/workflow')

/*
 |--------------------------------------------------------------------------
 | Admin area dependencies
 |--------------------------------------------------------------------------
 | Users
 |--------------------------------------------------------------------------
 */
 .js('resources/assets/js/users/logs.js', 'public/js/users')

 /*
  |--------------------------------------------------------------------------
  | Closed list area
  |--------------------------------------------------------------------------
  */

.js('resources/assets/js/closed-list/insert/cta.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/cta-color.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/blog.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/blog-category.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/advertising.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/brands.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/brands-access.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/catalogue.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/direct.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/ebook.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/ebook-category.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/email.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/form.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/form-page.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/form-page-position.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/infographic.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/lead-token.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/level.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/network-lead-state.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/network-category.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/phone.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/plattform.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/press.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/showroom.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/social-network.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/social-network-category.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/source.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/source-category.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/website.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/tradeshow.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/tradeshow-edition.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/tradeshow-time.js', 'public/js/closed-list/insert')
.js('resources/assets/js/closed-list/insert/tradeshow-associate.js', 'public/js/closed-list/insert')


/*
 |--------------------------------------------------------------------------
 | Bug Report dependencies
 |--------------------------------------------------------------------------
 */
/**-JS-**/
.js('resources/assets/js/bug-report/dashboard.js', 'public/js/bug-report')
.js('resources/assets/js/bug-report/client-list.js', 'public/js/bug-report')

/*
 |--------------------------------------------------------------------------
 | Dynamic Banners
 |--------------------------------------------------------------------------
 */
/**-JS-**/
.js('resources/assets/js/dynamic-banners/actions.js', 'public/js/dynamic-banners');
//.js('resources/assets/js/dynamic-banners/create.js', 'public/js/dynamic-banners');