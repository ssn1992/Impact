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
 * Request Highlights
 * @type array
 * @private
 */
var _requestHighlights = ["leads-highlights"];

/**
 * Request Tables
 * @type {string}
 * @private
 */
var _requestTables = ["totalLeads-table"];

/**
 * Request Graphs
 * @type {string}
 * @private
 */
var _requestGraphs = ["totalLeads-graph"];

/**
 * Request Maps
 * @type {string}
 * @private
 */
var _requestMaps = ["totalLeads-map"];

/**
 * Request Tour Admin
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
        tourName: 'tour-leads-dashboard',

        data: [
            {
                element:   "date-picker-from-to",
                title:     "Filter area",
                content:   "In this area choose the date period to compare your analysis, filter by brand name and select unique leads",
                placement: "bottom",
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
            }
        ]
    }
);


/**
 * Search component instance
 */
const searchComponent = require('../components/search-component/requests/leads/search-component');

/**
 * Tables component instance
 */
const highlightsComponent = require('../components/highlights/highlights');

/**
 * Tables Component instance
 */
const tablesComponent = require('../components/tables/requests/leads/leads/leads-actions/tables');

/**
 * Graphs Component instance
 */
const graphsComponent = require('../components/graphs/request/leads/graphs');

/**
 * Maps Component instance
 */
const mapComponent = require('../components/maps/requests/leads/maps');

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
        console.log("Leads Area Dashboard started..");

        // Search component init
        searchComponent.start();

        if (window.Grants.roles === 'Admin' ||
            window.Grants.roles === 'Accounter' ) {

            // Highlights component init
            highlightsComponent.start(_requestHighlights);
        }

        // Tables component init
        tablesComponent.start(_requestTables);

        // Graphs component init
        graphsComponent.start(_requestGraphs);

        if (window.Grants.roles === 'Admin' ||
            window.Grants.roles === 'Accounter') {

            // Graphs component init
            mapComponent.start(_requestMaps);
        }

        // If Tour not completed start component
        if (localStorage.getItem(_requestTourAdmin.tourName + "- tour_ended") != 1 &&
            localStorage.getItem(_requestTour.tourName + "- tour_ended") != 1) {

            if (window.Grants.roles === 'Admin') {
                // Tour Admin component init
                tourComponent.start(_requestTourAdmin);

            } else {
                // Tour component init
                tourComponent.start(_requestTour);
            }
        }
    }
};

self.start();