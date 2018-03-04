<style lang="scss" scoped>
    #date-search-request > .fa-filter {
        position: absolute;
        padding-top: 3px;
        padding-left: 22px;
    }

    .cov-datepicker {
        width: 531px!important;
    }
</style>

<template>
    <div>
        <div class="modal inmodal fade" id="modal-success" tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button leadType="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">Success</h4>
                    </div>
                    <div class="modal-body" style="text-align: center; display: block;">
                        <i class="fa fa-check fa-5x text-info" style="display: block;"></i>
                        <small class="font-bold"> Child Campaign Associated</small><br>
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
                            <small class="font-bold"> Campaign Associated </small><br>
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
                    <h5> Associate Child Campaign</h5>

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
                            <form @submit.prevent="validateBeforeSubmit()" id="form-section-fairs">
                                <div style="padding-top: 4px; padding-left: 30px; padding-right: 30px;" class="col-lg-12 form-group padding-bottom" :class="{'has-error': errors.has(payload.childCampaign.value)}">
                                    <label class="label" style="display: table-cell">{{ payload.childCampaign.label }}</label>

                                    <select v-validate :data-vv-rules=payload.childCampaign.rules :data-vv-validate-on="validateForm" title="Please choose one of the following options" :name=payload.childCampaign.value  data-live-search="true" v-model=payload.childCampaign.post class="selectpicker">
                                        <option :value="values.value" v-for="values in payload.childCampaign.data">
                                            <span v-bind:id="values.value"></span>
                                            {{ values.label }}
                                        </option>
                                    </select>
                                    <span v-show="errors.has(payload.childCampaign.value)" class="help-block text-danger text-center">
                                        <strong>{{ errors.first(payload.childCampaign.value) }}</strong>
                                    </span>
                                </div>

                                <div style="padding-top: 4px; padding-left: 30px; padding-right: 30px;" class="col-lg-6 form-group padding-bottom" :class="{'has-error': errors.has(payload.active.value)}">
                                    <label class="label" style="display: table-cell">{{ payload.active.label }}</label>

                                    <select v-validate :data-vv-rules=payload.active.rules :data-vv-validate-on="validateForm" title="Please choose one of the following options" :name=payload.active.value  data-live-search="true" v-model=payload.active.post class="selectpicker">
                                        <option :value="values.value" v-for="values in payload.active.data">
                                            <span v-bind:id="values.value"></span>
                                            {{ values.label }}
                                        </option>
                                    </select>
                                    <span v-show="errors.has(payload.active.value)" class="help-block text-danger text-center">
                                        <strong>{{ errors.first(payload.active.value) }}</strong>
                                    </span>
                                </div>

                                <div style="padding-top: 4px; padding-right: 30px;" class="col-lg-6 form-group padding-bottom" :class="{'has-error': errors.has(payload.brand.value)}">
                                    <label class="label" style="display: table-cell">{{ payload.brand.label }}</label>

                                    <select v-validate :data-vv-rules=payload.brand.rules :data-vv-validate-on="validateForm" title="Please choose one of the following options" :name=payload.brand.value  data-live-search="true" v-model=payload.brand.post class="selectpicker">
                                        <option :value="values.value" v-for="values in payload.brand.data">
                                            <span v-bind:id="values.value"></span>
                                            {{ values.label }}
                                        </option>
                                    </select>
                                    <span v-show="errors.has(payload.brand.value)" class="help-block text-danger text-center">
                                        <strong>{{ errors.first(payload.brand.value) }}</strong>
                                    </span>
                                </div>

                                <div class="col-lg-12">
                                    <button  class="ladda-button ladda-button-selector btn btn-primary" data-style="zoom-in" leadType="submit">Associate Campaign
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
                warningMessage : null,
                payload: {
                    active : {
                        fieldType: 'text-field',
                        label : 'Tradeshow',
                        value : 'active',
                        rules : 'required',
                        post  : null,
                        data  : []
                    },
                    brand : {
                        fieldType: 'text-field',
                        label : 'Brand',
                        value : 'brand',
                        rules : 'required',
                        post  : null,
                        data  : []
                    },
                    childCampaign : {
                        fieldType: 'combobox',
                        disabled: false,
                        label: 'Child Campaign',
                        value: 'childCampaign',
                        rules : 'required',
                        post: null,
                        data: []
                    },
                },
            }
        },

        methods: {
            payloadMount () {
                let request = this.payload
                let payload = {}

                // Add payload form inputs
                Object.keys(request).forEach(function (value) {
                    payload[value] = request[value].post;
                });

                return payload;
            },

            cleanForm () {
                let self = this;

                //Clean Form
                Object.keys(self.payload).forEach(function (value) {
                    self.payload[value].post = null
                });

                this.loadComboBox();
            },

            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.postCampaign();

                        console.log('Form Submitted!');
                    } else {
                        this.validateForm = null;
                        console.log('Correct them errors!');
                    }
                });
            },

            comboBoxMount (response, data) {
                this.payload[data].data = response.data;

                this.$nextTick(function () {
                    $('.selectpicker').selectpicker();
                    $('.selectpicker').selectpicker('refresh');
                })
            },

            getCampaignsStatusList () {
                let self = this;
                // Send a POST request
                axios({
                    method: 'get',
                    url: 'get-brands-only',
                })

                .then(function (response) {
                    console.log(response.data.brands);

                    // Init ComboBox
                    self.comboBoxMount(response.data.brands, 'brand');

                })
                .catch(function (error) {
                });
            },

            getCampaignsChild () {
                let self = this
                let payload = {}
                    payload.parent   = false

                // Send a POST request
                axios({
                    method: 'post',
                    url: 'get-campaign-parent',
                    data : payload,
                })

                .then(function (response) {
                    console.log(response.data.campaign);

                    // Init ComboBox
                    self.comboBoxMount(response.data.campaign, 'childCampaign');

                })
                .catch(function (error) {
                });
            },

            getActiveFairs (instance) {
                // Send a POST request
                axios({
                    method: 'post',
                    url: 'get-active-fairs',
                })

                .then(function (response) {
                    instance.comboBoxMount(response.data.fairs, 'active');

                })
                .catch(function (error) {
                });
            },

            postCampaign () {
                let self    = this;
                let payload = this.payloadMount();

                // Send a POST request
                axios({
                    method : 'post',
                    url    : 'associate-child-campaign',
                    data   : payload
                })

                .then(function (response) {
                    // Show success modal
                    $('#modal-success').modal('show');
                })
                .catch(function (error) {
                    // Show success modal
                    $('#modal-error').modal('show');
                });
            },
        },

        mounted() {
            // Get Campaign Status
            this.getCampaignsStatusList();

            // Get Campaign Parent
            this.getCampaignsChild();

            //Get active fairs
            this.getActiveFairs(this);
        }
    }
</script>


