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

// *****************************
// ***** Private functions *****
// *****************************
/**
 * Password and password confirm inputs
 *
 *  Bind plugin to inputs
 *
 */
var _inputsBindPassword = function() {
    var options1 = {};

    options1.ui = {
        container: "#pwd-container",
        showVerdictsInsideProgressBar: true,
        viewports: {
            progress: ".pwstrength_viewport_progress"
        }
    };

    options1.common = {
        debug: false
    };
    $('.password-control').pwstrength(options1);

    var options2 = {};

    options2.ui = {
        container: "#pwd-container-confirm",
        showVerdictsInsideProgressBar: true,
        viewports: {
            progress: ".pwstrength_viewport_progress_confirm"
        }
    };
    options2.common = {
        debug: false
    };

    $('.password-control-confirm').pwstrength(options2);
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
this.start = function() {
    if(!_isInit) {
        _inputsBindPassword();
    }
};
