<template>
    <div>
        <!-- Error Modal -->
        <div class="modal inmodal fade" v-bind:id='graphId + "modal"' tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
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

        <div v-bind:id='graphId' style="min-height: 300px">
            <!-- Loader -->
            <div id="isLoading" v-if="isLoading">
                <div>
                    <div class="vue-simple-spinner"></div>
                </div>
            </div>

            <div v-if="empty" class="ibox float-e-margins ">
                <div class="ibox-title">
                    <h5 v-if="!errorMessage"> {{ graphName }}</h5>
                    <h5 v-else class="text-danger"> {{ graphName }}</h5>

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

                    <span style="position: relative"><p class="text-center"> No data to display </p></span>
                    <doughnut-chart :height="325" :doughnutData="barDataBrands"></doughnut-chart>
                </div>
            </div>

            <div v-if="!empty && !isInit" class="ibox float-e-margins ">
                <div class="ibox-title">
                    <h5>{{ graphName }}</h5>

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
                    <doughnut-chart :height="325" :doughnutData="barDataBrands"></doughnut-chart>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LineChart from '../../../Line'
    import BarChart from '../../../Bars'
    import Doughnut from '../../../Doughnut'

    export default {
        components: {
            'doughnut-chart': Doughnut,
        },

        data() {
            return {
                isLoading: true,
                graphId: null,
                graphName: null,
                errorMessage: null,
                barDataBrands: {},
                empty: false,
                isInit: true,
            }
        },

        methods: {
            // Update Data instance
            updateData(isUpdate = false, response) {

                this.errorMessage = null,
                this.isInit       = false

                // Update Data
                this.graphId      = response.graphId
                this.graphName    = response.graphName

                if (response.data == null) {
                    this.empty = true
                    // Fill Line Chart Data
                    this.barDataBrands    = {
                        labels: [],
                        datasets: []
                    }

                } else {
                    this.empty = false
                    // Fill Line Chart Data
                    this.barDataBrands     = {
                        labels: response.data.labels,
                        steppedLine: true,
                        datasets: [
                            {
                                label: response.data.label,
                                backgroundColor: [
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                    'rgba(153, 102, 255, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 159, 64, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 159, 64, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 159, 64, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 159, 64, 1)',
                                    'rgba(153, 102, 255, 1)'
                                ],
                                borderWidth: 1,
                                data: response.data.data,
                            }
                        ]
                    }
                }

                this.isLoading = false;
            },

            // Update Data instance if an error occurred
            updateDataWithError(isUpdate = false, response, error) {
                this.isInit    = false

                // Fill Bar Chart Data Brands
                this.barDataBrands     = {
                    labels: [],
                    datasets: []
                }

                // Set Error message
                if (error != undefined) {
                    this.errorMessage = error.statusText;
                } else {
                    this.errorMessage = 'Error';
                }

                // Update Data
                this.empty          = true
                this.graphId        = response;
                this.graphName      = null;
                this.graphName      = 'Graph - ' + this.errorMessage;

                this.$nextTick(function () {
                    // Stop Loader
                    this.isLoading = false;

                    // Show error modal
                    $('#' + this.graphId + 'modal').modal('show');
                });
            },
        },
    }

</script>