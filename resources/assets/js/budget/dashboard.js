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
var _requestTables = ["budget-table"];

/**
 * Request Graphs
 * @type {string}
 * @private
 */
var _requestGraphs = ["budget-graph"];

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
        tourName: 'budget-week-dashboard',

        data: [

            {
                element:   "date-picker-from-to",
                title:     "Filter area",
                content:   "Start to selected the year to check the brands budget",
                placement: "bottom",
            },
            {
                element:   "graphs",
                title:     "Graphs",
                content:   "Filter in the chart the brands that you want to show up and compare the costs per brand",
                placement: "top",
            },
            {
                element: "tables",
                title: "Table",
                content: "Search by database keywords, filter the columns and export your list. Also can reload the table definitions",
                placement: "top",
            }
        ]
    }
);

/**
 * Tour Component instance
 */
const tourComponent = require('../components/tour/tour');

/**
 * Search component instance
 */
const searchComponent = require('../components/search-component/requests/budget/search-component');

/**
 * Tables Component instance
 */
const tablesComponent = require('../components/tables/requests/budget/tables');

/**
 * Graphs Component instance
 */
const graphsComponent = require('../components/graphs/request/budget/graphs');

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
        console.log("Budget Area Dashboard started..");

        // Search component init
        searchComponent.start();

        // Tables component init
        tablesComponent.start(_requestTables);

        // Graphs component init
        graphsComponent.start(_requestGraphs);

        // If Tour not completed start component
        if (localStorage.getItem(_requestTour.tourName + "- tour_ended") != 1) {
            // Tour component init
            tourComponent.start(_requestTour);
        }
    }
};

self.start();