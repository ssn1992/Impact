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
var _requestForms = ["create-fair"];

/**
 * Form Component instance
 */
const formComponent = require('../components/forms/requests/fairs/forms')

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
        tourName: 'tour-tradeshow-create',

        data: [
            {
                element:   "forms",
                title:     "Forms",
                content:   "Select the tradeshow, fill and confirm all the data for Impact connect with SalesForce and add your new contact",
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
        console.log("Fairs Create Area started..");

        // Form component init
        formComponent.start(_requestForms);

        // If Tour not completed start component
        if (localStorage.getItem(_requestTour.tourName + "- tour_ended") != 1) {
            // Tour component init
            tourComponent.start(_requestTour);
        }
    }
};

self.start();