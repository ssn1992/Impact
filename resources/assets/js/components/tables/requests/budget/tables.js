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
 * Tables instance
 */
import Tables from './Tables.vue';

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
var _payloadMount = function () {
    let date         = new Date;
    let year         = date.getFullYear()
                           .toString();

    let payload      = {};
        payload.year = year;

    return payload;
};

/**
 *
 * _tableUpdate
 * Bind Request filter
 *
 * @param instance
 * @private
 */
var _tableUpdate   = function (instance, request) {
    $('#date-search-request').on('click', function() {
        // Filter by date and brand
        let payload      = {};
            payload.year = window.searchInstance.syncedVal;

        // Show Loader
        instance.isLoading = true;

        // Request Data
        _tablesRequest(request, true, instance, payload);
    });
};

/**
 *
 * _tablesRequest
 *
 * Tables Component Component POST
 *
 * @param isUpdate
 * @param instance
 * @param payload
 * @private
 */
var _tablesRequest = function (_request, isUpdate = false, instance = null, payload = null) {

    // Send a POST request
    axios({
        method: 'post',
        url: 'tables/' + _request,
        data: payload
    })

    .then(function (response) {
        // Update Instance Data
        instance.updateData(isUpdate, response.data.table);
    })
    .catch(function (error) {
        if (error.response.status === 419) {
            error.response.statusText = "Your session has expired, will be redirected to the login";

            setTimeout(function() {
                window.location.href = '/';
            }, 3000);
        }

        // Update Instance Data with error
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
var _table = function() {
    // Create all requested instances
    for (var i = 0, len = _request.length; i < len; i++) {
        new Vue({
            el: '#' + _request[i],
            mixins: [Tables],

            beforeCreate() {
                // After mounted request data
                _tablesRequest(_request[i], false, this, _payloadMount());

                // After mounted bind filter
                _tableUpdate(this, _request[i]);
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
        console.log("Table Component started..");

         // Init search component
        _table();
    }
};