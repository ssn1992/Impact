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
var _requestTables = ["dynamic-banners-table"];

/**
 * Request Graphs
 * @type {string}
 * @private
 */
var _requestGraphs = ["top-banners-clicks-graph"];

/**
 * Request Graphs Doughnut
 * @type {string}
 * @private
 */
var _requestGraphsDoughnut = ["top-banners-clicks-graph-doughnut"];


/**
 * Graph Pie Component instance
 */
const graphsComponentDoughnut = require('../components/graphs/request/dynamic-banners/doughnut/graphs');

/**
 * Graphs Component instance
 */
const graphsComponent = require('../components/graphs/request/dynamic-banners/line-bar/graphs');

/**
 * Tables Component instance
 */
const tablesComponent = require('../components/tables/requests/dynamic-banners/tables');

/**
 * Tour Component instance
 */
//const tourComponent = require('../components/tour/tour');


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
var _requestTour = (
    {
        tourName: 'tour-leads-table',

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
                content:   "Personalize your leads list, organize the columns and Impact will fix your configurations and export your list",
                placement: "top",
            }
        ]
    }
);
*/

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
        console.log("Dynamic Banners Area List started..");

        // Tables component init
        tablesComponent.start(_requestTables);

        // Graphs component init
        graphsComponent.start(_requestGraphs);

        // Graphs Doughnut component init
        graphsComponentDoughnut.start(_requestGraphsDoughnut);

        /**
        // If Tour not completed start component
        if (localStorage.getItem(_requestTour.tourName + "- tour_ended") != 1) {

            // Tour component init
            tourComponent.start(_requestTour);
        }
        */
    }
};

self.start();