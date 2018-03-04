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
 * Date picker instance
 */
import SearchComponent from '../../SearchComponent.vue';

// *****************************
// ***** Private functions *****
// *****************************
/**
 * Check Valid Date
 *
 * @return Boolean
 */
var _checkValidDate = function (dateFrom = window.moment(), dateTo = window.moment(), fairs = null, fairsLocation = null, fairsName = null) {
    var flag        = false;

    var dateFrom    = window.moment(window.searchInstance.startTime.time)
    var dateTo      = window.moment(window.searchInstance.endtime.time)
    var todayDate   = window.moment(todayDate);

    // If Date Range is valid do a request otherwise throw a exception
    if (window.moment(dateTo) >= window.moment(dateFrom)) {

        flag = true
    }

    return flag;
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
var _payloadFairs = function (firstTime = false, dateFrom = window.moment(), dateTo = window.moment(), fairs = null, fairsLocation = null, fairsName = null) {
    var payload                  = {};

        //Date Range
        payload.dateFrom         = dateFrom.format("YYYY-MM-DD 00:00:00");
        payload.dateTo           = dateTo.format("YYYY-MM-DD 23:59:59");

        // Fairs
        payload.fairs            = null;
        payload.fairsLocation    = null;
        payload.payloadfairsName = null;

    if (!firstTime) {
        if (window.searchInstance.selectCascadeLevel1syncedVal != null) {
            payload.fairs = window.searchInstance.selectCascadeLevel1syncedVal.value;
        }

        if (window.searchInstance.selectCascadeLevel2syncedVal != null) {
            payload.fairsLocation = window.searchInstance.selectCascadeLevel2syncedVal.value;
        } else {

        }
        if (window.searchInstance.selectCascadeLevel3syncedVal != null) {
            payload.fairsName = window.searchInstance.selectCascadeLevel3syncedVal.value;
        }
    }

    return payload;
};

/**
 * Bind invalid date Modal
 *
 * @private
 */
var _searchUpdate = function () {
    $('#date-search-request').on('click', function() {
        // Filter by date and fair

        if (!_checkValidDate())
            // Show error modal
            $('#date-range-modal').modal('show');

    });
};

// *****************************
// ***** Private functions *****
// *****************************
/**
 *  Search Component
 *
 *  Create a date picker range, brands combo box and filter
 *
 */
var _searchComponent = function() {
    window.searchInstance = new Vue({
        el: '#search-component',
        mixins: [SearchComponent],
        template: '<SearchComponent> </SearchComponent>',

        data () {
            return {
                searchOptions: {
                    selectComplex: true,
                },
            }
        },

        methods: {
            updateComboBox: function (val) {
                if (_checkValidDate()) {
                    window.searchInstance.isLoadingLevel1 = true;
                    window.searchInstance.selectCascadeLevel2syncedVal = null;
                    window.searchInstance.selectCascadeLevel3syncedVal = null;

                    //After mounted fill brand combo box
                    // Send a POST request
                    axios({
                        method: 'post',
                        url: 'get-fairs/fairs',
                        data: _payloadFairs(false, window.moment(window.searchInstance.startTime.time), window.moment(window.searchInstance.endtime.time))
                    })

                    .then(function (response) {
                        // Update Data intance
                        window.searchInstance.updateDatalevel1(response.data.fairs);
                    })
                    .catch(function (error) {
                        if (error.response.status === 419) {
                            error.response.statusText = "Your session has expired, will be redirected to the login";

                            setTimeout(function() {
                                window.location.href = '/';
                            }, 3000);
                        }

                        // Update Data intance error
                        window.searchInstance.updateDataWithError();
                    });

                } else {
                    // Show error modal
                    $('#date-range-modal').modal('show');
                }

            }
        },

        watch: {
            selectCascadeLevel1syncedVal: function (val) {
                var payloadFairs = _payloadFairs(false);

                if (window.searchInstance.isInit == false && payloadFairs.fairs != null) {
                    window.searchInstance.selectCascadeLevel3syncedVal = null;

                    window.searchInstance.isLoadingLevel2 = true;

                    //After mounted fill brand combo box
                    axios({
                        method: 'post',
                        url: 'get-fairs/location',
                        data: _payloadFairs()
                    })
                        .then(function (response) {
                            // Update Data intance
                            window.searchInstance.updateDatalevel2(response.data.fairs);
                        })
                        .catch(function (error) {
                            if (error.response.status === 419) {
                                error.response.statusText = "Your session has expired, will be redirected to the login";

                                setTimeout(function() {
                                    window.location.href = '/';
                                }, 3000);
                            }

                            // Update Data intance error
                            window.searchInstance.updateDataWithError();
                        });

                } else {
                    window.searchInstance.isInit = false;
                    window.searchInstance.selectCascadeLevel2syncedVal = null;
                    window.searchInstance.selectCascadeLevel3syncedVal = null;
                }
            },

            selectCascadeLevel2syncedVal: function (val) {
                var payloadFairs = _payloadFairs();

                if (payloadFairs.fairsLocation != null) {

                    window.searchInstance.isLoadingLevel3 = true;

                    //After mounted fill brand combo box
                    axios({
                        method: 'post',
                        url: 'get-fairs/name',
                        data: _payloadFairs(false)
                    })

                    .then(function (response) {
                        // Update Data intance
                        window.searchInstance.updateDatalevel3(response.data.fairs);
                    })
                    .catch(function (error) {
                        if (error.response.status === 419) {
                            error.response.statusText = "Your session has expired, will be redirected to the login";

                            setTimeout(function() {
                                window.location.href = '/';
                            }, 3000);
                        }

                        // Update Data intance error
                        window.searchInstance.updateDataWithError();
                    });

                } else {
                    window.searchInstance.selectCascadeLevel3syncedVal = null;
                }
            },
        },

        mounted() {

        //After mounted fill brand combo box
        // Send a POST request
        axios({
            method: 'post',
            url: 'get-fairs/fairs',
            data: _payloadFairs(true)
        })

        .then(function (response) {
            // Update Data intance
            window.searchInstance.updateDatalevel1(response.data.fairs);

        })
        .catch(function (error) {
            if (error.response.status === 419) {
                error.response.statusText = "Your session has expired, will be redirected to the login";

                setTimeout(function() {
                    window.location.href = '/';
                }, 3000);
            }

            // Update Data intance error
            window.searchInstance.updateDataWithError();
        });

        },
    });
    _searchUpdate();
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
self.start = function() {
    if(!_isInit) {
        console.log("Search Component started..");

         // Init search component
        _searchComponent();
    }
};