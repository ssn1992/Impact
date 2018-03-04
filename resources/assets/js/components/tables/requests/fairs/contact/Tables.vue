<style scoped>
    #table_wrapper {
        min-height: 361px;
    }

    .btn.disabled, .btn[disabled], fieldset[disabled] .btn {
        cursor: auto;
    }
</style>

<template>
    <div>
        <div class="modal inmodal fade" id="modal-success-sf" tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">Success</h4>
                    </div>
                    <div class="modal-body" style="text-align: center; display: block;">
                        <div class="row">
                            <img style="width: 100px;height: 100px;" src="/images/icons/icon-salesforce-active.png">
                        </div>

                        <small class="font-bold"> Contact added to SF</small><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Error Modal -->
        <div class="modal inmodal fade" id="error-modal" tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">Please try again later</h4>
                    </div>
                    <div class="modal-body" style="text-align: center; display: block;">
                        <i class="fa fa-warning fa-5x text-danger" style="display: block;"></i>
                        <small class="font-bold text-danger"> Error </small><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Error Modal -->
        <div class="modal inmodal fade" v-bind:id='tableId + "modal"' tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">Please try again later</h4>
                    </div>
                    <div class="modal-body" style="text-align: center; display: block;">
                        <i class="fa fa-warning fa-5x text-danger" style="display: block;"></i>
                        <small class="font-bold text-danger"> {{ errorMessage }}</small><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Cross Modal -->
        <div class="modal inmodal fade" id="form-contact-edit" tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
            <div class="modal-dialog modal-md" style="width: 80%;">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">Edit Contact</h4>
                    </div>

                    <form @submit.prevent="validateBeforeSubmit(payload)" id="form-section-contact">

                        <div class="modal-body">
                            <div class="row">
                                <div class="col-lg-12">
                                        <div v-for="(data, index) in payload" v-model="payload">
                                            <div v-if="data.fieldType == 'text-field' && data.value != 'moreinfo'" class="form-group col-lg-4 padding-bottom" :class="{'has-error': errors.has(data.value)}">
                                                <label class="label">{{ data.label }}</label>

                                                <input v-model="data.post" :name=data.value  v-validate :data-vv-rules=data.rules :data-vv-validate-on="validateForm" class="input form-control" type="text" :placeholder="data.label"/>
                                                <span v-show="errors.has(data.value)" class="help-block text-danger text-center">
                                                <strong>{{ errors.first(data.value) }}</strong>
                                            </span>
                                            </div>

                                            <div v-else-if="data.fieldType == 'combobox' && payload[index].disabled == false" class="col-lg-4 ">
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

                                        <div class="form-group col-lg-12 padding-bottom" :class="{'has-error': errors.has(payload.moreinfo.value)}">
                                            <label class="label">{{ payload.moreinfo.label }}</label>

                                            <textarea rows="5" v-model="payload.moreinfo.post" :name=payload.moreinfo.value  v-validate :data-vv-rules=payload.moreinfo.rules :data-vv-validate-on="validateForm" class="input form-control" type="text" :placeholder="payload.moreinfo.label"></textarea>
                                            <span v-show="errors.has(payload.moreinfo.value)" class="help-block text-danger text-center">
                                                <strong>{{ errors.first(payload.moreinfo.value) }}</strong>
                                            </span>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button class="btn btn-white" type="submit"  data-dismiss="modal">Cancel</button>
                            <button  class="ladda-button ladda-button-selector btn btn-primary" data-style="zoom-in" type="submit">Edit Contact
                                <i class="material-icons" style="font-size: 16px">&#xE22B;</i>
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Loader -->
        <div id="isLoading" v-if="isLoading">
            <div>
                <div class="vue-simple-spinner"></div>
            </div>
        </div>

        <div  class="ibox float-e-margins ">
            <div class="ibox-title">
                <h5 v-if="!errorMessage"> {{ tableName }}</h5>
                <h5 v-else class="text-danger"> {{ tableName }}</h5>

                <div class="ibox-tools">
                    <a class="collapse-link">
                        <i class="fa fa-chevron-up"></i>
                    </a>
                    <a class="close-link">
                        <i class="fa fa-times"></i>
                    </a>
                </div>
            </div>

            <div id="table_wrapper" class="ibox-content">
                <table v-if="data" v-bind:id='tableId' class="mdl-data-table display nowrap mdl-typography--text-center" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th v-for="column in columns">
                                {{ column }}
                            </th>

                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="data">
                        <tr v-for="(value, index) in data">
                            <td v-for="(value, internalIndex) in data[index]">
                                <span v-if="(internalIndex === 'SF')">
                                    <img v-if="value != false" style="width:45px; height:45px;" src="/images/icons/icon-salesforce-active.png"/>
                                    <a v-model="data[index]" @click="resendSf(data[index].id, data[index])" v-bind:title="value" ><img v-if="value === false" style="width:45px; height:45px;" src="/images/icons/icon-salesforce-inactive.png"/></a>
                                </span>

                                <span v-else-if="(internalIndex === 'Phone' || internalIndex === 'Mobile') && brand === 2">
                                    <a target="_blank" v-bind:href="'https://api.whatsapp.com/send?phone='+value+'&text=' + message">
                                        {{ value }}
                                    </a>
                                </span>

                                <span v-else>
                                    {{ value }}
                                </span>

                            </td>

                            <td><a @click="editContact(data[index].id)"> <i style="color: #2fbab7;" class="material-icons">&#xE22B;</i> </a></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th v-for="column in columns">
                                <input style="text-align: center; outline: none; border: none;" type="text" v-bind:placeholder="column"/>
                            </th>

                            <th>
                                Actions
                            </th>

                        </tr>
                    </tfoot>
                </table>

                <table v-else v-bind:id='tableId' class="mdl-data-table display nowrap" cellspacing="0" width="100%" style="min-height:127px;">
                    <thead>
                    <tr><th></th></tr>
                    </thead>
                    <tbody></tbody>
                </table>
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
            brand: null,
            message: 'Hello! %0D%0A We hope you enjoyed visiting BRABBU Stand at Maison et Objet. %0D%0A Don’t miss any detail of BRABBU’s collection and download now our digital catalogue, for free - %0D%0A https://goo.gl/D6uGfA %0D%0A Thank you!',
            id: null,
            isLoading: true,
            tableName: null,
            tableId: null,
            columns: null,
            data: null,
            errorMessage: null,

            validateForm: 'none',
            payload: {
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
                    label : 'City',
                    value : 'city',
                    rules : 'required',
                    post  : null,
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
                    label : 'Zip Code',
                    value : 'zipCode',
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

                moreinfo         : {
                    fieldType: 'text-field',
                    label : 'Moreinfo',
                    value : 'moreinfo',
                    rules : '',
                    post  : null,
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
            }
        }
    },

    methods: {
        resendSf (id, record) {
            let payload    = {};
                payload.id = id;

            // Send a POST request
            axios({
                method: 'post',
                url: 'resend-sf',
                data: payload
            })

                .then(function (response) {
                    console.log('succcess');
                    record.SF = true;

                    // Show success modal
                    $('#modal-success-sf').modal('show');
                })
                .catch(function (error) {
                    console.log('error');

                    $('#error-modal').modal('show');
                    record.SF = false;
                });
        },

        comboBoxMount () {
            this.$nextTick(function () {
                $('.selectpicker').selectpicker();
                $('.selectpicker').selectpicker('refresh');
            })
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

        // Update Data instance
        updateData(isUpdate = false, response) {

            this.errorMessage = null;
            // If Table instance is already created destroy previous
            if (isUpdate) {
                window[this.tableId].destroy();
            }

            //Update Data
            this.tableId   = response.tableId
            this.tableName = response.tableName,
            this.data      = response.data,
            this.columns   = response.columns,

            this.$nextTick(function () {
                // Create Table Instance
                this.createTable(this.tableId, false, isUpdate);
            })
        },

        // Update Data instance if an error occurred
        updateDataWithError(isUpdate = false, response, error) {
            // If Table instance is already created destroy previous
            if (isUpdate) {
                // Create Table Instance
                window[this.tableId].destroy();
            }

            // Set Error message
            if (error != undefined) {
                this.errorMessage = error.statusText;
            } else {
                this.errorMessage = 'Error';
            }

            // Update data
            this.tableId   = response
            this.tableName = 'Table - ' + this.errorMessage;
            this.data      = null
            this.columns   = null,

            this.$nextTick(function () {
                // Create Table Instance
                this.createTable(this.tableId, true);
            })
        },

        // Create Table instance
        createTable(instanceName, error = false, isUpdate = false) {
            let excelExportFlag = false;
            if (window.Grants.roles === 'Admin' ||
                window.Grants.roles === 'Accounter' ||
                window.Grants.roles === 'WebPR') {
                excelExportFlag = true;
            }
            /**
             * Create Data Table function
             *
             * @param instanceName
             */
            var self = this;

            if (excelExportFlag) {
                window[instanceName] = $('#' + instanceName).DataTable({
                    dom: 'Bfrtip',
                    sScrollX: "100%",
                    stateSave: true,
                    colReorder: true,
                    lengthChange: false,
                    order: [[ 0, 'desc' ]],
                    lengthMenu: [
                        [ 10, 25, 50, -1 ],
                        [ '10 rows', '25 rows', '50 rows', 'Show all' ]
                    ],
                    columnDefs: [{
                        targets: [0], //Comma separated values
                        visible: false,
                        searchable: false }
                    ],
                    buttons: [
                        {extend: 'pageLength',titleAttr: 'Page Lenght'},
                        {extend: 'excelHtml5', text: '<i class="icon-excel"></i>', exportOptions: {columns: ':visible'}},
                        //{extend: 'pdfHtml5', text: '<i class="material-icons">picture_as_pdf</i>', orientation: 'landscape', pageSize: 'LEGAL', exportOptions: {columns: ':visible'}},
                        //{extend: 'print', text: '<i class="material-icons">print</i>', exportOptions: {columns: ':visible'}},
                        {extend: 'colvis', text: '<i class="material-icons">visibility</i>', postfixButtons: ['colvisRestore']},
                        {text: '<i class="material-icons">settings_backup_restore</i>', action : function () { window[instanceName].colReorder.reset(); },}
                    ],
                    oLanguage: {
                        oPaginate:
                            {
                                "sNext": '<i class="material-icons">chevron_right</i>',
                                "sPrevious": '<i class="material-icons">chevron_left</i>'
                            }
                    },
                    initComplete: function () {
                        // Stop Loader
                        self.isLoading = false;

                        if (error) {
                            // Show error modal
                            $('#' + instanceName+ 'modal').modal('show');
                        }
                    },
                });

                window[instanceName]
                    .column( '0:visible' )
                    .order( 'desc' )
                    .draw();

                // Apply the search
                window[instanceName].columns().every( function () {
                    var that = this;

                    $( 'input', this.footer() ).on( 'keyup change', function () {
                        if ( that.search() !== this.value ) {
                            that
                                .search( this.value )
                                .draw();
                        }
                    } );
                } );

            } else {
                window[instanceName] = $('#' + instanceName).DataTable({
                    dom: 'Bfrtip',
                    sScrollX: "100%",
                    stateSave: true,
                    colReorder: true,
                    order: [[ 0, 'desc' ]],
                    lengthMenu: [
                        [ 10, 25, 50, -1 ],
                        [ '10 rows', '25 rows', '50 rows', 'Show all' ]
                    ],
                    columnDefs: [{
                        targets: [0], //Comma separated values
                        visible: false,
                        searchable: false }
                    ],
                    buttons: [
                        {extend: 'pageLength',titleAttr: 'Page Lenght'},
                        //{extend: 'pdfHtml5', text: '<i class="material-icons">picture_as_pdf</i>', orientation: 'landscape', pageSize: 'LEGAL', exportOptions: {columns: ':visible'}},
                        //{extend: 'print', text: '<i class="material-icons">print</i>', exportOptions: {columns: ':visible'}},
                        {extend: 'colvis', text: '<i class="material-icons">visibility</i>', postfixButtons: ['colvisRestore']},
                        {text: '<i class="material-icons">settings_backup_restore</i>', action : function () { window[instanceName].colReorder.reset(); },}
                    ],
                    oLanguage: {
                        oPaginate:
                            {
                                "sNext": '<i class="material-icons">chevron_right</i>',
                                "sPrevious": '<i class="material-icons">chevron_left</i>'
                            }
                    },
                    initComplete: function () {
                        // Stop Loader
                        self.isLoading = false;

                        if (error) {
                            // Show error modal
                            $('#' + instanceName+ 'modal').modal('show');
                        }
                    },
                });

                window[instanceName]
                    .column( '0:visible' )
                    .order( 'desc' )
                    .draw();

                // Apply the search
                window[instanceName].columns().every( function () {
                    var that = this;

                    $( 'input', this.footer() ).on( 'keyup change', function () {
                        if ( that.search() !== this.value ) {
                            that
                                .search( this.value )
                                .draw();
                        }
                    } );
                } );
            }
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

        // Update Data instance if an error occurred
        editContact: function(id) {

            var payload = {};
                payload.id = id;

            console.log(id);

            var instance = this;

            // Show error modal

            // Send a POST request
            axios({
                method: 'post',
                url: 'edit/tradeshow/user',
                data: payload
            })

            .then(function (response) {
                //instance.comboBoxMount(response.data.fairs, 'fair');
                console.log(response.data.editUser);

                // Init ComboBox
                instance.comboBoxMountEditUser(response, payload.id)


            })
            .catch(function (error) {

            });
        },

        comboBoxMount (response, data) {
            this.payload[data].data = response.data;

            this.$nextTick(function () {
                $('.selectpicker').selectpicker();
                $('.selectpicker').selectpicker('refresh');
            })
        },

        comboBoxMountEditUser (response, id) {
            this.id                       = id;
            this.fair                     = response.data.editUser.fair;;
            this.payload.address.post     = response.data.editUser.address;
            this.payload.zipCode.post     = response.data.editUser.zipCode;
            this.payload.cat.post         = response.data.editUser.cat;
            this.payload.city.post        = response.data.editUser.city;
            this.payload.country.post     = response.data.editUser.country;
            this.payload.email.post       = response.data.editUser.email;
            this.payload.firstName.post   = response.data.editUser.firstName;
            this.payload.industry.post    = response.data.editUser.industry;
            this.payload.jobPosition.post = response.data.editUser.jobPosition;
            this.payload.lastName.post    = response.data.editUser.lastName;
            this.payload.moreinfo.post    = response.data.editUser.moreinfo;
            this.payload.phone.post       = response.data.editUser.phone;
            this.payload.mobile.post      = response.data.editUser.mobile;
            this.payload.company.post     = response.data.editUser.company;
            this.payload.website.post     = response.data.editUser.website;

            if (this.payload.country.post == 234) {

                this.payload.state.disabled = false;
                this.$nextTick(function () {
                    this.payload.state.post = response.data.editUser.state;
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

            this.$nextTick(function () {
                $('.selectpicker').selectpicker();
                $('.selectpicker').selectpicker('refresh');
            })

                $('#form-contact-edit').modal('show');
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


        validateBeforeSubmit(request) {
            var instance = this;
            this.$validator.validateAll().then((result) => {
                if (result) {
                    var payload      = {};
                        payload.id   = instance.id;
                        payload.fair = instance.fair;

                    Object.keys(request).forEach(function (value) {
                        payload[value] = request[value].post;
                    })

                    instance.postEditFairUser(payload);

                    console.log(payload);

                    console.log('Form Submitted!');

                    return;
                } else {
                    this.validateForm = null;
                    console.log('Correct them errors!');
                }
            });
        },

        valueWatcherNet(id, name) {
            var id =  $('.selectpicker option:selected > .'+ name).attr('id');

            return parseInt(id);
        },

        postEditFairUser (payload) {
            window.l = Ladda.create(document.querySelector( '.ladda-button-selector'));
            window.l.start();

            // Send a POST request
            axios({
                method: 'post',
                url: 'fairs/edit',
                data: payload
            })

            .then(function (response) {
                console.log(response);

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
                console.log(error);
                
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
    },

    mounted() {
        // Get country list
        this.getCountryList(this);

        // Get state list
        this.getStateList(this);

        // Get tradeshow list
        this.getTradeshowCat(this);

        // Get Industry
        this.getIndustry(this);

        // Get User Brand
        this.brand = parseInt(Grants.brand);
    }
}
</script>