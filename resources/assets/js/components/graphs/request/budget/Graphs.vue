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

        <div v-bind:id='graphId'>
            <!-- Loader -->
            <div id="isLoading" v-if="isLoading">
                <div>
                    <div class="vue-simple-spinner"></div>
                </div>
            </div>

            <div class="ibox float-e-margins ">
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

                    <span style="position: relative" v-if="empty"><p class="text-center"> No data to display </p></span>
                    <line-chart :height="400" :lineData="lineData"></line-chart>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LineChart from './Line'

    export default {
        components: {
            'line-chart': LineChart,
        },

        data() {
            return {
                isLoading: true,
                graphId: null,
                graphName: null,
                errorMessage: null,
                lineData: {},
                empty: false,
                isInit: true,
            }
        },

        methods: {
            graphPayload (data) {
                let self    = this;
                let payload = []

                Object.keys(data).forEach(function (value) {
                    payload.push({ 'data'            : data[value].data,
                                   'label'           : data[value].label,
                                   'fill'            : false,
                                   'hidden'          : true,
                                   'borderWidth'     : 1,
                                   'backgroundColor' : self.randomBackgroundColor(value),
                                   'borderColor'     : self.randomBorderColor(value) });
                })

                payload[0].hidden = false;

                return payload;
            },

            randomBackgroundColor (key) {
                let backgroundColor = [
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
                ];

                return backgroundColor[key];
            },

            randomBorderColor (key) {
                let borderColor = [
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
                ];

                return borderColor[key];
            },

            // Update Data instance
            updateData(isUpdate = false, response) {

                this.errorMessage = null,
                    this.isInit   = false

                // Update Data
                this.graphId      = response.graphId
                this.graphName    = response.graphName

                if (response.data == null) {
                    this.empty = true
                    // Fill Line Chart Data
                    this.lineData     = {
                        labels: [],
                        datasets: []
                    }

                } else {
                    this.empty = false

                    let payload = this.graphPayload(response.data);

                    // Fill Line Chart Data
                    this.lineData     = {
                        labels: response.labels,
                        steppedLine: true,
                        datasets: payload
                    }
                }

                this.isLoading = false;
            },

            // Update Data instance if an error occurred
            updateDataWithError(isUpdate = false, response, error) {
                this.isInit    = false

                // Fill Line Chart Data
                this.lineData     = {
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