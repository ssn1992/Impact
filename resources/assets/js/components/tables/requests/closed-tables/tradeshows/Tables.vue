<style scoped>
    #table_wrapper {
        min-height: 361px;
    }
</style>

<template>
    <div>
        <div class="modal inmodal fade" id="modal-success-active" tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">Success</h4>
                    </div>
                    <div class="modal-body" style="text-align: center; display: block;">
                        <i class="fa fa-check fa-5x text-info" style="display: block;"></i>
                        <small class="font-bold"> Tradeshow Status Changed</small><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal inmodal fade" id="modal-success" tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">Success</h4>
                    </div>
                    <div class="modal-body" style="text-align: center; display: block;">
                        <i class="fa fa-check fa-5x text-info" style="display: block;"></i>
                        <small class="font-bold"> Tradeshow Associated</small><br>
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

        <!-- Confirm Modal -->
        <div class="modal inmodal fade" id="confirm-modal" tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">Are you sure?</h4>
                    </div>
                    <div class="modal-body" style="text-align: center; display: block;">
                        <i class="fa fa-warning fa-5x text-danger" style="display: block;"></i>
                        <small class="font-bold text-warning"> {{ errorMessage }}</small><br>
                    </div>
                    <div class="modal-footer" style="display: flex;">
                        <button @click="deleteField()"  style="width: 100%;" data-v-da46a4ee="" type="button" class="btn btn-danger pull-left">Delete</button>
                        <button style="width: 100%;" type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
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
                            <td v-for="value in data[index]">
                                <span v-if="value === true">  <i style="color: #2fbab7" class="material-icons">&#xE876;</i> </span>
                                <span v-else-if="value === false"> <i style="color: #ED5565" class="material-icons">&#xE14C;</i> </span>
                                <span v-else>{{ value }} </span>
                            </td>

                            <td>
                                <a title="Active / Inactive" @click="changeStatus(data[index].id, data[index].Active)"> <i style="color: #f8ac59;" class="material-icons">&#xE915;</i></a>
                                <a title="Delete" @click="deleteFieldModal(data[index].id)"> <i style="color: #ED5565;" class="material-icons">&#xE5C9;</i></a>


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
export default {
    data () {
        return {
            isLoading: true,
            tableName: null,
            tableId: null,
            columns: null,
            data: null,
            errorMessage: null,
            delteUrl: null,
            deleteId: null,
            requestUrl: null,
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

            self.url        = 'tables/' + _request;
            self.requestUrl = _request;

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

        deleteFieldModal(id) {
            this.deleteId = id;
            $('#confirm-modal').modal('show');
        },

        changeStatus (id, active) {
            console.log('debug')

            let payload = {};
                payload.id = id;
                payload.active = !active;

            // Send a POST request
            axios({
                method: 'post',
                url: 'closed-list/tradeshow-associate-active',
                data: payload
            })

            .then(function (response) {
                window.closedTable.tablesRequest("table-tradeshow-associate", true);
                // Show success modal
                $('#modal-success-active').modal('show');

            })
            .catch(function (error) {
                // Show success modal
                $('#modal-error').modal('show');
            });
        },


        deleteField() {
            // Create payload {id}
            let payload    = {}
                payload.id = this.deleteId;

            let self = this;

            // Send a POST request
            axios({
                method: 'post',
                url: self.url + '/delete',
                data: payload
            })

            .then(function (response) {
                window.closedTable.tablesRequest(self.requestUrl, true);
                $('#confirm-modal').modal('hide');
            })
            .catch(function (error) {
            });
        },

        // Update Data instance
        updateData(isUpdate = false, response) {
            console.log(isUpdate);

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
}
</script>