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
var _requestTables = ["cross-table"];

/**
 * Search component instance
 */
const searchComponent = require('../components/search-component/requests/leads/search-component');

/**
 * Tables Component instance
 */
const tablesComponent = require('../components/tables/requests/cross/tables');

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
        tourName: 'tour-cross-networks',

        data: [

            {
                element:   "date-picker-from-to",
                title:     "Filter area",
                content:   "In this area choose the date period to compare your analysis, filter by brand name and select unique leads",
                placement: "bottom",
            },
            {
                element:   "tables",
                title:     "Cross Status",
                content:   "Grey color means that didn't exist any action / search about this contact",
                placement: "top",
            },
            {
                element:   "tables",
                title:     "Cross Status",
                content:   "Grey color can also means that you looked for the contact but you didn't found any social link",
                placement: "top",
            },
            {
                element:   "tables",
                title:     "Cross Status",
                content:   "Impact color means that the you searched for this contact and you are waiting for social media approval",
                placement: "top",
            },
            {
                element:   "tables",
                title:     "Cross Status",
                content:   "Social icons get their official color when the contact accepted all the invitations",
                placement: "top",
            },
            {
                element:   "tables",
                title:     "Cross Status",
                content:   "Click at each social icon and it will open a new tab on your browser",
                placement: "top",
            },
            {
                element:   "tables",
                title:     "Cross Status",
                content:   "Check all the social media crossed and select them to save the all the informations at once",
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
        console.log("Cross Network Area List started..");

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