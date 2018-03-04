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
 * Request
 * @type String
 * @private
 */
var _request;

/**
 * HighlightsInstance
 */
import Highlights from './highlights.vue';

// *****************************
// ***** Private functions *****
// *****************************
/**
 * Payload Default
 *
 * @param dateFrom
 * @type object
 *
 * @param dateTo
 * @type object
 *
 * @param brand
 * @type string
 *
 * @return Object
 */
var _payloadMount = function (dateFrom = window.moment(), dateTo = window.moment(), brand = null) {
    var payload          = {};
        payload.dateFrom = dateFrom.format("YYYY-MM-DD 00:00:00");
        payload.dateTo   = dateTo.format("YYYY-MM-DD 23:59:59");
        payload.brand    = brand;

    return payload;
};

/**
 * Highlights Update
 *
 * @type object
 *
 */
var _highlightsUpdate   = function (instance, request) {
    // Filter by date and brand
    $('#date-search-request').on('click', function() {
        var brand     = window.searchInstance.syncedVal.value;
        var dateFrom  = window.moment(window.searchInstance.startTime.time)
        var dateTo    = window.moment(window.searchInstance.endtime.time)
        var todayDate = window.moment(todayDate);

        // If Date Range is valid do a request otherwise throw a exception
        if (window.moment(todayDate) >= window.moment(dateFrom) &&
            window.moment(todayDate) >= window.moment(dateTo) &&
            window.moment(dateTo) >= window.moment(dateFrom)) {

            // Show Loader
            instance.isLoading = true;

            // Request Data
            _highlightsRequest(request, true, instance, _payloadMount(dateFrom, dateTo, brand));
        }
    });
};

/**
 *
 * _highlightsRequest
 *
 *  highlights Component POST
 *
 * @param instance
 * @param payload
 * @param request
 * @param isUpdate
 * @private
 */
var _highlightsRequest = function (_request, isUpdate = false, instance = null, payload, filter = null) {
    // If as filter update request
    if (filter)
        _request = filter;

    // Send a POST request
    axios({
        method: 'post',
        url: 'highlights/' + _request,
        data: payload
    })

    .then(function (response) {
        // Update Instance Data
        instance.updateData(isUpdate, response.data.highlights);
    })
    .catch(function (error) {
        if (error.response.status === 419) {
            error.response.statusText = "Your session has expired, will be redirected to the login";

            setTimeout(function() {
                window.location.href = '/';
            }, 3000);
        }

        instance.updateDataWithError(isUpdate, _request, error.response);
    });
};

/**
 *
 * Highlights
 *
 * Create a highlight
 *
 * @param response
 * @param request
 * @return {{label, value: (*|number), cost: (*|null), percentage: (*|null), progression: (*|null)}}
 * @private
 */
var _highlights = function () {
    // Create all requested instances
    for (var i = 0, len = _request.length; i < len; i++) {

        new Vue({
            el: '#' + _request[i],
            mixins: [Highlights],

            beforeCreate() {
                // After mounted request data
                _highlightsRequest(_request[i], false, this, _payloadMount());

                // After mounted bind filter
                _highlightsUpdate(this, _request[i]);
            },
        });
    }
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
 * @required
 * @param request
 * @type array
 *
 * @public
 */

self.start = function(request) {
    _request = request;
    if(!_isInit) {
        // Init Highlights Component
        _highlights();
    }
};