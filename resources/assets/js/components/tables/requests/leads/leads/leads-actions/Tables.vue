<style scoped>
    #table_wrapper {
        min-height: 361px;
    }

    td {
        text-overflow: ellipsis!important;
        width: 5px!important;
        white-space: nowrap!important;
        overflow: hidden!important;
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

                            <td><a @click="editLead(data[index].id)"> <i style="color: #2fbab7;" class="material-icons">&#xE22B;</i> </a></td>
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
export default {
    data () {
        return {
            brand: null,
            message: 'Hello! %0D%0A This is (nome do embaixador)! %0D%0A Thank you for following BRABBU. %0D%0A Find our new pieces here ( https://goo.gl/GbGst5) Best!',
            isLoading: true,
            tableName: null,
            tableId: null,
            columns: null,
            data: null,
            errorMessage: null,
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
                    order: [[ 0, 'desc' ]],
                    lengthMenu: [
                        [ 10, 25, 50, -1 ],
                        [ '10 rows', '25 rows', '50 rows', 'Show all' ]
                    ],
                    columnDefs: [{
                        targets: [0], //Comma separated values
                        visible: false,
                        searchable: false
                    }],
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
                    buttons: [
                        //{extend: 'pdfHtml5', text: '<i class="material-icons">picture_as_pdf</i>', orientation: 'landscape', pageSize: 'LEGAL', exportOptions: {columns: ':visible'}},
                        //{extend: 'print', text: '<i class="material-icons">print</i>', exportOptions: {columns: ':visible'}},
                        {
                            extend: 'colvis',
                            text: '<i class="material-icons">visibility</i>',
                            postfixButtons: ['colvisRestore']
                        },
                        {
                            text: '<i class="material-icons">settings_backup_restore</i>', action: function () {
                            window[instanceName].colReorder.reset();
                        },
                        }
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
                            $('#' + instanceName + 'modal').modal('show');
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

        // Edit Lead
        editLead: function(id) {
            window.location.href = window.location.pathname + '/edit/' + id
        },
    },

    mounted () {
        // Get User Brand
        this.brand = parseInt(Grants.brand);
    }
}
</script>