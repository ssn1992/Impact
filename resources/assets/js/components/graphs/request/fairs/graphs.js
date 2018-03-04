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
 * Graphs picker instance
 */
import Graphs from './GraphsFairs.vue';

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
 * @param fairs
 * @type string
 *
 * @return Object
 */
var _payloadMount = function (dateFrom = window.moment(), dateTo = window.moment(), fairs = null, fairsLocation = null, fairsName = null) {
    var payload               = {};
        payload.dateFrom      = dateFrom.format("YYYY-MM-DD 00:00:00");
        payload.dateTo        = dateTo.format("YYYY-MM-DD 23:59:59");

        payload.fairs         = fairs;
        payload.fairsLocation = fairsLocation;
        payload.fairsName     = fairsName;

    return payload;
};

/**
 * Payload Default
 *
 * @param fairs
 * @type object
 *
 * @param fairsLocation
 * @type object
 *
 * @param fairsName
 * @type string
 *
 * @return Object
 */
var _payloadFairs = function (fairs = null, fairsLocation = null, fairsName = null) {
    var payload                  = {};
        payload.fairs            = null;
        payload.fairsLocation    = null;
        payload.payloadfairsName = null;

    if (window.searchInstance.selectCascadeLevel1syncedVal != null) {
        payload.fairs         = window.searchInstance.selectCascadeLevel1syncedVal.value;
    }

    if (window.searchInstance.selectCascadeLevel2syncedVal != null) {
        payload.fairsLocation = window.searchInstance.selectCascadeLevel2syncedVal.value;
    } else {

    }
    if (window.searchInstance.selectCascadeLevel3syncedVal != null) {
        payload.fairsName     = window.searchInstance.selectCascadeLevel3syncedVal.value;
    }

    return payload;
};

/**
 *
 * _graphUpdate
 * Bind Request filter
 *
 * @param instance
 * @private
 */
var _graphUpdate   = function (instance, request) {
    $('#date-search-request').on('click', function() {
        // Filter by date and fair
        var fairs         = null;
        var fairsLocation = null;
        var fairsName     = null;

        var payloadFairs = _payloadFairs();

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
            _graphRequest(request, true, instance, _payloadMount(dateFrom, dateTo, payloadFairs.fairs, payloadFairs.fairsLocation, payloadFairs.fairsName));
        }
    });
};

/**
 *
 * _graphRequest
 *
 * Tables Component Component POST
 *
 * @param isUpdate
 * @param instance
 * @param payload
 * @private
 */
var _graphRequest = function (_request, isUpdate = false, instance = null, payload = null) {
    // If as filter update request
    if (window.searchInstance.filter.value)
        _request = _request + '-' + window.searchInstance.filter.request;

    // Send a POST request
    axios({
        method: 'post',
        url: 'graphs/' + _request,
        data: payload
    })

    .then(function (response) {
        // Update Instance Data
        instance.updateData(isUpdate, response.data.graph);
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

// *****************************
// ***** Private functions *****
// *****************************
/**
 *
 * Create a Graph component
 *
 * @param response
 * @return {{columns, data, tableName: (*|null)}}
 * @private
 */
var _graph = function(response) {
    // Create all requested instances
    for (var i = 0, len = _request.length; i < len; i++) {

        new Vue({
            el: '#' + _request[i],
            mixins: [Graphs],

            beforeCreate() {
                // After mounted request data
                _graphRequest(_request[i], false, this, _payloadMount());

                // After mounted bind filter
                _graphUpdate(this, _request[i]);
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
 * @public
 */
self.start = function(request) {
    _request = request;
    if(!_isInit) {
        console.log("Graph Component started..");

        // Init GraphComponent component
        _graph();
    }
};