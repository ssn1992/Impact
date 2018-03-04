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
var _requestTables = ["bug-report-table"];

/**
 * Tables Component instance
 */
const tablesComponent = require('../components/tables/requests/bug-report/admin/tables');

/**
 * Tour Component instance
 */
//const tourComponent = require('../components/tour/tour');

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
        console.log("Bug Report Area started..");

        // Tables component init
        tablesComponent.start(_requestTables);
    }
};

self.start();