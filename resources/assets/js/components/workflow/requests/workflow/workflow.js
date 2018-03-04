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
import Workflow from './Workflow.vue';

/**
 *
 * _workflowsRequest
 *
 * Maps Component Component POST
 *
 * @param isUpdate
 * @param instance
 * @param payload
 * @private
 */
var _workflowsRequest = function (_request, isUpdate = false, instance = null, payload = null) {
    // If as filter update request
    if (window.searchInstance.filter.value)
        _request = _request + '-' + window.searchInstance.filter.request;

    // Send a POST request
    axios({
        method: 'post',
        url: 'workflow/' + _request,
        data: payload
    })

    .then(function (response) {
        // Update Instance Data
        instance.updateData(isUpdate, response.data.workflow);
    })
    .catch(function (error) {
        if (error.response.status === 419) {
            error.response.statusText = "Your session has expired, will be redirected to the login";

            setTimeout(function() {
                window.location.href = '/';
            }, 3000);
        }
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
var _workflow = function() {
    // Create all requested instances
    for (var i = 0, len = _request.length; i < len; i++) {
        new Vue({
            el: '#' + _request[i],
            mixins: [Workflow],

            beforeCreate() {
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
        console.log("Workflow Component started..");

         // Init search component
        _workflow();
    }
};