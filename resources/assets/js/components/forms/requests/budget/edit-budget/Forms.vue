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
                            <small class="font-bold"> Edit Budget</small><br>
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
                    <h5> Edit Budget</h5>

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

                                <div class="col-lg-2 form-group padding-bottom" :class="{'has-error': errors.has(payload.years.value)}">
                                    <label class="label" style="display: table-cell">{{ payload.years.label }}</label>

                                    <select v-bind:id="payload.years.value" @change="getWeeksList(), getBudgetValue()" v-validate :data-vv-rules=payload.years.rules :data-vv-validate-on="validateForm" title="Please choose one of the following options" :name=payload.years.post  data-live-search="false" v-model=payload.years.post class="selectpicker">
                                        <option :value="values" v-for="values in payload.years.data">
                                            <span v-bind:id="values"></span>
                                            {{ values }}
                                        </option>
                                    </select>

                                    <span v-show="errors.has(payload.years.value)" class="help-block text-danger text-center">
                                        <strong>{{ errors.first(payload.years.value) }}</strong>
                                    </span>
                                </div>

                                <div class="col-lg-1 form-group padding-bottom" :class="{'has-error': errors.has(payload.weekFrom.value)}">
                                    <label class="label" style="display: table-cell">{{ payload.weekFrom.label }}</label>

                                    <select @change="getBudgetValue()" v-bind:id="payload.weekFrom.value" v-validate :data-vv-rules=payload.weekFrom.rules :data-vv-validate-on="validateForm" title="Please choose one of the following options" :name=payload.weekFrom.post  data-live-search="false" v-model=payload.weekFrom.post class="selectpicker">
                                        <option :value="values" v-for="values in payload.weekFrom.data">
                                            <span v-bind:id="values"></span>
                                            {{ values }}
                                        </option>
                                    </select>
                                    <span v-show="errors.has(payload.weekFrom.value)" class="help-block text-danger text-center">
                                        <strong>{{ errors.first(payload.weekFrom.value) }}</strong>
                                    </span>
                                </div>

                                <div class="col-lg-1 form-group padding-bottom" :class="{'has-error': errors.has(payload.weekTo.value)}">
                                    <label class="label" style="display: table-cell">{{ payload.weekTo.label }}</label>

                                    <select @change="getBudgetValue()" v-bind:id="payload.weekTo.value" v-validate :data-vv-rules=payload.weekTo.rules :data-vv-validate-on="validateForm" title="Please choose one of the following options" :name=payload.weekTo.post  data-live-search="false" v-model=payload.weekTo.post class="selectpicker">
                                        <option :value="values" v-for="values in payload.weekTo.data">
                                            <span v-bind:id="values"></span>
                                            {{ values }}
                                        </option>
                                    </select>
                                    <span v-show="errors.has(payload.weekTo.value)" class="help-block text-danger text-center">
                                        <strong>{{ errors.first(payload.weekTo.value) }}</strong>
                                    </span>
                                </div>

                                <div class="col-lg-8 form-group padding-bottom" :class="{'has-error': errors.has(payload.brands.value)}">
                                    <label class="label" style="display: table-cell">{{ payload.brands.label }}</label>

                                    <select @change="getBudgetValue()" v-bind:id="payload.brands.value" v-validate :data-vv-rules=payload.brands.rules :data-vv-validate-on="validateForm" title="Please choose one of the following options" :name=payload.brands.post  data-live-search="false" v-model=payload.brands.post class="selectpicker">
                                        <option :value="values.value" v-for="values in payload.brands.data">
                                            <span v-bind:id="values.value"></span>
                                            {{ values.label }}
                                        </option>
                                    </select>
                                    <span v-show="errors.has(payload.brands.value)" class="help-block text-danger text-center">
                                        <strong>{{ errors.first(payload.brands.value) }}</strong>
                                    </span>
                                </div>

                                <div class="form-group col-lg-12 padding-bottom" :class="{'has-error': errors.has(payload.budget.value)}">
                                    <label class="label">{{ payload.budget.label }}</label>

                                    <input v-model="payload.budget.post" :name=payload.budget.value  v-validate :data-vv-rules=payload.budget.rules :data-vv-validate-on="validateForm" class="input form-control" leadType="text" :placeholder="payload.budget.label"/>
                                    <span v-show="errors.has(payload.budget.value)" class="help-block text-danger text-center">
                                            <strong>{{ errors.first(payload.budget.value) }}</strong>
                                        </span>
                                </div>

                                <div class="col-lg-12">
                                    <button  class="ladda-button ladda-button-selector btn btn-primary" data-style="zoom-in" leadType="submit">Edit Budget
                                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
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
                        rules : 'required',
                        post  : null,
                    },
                    brands         : {
                        label : 'Brands',
                        value : 'brands',
                        rules : 'required',
                        post  : null,
                        data  : []
                    },
                    years         : {
                        label : 'Year',
                        value : 'years',
                        rules : 'required',
                        post  : null,
                        data  : []
                    },
                    weekFrom         : {
                        label : 'Week From',
                        value : 'weekFrom',
                        rules : 'required',
                        post  : null,
                        data  : []
                    },
                    weekTo         : {
                        label : 'Week To',
                        value : 'weekTo',
                        rules : 'required',
                        post  : null,
                        data  : []
                    },
                }
            }
        },

        methods: {
            comboBoxMount (response, data, markSelectedFlag = false, markSelectedId = null, markSelectedValue = null) {
                this.payload[data].data = response.data;

                this.$nextTick(function () {
                    $('#' + this.payload[data].value).selectpicker();
                    $('#' + this.payload[data].value).selectpicker('refresh');
                })

                this.$nextTick(function () {
                    if (markSelectedFlag) {
                        console.log('yes');
                        $('#' + markSelectedId).selectpicker('val', markSelectedValue);
                        this.payload[data].post = markSelectedValue;
                    }
                });
            },

            yearsList (instance) {
                let date  = new Date;
                let year  = date.getFullYear();

                // Send a POST request
                axios({
                    method: 'get',
                    url: 'get-budget-years',
                })

                .then(function (response) {
                    // Init ComboBox
                    instance.comboBoxMount(response.data.years, 'years', true, 'years', year);

                    instance.getWeeksList (year, true);

                })
                .catch(function (error) {
                });
            },

            getWeeksList (year = null, firstTime = false) {

                let payload      = {};
                    payload.data = [];

                let weeks;

                if (year != null) {
                    weeks  = moment(year.toString()).isoWeeksInYear()
                    console.log('week param ' + year);

                    console.log(year);
                    console.log(weeks);
                } else {
                    weeks = moment(this.payload.years.post.toString()).isoWeeksInYear()
                }

                for (let i = 1; i <= weeks; i++) {
                    payload.data.push(i);
                }

                // Init ComboBox
                this.comboBoxMount(payload, 'weekFrom', true, 'weekFrom', moment().get('week'));
                this.comboBoxMount(payload, 'weekTo', true, 'weekTo', moment().get('week'));
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

            getBudgetValue() {
                let self = this;

            if ((self.payload.brands.post != null &&
                    self.payload.years.post != null &&
                    self.payload.weekFrom.post != null &&
                    self.payload.weekTo.post != null) &&
                self.payload.weekFrom.post === this.payload.weekTo.post
                ) {
                    let payload = {}

                    payload.year  = self.payload.years.post
                    payload.week  = self.payload.weekFrom.post
                    payload.brand = self.payload.brands.post

                    // Send a POST request
                    axios({
                        method : 'post',
                        data   : payload,
                        url    : 'budget-week',
                    })

                    .then(function (response) {
                        console.log(response)
                        console.log('request');

                        // Update Budget Value preview
                        self.payload.budget.post = response.data.budgetWeek;

                    })
                    .catch(function (error) {
                    });
                }
            },

            postEditBudget (payload) {
                window.buttonLoader.start();

                // Send a POST request
                axios({
                    method: 'post',
                    url: 'budget-edit',
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

                            this.postEditBudget(payload);

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


