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
                            <small class="font-bold"> Brand Access Inserted </small><br>
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
                    <h5> Insert Brand Access</h5>

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
                                    <div v-if="data.fieldType == 'text-field'" class="form-group col-lg-12 padding-bottom" :class="{'has-error': errors.has(data.value)}">
                                        <label class="label">{{ data.label }}</label>

                                        <input v-model="data.post" :name=data.value  v-validate :data-vv-rules=data.rules :data-vv-validate-on="validateForm" class="input form-control" type="text" :placeholder="data.label"/>
                                        <span v-show="errors.has(data.value)" class="help-block text-danger text-center">
                                            <strong>{{ errors.first(data.value) }}</strong>
                                        </span>
                                    </div>

                                    <div v-else-if="data.fieldType == 'combobox' && payload[index].disabled == false" class="col-lg-6 ">
                                        <div class="form-grouppadding-bottom" style="padding-bottom: 30px" :class="{'has-error': errors.has(data.value)}">
                                            <label class="label" style="display: table-cell">{{ data.label }}</label>

                                            <select v-validate :data-vv-rules=data.rules :data-vv-validate-on="validateForm"  v-bind:id="index" v-bind:disabled="data.disabled" title="Please choose one of the following options" :name=data.value  data-live-search="true" v-model=payload[index].post class="selectpicker">
                                                <option :value="values.value" v-for="values in payload[index].data">

                                                    <span v-bind:id="values.value"></span>

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
                                    <button  class="ladda-button ladda-button-selector btn btn-primary" data-style="zoom-in" type="submit">Insert Brand Access
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
                    brands : {
                        disabled: false,
                        fieldType: 'combobox',
                        label: 'Brand',
                        value: 'brands',
                        rules : 'required',
                        post: null,
                        data: [],
                    },
                    brandsAccess : {
                        disabled: false,
                        fieldType: 'combobox',
                        label: 'Brands Access',
                        value: 'brandsAccess',
                        rules : 'required',
                        post: null,
                        data: [],
                    },
                }
            }
        },

        methods: {
            comboBoxMount(response, data) {
                this.payload[data].data = response.data;

                this.$nextTick(function () {
                    $('.selectpicker').selectpicker();
                    $('.selectpicker').selectpicker('refresh');
                })
            },

            postInsertBrandAccess(payload) {
                window.l = Ladda.create(document.querySelector('.ladda-button-selector'));
                window.l.start();

                // Send a POST request
                axios({
                    method: 'post',
                    url: 'closed-list/brand-access-insert',
                    data: payload
                })

                    .then(function (response) {
                        window.closedTable.tablesRequest("table-brands-access", true);

                        window.l.stop();
                        $('.ladda-button-selector').fadeIn(1000, function () {
                            $(this).append('<i style="padding-left: 5px;" class="fa fa-check"></i>');
                        });

                        setTimeout(function () {
                            $('.ladda-button-selector > .fa-check').fadeOut(1000, function () {
                                $(this).removeClass('fa-check')
                            });

                        }, 1000)

                        // Show success modal
                        $('#modal-success').modal('show');

                    })
                    .catch(function (error) {
                        window.l.stop();

                        $('.ladda-button-selector').fadeIn(1000, function () {
                            $(this).append('<i style="padding-left: 5px;" class="fa fa-close"></i>').addClass('btn-danger');
                        });

                        setTimeout(function () {
                            $('.ladda-button-selector > .fa-close').fadeOut(1000, function () {
                                $(this).remove();
                            });
                            $('.ladda-button-selector').removeClass('btn-danger');
                        }, 1000)

                        // Show success modal
                        $('#modal-error').modal('show');
                    });
            },

            validateBeforeSubmit(request) {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        var payload = {};

                        Object.keys(request).forEach(function (value) {
                            payload[value] = request[value].post;
                        })

                        this.postInsertBrandAccess(payload);

                        console.log(payload);

                        console.log('Form Submitted!');

                        return;
                    } else {
                        this.validateForm = null;
                        console.log('Correct them errors!');
                    }
                });
            },

            getBrandList (instance) {
                // Send a POST request
                axios({
                    method: 'get',
                    url: 'get-brands-only',
                })

                .then(function (response) {
                    // Init ComboBox
                    instance.comboBoxMount(response.data.brands, 'brands');

                    // Init ComboBox
                    instance.comboBoxMount(response.data.brands, 'brandsAccess');

                })
                .catch(function (error) {

                });
            },

        },
        mounted() {
            // Get Brands List
            this.getBrandList(this);
        }
    }
</script>

