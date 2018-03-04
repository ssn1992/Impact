<style scoped>
    #table_wrapper {
        min-height: 361px;
    }

    #leads-social-networks {
        width: 80%;
    }

    #network-container {
        padding-top: 10px;
    }

    .selectpicker {
        padding-bottom: 20px;
    }

    .network-label {
        font-size: 17px;
        padding-left: 0;
        margin-bottom: 20px;
    }

    .network-input {
        margin-bottom: 20px;
    }

    .btn.disabled, .btn[disabled], fieldset[disabled] .btn {
        cursor: auto;
    }


    social-networks-container {
        min-height: 58px;
        vertical-align: middle;
    }

</style>

<template>
    <div>
        <!-- Cross Modal -->
        <div class="modal inmodal fade" id="form-network" tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
            <div id="leads-social-networks" class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">Lead Social Profile</h4>
                    </div>

                    <div class="modal-body" style="text-align: center;">
                        <form method="post" class="form-horizontal">
                            <div v-model="modalValues" class="form-group">
                                <div v-for="(values, index) in modalValues.networkslist">
                                    <div id="network-container" v-for="(networkField, index) in  modalValues.networkslist[index]" class="col-lg-6 text-left">

                                        <div class="col-lg-12">
                                            <a v-bind:href="networkField.link" target="_blank" class="network-label col-lg-6" :class="classValue(networkField.name, networkField.statusId)"> {{ networkField.name }}</a>
                                            <div class="text-right col-lg-6" style="padding: 0">

                                                <select :value="networkField.statusId" @change="networkField.statusId = valueWatcherNet(networkField.statusId, networkField.name)" class="selectpicker">
                                                    <option :value=values.value v-for="(values, index) in statusNetworkAxios.data">
                                                        <span v-bind:id="values.value" style="padding-right: 5px" :class="networkField.name + ' status-icon-id-' + values.value" class="glyphicon"></span>
                                                        {{ values.label }}
                                                    </option>
                                                </select>

                                            </div>

                                            <input v-model="networkField.link" type="text" class="form-control network-input">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="modal-footer">
                        <button class="btn btn-white" type="submit"  data-dismiss="modal">Cancel</button>
                        <button v-bind:id=modalValues.id @click="saveNetwork(modalValues.networkslist.networksList, $event, this, modalValues.id)" :class="classButtons(modalValues.id)" class="ladda-button btn btn-primary" data-style="zoom-in" type="submit">Save changes</button>

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
                <table v-if="data" v-bind:id='tableId' class="mdl-data-table display nowrap" cellspacing="0" width="100%">
                    <thead>
                    <tr>
                        <th style="text-align: center" v-for="column in columns">
                            {{ column }}
                        </th>
                        <!-- Cross Column -->
                        <th style="text-align: center">
                            Cross
                        </th>
                        <!-- .Cross Column -->
                    </tr>
                    </thead>
                    <tbody v-if="data">
                    <tr v-for="(value, index) in data">
                        <td style="text-align: center" v-for="value in data[index]"> <span style="text-align: center" v-if="!value.networksList"> {{ value }} </span>

                            <span v-else style="text-align: center">
                                    <span class="social-networks-container" style="text-align: center; display: inline-block; padding: 5px;" v-for="networks in value.networksList">
                                        <span>
                                            <input :v-model=networks @change="networks.statusId = inputCheckStatusSet($event)" v-if="checkStatusToShowInput(networks)" style="display: table" type="checkbox" />
                                        </span>

                                        <a :v-model=networks v-if="checkStatusNetToShow(networks)" v-bind:href=networks.link target="_blank" style="display: table; font-size: 20px;" :class="classValue(networks.name, networks.statusId)"></a>

                                    </span>

                                    <span v-if="false" style="display: inline-block; padding: 20px 5px 10px;">
                                        <span v-bind:id=data[index].id @click="sendRequested(data[index].id, data[index].networks.networksList, $event)" :class="classButtonsHome(data[index].id)"  style="display: table; border-radius: 32px; width: 30px; height: 30px;" data-v-727f61ef="" data-size="xs" data-style="contract" type="submit" class="ladda-button btn btn-primary">
                                            <span v-bind:id=data[index].id style="vertical-align: middle;" :class="classButtonsHomeLabel(data[index].id)" class="fa fa-paper-plane"></span>
                                            <span class="ladda-spinner">
                                        </span><div class="ladda-progress" style="width: 0px;"></div></span>

                                    </span>
                             </span>

                        </td>

                        <td style="text-align: center">
                            <a>
                                <i @click="networksList(data[index].networks, data[index].id)" style="font-size: 35px; padding: 14px 0;" class="material-icons">&#xE548;</i>
                            </a>
                        </td>

                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <th style="text-align: center" v-for="column in columns">
                            <input style="text-align: center; outline: none; border: none;" type="text" v-bind:placeholder="column"/>
                        </th>
                        <!-- Cross Column -->
                        <th>
                            Cross
                        </th>
                        <!-- .Cross Column -->
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

                modalValues: {
                    id: null,
                    networkslist: []
                },

                statusNetworkAxios: []
            }
        },

        methods: {
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
                            searchable: false
                        }
                        ],
                        buttons: [
                            {extend: 'pageLength',titleAttr: 'Page Lenght'},
                            {extend: 'excelHtml5', text: '<i class="icon-excel"></i>', exportOptions: {columns: ':visible'}},
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

                } else {
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
                            searchable: false
                        }],
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

            // Update Data instance if an error occurred
            networksList: function(networks, userId) {

                this.modalValues.id = userId;
                this.modalValues.networkslist = networks;

                // Init ComboBox
                this.$nextTick(function () {
                    this.comboBoxMount()
                });

                // Show error modal
                $('#form-network').modal('show');
            },

            // Return requested status checked input
            inputCheckStatusSet: function() {
                return 3;
            },

            // Return requested status checked input
            inputCheckStatusIdSet: function() {
                return 1;
            },

            saveNetwork: function (network, event, instance, id) {
                window.l = Ladda.create(document.querySelector( '.ladda-button-demo-' +  id));
                window.l.start();
                window.l.event = event.target.id;

                var payload = {};
                payload.id = id;
                payload.networksList = network;

                // Send a POST request
                axios({
                    method: 'post',
                    url: 'cross/create',
                    data: payload
                })

                .then(function (response) {
                    window.l.stop();
                    $('.ladda-button-demo-' +  id).fadeIn(1000, function() {
                        $(this).append('<i style="padding-left: 5px;" class="fa fa-check"></i>');
                    });

                    setTimeout(function(){
                        $('.ladda-button-demo-' +  id + ' .fa-check').fadeOut(1000, function() { $(this).removeClass('fa-check') });

                    }, 1000)
                })

                .catch(function (error) {

                    window.l.stop();

                    $('.ladda-button-demo-' +  id).fadeIn(1000, function() {
                        $(this).append('<i style="padding-left: 5px;" class="fa fa-close"></i>').addClass('btn-danger');
                    });

                    setTimeout(function(){
                        if ($('.fa-close').length > 0) {
                            $('.fa-close').fadeOut(1000, function() { $(this).remove(); });
                            $('.ladda-button-demo-' +  id).removeClass('btn-danger');
                        }
                    }, 1000)

                });
            },

            classValue: function (id, status) {
                var value = ['social socicon-' + id + ' color-' + status]
                return value.join(' ')
            },

            classButtons: function (id) {
                var value = ['ladda-button-demo-' + id]
                return value.join(' ')
            },

            classButtonsHome: function (id) {
                var value = ['ladda-button-demo-home-' + id]
                return value.join(' ')
            },

            classButtonsHomeLabel: function (id) {
                var value = ['ladda-button-demo-home-label-' + id]
                return value.join(' ')
            },

            getStatusNetworkt (response) {
                this.statusNetworkAxios = response;

            },

            comboBoxMount () {
                this.$nextTick(function () {
                    $('.selectpicker').selectpicker();
                    $('.selectpicker').selectpicker('refresh');
                })
            },

            valueWatcherNet(id, name) {
                var id =  $('.selectpicker option:selected > .'+ name).attr('id');

                return parseInt(id);
            },

            sendRequested(id, networksList, event) {
                window.l = Ladda.create(document.querySelector( '.ladda-button-demo-home-' +  id));

                window.l.start();
                window.l.event = event.target.id;

                var payload = {};
                payload.id = id;
                payload.networksList = networksList;

                // Send a POST request
                axios({
                    method: 'post',
                    url: 'cross/create',
                    data: payload
                })

                .then(function (response) {
                    window.l.stop();

                    $('.ladda-button-demo-home-' +  id).fadeIn(1000, function() {
                        $('.ladda-button-demo-home-' +  id).fadeIn(1000, function() {
                            $('.ladda-button-demo-home-label-' +  id).removeClass('fa-close')
                            $('.ladda-button-demo-home-label-' +  id).removeClass('fa-paper-plane')
                            $(this).removeClass('btn-danger');
                            $('.ladda-button-demo-home-label-' +  id).addClass('fa-check');
                        });
                    });
                    console.log("success");
                })

                .catch(function (error) {
                    window.l.stop();

                    $('.ladda-button-demo-home-' +  id).fadeIn(1000, function() {
                        //if ($('.fa-close').length < 1) {
                        $('.ladda-button-demo-home-label-' +  id).removeClass('fa-paper-plane')
                        $(this).addClass('btn-danger');
                        $('.ladda-button-demo-home-label-' +  id).addClass('fa-close');
                        //}
                    });

                    setTimeout(function(){
                        $('.ladda-button-demo-home-' +  id).fadeIn(1000, function() {
                            $('.ladda-button-demo-home-label-' +  id).addClass('fa-paper-plane');
                        });
                    }, 3000)
                    console.log("error");
                });
            },

            checkStatusToShowInput(networks) {

                var bool = (networks.statusId == 1 && networks.link != null);

                return bool;

            },

            checkStatusNetToShow(networks) {

                var bool = (networks.link != null && (networks.statusId == 1 || networks.statusId == 3 || networks.statusId == 4));

                return bool;
            }

        },
    }
</script>


