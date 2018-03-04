<style scoped>
    #date-search-request > .fa-filter {
        position: absolute;
        padding-top: 3px;
        padding-left: 22px;
    }

    .fa-2x {
        font-size: 2.5em;
    }

    #filter {
        padding-left: 5px;
    }

    #combo-complex {
        padding-top: 10px;
    }

    .fa-level-down {
        width: 31px;
        text-align: center;
    }

</style>
<template>
    <div id="date-picker-from-to" class="row wrapper border-bottom white-bg page-heading">
        <!-- Date Range error modal -->
        <div class="modal inmodal fade" id="date-range-modal" tabindex="-1" role="dialog"  aria-hidden="true">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">Date Invalid</h4>
                    </div>
                    <div class="modal-body" style="text-align: center; display: block;">
                        <i class="fa fa-warning fa-5x text-danger" style="display: block;"></i>
                        <small class="font-bold text-danger">Please select a valid date</small>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-12">
            <h2>Years</h2>

            <!-- Combo-box -->
            <v-select v-model="syncedVal" :value="value" :loading="isLoading" id="brand" :options="options" :value.sync="syncedVal" class="combo-box"></v-select>

            <!-- Search button -->
            <span id="date-search-request"><i class="fa fa-filter fa-2x primay-color calendar-filter" title="search"></i></span>

        </div>
    </div>
</template>

<script>
    // Select box import
    import vSelect from 'vue-select';

    export default {
        components: {
            vSelect
        },

        data () {
            return {
                searchOptions: {
                    toggleButton: null,
                    selectSimple: null,
                    selectComplex: null,
                },

                value: {
                    default: null
                },

                inputId: null,

                // isInit Flag
                isInit: true,

                // loaders
                isLoading: true,

                options: [],
                label: [],
                syncedVal: null,

            }
        },

        methods: {
            onChangeEventHandler: function (event) {
                if (this.filter.value) {
                    this.filter.value = false;
                } else {
                    this.filter.value = true;
                }
            },
            // Update Data Instance
            updateData: function (response) {
                let date  = new Date;
                let year  = date.getFullYear().toString();

                response.data = response.data.toString().split(",");

                window.searchInstance.options   = response.data;
                window.searchInstance.syncedVal = year;
                window.searchInstance.inputId   = response.data[0];
                window.searchInstance.isLoading = false;
            },

            // Update Data instance if an error occurred
            updateDataWithError: function () {
                window.searchInstance.syncedVal = 'No records'
                window.searchInstance.isLoading = false;
            }
        },

        mounted () {
        }
    }
</script>