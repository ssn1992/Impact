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
import Forms from '../../Forms.vue';

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
 * Create a Table component
 *
 * @param response
 * @return {{columns, data, tableName: (*|null)}}
 * @private
 */
var _form = function() {
    // Create all requested instances
    for (var i = 0, len = _request.length; i < len; i++) {
        new Vue({
            el: '#' + _request[i],
            mixins: [Forms],
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
        console.log("Form Component started..");

         // Form component
        _form();
    }
};