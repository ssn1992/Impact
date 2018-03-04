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
 * Password Lib
 */
require('zxcvbn');
require ('../master/plugins/pwstrengthr/pwstrength-bootstrap')


/**
 * Password and password confirm inputs
 */
const inputPasswordConfirm = require('./input-password-password-confirm/input-password-password-confirm');

let generatePassword = function () {
    // Create a token generator with the default settings:
    var randtoken = require('rand-token');

    // Generate a 16 character alpha-numeric token:
    var token = randtoken.generate(32);

    $('input[name=password]').click(function() {
        $('input[name=password]').val(token);
        $('input[name=password_confirmation]').val(token);
    });

}

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
        console.log("Password plugin started..");

        // Search component init
        inputPasswordConfirm.start();

        // Bind Password Generator
        generatePassword();
    }
};

self.start();