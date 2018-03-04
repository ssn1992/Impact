<style lang="scss" scoped>
    #table_wrapper {
        min-height: 361px;
    }

    td {
        text-overflow: ellipsis!important;
        width: 5px!important;
        white-space: nowrap!important;
        overflow: hidden!important;
    }

    .bootstrap-select:not([class*="col-"]):not([class*="form-control"]):not(.input-group-btn) {
        width: 80%!important;
    }
</style>

<template>
    <div>
        <!-- Error Modal -->
        <div class="modal inmodal fade" v-bind:id='tableId + "modal-success"' tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">Success</h4>
                    </div>
                    <div class="modal-body" style="text-align: center; display: block;">
                        <i class="fa fa-check fa-5x text-default" style="display: block; color: #2fbab7;"></i>
                        <small class="font-bold text-default" style="color: #2fbab7;"> Campaign associated with success</small><br>

                    </div>
                    <div class="modal-footer">
                        <button @click="refresh()" data-dismiss="modal" type="button" class="btn btn-primary">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Form-->
        <div class="modal inmodal fade" v-bind:id='tableId + "modal-form"' tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">Campaigns</h4>
                    </div>
                    <div class="modal-body" style="text-align: center; display: block;">

                        <form @submit.prevent="validateBeforeSubmit()" id="form-section-projects" enctype="multipart/form-data">
                            <div class="row">
                                <div class="col-lg-12 col-md-6 select-area padding-top-1x">
                                    <div style="width: 100%;" class="form-group label-floating" :class="{'has-error': errors.has(payload.campaign.value)}">
                                        <div style="width: 100%;" :class="{'has-error': errors.has(payload.campaign.value)}">

                                            <select style="width: 100%;" data-live-search="false" v-model="payload.campaign.post" :name=payload.campaign.value  v-validate :data-vv-rules=payload.campaign.rules :data-vv-validate-on="validateForm" class="selectpicker campaigns" data-style="" title="Choose your Campaign">
                                                <option style="width: 100%;" :value="values.value" v-for="values in payload.campaign.data">

                                                    <span v-bind:id="values.id"></span>
                                                    {{ values.label }}
                                                </option>
                                            </select>
                                        </div>
                                        <span v-show="errors.has(payload.campaign.value)" class="help-block text-danger text-center">
                                            <strong>{{ errors.first(payload.campaign.value) }}</strong>
                                        </span>
                                    </div>
                                </div>

                                <div class="col-lg-12 row text-center">
                                    <i style="color: #2fbab7; font-size: 38px; cursor: pointer;" @click="validateBeforeSubmit()" class="material-icons">&#xE161;</i>
                                </div>

                            </div>
                        </form>

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
                        <small class="font-bold text-danger"> Error </small><br>
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
                                <input style="text-align: center; outline: none; border: none;" type="text" v-bind:placeholder="column"/>
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="data">
                        <tr v-for="(value, index) in data">
                            <td v-for="value in data[index]">
                                <span v-if="value === true">  <i style="color: rgb(47, 186, 183)" class="material-icons">&#xE876;</i> </span>
                                <span v-else-if="value === false"> <i style="color: #ec4c5d" class="material-icons">&#xE14C;</i> </span>
                                <span v-else>{{ value }} </span>
                            </td>

                            <td>
                                <a @click="activeFair(data[index].Id, !data[index].Active)"> <i title="switch" style="color: #cbb956;" class="material-icons">swap_horiz</i> </a>
                                <a @click="fairAssociation(data[index])"> <i title="Campaign Association" style="color: #cbb956;" class="material-icons">assignment</i> </a>
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
            errorMessage: 'Error',
            validateForm: 'none',
            popup: {
                fair: null
            },
            payload: {
                campaign: {
                    fieldType: 'text-field',
                    label: 'Campaign',
                    value: 'campaign',
                    rules: 'required',
                    post: null,
                    data : [],
                },
            }
        }
    },

    methods: {
        campaignAssociation() {
            let self = this;

            let payload = {};
                payload.tradeshow = self.popup.fair.Id;
                payload.campaign  = self.payload.campaign.post;
                payload.brand     = window.searchInstance.syncedVal.value;

            // Send a POST request
            axios({
                method: 'post',
                url: 'tradeshow-campaign-association',
                data: payload
            })

            .then(function (response) {
                self.payload.campaign.post = null;
                self.loadComboBox();

                $('#logs-tablemodal-form').modal('hide')
                $('#' + self.tableId + 'modal-success').modal('show');
            })
            .catch(function (error) {
                // Show error modal
                $('#' + self.tableId + 'modal').modal('show');
            });
        },

        validateBeforeSubmit() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.campaignAssociation();

                    console.log('Form Submitted!');
                } else {
                    this.validateForm = null;
                    console.log('Correct them errors!');
                }
            });
        },

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
            let payload          = {};
                payload.dateFrom = window.moment(window.searchInstance.startTime.time).format("YYYY-MM-DD 00:00:00");
                payload.dateTo   = window.moment(window.searchInstance.endtime.time).format("YYYY-MM-DD 23:59:59");
                payload.brand    = window.searchInstance.syncedVal.value;

            let self = this;

            self.url        = 'tables/' + _request;
            self.requestUrl = _request;

            // Show Loader
            self.isLoading = true;

            // Send a POST request
            axios({
                method: 'post',
                url: 'tables/' + _request,
                data: payload
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
                        {extend: 'pageLength',titleAttr: 'Page Lenght'},
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

        // Active
        activeFair: function(id, flag) {
            let self         = this
            let payload      = {}
                payload.id   = id
                payload.flag = flag

            // Send a POST request
            axios({
                method: 'post',
                url: 'active-fair',
                data: payload
            })

            .then(function (response) {
                window.closedTable.tablesRequest(self.requestUrl, true);
            })
            .catch(function (error) {
                // Stop Loader
                self.isLoading = false;

                // Show error modal
                $('#' + self.tableId + 'modal').modal('show');

            });
        },

        // Associate FAIR
        fairAssociation (fair) {
            this.popup.fair = fair;
            $('#' + this.tableId + 'modal-form').modal('show');
        },

        getCampaigns () {
            let self = this;

            // Send a POST request
            axios({
                method: 'post',
                url: 'get-campaigns-list',
            })

            .then(function (response) {
                console.log(response);

                console.log(response.data.campaign.data);

                self.payload.campaign.data = response.data.campaign.data;
                self.loadComboBox();
            })
            .catch(function (error) {
            });
        },

        loadComboBox () {
            this.$nextTick(function () {
                $('.selectpicker').selectpicker();
                $('.selectpicker').selectpicker('refresh');
            });
        },

        refresh() {
            window.closedTable.tablesRequest(this.requestUrl, true);
        }
    },

    mounted () {
        // Get Campaigns
        this.getCampaigns();

    }
}
</script>