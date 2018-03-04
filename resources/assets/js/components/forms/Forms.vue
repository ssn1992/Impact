<style scoped>
    .vue-rate-it-rating.vue-rate-it-rating-container {
        display: inline-block!important;
    }
    .vue-rate-it-rating-text {
        display: none!important;
    }

    #form-contact-edit .form-group, #forms .form-group {
        margin-bottom: 0!important;
    }

    .col-lg-4.form-group.padding-bottom.combobox {
        padding-top: 5px!important;
        padding-bottom: 25px!important;
    }
</style>

<template>
    <div>
        <div id="forms">
            <div class="modal inmodal fade" id="modal-success" tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
                <div class="modal-dialog modal-md">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <h4 class="modal-title">Success</h4>
                        </div>
                        <div class="modal-body" style="text-align: center; display: block;">
                            <i class="fa fa-check fa-5x text-info" style="display: block;"></i>
                            <small class="font-bold"> Contact Added</small><br>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal inmodal fade" id='modal-error' tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
                <div class="modal-dialog modal-md">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <h4 class="modal-title">Please try again later</h4>
                        </div>
                        <div class="modal-body" style="text-align: center; display: block;">
                            <i class="fa fa-warning fa-5x text-danger" style="display: block;"></i>
                            <small class="font-bold text-danger"> Something goes wrong</small><br>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ibox float-e-margins">
                <!-- Loader -->
                <div id="isLoading" v-if="false">
                    <div>
                        <div class="vue-simple-spinner"></div>
                    </div>
                </div>

                <div class="ibox-title">
                    <h5> Add Contact</h5>

                    <div class="ibox-tools">
                        <a class="collapse-link">
                            <i class="fa fa-chevron-up"></i>
                        </a>
                        <a class="close-link">
                            <i class="fa fa-times"></i>
                        </a>
                    </div>
                </div>
                <div class="ibox-content">

                    <div class="row">
                        <div class="col-lg-12">
                            <form @submit.prevent="validateBeforeSubmit(payload)" id="form-section-fairs">

                                <div v-for="(data, index) in payload" v-model="payload">
                                    <div v-if="data.fieldType == 'text-field' && data.value != 'moreinfo' && data.value != 'rating'" class="form-group col-lg-4" :class="{'has-error': errors.has(data.value)}" style="margin-bottom: 30px">
                                        <label class="label">{{ data.label }}</label>

                                        <input v-model="data.post" :name=data.value  v-validate :data-vv-rules=data.rules :data-vv-validate-on="validateForm" class="input form-control" type="text" :placeholder="data.label"/>
                                        <span v-show="errors.has(data.value)" class="help-block text-danger text-center">
                                            <strong>{{ errors.first(data.value) }}</strong>
                                        </span>
                                    </div>

                                    <div v-else-if="data.fieldType == 'combobox' || data.fieldType == 'comboboxMultiSelect'" class="col-lg-4 form-group" style="padding-bottom: 0">
                                        <div class="form-group" :class="{'has-error': errors.has(data.value)}" style="margin-bottom: 30;">
                                            <label class="label" style="display: table-cell">{{ data.label }}</label>

                                            <select v-if="data.fieldType == 'comboboxMultiSelect'" multiple  v-validate :data-vv-rules=data.rules :data-vv-validate-on="validateForm"  v-bind:id="index" @change="asChanged(data, index, $event)" v-bind:disabled="data.disabled" title="Please choose one of the following options" :name=data.value  data-live-search="true" v-model=payload[index].post class="selectpicker">
                                                <option :value="values.value" v-for="values in payload[index].data">

                                                    <span v-if="payload[index].value == 'country'" v-bind:id="values.value" class="flag-icon" :class="'flag-icon-' + values.iso"></span>
                                                    <span v-else v-bind:id="values.value"></span>


                                                    {{ values.label }}
                                                </option>
                                            </select>

                                            <!-- Please Review This Code -->
                                            <select v-else v-validate :data-vv-rules=data.rules :data-vv-validate-on="validateForm"  v-bind:id="index" @change="asChanged(data, index, $event)" v-bind:disabled="data.disabled" title="Please choose one of the following options" :name=data.value  data-live-search="true" v-model=payload[index].post class="selectpicker">
                                                <option :value="values.value" v-for="values in payload[index].data">

                                                    <span v-if="payload[index].value == 'country'" v-bind:id="values.value" class="flag-icon" :class="'flag-icon-' + values.iso"></span>
                                                    <span v-else v-bind:id="values.value"></span>


                                                    {{ values.label }}
                                                </option>
                                            </select>

                                            <span v-show="errors.has(data.value)" class="help-block text-danger text-center">
                                                <strong>{{ errors.first(data.value) }}</strong>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group col-lg-12 padding-bottom" :class="{'has-error': errors.has(payload.moreinfo.value)}">
                                    <label class="label">{{ payload.moreinfo.label }}</label>

                                    <textarea rows="5" v-model="payload.moreinfo.post" :name=payload.moreinfo.value  v-validate :data-vv-rules=payload.moreinfo.rules :data-vv-validate-on="validateForm" class="input form-control" type="text" :placeholder="payload.moreinfo.label"></textarea>
                                    <span v-show="errors.has(payload.moreinfo.value)" class="help-block text-danger text-center">
                                        <strong>{{ errors.first(payload.moreinfo.value) }}</strong>
                                    </span>
                                </div>

                                <div style="display: inline-block;" class="form-group text-center col-lg-12 padding-bottom">
                                    <div style="display: block">
                                        <label class="label"> {{ payload.rating.label }} </label>
                                    </div>

                                    <star-rating v-model="payload.rating.post" active-color="#2fbab7" rating="1"></star-rating>
                                </div>


                                <div class="col-lg-12">
                                    <button  class="ladda-button ladda-button-selector btn btn-primary" data-style="zoom-in" type="submit">Add Contact
                                        <i class="material-icons" style="font-size: 16px">&#xE89C;</i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // Import Rating
    import {StarRating} from 'vue-rate-it';

    // VeeValidate import
    import VeeValidate from 'vee-validate';
    Vue.use(VeeValidate);
    export default {
        data () {
            return {
                validateForm: 'none',
                payload: {
                    fair : {
                        disabled: false,
                        fieldType: 'combobox',
                        label: 'Active Tradeshow',
                        value: 'fair',
                        rules : 'required',
                        post: null,
                        data: [],
                    },

                    cat : {
                        disabled: false,
                        fieldType: 'combobox',
                        label: 'Source',
                        value: 'cat',
                        rules : 'required',
                        post: null,
                        data: [],
                    },

                    country : {
                        disabled: false,
                        fieldType: 'combobox',
                        label: 'Country',
                        value: 'country',
                        rules : 'required',
                        post: null,
                        data: [],
                    },

                    city         : {
                        fieldType: 'text-field',
                        disabled: true,
                        label : 'City',
                        value : 'city',
                        rules : '',
                        post  : null,
                        data  : [],
                    },

                    state : {
                        fieldType: 'combobox',
                        disabled: true,
                        label: 'State',
                        value: 'state',
                        rules : 'required',
                        post: null,
                        data: [],
                    },

                    industry         : {
                        disabled: false,
                        fieldType: 'combobox',
                        label : 'Industry',
                        value : 'industry',
                        rules : 'required',
                        post  : null,
                        data  : [],
                    },

                    leadType : {
                        fieldType: 'combobox',
                        disabled: false,
                        label: 'Lead Type',
                        value: 'leadType',
                        rules : 'required',
                        post: null,
                        data: [],
                    },

                    campaignSf : {
                        disabled: false,
                        fieldType: 'combobox',
                        label: 'Campaign Sf',
                        value: 'campaignSf',
                        rules : 'required',
                        post: null,
                        data: [],
                    },

                    clientAcquired : {
                        disabled: false,
                        fieldType: 'comboboxMultiSelect',
                        label: 'Client Acquired',
                        value: 'clientAcquired',
                        rules : '',
                        post: [],
                        data: [],
                    },

                    rating : {
                        fieldType: 'text-field',
                        label: 'Client evaluation',
                        value: 'rating',
                        rules: '',
                        post  : 1,
                    },

                    email : {
                        fieldType: 'text-field',
                        label: 'Email',
                        value: 'email',
                        rules: 'required|email',
                        post  : null,
                    },

                    firstName         : {
                        fieldType: 'text-field',
                        label : 'First Name',
                        value : 'firstName',
                        rules : 'required',
                        post  : null,
                    },

                    lastName         : {
                        fieldType: 'text-field',
                        label : 'Last Name',
                        value : 'lastName',
                        rules : 'required',
                        post  : null,
                    },

                    jobPosition         : {
                        fieldType: 'text-field',
                        label : 'Job Position',
                        value : 'jobPosition',
                        rules : '',
                        post  : null,
                    },

                    company         : {
                        fieldType: 'text-field',
                        label : 'Company',
                        value : 'company',
                        rules : 'required',
                        post  : null,
                    },

                    phone         : {
                        fieldType: 'text-field',
                        label : 'Phone',
                        value : 'phone',
                        rules : '',
                        post  : null,
                    },

                    mobile         : {
                        fieldType: 'text-field',
                        label : 'Mobile',
                        value : 'mobile',
                        rules : '',
                        post  : null,
                    },

                    address         : {
                        fieldType: 'text-field',
                        label : 'Address',
                        value : 'address',
                        rules : '',
                        post  : null,
                    },

                    zipCode         : {
                        fieldType: 'text-field',
                        label : 'Zip code',
                        value : 'zipCode',
                        rules : 'max:20',
                        post  : null,
                    },

                    website         : {
                        fieldType: 'text-field',
                        label : 'Website',
                        value : 'website',
                        rules : '',
                        post  : null,
                    },

                    moreinfo         : {
                        fieldType: 'text-field',
                        label : 'Moreinfo',
                        value : 'moreinfo',
                        rules : '',
                        post  : null,
                    },
                }
            }
        },

        components:{
            StarRating
        },

        methods: {
            cleanForm () {
                let self = this;

                //Clean Form
                Object.keys(self.payload).forEach(function (value) {
                    self.payload[value].post = null
                });

                self.payload.fair.post      = [];
                self.payload.cat.post       = [];
                self.payload.country.post   = [];
                self.payload.state.post     = [];
                self.payload.industry.post  = [];
                self.payload.rating.post    = 1;

                self.loadComboBox();

            },

            loadComboBox () {
                this.$nextTick(function () {
                    $('.selectpicker').selectpicker();
                    $('.selectpicker').selectpicker('refresh');
                });
            },

            comboBoxMount (response, data) {
                this.payload[data].data = response.data;

                this.$nextTick(function () {
                    $('.selectpicker').selectpicker();
                    $('.selectpicker').selectpicker('refresh');
                })
            },

            validateStateErrors () {
                let flag = false;

                if (this.payload.country.post === 234 && (this.payload.state.post === null || this.payload.state.post === undefined)) {

                    this.errors.add('state', 'The state field is required.', 'required');

                    flag = false;
                } else {
                    this.errors.remove('state');
                    flag = true;
                }

                return flag;
            },

            getActiveFairs (instance) {
                // Send a POST request
                axios({
                    method: 'post',
                    url: 'get-active-fairs',
                })

                .then(function (response) {
                    instance.comboBoxMount(response.data.fairs, 'fair');
                })

                .catch(function (error) {
                });
            },

            getCountryList (instance) {
                // Send a POST request
                axios({
                    method: 'post',
                    url: 'countrys-list',
                })

                    .then(function (response) {
                        // Init ComboBox
                        instance.comboBoxMount(response.data.contries, 'country');

                    })
                    .catch(function (error) {

                    });
            },

            getTradeshowCat (instance) {
                // Send a POST request
                axios({
                    method: 'post',
                    url: 'fairs-cat',
                })

                    .then(function (response) {
                        // Init ComboBox
                        instance.comboBoxMount(response.data.cats, 'cat');

                    })
                    .catch(function (error) {

                    });
            },

            getStateList (instance) {
                // Send a POST request
                axios({
                    method: 'post',
                    url: 'states-list',
                })

                    .then(function (response) {
                        // Init ComboBox
                        instance.comboBoxMount(response.data.states, 'state');

                    })
                    .catch(function (error) {

                    });
            },

            postCreateFair (payload) {
                let self = this;
                window.l = Ladda.create(document.querySelector( '.ladda-button-selector'));
                window.l.start();

                // Send a POST request
                axios({
                    method: 'post',
                    url: 'fairs/create',
                    data: payload
                })

                .then(function (response) {
                    window.l.stop();
                    $('.ladda-button-selector').fadeIn(1000, function() {
                        $(this).append('<i style="padding-left: 5px;" class="fa fa-check"></i>');
                    });

                    setTimeout(function(){
                        $('.ladda-button-selector > .fa-check').fadeOut(1000, function() { $(this).removeClass('fa-check') });

                    }, 1000)

                    // Show success modal
                    $('#modal-success').modal('show');

                    self.cleanForm();

                })
                .catch(function (error) {
                    if (error.response.status === 419) {
                        error.response.statusText = "Your session has expired, will be redirected to the login";

                        setTimeout(function() {
                            window.location.href = '/';
                        }, 3000);
                    }

                    window.l.stop();

                    $('.ladda-button-selector').fadeIn(1000, function() {
                        $(this).append('<i style="padding-left: 5px;" class="fa fa-close"></i>').addClass('btn-danger');
                    });

                    setTimeout(function(){
                        $('.ladda-button-selector > .fa-close').fadeOut(1000, function() { $(this).remove(); });
                        $('.ladda-button-selector').removeClass('btn-danger');
                    }, 1000)

                    // Show success modal
                    $('#modal-error').modal('show');
                });
            },

            validateBeforeSubmit(request) {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        var payload        = {};

                        Object.keys(request).forEach(function (value) {
                            payload[value] = request[value].post;
                        })

                        this.postCreateFair(payload);

                        console.log(payload);

                        console.log('Form Submitted!');

                        return;
                    } else {
                        this.validateForm = null;
                        console.log('Correct them errors!');
                    }
                });
            },

            concatPayload (index) {
                var value = ['payload.' + index + '.post']

                return value.join(' ')
            },

            comboState () {
                $('#state').selectpicker();
                $('#state').selectpicker('refresh');
            },

            asChanged (data, index, $event) {
                if (this.payload.country.post == 234) {
                    this.payload.state.disabled = false;

                    this.$nextTick(function () {
                        $('#state').selectpicker();
                        $('#state').selectpicker('refresh');
                    })

                } else {
                    this.payload.state.disabled = true;
                    this.payload.state.post = null;

                    this.$nextTick(function () {
                        $('#state').selectpicker();
                        $('#state').selectpicker('refresh');
                    })
                }

                // Get Country City
                this.checkCity($event);
            },

            SetDisabledState (disabledName) {
                var disabled = false

                if(disabledName == 'state') {
                    disabled = true;
                }


                return disabled;

            },

            checkCity ($event) {
                if (this.payload.country.post != null && this.payload.country.post != undefined && this.payload.country.post != 234 && $event.target.id === 'country') {
                    this.$nextTick(function () {
                        this.getCity(this);
                    });
                } else if (this.payload.country.post === 234){
                    this.payload.city.post     = null;
                    this.payload.city.disabled = true;

                    this.$nextTick(function () {
                        $('#city').selectpicker();
                        $('#city').selectpicker('refresh');
                    })
                }
            },

            getCity (instance) {
                let self = this;
                let selectedCountry;

                self.payload.country.data.forEach(function(element) {
                    if (element.value === self.payload.country.post) {
                        selectedCountry = element.iso;
                    }
                });

                $.ajax({
                    type: "get",
                    url: "http://api.geonames.org/searchJSON?username=webuzz&q="+selectedCountry+"&featureCode=PPLA&featureCode=PRSH&featureCode=PRSH",
                    cache: false,
                    dataType: 'json',

                    success: function(response) {
                        instance.comboBoxMount(self.createComboboxPayload(response.geonames), 'city');
                        self.payload.city.disabled = false
                    },
                    error: function(jq,status,message) {
                        self.payload.city.disabled = true
                    }
                })
            },

            createComboboxPayload (data) {
                let payload = []
                let obj = {};

                data.forEach(function(element, index) {
                    payload.push({"label": element.name, "value": element.name});
                });

                payload = {"data": payload};

                return payload;
            },

            getIndustry (instance) {
                // Send a POST request
                axios({
                    method: 'post',
                    url: 'get-industry',
                })

                .then(function (response) {
                    // Init ComboBox
                    instance.comboBoxMount(response.data.industry, 'industry');
                })
                .catch(function (error) {
                });
            },

            getCampaignSf (instance) {
                // Send a POST request
                axios({
                    method : 'post',
                    url    : 'get-campaign-sf',
                })

                .then(function (response) {
                    // Init ComboBox
                    instance.comboBoxMount(response.data.campaign, 'campaignSf');
                })
                .catch(function (error) {
                });
            },

            getClientAcquired (instance) {
                // Send a POST request
                axios({
                    method: 'post',
                    url: 'get-client-acquired',
                })

                .then(function (response) {
                    // Init ComboBox
                    instance.comboBoxMount(response.data.clientAcquired, 'clientAcquired');
                })
                .catch(function (error) {
                });
            },

            getLeadType (instance) {
                // Send a POST request
                axios({
                    method: 'get',
                    url: 'leads-type',
                })

                .then(function (response) {
                    // Init ComboBox
                    instance.comboBoxMount(response.data.leadTypes, 'leadType');

                })
                .catch(function (error) {
                });
            },
        },

        mounted() {
            // Get Leads leadType
            this.getLeadType(this);

            // Get country list
            this.getCountryList(this);

            // Get state list
            this.getStateList(this);

            // Get tradeshow list
            this.getTradeshowCat(this);

            //Get active fairs
            this.getActiveFairs(this);

            // Get Industry
            this.getIndustry(this);

            // Get CampaignSF
            this.getCampaignSf(this);

            // Get Tradeshow Client Acquired
            this.getClientAcquired(this);
        }
    }
</script>

