// *****************************
// ***** Private Variables *****
// *****************************
/**
 * Save this instance
 * @type @this;
 * @private
 */
var self = this;

/**
 * If Module has been initiated
 * @type Boolean
 * @private
 */
var _isInit = false; // to avoid 'rebinds'

/**
 * Request Tables
 * @type {string}
 * @private
 */
var _requestForms = ["insert-social-network-category"];

/**
 * Request Tables
 * @type {string}
 * @private
 */
var _requestTables = ["table-social-network-category"];

/**
 * Tables Component instance
 */
const tablesComponent = require('../../components/tables/requests/closed-tables/tables');

/**
 * Form Component instance
 */
const insertClosedListComponent = require('../../components/forms/requests/closed-list/social-network-category/insert/forms');

// ****************************
// ***** Public functions *****
// ****************************
/**
 * start
 *
 * Starts the module
 * Inits private variables and executes specific logic needed for the module
 * to start.
 *
 * @public
 */
this.start = function() {
    if(!_isInit) {
        console.log("Closed List Area Social Network Category Insert Area started..");

        // Form component init
        insertClosedListComponent.start(_requestForms);

        // Tables component init
        tablesComponent.start(_requestTables);
    }
};

self.start();