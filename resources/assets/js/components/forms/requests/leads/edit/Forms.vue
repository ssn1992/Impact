<style scoped>
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
                            <button leadType="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <h4 class="modal-title">Success</h4>
                        </div>
                        <div class="modal-body" style="text-align: center; display: block;">
                            <i class="fa fa-check fa-5x text-info" style="display: block;"></i>
                            <small class="font-bold"> Lead Edited </small><br>

                            <div v-if="salesforce.error === true">
                                <div style="padding-top: 20px">
                                    <small style="font-size: 15px;" class="font-bold text-warning"> Sales Force Error</small><br>
                                    <p v-for="value in salesforce.message">
                                        {{ value.message }}
                                        {{ value.errorCode }}
                                        {{ value.fields }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button leadType="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal inmodal fade" id='modal-error' tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
                <div class="modal-dialog modal-md">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button leadType="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <h4 class="modal-title">Please try again later</h4>
                        </div>
                        <div class="modal-body" style="text-align: center; display: block;">
                            <i class="fa fa-warning fa-5x text-danger" style="display: block;"></i>
                            <small class="font-bold text-danger"> Something goes wrong</small><br>
                        </div>
                        <div class="modal-footer">
                            <button leadType="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5> Edit Contact</h5>

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

                        <!-- Loader -->
                        <div id="isLoading" v-if="isLoading">
                            <div>
                                <div class="vue-simple-spinner"></div>
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <form @submit.prevent="validateBeforeSubmit(payload)" id="form-section-fairs">

                                <div v-for="(data, index) in payload" v-model="payload">

                                    <div v-if="data.fieldType == 'text-field'" class="form-group col-lg-4 padding-bottom" :class="{'has-error': errors.has(data.value)}">
                                        <label class="label">{{ data.label }}</label>

                                        <input v-model="data.post" :name=data.value  v-validate :data-vv-rules=data.rules :data-vv-validate-on="validateForm" class="input form-control" leadType="text" :placeholder="data.label"/>
                                        <span v-show="errors.has(data.value)" class="help-block text-danger text-center">
                                            <strong>{{ errors.first(data.value) }}</strong>
                                        </span>
                                    </div>

                                    <div v-else-if="data.fieldType == 'combobox'" class="col-lg-4 form-group padding-bottom" :class="{'has-error': errors.has(data.value)}">
                                        <label class="label" style="display: table-cell">{{ data.label }}</label>

                                        <select v-validate :data-vv-rules=data.rules :data-vv-validate-on="validateForm"  v-bind:id="index" @change="asChanged(data, index, $event)" v-bind:disabled="data.disabled" title="Please choose one of the following options" :name=data.value  data-live-search="true" v-model=payload[index].post class="selectpicker">
                                            <option :value="values.value" v-for="values in payload[index].data">
                                                <span v-if="payload[index].value == 'country' || payload[index].value == 'state'" v-bind:id="values.value" class="flag-icon" :class="'flag-icon-' + values.iso"></span>
                                                <span v-else v-bind:id="values.value"></span>
                                                {{ values.label }}
                                            </option>
                                        </select>
                                        <span v-show="errors.has(data.value)" class="help-block text-danger text-center">
                                            <strong>{{ errors.first(data.value) }}</strong>
                                        </span>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <button  class="ladda-button ladda-button-selector btn btn-primary" data-style="zoom-in" leadType="submit">Edit Lead
                                        <i class="fa fa-edit" aria-hidden="true"></i>
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
    // VeeValidate import
    import VeeValidate from 'vee-validate';
    Vue.use(VeeValidate);

    export default {
        data () {
            return {
                validateForm : 'none',
                isLoading    : true,
                id           : null,
                salesforce: {
                    error   : false,
                    message : null,
                },
                payload: {
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
                    phone         : {
                        fieldType: 'text-field',
                        label : 'Phone',
                        value : 'phone',
                        rules : '',
                        post  : null,
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
                    state : {
                        fieldType: 'combobox',
                        disabled: true,
                        label: 'State',
                        value: 'state',
                        rules : '',
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
                    leadType : {
                        fieldType: 'combobox',
                        disabled: false,
                        label: 'Lead Type',
                        value: 'leadType',
                        rules : 'required',
                        post: null,
                        data: [],
                    },
                    brand : {
                        fieldType: 'combobox',
                        disabled: false,
                        label: 'Brand',
                        value: 'brand',
                        rules : 'required',
                        post: null,
                        data: []
                    },
                    heardAbout         : {
                        fieldType: 'text-field',
                        label : 'Heard about',
                        value : 'heardAbout',
                        rules : '',
                        post  : null,
                    },
                    jobPosition         : {
                        fieldType: 'text-field',
                        label : 'Job Position',
                        value : 'jobPosition',
                        rules : '',
                        post  : null,
                    },
                    website         : {
                        fieldType: 'text-field',
                        label : 'Website',
                        value : 'website',
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
                    moreInfo         : {
                        fieldType: 'text-field',
                        label : 'More Info',
                        value : 'moreInfo',
                        rules : '',
                        post  : null,
                    },
                    interestedIn         : {
                        fieldType: 'text-field',
                        label : 'Interested In',
                        value : 'interestedIn',
                        rules : '',
                        post  : null,
                    },
                    companyNumber         : {
                        fieldType: 'text-field',
                        label : 'Company Employee Number',
                        value : 'companyNumber',
                        rules : '',
                        post  : null,
                    },
                    facebook         : {
                        fieldType: 'text-field',
                        label : 'Facebook',
                        value : 'facebook',
                        rules : '',
                        post  : null,
                    },
                    instagram         : {
                        fieldType: 'text-field',
                        label : 'Instagram',
                        value : 'instagram',
                        rules : '',
                        post  : null,
                    },
                    pinterest       : {
                        fieldType: 'text-field',
                        label : 'Pinterest',
                        value : 'pinterest',
                        rules : '',
                        post  : null,
                    },
                    linkedIn       : {
                        fieldType: 'text-field',
                        label : 'LinkedIn',
                        value : 'linkedIn',
                        rules : '',
                        post  : null,
                    },
                    contactRole       : {
                        fieldType: 'combobox',
                        label : 'Contact Role',
                        value : 'contactRole',
                        rules : '',
                        post  : null,
                        data: [],
                    },
                    mktType         : {
                        fieldType: 'combobox',
                        label : 'Marketing Type',
                        value : 'mktType',
                        rules : 'required',
                        post  : null,
                        data  : [],
                    },
                    industry         : {
                        fieldType: 'combobox',
                        label : 'Industry',
                        value : 'industry',
                        rules : 'required',
                        post  : null,
                        data  : [],
                    },
                    sources : {
                        fieldType: 'combobox',
                        disabled: false,
                        label: 'Sources list',
                        value: 'sources',
                        rules : 'required',
                        post: null,
                        data: [],
                    },
                    category : {
                        fieldType: 'combobox',
                        disabled: true,
                        label: 'Category',
                        value: 'category',
                        rules : 'required',
                        post: null,
                        data: [],
                    },
                    type : {
                        fieldType: 'combobox',
                        disabled: true,
                        label: 'Source Type',
                        value: 'type',
                        rules : '',
                        post: null,
                        data: []
                    },
                    subType : {
                        fieldType: 'combobox',
                        disabled: true,
                        label: 'Sub type',
                        value: 'subType',
                        rules : '',
                        post: null,
                        data: []
                    },
                }
            }
        },

        methods: {
            comboBoxMount (response, data) {
                this.payload[data].data = response.data;

                this.$nextTick(function () {
                    $('.selectpicker').selectpicker();
                    $('.selectpicker').selectpicker('refresh');
                })
            },

            loadComboBox () {
                this.$nextTick(function () {
                    $('.selectpicker').selectpicker();
                    $('.selectpicker').selectpicker('refresh');
                })
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

            getSources (instance) {
                // Send a POST request
                axios({
                    method: 'get',
                    url: 'sources',
                })

                .then(function (response) {
                    // Init ComboBox
                    instance.comboBoxMount(response.data.sources, 'sources');

                })
                .catch(function (error) {
                });
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

            getCity (instance, flag = false, city = '') {
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

                        if (flag) {
                            self.payload.city.post = city
                            self.loadComboBox();
                        }
                    },
                    error: function(jq,status,message) {
                        self.payload.city.disabled = true
                    }
                })
            },

            getBrand (instance) {
                // Send a POST request
                axios({
                    method: 'get',
                    url: 'get-brand-access',
                })

                .then(function (response) {
                    // Init ComboBox
                    instance.comboBoxMount(response.data.brandAccess, 'brand');
                })
                .catch(function (error) {
                });
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

            getCategory (instance, id) {
                let payload    = {}
                    payload.id = id;

                // Send a POST request
                axios({
                    method: 'post',
                    url: 'source-category',
                    data: payload
                })

                .then(function (response) {
                    // Init ComboBox
                    instance.comboBoxMount(response.data.sourceTypes, 'category');
                })
                .catch(function (error) {
                });
            },

            getType (instance, id) {
                let payload = {}
                    payload.id = id;
                    payload.categoryId = this.payload.category.post;

                // Send a POST request
                axios({
                    method: 'post',
                    url: 'source-type',
                    data: payload
                })

                    .then(function (response) {
                        // Init ComboBox
                        instance.comboBoxMount(response.data.type, 'type');
                    })
                    .catch(function (error) {
                    });
            },

            getSubType (instance, id) {
                let payload = {}
                payload.id = id;

                // Send a POST request
                axios({
                    method: 'post',
                    url: 'source-subType',
                    data: payload
                })

                .then(function (response) {
                    // Init ComboBox
                    instance.comboBoxMount(response.data.subType, 'subType');
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

            postEditLead (payload) {
                let self = this;
                window.buttonLoader.start();

                // Send a POST request
                axios({
                    method: 'post',
                    url: 'leads-manual-edit',
                    data: payload
                })

                .then(function (response) {
                    window.buttonLoader.stop();
                    $('.ladda-button-selector').fadeIn(1000, function() {
                        $(this).append('<i style="padding-left: 5px;" class="fa fa-check"></i>');
                    });

                    setTimeout(function(){
                        $('.ladda-button-selector > .fa-check').fadeOut(1000, function() { $(this).removeClass('fa-check') });

                    }, 1000)

                    if (response.data.salesforce.error === true) {
                        self.salesforce.error = true;
                        self.salesforce.message = response.data.salesforce.message;
                    }

                    // Show success modal
                    $('#modal-success').modal('show');

                })
                .catch(function (error) {
                    if (error.response.status === 419) {
                        error.response.statusText = "Your session has expired, will be redirected to the login";

                        setTimeout(function() {
                            window.location.href = '/';
                        }, 3000);
                    }

                    window.buttonLoader.stop();

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
                let self = this;

                this.$nextTick(function () {
                    this.$validator.validateAll().then((result) => {
                        let stateErrors    = this.validateStateErrors();
                        let typeErrors     = this.validateSourceTypeErrors();
                        let subTypeErrors  = this.validateSourceSubTypeErrors();

                        if (result && stateErrors && typeErrors && subTypeErrors) {

                            var payload = {};

                            Object.keys(request).forEach(function (value) {
                                payload[value] = request[value].post;
                            })

                            payload.id         = this.id;

                            this.postEditLead(payload);

                            console.log(payload);
                            console.log('Form Submitted!');

                            return;
                        } else {
                            this.validateForm = null;
                            console.log('Correct them errors!');
                        }
                    });
                });
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

            validateSourceTypeErrors () {
                let flag = false;

                if (this.payload.sources.post === 6  && (this.payload.type.post === null || this.payload.type.post === undefined) ||
                    this.payload.sources.post === 8  && (this.payload.type.post === null || this.payload.type.post === undefined) ||
                    this.payload.sources.post === 10 && (this.payload.type.post === null || this.payload.type.post === undefined) ||
                    this.payload.sources.post === 11 && (this.payload.type.post === null || this.payload.type.post === undefined)) {

                    this.errors.add('type', 'The Type field is required.', 'required');

                    flag = false;
                } else {
                    this.errors.remove('type');
                    flag = true;
                }

                return flag;
            },

            validateSourceSubTypeErrors () {
                let flag = false;

                if (this.payload.sources.post === 6 && (this.payload.subType.post === null || this.payload.subType.post === undefined)) {

                    this.errors.add('subType', 'The Sub Type field is required.', 'required');

                    flag = false;
                } else {
                    this.errors.remove('subType');
                    flag = true;
                }

                return flag;
            },

            checkState () {
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
            },

            checkSource () {
                if (this.payload.sources.post != null && this.payload.sources.post != undefined) {

                    this.getCategory(this,  this.payload.sources.post);
                    this.payload.category.disabled = false;

                    this.$nextTick(function () {
                        $('#category').selectpicker();
                        $('#category').selectpicker('refresh');
                    })

                } else {
                    this.payload.category.disabled = true;
                    this.payload.category.post = null;

                    this.$nextTick(function () {
                        $('#category').selectpicker();
                        $('#category').selectpicker('refresh');
                    })
                }
            },

            checkSourceType () {
                if (this.payload.category.post != null &&
                    this.payload.category.post != undefined &&

                    (this.payload.sources.post === 6 ||
                        this.payload.sources.post === 8 ||
                        this.payload.sources.post === 9 ||
                        this.payload.sources.post === 10 ||
                        this.payload.sources.post === 11)) {

                    this.getType(this,  this.payload.sources.post);
                    this.payload.type.disabled = false;

                    this.$nextTick(function () {
                        $('#type').selectpicker();
                        $('#type').selectpicker('refresh');
                    })

                } else {
                    this.payload.type.disabled = true;
                    this.payload.type.post = null;

                    this.$nextTick(function () {
                        $('#type').selectpicker();
                        $('#type').selectpicker('refresh');
                    })
                }

            },

            checkCity ($event, flag, city = '') {
                if (flag === false) {

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
                } else {
                    if (this.payload.country.post != null && this.payload.country.post != undefined && this.payload.country.post != 234 && $event === 'country') {
                        this.$nextTick(function () {
                            this.getCity(this, true, city);
                        });
                    } else if (this.payload.country.post === 234){
                        this.payload.city.post     = null;
                        this.payload.city.disabled = true;

                        this.$nextTick(function () {
                            $('#city').selectpicker();
                            $('#city').selectpicker('refresh');
                        })
                    }
                }
            },

            checkSourceSubType () {
                if (this.payload.category.post != null &&
                    this.payload.category.post != undefined &&
                    this.payload.sources.post === 6 &&
                    this.payload.type.post != null &&
                    this.payload.type.post != undefined) {

                    this.getSubType(this,  this.payload.sources.post);
                    this.payload.subType.disabled = false;

                    this.$nextTick(function () {
                        $('#subType').selectpicker();
                        $('#subType').selectpicker('refresh');
                    })

                } else {
                    this.payload.subType.disabled = true;
                    this.payload.subType.post = null;

                    this.$nextTick(function () {
                        $('#subType').selectpicker();
                        $('#subType').selectpicker('refresh');
                    })
                }

            },

            asChanged (data, index, $event, flag = false, city = '') {
                // Check selected state
                this.checkState ();

                // Check selected Source
                this.checkSource();

                // Check Source Type
                this.checkSourceType ();

                // Check Source Sub Type
                this.checkSourceSubType ();

                // Get Country City
                this.checkCity($event, flag, city);
            },

            getLead () {
                let self       = this;
                let payload    = {}
                    payload.id = window.location.pathname.split("/").pop();


                // Send a POST request
                axios({
                    method: 'post',
                    url: 'get-lead-manual-edit',
                    data : payload
                })

                .then(function (response) {
                    console.log(response.data.lead.data);
                    self.setLead(response.data.lead.data);
                })
                .catch(function (error) {
                });
            },

            setLead (response) {
                this.id                          =   response.id
                this.payload.email.post          =   response.email
                this.payload.firstName.post      =   response.firstName
                this.payload.lastName.post       =   response.lastName
                this.payload.phone.post          =   response.phone
                this.payload.country.post        =   response.country
                this.payload.state.post          =   response.state
                this.payload.city.post           =   response.city
                this.payload.leadType.post       =   parseInt(response.leadType)
                this.payload.heardAbout.post     =   response.heardAbout
                this.payload.website.post        =   response.website
                this.payload.company.post        =   response.company
                this.payload.moreInfo.post       =   response.moreInfo
                this.payload.interestedIn.post   =   response.interestedIn
                this.payload.industry.post       =   parseInt(response.industry)
                this.payload.sources.post        =   parseInt(response.sources)
                this.payload.category.post       =   parseInt(response.category)
                this.payload.type.post           =   parseInt(response.type)
                this.payload.subType.post        =   parseInt(response.subType)
                this.payload.brand.post          =   response.brand
                this.payload.jobPosition.post    =   response.jobPosition
                this.payload.companyNumber.post  =   response.companyNumber
                this.payload.facebook.post       =   response.facebook
                this.payload.instagram.post      =   response.instagram
                this.payload.pinterest.post      =   response.pinterest
                this.payload.linkedIn.post       =   response.linkedIn
                this.payload.contactRole.post    =   response.contactRole
                this.payload.mktType.post        =   parseInt(response.mktType)

                // Set Combobox
                this.asChanged (null, null, 'country', true, response.city);

                // Refresh Combobox
                this.loadComboBox();

                // Stop Loader
                this.isLoading = false;
            },

            mktType (instance) {
                // Send a POST request
                axios({
                    method: 'post',
                    url: 'get-mkt-type',
                })

                    .then(function (response) {
                        // Init ComboBox
                        instance.comboBoxMount(response.data.mkt_type, 'mktType');
                    })
                    .catch(function (error) {
                    });
            },

            contactRole (instance) {
                // Send a POST request
                axios({
                    method: 'post',
                    url: 'get-contact_role',
                })

                    .then(function (response) {
                        // Init ComboBox
                        instance.comboBoxMount(response.data.lead_role, 'contactRole');
                    })
                    .catch(function (error) {
                    });
            },
        },

        mounted() {
            // Bind Create button loader
            window.buttonLoader = Ladda.create(document.querySelector( '.ladda-button-selector'));

            // Get country list
            this.getCountryList(this);

            // Get state list
            this.getStateList(this);

            // Get Leads leadType
            this.getLeadType(this);

            // Get Sources
            this.getSources(this);

            // Get Industry
            this.getIndustry(this);

            // Get Brands
            this.getBrand(this);

            // Get Marketing Type
            this.mktType(this);

            // Get Contact Roles
            this.contactRole(this);

            // Get Lead
            this.getLead(this);
        }
    }
</script>


