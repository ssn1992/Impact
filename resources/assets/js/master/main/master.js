
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// Bootstrap Lib
require('./bootstrap');

// Base Template Lib
require('./base-template');

// Moment lib
window.moment = require('moment');

// Utils Lib
require('./utils');

// Plugins js Libs
require('metismenu');
require('jquery-slimscroll');
require('../plugins/pace/pace');

// Maps plugin
require('jvectormap');
require('../plugins/jvectormap/jquery-jvectormap-world-mill');

// Vue Js Lib
window.Vue = require('vue');

// ToggleButtons
import ToggleButton from 'vue-js-toggle-button';
Vue.use(ToggleButton)

/**
 * Bug report component
 */
const bugReportComponent = require('../../components/pop-up/requests/bug-report/bug');

// Bug report component init
bugReportComponent.start();


