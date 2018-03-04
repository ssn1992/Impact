<style scoped>
    #table_wrapper {
        min-height: 361px;
    }

    .btn.disabled, .btn[disabled], fieldset[disabled] .btn {
        cursor: auto;
    }

    #form-contact-description > .modal-dialog.modal-md > .modal-content > .modal-body > .modal-body > .row > .col-lg-12.ui-sortable > .form-group.col-lg-12.padding-bottom.ui-sortable > .label {
        background-color: #2fbab7!important;
        color: #fff!important;
    }

    .form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {
        background-color: #FFFFFF;
        background-image: none;
        border: 1px solid #e5e6e7;
        border-radius: 1px;
        color: inherit;
        display: block;
        padding: 6px 12px;
        transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
        width: 100%;
        font-size: 14px;
        cursor: auto;
    }
</style>

<template>
    <div>
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

        <!-- Error Modal -->
        <div class="modal inmodal fade" id="form-contact-description" tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">Bug Description</h4>
                    </div>
                    <div class="modal-body" style="text-align: center; display: block;">
                        <div class="modal-body">
                            <div v-model="description" class="row">
                                <div class="col-lg-12">
                                    <div style="margin-bottom: 0;" class="form-group col-lg-12 padding-bottom">
                                        <textarea rows="10" disabled v-model="description"  class="input form-control" type="text"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Cross Modal -->
        <div class="modal inmodal fade" id="form-contact-edit" tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
            <div class="modal-dialog modal-md" style="width: 40%;">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">Edit Bug Report</h4>
                    </div>

                    <form @submit.prevent="validateBeforeSubmit(payload)" id="form-section-contact">

                        <div class="modal-body">
                            <div v-model="payload" class="row">
                                <div class="col-lg-12">
                                    <div style="margin-bottom: 0;" class="form-group col-lg-12 padding-bottom" :class="{'has-error': errors.has(payload.adminResponse.value)}">
                                        <label class="label">{{ payload.adminResponse.label }}</label>

                                        <div class="input-group"><span class="input-group-addon"> <input v-model="payload.status.post" :name=payload.status.value type="checkbox"> </span>

                                            <textarea v-model="payload.adminResponse.post" :name=payload.adminResponse.value  v-validate :data-vv-rules=payload.adminResponse.rules :data-vv-validate-on="validateForm" class="input form-control" type="text" :placeholder="payload.adminResponse.label"></textarea>
                                            <span v-show="errors.has(payload.adminResponse.value)" class="help-block text-danger text-center">
                                            <strong>{{ errors.first(payload.adminResponse.value) }}</strong>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button class="btn btn-white" type="submit"  data-dismiss="modal">Cancel</button>
                            <button  class="ladda-button ladda-button-selector btn btn-primary" data-style="zoom-in" type="submit"> Save
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
                            <td v-for="value in data[index]"> {{ value }} </td>

                            <td>
                                <a style="margin-left: 10px;" title="Bug Report" @click="editBug(data[index].id)"> <i style="color: #2fbab7;" class="material-icons">&#xE22B;</i> </a>
                                <a style="margin-left: 10px;" title="Description" @click="showBugDescription(data[index].Bug)"> <i style="color: #2fbab7;" class="material-icons">&#xE8F4;</i></a>
                                <a style="margin-left: 10px;" title="Delete" @click="deleteField(data[index].id)"> <i style="color: #ED5565;" class="material-icons">&#xE5C9;</i></a>
                            </td>
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
            isLoading: true,
            tableName: null,
            tableId: null,
            columns: null,
            data: null,
            errorMessage: null,
            validateForm: 'none',
            id : null,
            description : null,

            payload: {
                status : {
                    fieldType: 'combo-box',
                    label: 'Status',
                    value: 'status',
                    rules: '',
                    post  : false,
                },
                adminResponse : {
                    fieldType: 'text-field',
                    label: 'Status / Admin Response',
                    value: 'adminResponse',
                    rules: 'required',
                    post  : null,
                },
            }
        }
    },

    methods: {
        // *****************************
        // ***** Private functions *****
        // *****************************
        /**
         *
         * _tablesRequest
         *
         * Tables Component Component POST
         *
         * @param isUpdate
         * @param instance
         * @param payload
         * @private
         */
        tablesRequest(_request, isUpdate = false) {
            let self = this;

            // Show Loader
            self.isLoading = true;

            // Send a POST request
            axios({
                method: 'post',
                url: 'tables/' + _request,
            })

                .then(function (response) {
                    // Update Instance Data
                    self.updateData(isUpdate, response.data.table);
                })
                .catch(function (error) {
                    // Update Instance Data with error
                    self.updateDataWithError(isUpdate, _request, error.response);
                });
        },

        postEditBug (payload) {
            let self = this;
            window.l = Ladda.create(document.querySelector( '.ladda-button-selector'));
            window.l.start();

            // Send a POST request
            axios({
                method: 'post',
                url: 'edit/bug-report',
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

                self.tablesRequest("bug-report-table", true);
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
            var instance = this;
            this.$validator.validateAll().then((result) => {
                if (result) {
                    var payload      = {};
                        payload.id      = instance.id;

                    Object.keys(request).forEach(function (value) {
                        payload[value] = request[value].post;
                    })

                    instance.postEditBug(payload);

                    console.log(payload);

                    console.log('Form Submitted!');

                    return;
                } else {
                    this.validateForm = null;
                    console.log('Correct them errors!');
                }
            });
        },

        deleteField(id) {
            // Create payload {id}
            let payload    = {}
                payload.id = id;

            let self = this;

            // Send a POST request
            axios({
                method: 'post',
                url: 'tables/bug-report-table/delete',
                data: payload
            })

            .then(function (response) {
                self.tablesRequest("bug-report-table", true);
            })
            .catch(function (error) {
            });
        },

        showBugDescription: function(description) {
            this.description = description;

            this.$nextTick(function () {
                // Show Description
                $('#form-contact-description').modal('show');
            });
        },

        // Update Data instance if an error occurred
        editBug: function(id) {

            var payload = {};
                payload.id = id;

            console.log(id);

            var instance = this;

            // Show error modal

            // Send a POST request
            axios({
                method: 'post',
                url: 'get-bug-report-id',
                data: payload
            })

                .then(function (response) {
                    console.log(response);
                    // Init ComboBox
                    instance.comboBoxMountEditBug(response, payload.id)
                })
                .catch(function (error) {

                });
        },

        comboBoxMountEditBug (response, id) {
            console.log(response.data.editBug);
            this.id                         = id;
            this.payload.status.post        = response.data.editBug.status;
            this.payload.adminResponse.post = response.data.editBug.adminResponse;

            $('#form-contact-edit').modal('show');
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
            /**
             * Create Data Table function
             *
             * @param instanceName
             */
            var self = this;
            window[instanceName] = $('#' + instanceName).DataTable({
                dom: 'Bfrtip',
                sScrollX: "100%",
                stateSave: true,
                colReorder: true,
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
        },
    },
    mounted() {
        $(document).ready(function () {
            $('.i-checks').iCheck({
                checkboxClass: 'icheckbox_square-green',
                radioClass: 'iradio_square-green',
            });
        });
    }
}
</script>