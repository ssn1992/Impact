<style scoped>

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
                            <small class="font-bold"> Tradeshow Created </small><br>
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
                                    <div v-if="data.fieldType == 'text-field'" class="form-group col-lg-6 padding-bottom" :class="{'has-error': errors.has(data.value)}">
                                        <label class="label">{{ data.label }}</label>

                                        <input v-model="data.post" :name=data.value  v-validate :data-vv-rules=data.rules :data-vv-validate-on="validateForm" class="input form-control" type="text" :placeholder="data.label"/>
                                        <span v-show="errors.has(data.value)" class="help-block text-danger text-center">
                                            <strong>{{ errors.first(data.value) }}</strong>
                                        </span>
                                    </div>

                                    <div v-else-if="data.fieldType == 'combobox' && payload[index].disabled == false" class="col-lg-6 ">
                                        <div class="form-grouppadding-bottom" style="padding-bottom: 30px" :class="{'has-error': errors.has(data.value)}">
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
                                </div>

                                <div class="col-lg-12">
                                    <button  class="ladda-button ladda-button-selector btn btn-primary" data-style="zoom-in" type="submit">Create Tradeshow
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
                        label: 'Category',
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

                    state : {
                        fieldType: 'combobox',
                        disabled: true,
                        label: 'State',
                        value: 'state',
                        rules : 'required',
                        post: null,
                        data: [],
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
                        rules : 'required',
                        post  : null,
                    },

                    industry         : {
                        fieldType: 'text-field',
                        label : 'Industry',
                        value : 'industry',
                        rules : 'required',
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
                        rules : 'required',
                        post  : null,
                    },

                    mobile         : {
                        fieldType: 'text-field',
                        label : 'Mobile',
                        value : 'mobile',
                        rules : 'required',
                        post  : null,
                    },

                    address         : {
                        fieldType: 'text-field',
                        label : 'Address',
                        value : 'address',
                        rules : 'required',
                        post  : null,
                    },

                    website         : {
                        fieldType: 'text-field',
                        label : 'Website',
                        value : 'website',
                        rules : 'required',
                        post  : null,
                    },

                    moreinfo         : {
                        fieldType: 'text-field',
                        label : 'Moreinfo',
                        value : 'moreinfo',
                        rules : 'required',
                        post  : null,
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
                    if (error.response.status === 419) {
                        error.response.statusText = "Your session has expired, will be redirected to the login";

                        setTimeout(function() {
                            window.location.href = '/';
                        }, 3000);
                    }
                });
            },

            postCreateFair (payload) {
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

                })
                .catch(function (error) {
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

            asChanged () {
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

            SetDisabledState (disabledName) {
                var disabled = false

                if(disabledName == 'state') {
                    disabled = true;
                }


                return disabled;

            }
        },

        mounted() {
            // Get country list
            this.getCountryList(this);

            // Get state list
            this.getStateList(this);

            // Get tradeshow list
            this.getTradeshowCat(this);

            //Get active fairs
            this.getActiveFairs(this);
        }
    }
</script>

