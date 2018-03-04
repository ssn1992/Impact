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
 * Steps
 * @type Object
 * @private
 */
var _steps = {};

// *****************************
// ***** Private functions *****
// *****************************
/**
 *  Tour Component
 *
 *  Create a Tour component
 *
 */
var _tourComponent = function() {
    for (var key in _request.data) {
        _steps[key] = {
            element: '#' + _request.data[key].element,
            title: _request.data[key].title,
            content: _request.data[key].content,
            placement: _request.data[key].placement,
            backdrop: true,
            backdropContainer: '#wrapper',
            onShown: function (tour){
                $('body').addClass('tour-open')
            },
            onHidden: function (tour){
                $('body').removeClass('tour-close')
            }
        }
    }

    // Instance the tour
    var tour = new Tour({
        name: _request.tourName,
        steps: _steps,
        onEnd: function (tour) {
            localStorage.setItem(_request.tourName + '- tour_ended', 1);
        },
    });

    // Initialize the tour
    tour.init();
    tour.restart();
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
        console.log("Tour Component started..");

         // Init tour component
        _tourComponent();
    }
};