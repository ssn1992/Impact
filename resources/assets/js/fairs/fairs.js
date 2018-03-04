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
var _requestTables = ["fairs-table", "fairs-client-common-table"];

/**
 * Search component instance
 */
const searchComponent = require('../components/search-component/requests/fairs/search-component');

/**
 * Tables Component instance
 */
const tablesComponent = require('../components/tables/requests/fairs/contact/tables');

/**
 * Tour Component instance
 */
const tourComponent = require('../components/tour/tour');

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
        tourName: 'tour-tradeshow-contacts',

        data: [
            {
                element:   "date-picker-from-to",
                title:     "Filter area",
                content:   "Start to select the tradeshow, then the city and the specific date that happened",
                placement: "bottom",
            },
            {
                element:   "tables",
                title:     "Tables",
                content:   "Check and Personalize your contacts list, organize the columns and Impact will save your configurations and export your list",
                placement: "top",
            }
        ]
    }
);

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
        console.log("Fairs Area started..");

        // Search component init
        searchComponent.start();

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