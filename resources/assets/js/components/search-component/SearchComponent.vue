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
            <h2>Date</h2>

            <span v-if="searchOptions.selectSimple == true">

                <!-- Date Picker-->
                <date-picker id="date-from"  title="from" :date="startTime" :option="option"></date-picker>
                <span><i class="fa fa-calendar date-picker primay-color"></i></span>
                <date-picker id="date-to" title="to" :date="endtime" :option="option"></date-picker>

            </span>

            <span v-if="searchOptions.selectComplex == true">

                <!-- Date Picker-->
                <date-picker @change="updateComboBox" id="date-from"  title="from" :date="startTime" :option="option"></date-picker>
                <span><i class="fa fa-calendar date-picker primay-color"></i></span>
                <date-picker @change="updateComboBox" id="date-to" title="to" :date="endtime" :option="option"></date-picker>

            </span>

            <span v-if="searchOptions.selectSimple == true">

                <!-- Combo-box -->
                <v-select v-if="searchOptions.brands === true" v-model="syncedVal" :value="value" :loading="isLoading" id="brand" label="label" :options="options" :value.sync="syncedVal" class="combo-box"></v-select>

            </span>

            <!-- Toogle Button-->
            <toggle-button v-if="searchOptions.toggleButton == true" @change="onChangeEventHandler" id="filter" :width="72" :height="25" :value="filter.value" color="#2fbab7" :sync="true" :labels="labels"/>

            <!-- Search button -->
            <span id="date-search-request"><i class="fa fa-filter fa-2x primay-color calendar-filter" title="search"></i></span>

            <div id="combo-complex" v-if="searchOptions.selectComplex">

                <!-- Combo-box -->
                <v-select v-model="selectCascadeLevel1syncedVal" :value="value" :loading="isLoadingLevel1" id="fairs-level-1" label="label" :options="selectCascade.level1.options" :value.sync="selectCascadeLevel1syncedVal" class="combo-box"></v-select>

                <!-- Combo-box -->
                <span v-if="selectCascadeLevel2syncedVal"><i class="fa fa fa-level-down date-picker primay-color"></i></span>
                <v-select v-if="selectCascadeLevel2syncedVal" v-model="selectCascadeLevel2syncedVal" :value="value" :loading="isLoadingLevel2" id="fairs-level-2" label="label" :options="selectCascade.level2.options" :value.sync="selectCascade.level2.syncedVal" class="combo-box"></v-select>

                <!-- Combo-box -->
                <span v-if="selectCascadeLevel3syncedVal"><i class="fa fa fa-level-down date-picker primay-color"></i></span>
                <v-select v-if="selectCascadeLevel3syncedVal" v-model="selectCascadeLevel3syncedVal" :value="value" :loading="isLoadingLevel3" id="fairs-level-3" label="label" :options="selectCascade.level3.options" :value.sync="selectCascadeLevel3syncedVal" class="combo-box"></v-select>

            </div>

        </div>
    </div>
</template>

<script>
    // Date Picker import
    import datePicker from '../date-picker/DatePicker.vue'

    // Select box import
    import vSelect from 'vue-select';

    export default {
        components: {
            'date-picker': datePicker,
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
                labels: {
                    checked: 'Uniques',
                    unchecked: 'Uniques',
                },
                filter: {
                    request: 'uniques',
                    value: false,
                },

                // isInit Flag
                isInit: true,

                // loaders
                isLoading: true,
                isLoadingLevel1: true,
                isLoadingLevel2: false,
                isLoadingLevel3: false,

                options: [],
                label: [],
                syncedVal: null,

                selectCascadeLevel1syncedVal: null,
                selectCascadeLevel2syncedVal: null,
                selectCascadeLevel3syncedVal: null,

                selectCascade: {
                    level1: {
                        syncedVal:null,
                        value: null,
                        options: [],
                    },

                    level2: {
                        syncedVal:null,
                        value: null,
                        options: [],
                    },

                    level3: {
                        syncedVal:null,
                        value: null,
                        options: [],
                    },
                },


                startTime: {
                    time: window.moment(new Date()).format("YYYY-MM-DD")
                },
                endtime: {
                    time: window.moment(new Date()).format("YYYY-MM-DD")
                },
                option: {
                    type: 'day',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'YYYY-MM-DD',
                    placeholder: 'when?',
                    color: {
                        day: '#2fbab7',
                        checked: '#2fbab7',
                        header: '#2fbab7',
                        headerText: '#fff'
                    },
                    buttons: {
                        ok: 'Ok',
                        cancel: 'Cancel',
                    },
                    overlayOpacity: 0.5, // 0.5 as default
                    dismissible: true // as true as default
                },
                timeoption: {
                    type: 'min',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'YYYY-MM-DD HH:mm'
                },
                multiOption: {
                    type: 'multi-day',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format:"YYYY-MM-DD HH:mm"
                },
                limit: [
                    {
                        type: 'fromto',
                        to: window.moment(new Date())
                    }]
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

                window.searchInstance.options   = response.data;
                window.searchInstance.syncedVal = response.data[0];
                window.searchInstance.inputId   = response.value;
                window.searchInstance.isLoading = false;
            },
            // Update Data Instance
            updateDatalevel1: function (response) {

                window.searchInstance.selectCascade.level1.options   = response.data;
                window.searchInstance.selectCascadeLevel1syncedVal   = response.data[0];
                window.searchInstance.inputId                        = response.value;

                window.searchInstance.isLoadingLevel1 = false;
            },
            // Update Data Instance
            updateDatalevel2: function (response) {

                window.searchInstance.selectCascade.level2.options   = response.data;
                window.searchInstance.selectCascadeLevel2syncedVal   = response.data[0];
                window.searchInstance.inputId                        = response.value;

                window.searchInstance.isLoadingLevel2 = false;
            },
            // Update Data Instance
            updateDatalevel3: function (response) {

                window.searchInstance.selectCascade.level3.options   = response.data;
                window.searchInstance.selectCascadeLevel3syncedVal   = response.data[0];
                window.searchInstance.inputId                        = response.value;

                window.searchInstance.isLoadingLevel3 = false;
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