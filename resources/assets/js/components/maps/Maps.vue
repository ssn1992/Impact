<template>
    <div>
        <!-- Error Modal -->
        <div class="modal inmodal fade" v-bind:id='mapId + "modal"' tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
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
                        <button type="button" class="btn btn-qprimary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5 v-if="!errorMessage"> {{ mapName }}</h5>
                <h5 v-else class="text-danger"> {{ mapName }}</h5>

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

                <div id="isLoading" v-if="isLoading">
                    <div>
                        <div class="vue-simple-spinner"></div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <table v-if="mapTable" class="table table-hover margin bottom">
                            <thead>
                            <tr>
                                <th>Nº</th>
                                <th></th>
                                <th class="text-center">Country</th>
                                <th class="text-right" style="padding-right: 16px">Leads</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(data, index) in mapTable">
                                    <td>{{ index + 1 }}</td>
                                    <td><span class="flag-icon" :class="'flag-icon-' + data.iso"></span></td>
                                    <td class="text-center"> {{ data.country }} </td>
                                    <td class="text-right"><span class="label label-primary">{{ numbersWithSpaces(data.value) }}</span></td>
                                </tr>
                            </tbody>
                        </table>

                        <table v-else class="table table-hover margin bottom">
                            <thead>
                            <tr>
                                <th class="text-center">{{ mapName }}</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td class="text-center"> No data to display </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-lg-6">
                        <div v-bind:id='mapId' style="height: 406px;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isLoading: true,
            mapId: null,
            mapName: null,
            mapData: null,
            mapTable: null,
            errorMessage: null
        }
    },

    methods: {
        updateData(isUpdate = false, response) {
            this.errorMessage = null;
            // Update Data
            this.mapId        = response.mapId;
            this.mapName      = response.mapName;

            if (response.data == null) {
                this.mapData  = null;
                this.mapTable = null;
            } else {
                this.mapData      = response.data.map;
                this.mapTable     = response.data.table;
            }

            this.$nextTick(function () {
                // Create map instance
                this.createMap(response.mapId, this.mapData , isUpdate);
            })
        },

        updateDataWithError(isUpdate = false, response, error) {
            // Set Error Message
            if (error != undefined) {
                this.errorMessage = error.statusText;
            } else {
                this.errorMessage = 'Error';
            }

            // Update Data
            this.mapId        = response;
            this.mapName      = 'Map - ' + this.errorMessage;
            this.mapData      = null;
            this.mapTable     = null;

            this.$nextTick(function () {
                // Create map instance
                this.createMap(this.mapId, this.mapData, isUpdate, true);
            })
        },

        /**
         *
         * @param mapId
         * @param data
         * @param isUpdate
         * @param error
         *
         * Create a Map Instance
         */
        createMap: function (mapId, data, isUpdate = false, error = false) {
            if (isUpdate) {
                $('#' + mapId + '> div').remove();
            }

            $('#' + mapId).vectorMap({
                map: 'world_mill',
                width: 100,
                backgroundColor: "transparent",
                regionStyle: {
                    initial: {
                        fill: '#e4e4e4',
                        "fill-opacity": 0.9,
                        stroke: 'none',
                        "stroke-width": 0,
                        "stroke-opacity": 0
                    }
                },

                series: {
                    regions: [{
                        values: data,
                        scale: ["#eaf8f7", "#2fbab7"],
                        normalizeFunction: 'polynomial',
                        legend: {
                            vertical: true,
                        },
                    },]
                },

                onRegionTipShow: function (e, el, code) {
                    if (data != undefined && data != null) {
                        if (data[code]) {
                            el.html(el.html() + ' - ' + data[code]);
                        }
                    }
                },
                onRegionClick: function (e, code, isSelected, selectedRegions) {
                    if (data != undefined && data != null) {
                        $('#' + mapId).vectorMap('get', 'mapObject').setFocus({region: code});
                    }
                },

            });

            this.$nextTick(function () {
                this.isLoading = false;

                if (error) {
                    // Show error modal
                    $('#' + mapId + 'modal').modal('show');
                }
            });
        },

        /**
         *
         * @param value
         * @return int
         */
        numbersWithSpaces: function (value) {
            return projectUtils.numbersWithSpaces(value);
        }
    },
}
</script>