/**
 * ProjectUtils
 *
 * Store all Project utilities in an object
 *
 * @return Object
 */
projectUtils = {
    /**
     * _numbersWithSpaces
     *
     * Convert number and return a string with spaces
     *
     * @param number
     * @return number
     */
    numbersWithSpaces : function(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
}
