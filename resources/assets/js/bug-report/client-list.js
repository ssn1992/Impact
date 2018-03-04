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
var _requestTables = ["bug-report-client-table"];

/**
 * Request Tour
 *
 * @type {[object]}
 *
 * tourName  : tourName
 *
 * [
 * element   : div id
 * title     : title
 * content   : content
 * placement : placement
 * ]
 *
 * @private
 */

var _requestTour = (
        {
            tourName: 'tour-bug-report',

            data: [
                {
                    element:   "date-picker-from-to",
                    title:     "Filter area",
                    content:   "In this area choose the date period to compare your analysis, filter by brand name and select unique leads",
                    placement: "bottom",
                },
                {
                    element:   "tables",
                    title:     "Tables",
                    content:   "Search by database keywords, filter the columns and export your list. Also can reload the table definitions",
                    placement: "top",
                }
            ]
        }
    );

/**
 * Tables Component instance
 */
const tablesComponent = require('../components/tables/requests/bug-report/client/tables');

/**
 * Tour Component instance
 */
const tourComponent = require('../components/tour/tour');

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
        console.log("Bug Report List started..");

        // Tables component init
        tablesComponent.start(_requestTables);

        // If Tour not completed start component
        if (localStorage.getItem(_requestTour.tourName + "- tour_ended") != 1) {
            // Tour component init
            tourComponent.start(_requestTour);
        }
    }
};

self.start();