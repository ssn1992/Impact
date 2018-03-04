<style scoped>
    .btn.disabled, .btn[disabled], fieldset[disabled] .btn {
        cursor: auto;
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
                            <small class="font-bold"> Insert Budget </small><br>
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
                    <h5> Insert Budget</h5>

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

                                <div class="col-lg-4 form-group padding-bottom" :class="{'has-error': errors.has(payload.years.value)}">
                                    <label class="label" style="display: table-cell">{{ payload.years.label }}</label>

                                    <select v-validate :data-vv-rules=payload.years.rules :data-vv-validate-on="validateForm" title="Please choose one of the following options" :name=payload.years.post  data-live-search="true" v-model=payload.years.post class="selectpicker">
                                        <option :value="values" v-for="values in payload.years.data">
                                            <span v-bind:id="values"></span>
                                            {{ values }}
                                        </option>
                                    </select>
                                    <span v-show="errors.has(payload.years.value)" class="help-block text-danger text-center">
                                        <strong>{{ errors.first(payload.years.value) }}</strong>
                                    </span>
                                </div>

                                <div class="col-lg-4 form-group padding-bottom" :class="{'has-error': errors.has(payload.brands.value)}">
                                    <label class="label" style="display: table-cell">{{ payload.brands.label }}</label>

                                    <select v-validate :data-vv-rules=payload.brands.rules :data-vv-validate-on="validateForm" title="Please choose one of the following options" :name=payload.brands.post  data-live-search="true" v-model=payload.brands.post class="selectpicker">
                                        <option :value="values.value" v-for="values in payload.brands.data">
                                            <span v-bind:id="values.value"></span>
                                            {{ values.label }}
                                        </option>
                                    </select>
                                    <span v-show="errors.has(payload.brands.value)" class="help-block text-danger text-center">
                                        <strong>{{ errors.first(payload.brands.value) }}</strong>
                                    </span>
                                </div>

                                <div class="form-group col-lg-4 padding-bottom" :class="{'has-error': errors.has(payload.budget.value)}">
                                    <label class="label">{{ payload.budget.label }}</label>

                                    <input v-model="payload.budget.post" :name=payload.budget.value  v-validate :data-vv-rules=payload.budget.rules :data-vv-validate-on="validateForm" class="input form-control" leadType="text" :placeholder="payload.budget.label"/>
                                    <span v-show="errors.has(payload.budget.value)" class="help-block text-danger text-center">
                                            <strong>{{ errors.first(payload.budget.value) }}</strong>
                                        </span>
                                </div>

                                <div class="col-lg-12">
                                    <button  class="ladda-button ladda-button-selector btn btn-primary" data-style="zoom-in" leadType="submit">Insert Budget
                                        <i class="fa fa-plus" aria-hidden="true"></i>
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
                    budget : {
                        label: 'Budget',
                        value: 'budget',
                        rules: 'required',
                        post  : null,
                    },
                    brands         : {
                        label : 'Brand',
                        value : 'brands',
                        rules : 'required',
                        post  : null,
                        data  : []
                    },
                    years         : {
                        label : 'Year',
                        value : 'year',
                        rules : 'required',
                        post  : null,
                        data  : []
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

            yearsList (instance) {
                let payload      = {};
                    payload.data = [];

                let date = new Date;
                let year  = date.getFullYear();

                for (let i = year - 3; i <= year + 3; i++) {
                    payload.data.push(i);
                }

                // Init ComboBox
                instance.comboBoxMount(payload, 'years', true, 'years', year);
            },

            brandsList (instance) {
                // Send a POST request
                axios({
                    method: 'get',
                    url: 'get-brands-only',
                })

                .then(function (response) {
                    // Init ComboBox
                    instance.comboBoxMount(response.data.brands, 'brands');

                })
                .catch(function (error) {
                });
            },

            postInsertBudget (payload) {
                window.buttonLoader.start();

                // Send a POST request
                axios({
                    method: 'post',
                    url: 'budget-insert',
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
                this.$nextTick(function () {
                    this.$validator.validateAll().then((result) => {

                        if (result) {
                            var payload = {};

                            Object.keys(request).forEach(function (value) {
                                payload[value] = request[value].post;
                            })

                            this.postInsertBudget(payload);

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
        },

        mounted() {
            // Bind Create button loader
            window.buttonLoader = Ladda.create(document.querySelector( '.ladda-button-selector'));

            // Get YearsList
            this.yearsList(this);

            // Get BrandsList
            this.brandsList(this);
        }
    }
</script>


