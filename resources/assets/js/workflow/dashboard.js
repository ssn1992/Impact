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
var _requestWorkflow = ["workflow-dashboard"];

/**
 * Tables Component instance
 */
//const tablesComponent = require('../components/tables/requests/cross/tables');

/**
 * Request Graph pie
 * @type {string}
 * @private
 */
//var _requestGraphPie = ["cross-found-user-graph", "cross-notFound-graph"];

/**
 * Request Graphs
 * @type {string}
 * @private
 */
//var _requestGraphs = ["cross-found-general-graph", "cross-found-users-graph"];

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
            tourName: 'tour-leads',

            data: [
                {
                    element:   "date-picker-from-to",
                    title:     "Filter area",
                    content:   "In this area choose the date period to compare your analysis, filter by brand name and select unique leads",
                    placement: "bottom",
                },
                {
                    element:   "highlights",
                    title:     "Highlights",
                    content:   "Here you have the sum of your leads, their price, and the comparative growth between the periods selected",
                    placement: "top",
                },
                {
                    element:   "graphs",
                    title:     "Graphs",
                    content:   "Compare your analysis and check your top 5 leads by origin, and on the second graph you can deselect origins",
                    placement: "top",
                },
                {
                    element:   "tables",
                    title:     "Tables",
                    content:   "Search by database keywords, filter the columns and export your list. Also can reload the table definitions",
                    placement: "top",
                },
                {
                    element:   "maps",
                    title:     "Maps",
                    content:   "Check how many leads you have got on worldwide by country. Hope you enjoyed, have a nice day!",
                    placement: "top",
                }
            ]
        }
    );
 */

/**
 * Workflow component instance
 */
const workflowComponent = require('../components/workflow/requests/workflow/workflow');

/**
 * Graphs Component instance
 */
//const graphsComponent = require('../components/graphs/request/cross/graphs');

/**
 * Graph Pie Component instance
 */
//const graphsComponentDoughnut = require('../components/graphs/request/cross/graphs-doughnut');

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
        console.log("Workflow Area Dashboard started..");

        // Workflow component init
        workflowComponent.start(_requestWorkflow);
    }
};

self.start();