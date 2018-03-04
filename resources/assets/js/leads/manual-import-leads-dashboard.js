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
var _requestTables = ["manual-import-leads-table"];

/**
 * Search component instance
 */
const searchComponent = require('../components/search-component/requests/leads/search-component-simple');

/**
 * Tables Component instance
 */
const tablesComponent = require('../components/tables/requests/leads/leads/leads-actions/tables');

/**
 * Graphs Component instance
 */
const graphsComponent = require('../components/graphs/request/cross/graphs');

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
        tourName: 'tour-leads-manual-table-dashboard',

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
        console.log("Leads Manuel Import Area List started..");

        // Search component init
        searchComponent.start();

        // Tables component init
        tablesComponent.start(_requestTables);

        if (window.Grants.roles === 'Admin' ||
            window.Grants.roles === 'Accounter') {

            // Graphs component init
            graphsComponent.start(['manual-import-dashboard-brand']);
        } else {
            // Graphs component init
            graphsComponent.start(['manual-import-dashboard-user']);
        }

        // If Tour not completed start component
        if (localStorage.getItem(_requestTour.tourName + "- tour_ended") != 1) {

            // Tour component init
            //tourComponent.start(_requestTour);
        }
    }
};

self.start();