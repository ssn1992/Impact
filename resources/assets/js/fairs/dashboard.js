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
 * Request Graphs
 * @type {string}
 * @private
 */
var _requestGraphs = ["fairs-graph"];

/**
 * Request Graphs
 * @type {string}
 * @private
 */
var _requestGraphClient = ["fairs-graph-client-type"];


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
        tourName: 'tour-tradeshow-dashboard',

        data: [
            {
                element:   "date-picker-from-to",
                title:     "Filter area",
                content:   "Start to select the tradeshow, then the city and the specific date that happened",
                placement: "bottom",
            },
            {
                element:   "graphs",
                title:     "Graphs",
                content:   "In the first chart you can check the total contacts from that tradeshow",
                placement: "top",
            },
            {
                element:   "graphs",
                title:     "Graphs",
                content:   "In the second chart you can check the total contacts per brand",
                placement: "top",
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
const tablesComponent = require('../components/tables/requests/fairs/tables');

/**
 * Search component instance
 */
const searchComponent = require('../components/search-component/requests/fairs/search-component');

/**
 * Graphs Component instance
 */
const graphsComponent = require('../components/graphs/request/fairs/graphs');

/**
 * Graphs Client Type Component instance
 */
const graphsClientComponent = require('../components/graphs/request/cross/graphs');

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
        console.log("Fairs Area started..");

        // Search component init
        searchComponent.start();

        // Tables component init
        tablesComponent.start(_requestTables);

        // Graph component init
        graphsComponent.start(_requestGraphs);

        // Graphs Client component init
        graphsClientComponent.start(_requestGraphClient);

        // If Tour not completed start component
        if (localStorage.getItem(_requestTour.tourName + "- tour_ended") != 1) {
            // Tour component init
            tourComponent.start(_requestTour);
        }
    }
};

self.start();