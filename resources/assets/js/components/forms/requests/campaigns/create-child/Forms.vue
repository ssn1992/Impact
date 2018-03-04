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
                        <small class="font-bold"> Parent Campaign Created </small><br>
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
                            <small class="font-bold"> Campaign Created </small><br>
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
                    <h5> Create Child Campaign</h5>

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

                                <div style="padding-top: 4px; padding-left: 30px; padding-right: 30px;" class="col-lg-12 form-group padding-bottom" :class="{'has-error': errors.has(payload.parentCampaign.value)}">
                                    <label class="label" style="display: table-cell">{{ payload.parentCampaign.label }}</label>

                                    <select v-validate :data-vv-rules=payload.parentCampaign.rules :data-vv-validate-on="validateForm" title="Please choose one of the following options" :name=payload.parentCampaign.value  data-live-search="true" v-model=payload.parentCampaign.post class="selectpicker">
                                        <option :value="values.value" v-for="values in payload.parentCampaign.data">
                                            <span v-bind:id="values.value"></span>
                                            {{ values.label }}
                                        </option>
                                    </select>
                                    <span v-show="errors.has(payload.parentCampaign.value)" class="help-block text-danger text-center">
                                        <strong>{{ errors.first(payload.parentCampaign.value) }}</strong>
                                    </span>
                                </div>


                                <div class="form-group col-lg-12 padding-bottom" style="padding-bottom: 20px">
                                    <div style="text-align: center; width: 100%" class="col-lg-12">
                                        <label style="display: inline-block; width: 100%;" class="label">Date Range</label>
                                    </div>

                                    <div class="col-lg-6" style="padding-left: 0;padding-right: 0; padding-bottom: 5px;">
                                        <!-- Date Picker-->
                                        <date-picker style="width: 100%; padding-left: 0;padding-right: 0; text-align: center;" v-model="payload.dateFrom.post" id="date-from"  title="from" :date="startTime" :option="option"></date-picker>

                                        <div style="text-align: center; width: 100%">
                                            <label style="display: inline-block; width: 95%;" class="label">Date From</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-6" style="padding-left: 0;padding-right: 0;">
                                        <date-picker style="width: 100%; padding-left: 0;padding-right: 0; text-align: center;" v-model="payload.dateTo.post" id="date-to" title="to" :date="endtime" :option="option"></date-picker>

                                        <div style="text-align: center; width: 100%">
                                            <label style="display: inline-block; width: 95%;" class="label">Date To</label>
                                        </div>
                                    </div>
                                </div>

                                <div style="padding-left: 30px;" class="form-group col-lg-6 padding-bottom" :class="{'has-error': errors.has(payload.name.value)}">
                                    <label class="label">{{ payload.name.label }}</label>

                                    <input v-model="payload.name.post" :name=payload.name.value  v-validate :data-vv-rules=payload.name.rules :data-vv-validate-on="validateForm" class="input form-control" leadType="text" :placeholder="payload.name.label"/>
                                    <span v-show="errors.has(payload.name.value)" class="help-block text-danger text-center">
                                        <strong>{{ errors.first(payload.name.value) }}</strong>
                                    </span>
                                </div>

                                <div style="padding-top: 4px; padding-right: 30px;" class="col-lg-6 form-group padding-bottom" :class="{'has-error': errors.has(payload.status.value)}">
                                    <label class="label" style="display: table-cell">{{ payload.status.label }}</label>

                                    <select v-validate :data-vv-rules=payload.status.rules :data-vv-validate-on="validateForm" title="Please choose one of the following options" :name=payload.status.value  data-live-search="true" v-model=payload.status.post class="selectpicker">
                                        <option :value="values.value" v-for="values in payload.status.data">
                                            <span v-bind:id="values.value"></span>
                                            {{ values.label }}
                                        </option>
                                    </select>
                                    <span v-show="errors.has(payload.status.value)" class="help-block text-danger text-center">
                                        <strong>{{ errors.first(payload.status.value) }}</strong>
                                    </span>
                                </div>

                                <div class="col-lg-12">
                                    <button  class="ladda-button ladda-button-selector btn btn-primary" data-style="zoom-in" leadType="submit">Create Child Campaign
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

    // Date Picker import
    import datePicker from '../../../../date-picker/DatePicker.vue'

    export default {
        components: {
            'date-picker': datePicker,
        },

        data () {
            return {
                validateForm: 'none',
                warningMessage : null,
                payload: {
                    dateFrom : {
                        fieldType: 'text-field',
                        label: 'Name',
                        value: 'dateFrom',
                        rules: 'required',
                        post  : window.moment(new Date()).format("YYYY-MM-DD"),
                    },
                    dateTo : {
                        fieldType: 'text-field',
                        label: 'Name',
                        value: 'dateTo',
                        rules: 'required',
                        post  : window.moment(new Date()).format("YYYY-MM-DD"),
                    },

                    name : {
                        fieldType: 'text-field',
                        label: 'Name',
                        value: 'name',
                        rules: 'required',
                        post  : null,
                    },
                    status : {
                        fieldType: 'combobox',
                        disabled: false,
                        label: 'Status',
                        value: 'status',
                        rules : 'required',
                        post: null,
                        data: []
                    },

                    parentCampaign : {
                        fieldType: 'combobox',
                        disabled: false,
                        label: 'Parent Campaign',
                        value: 'parentCampaign',
                        rules : 'required',
                        post: null,
                        data: []
                    },
                },

                startTime: {
                    time: window.moment(new Date()).format("YYYY-MM-DD")
                },
                endtime: {
                    time: window.moment(new Date()).format("YYYY-MM-DD")
                },
                option: {
                    type: 'day',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'YYYY-MM-DD',
                    placeholder: 'when?',
                    color: {
                        day: '#2fbab7',
                        checked: '#2fbab7',
                        header: '#2fbab7',
                        headerText: '#fff'
                    },
                    buttons: {
                        ok: 'Ok',
                        cancel: 'Cancel',
                    },
                    overlayOpacity: 0.5, // 0.5 as default
                    dismissible: true // as true as default
                },
                timeoption: {
                    type: 'min',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'YYYY-MM-DD HH:mm'
                },
                multiOption: {
                    type: 'multi-day',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format:"YYYY-MM-DD HH:mm"
                },
                limit: [
                    {
                        type: 'fromto',
                        to: window.moment(new Date())
                    }]
            }
        },

        methods: {
            payloadMount () {
                let request = this.payload
                let payload = {}

                this.payload.dateFrom.post = this.startTime.time
                this.payload.dateTo.post = this.endtime.time

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
                    method: 'post',
                    url: 'get-campaign-status-list',
                })

                .then(function (response) {
                    console.log(response);

                    // Init ComboBox
                    self.comboBoxMount(response.data.status, 'status');

                })
                .catch(function (error) {
                });
            },

            getCampaignsParent () {
                let self = this
                let payload = {}
                    payload.parent   = true

                // Send a POST request
                axios({
                    method: 'post',
                    url: 'get-campaign-parent',
                    data : payload,
                })

                .then(function (response) {
                    console.log(response.data.campaign);

                    // Init ComboBox
                    self.comboBoxMount(response.data.campaign, 'parentCampaign');

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
                    url    : 'create-parent-campaign',
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
            this.getCampaignsParent();

        }
    }
</script>


