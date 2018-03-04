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
var _requestTables = ["users-logs-table"];

/**
 * Search component instance
 */
const searchComponent = require('../components/search-component/requests/logs/search-component');

/**
 * Tables Component instance
 */
const tablesComponent = require('../components/tables/requests/leads/leads/tables');

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
        console.log("Leads Area List started..");

        // Search component init
        searchComponent.start();

        // Tables component init
        tablesComponent.start(_requestTables);
    }
};

self.start();