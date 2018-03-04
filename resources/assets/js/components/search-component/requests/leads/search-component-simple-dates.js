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
 * Date picker instance
 */
import SearchComponent from '../../SearchComponent.vue';

/**
 * Bind invalid date Modal
 *
 * @private
 */
var _invalidDateModal = function () {
    $('#date-search-request').on('click', function() {
        // Get Date
        var dateFrom  = window.searchInstance.startTime.time
        var dateTo    = window.searchInstance.endtime.time
        var todayDate = window.moment(todayDate);

        // If Date Range is valid do a request otherwise throw a exception
        if (!(window.moment(todayDate) >= window.moment(dateFrom) &&
                window.moment(todayDate) >= window.moment(dateTo) &&
                window.moment(dateTo) >= window.moment(dateFrom))) {

            // Show error modal
            $('#date-range-modal').modal('show');
        }
    });
};

// *****************************
// ***** Private functions *****
// *****************************
/**
 *  Search Component
 *
 *  Create a date picker range, brands combo box and filter
 *
 */
var _searchComponent = function() {
    window.searchInstance = new Vue({
        el: '#search-component',
        mixins: [SearchComponent],
        template: '<SearchComponent> </SearchComponent>',

        data () {
            return {
                searchOptions: {
                    selectSimple : true,
                    toggleButton : false,
                    brands       : false
                },
            }
        },
    });
    _invalidDateModal();
};

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
self.start = function() {
    if(!_isInit) {
        console.log("Search Component started..");

         // Init search component
        _searchComponent();
    }
};