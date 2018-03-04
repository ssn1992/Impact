<style scoped>
    @media (max-width: 1230px) {
        .ibox-title h5 {
            font-size: 13px;
        }
    }
</style>
<template>
    <div style="min-height: 170px;">
        <div v-if="isInit">
            <!-- Loader -->
            <div id="isLoading">
                <div>
                    <div class="vue-simple-spinner"></div>
                </div>
            </div>
        </div>

        <!-- Error Modal -->
        <div class="modal inmodal fade" v-bind:id='highlightsId + "modal"' tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
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

        <div v-bind:id='highlightsId'>
            <div v-for="(highlights, index) in highlightsData.data">
                <div class="col-lg-3">
                    <div id="isLoading" v-if="isLoading">
                        <div>
                            <div class="vue-simple-spinner"></div>
                        </div>
                    </div>

                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <span v-if="highlights.progression == true" class="label label-primary pull-right">High</span>
                            <span v-else-if="highlights.progression == false" class="label label-danger pull-right">Low</span>
                            <span v-else class="label label-warning pull-right">Same</span>
                            <h5>{{ highlights.label }} </h5>
                        </div>
                        <div class="ibox-content">

                            <h1 class="no-margins">{{ numbersWithSpaces(highlights.value) }}</h1>
                            <div v-if="highlights.progression == true" class="stat-percent font-bold text-info">{{ highlights.percentage }}&#37; <i class="fa fa-level-up"></i></div>
                            <div v-else-if="highlights.progression == false" class="stat-percent font-bold text-danger">{{ highlights.percentage }}&#37; <i class="fa fa-level-down"></i></div>
                            <div v-else-if="highlights.progression == null" class="stat-percent font-bold text-warning">{{ highlights.percentage }}&#37; <i class="fa fa-level-down"></i></div>
                            <small>{{ highlights.cost }}&euro;</small>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="errorMessage != null">
                <div v-for="n in 4" class="col-lg-3">
                    <div id="isLoading" v-if="isLoading">
                        <div>
                            <div class="vue-simple-spinner"></div>
                        </div>
                    </div>

                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <span></span>
                            <h5 v-if="!errorMessage"> {{ errorMessage }}</h5>
                            <h5 v-else class="text-danger"> {{ errorMessage }}</h5>
                        </div>
                        <div class="ibox-content">

                            <h1 class="no-margins"></h1>
                            <div class="stat-percent font-bold text-warning"></div>
                            <small></small>
                        </div>
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
                isInit: true,
                highlightsId: null,
                highlightsData: [],
                errorMessage: null
            }
        },

        methods: {
            // Update Data instance
            updateData: function (isUpdate = false, response) {
                // Update Data
                this.errorMessage   = null;
                this.highlightsData = response;
                this.highlightsId   = response.highlightsId;

                this.$nextTick(function () {
                    // Stop Loaders
                    this.isLoading = false;
                    this.isInit = false;
                });
            },

            // Update Data instance
            updateDataWithError: function (isUpdate = false, response, error) {
                // Update Data
                this.highlightsId   = response;
                this.highlightsData = [];

                // Set Error Message
                if (error != undefined) {
                    this.errorMessage = error.statusText;
                } else {
                    this.errorMessage = 'Error';
                }

                this.$nextTick(function () {
                    // Stop Loaders
                    this.isLoading = false;
                    this.isInit = false;

                    // Show error modal
                    $('#' + this.highlightsId + 'modal').modal('show');
                });
            },

            /**
             *
             * @param value
             * @return int
             */
            numbersWithSpaces: function (value) {
                return projectUtils.numbersWithSpaces(value);
            },
        },
    }
</script>
