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
var _requestTables = ["cross-table-dashboard"];

/**
 * Tables Component instance
 */
const tablesComponent = require('../components/tables/requests/leads/tables');

/**
 * Request Graph pie
 * @type {string}
 * @private
 */
var _requestGraphPie = ["cross-found-user-graph", "cross-notFound-graph"];

/**
 * Request Graphs
 * @type {string}
 * @private
 */
var _requestGraphs = ["cross-found-general-graph", "cross-found-users-graph"];

/**
 * Search component instance
 */
const searchComponent = require('../components/search-component/requests/cross/search-component');

/**
 * Graphs Component instance
 */
const graphsComponent = require('../components/graphs/request/cross/graphs');

/**
 * Graph Pie Component instance
 */
const graphsComponentDoughnut = require('../components/graphs/request/cross/graphs-doughnut');

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
var _requestTourAdmin = (
    {
        tourName: 'tour-cross-dashboard',

        data: [

            {
                element:   "date-picker-from-to",
                title:     "Filter area",
                content:   "In this area choose the date period to compare your analysis, filter by brand name and select unique leads",
                placement: "bottom",
            },
            {
                element:   "cross-dashboard",
                title:     "Graph",
                content:   "The first chart will show you the contacts crossed and founded by yourself",
                placement: "top",
            },
            {
                element:   "cross-dashboard",
                title:     "Graph",
                content:   "The second chart will show you the contacts that you crossed but you didn't find them yet",
                placement: "top",
            },
            {
                element:   "cross-dashboard",
                title:     "Graph",
                content:   "The third chart compare the crossed contacts between the brands of the group",
                placement: "top",
            },
            {
                element:   "cross-dashboard",
                title:     "Graph",
                content:   "The fourth chart compare the crossed contacts per each social network",
                placement: "top",
            },
            {
                element:   "tables",
                title:     "Tables",
                content:   "Check and export the list of all the crossed contacts between the brands of the group \n",
                placement: "top",
            }
        ]
    }
);

/**
 * Request Tour Dashboard
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
        tourName: 'tour-cross-dashboard',

        data: [

            {
                element:   "date-picker-from-to",
                title:     "Filter area",
                content:   "In this area choose the date period to compare your analysis, filter by brand name and select unique leads",
                placement: "bottom",
            },
            {
                element:   "cross-dashboard",
                title:     "Graph",
                content:   "The first chart will show you the contacts crossed and founded by yourself",
                placement: "top",
            },
            {
                element:   "cross-dashboard",
                title:     "Graph",
                content:   "The second chart will show you the contacts that you crossed but you didn't find them yet",
                placement: "top",
            },
            {
                element:   "cross-dashboard",
                title:     "Graph",
                content:   "The third chart compare the crossed contacts between the brands of the group",
                placement: "top",
            },
            {
                element:   "cross-dashboard",
                title:     "Graph",
                content:   "The fourth chart compare the crossed contacts per each social network",
                placement: "top",
            },
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
        console.log("Cross Area Dashboard Dashboard started..");

        // Search component init
        searchComponent.start();

        // Start Cross table component if the role is diferent then Marketeer
        if (window.Grants.roles != 'Marketeer') {
            // Tables component init
            tablesComponent.start(_requestTables);
        }

        // Graphs pie component init
        graphsComponentDoughnut.start(_requestGraphPie);

        // Graphs component init
        graphsComponent.start(_requestGraphs);

        // If Tour not completed start component
        if (localStorage.getItem(_requestTourAdmin.tourName + "- tour_ended") != 1 &&
            localStorage.getItem(_requestTour.tourName + "- tour_ended") != 1) {

            // Start Cross table component if the role is diferent then Marketeer
            if (window.Grants.roles != 'Marketeer') {
                // Tour component init
                tourComponent.start(_requestTourAdmin);

            } else {
                tourComponent.start(_requestTour);
            }
        }
    }
};

self.start();