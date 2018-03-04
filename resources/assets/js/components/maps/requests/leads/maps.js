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
 * Date picker instance
 */
import Maps from '../../Maps.vue';

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
 *
 * _mapUpdate
 * Bind Request filter
 *
 * @param instance
 * @private
 */
var _mapUpdate   = function (instance, request) {
    $('#date-search-request').on('click', function() {
        // Filter by date and brand
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
            _mapsRequest(request, true, instance, _payloadMount(dateFrom, dateTo, brand));
        }
    });
};

/**
 *
 * _mapsRequest
 *
 * Maps Component Component POST
 *
 * @param isUpdate
 * @param instance
 * @param payload
 * @private
 */
var _mapsRequest = function (_request, isUpdate = false, instance = null, payload = null) {
    // If as filter update request
    if (window.searchInstance.filter.value)
        _request = _request + '-' + window.searchInstance.filter.request;

    // Send a POST request
    axios({
        method: 'post',
        url: 'maps/' + _request,
        data: payload
    })

    .then(function (response) {
        // Update Instance Data
        instance.updateData(isUpdate, response.data.maps);
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
 * Create a Table component
 *
 * @param response
 * @return {{columns, data, tableName: (*|null)}}
 * @private
 */
var _map = function() {
    // Create all requested instances
    for (var i = 0, len = _request.length; i < len; i++) {
        new Vue({
            el: '#' + _request[i],
            mixins: [Maps],

            beforeCreate() {
                // After mounted request data
                _mapsRequest(_request[i], false, this, _payloadMount());

                // After mounted bind filter
                _mapUpdate(this, _request[i]);
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
        console.log("Map Component started..");

         // Init search component
        _map();
    }
};