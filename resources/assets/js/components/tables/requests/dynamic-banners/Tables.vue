<style scoped lang="scss">
    #table_wrapper {
        min-height: 361px;
    }

    .form-group {
        .label {
            background-color: #2fbab7;
            color: #fff;
        }

        .bootstrap-tagsinput {
            background-color: #FFFFFF;
            background-image: none;
            border: 1px solid #e5e6e7;
            border-radius: 1px;
            color: inherit;
            display: block;
            padding: 6px 12px;
            transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
            width: 100%;
            font-size: 14px;
        }
    }

    #forms .form-group {
        padding-bottom: 10px;
    }

</style>

<template>
    <div>
        <div class="modal inmodal fade" id="modal-success" tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
                <div class="modal-dialog modal-md">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button leadType="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <h4 class="modal-title">Success</h4>
                        </div>
                        <div class="modal-body" style="text-align: center; display: block;">
                            <i class="fa fa-check fa-5x text-info" style="display: block;"></i>
                            <small v-if="add === true" class="font-bold"> Banner Added</small><br>
                            <small v-if="add === false" class="font-bold"> Banner Edited</small><br>
                        </div>
                        <div class="modal-footer">
                            <button leadType="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal inmodal fade" id='modal-error' tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 909999950!important;">
                <div class="modal-dialog modal-md">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button leadType="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <h4 class="modal-title">Please try again later</h4>
                        </div>
                        <div class="modal-body" style="text-align: center; display: block;">
                            <i class="fa fa-warning fa-5x text-danger" style="display: block;"></i>
                            <small class="font-bold text-danger"> Something goes wrong</small><br>
                        </div>
                        <div class="modal-footer">
                            <button leadType="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        <!-- Dynamic Banner Details -->
        <div class="modal inmodal fade" id="banner-details-modal" tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
            <div class="modal-dialog modal-md" style="width: 80%; background: #f3f3f4;">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">Banner Details</h4>
                    </div>

                    <form id="form-section-contact">
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="ibox float-e-margins">
                                        <div class="ibox-title">
                                            <h5>{{ details.Name }} - {{ details.Brand }}</h5>
                                            <span class="label label-primary">{{ details.Date }}</span>
                                        </div>

                                        <div class="ibox-content inspinia-timeline">

                                            <div class="timeline-item">
                                                <div class="row">
                                                    <div class="col-xs-3 date">
                                                        <i class="fa fa-picture-o"></i>
                                                        <br>
                                                        <small class="text-navy"></small>
                                                    </div>
                                                    <div class="col-xs-9 content no-top-border">
                                                        <p class="m-b-xs"><strong>Image</strong></p>
                                                        <div class="row text-center">
                                                            <img v-img="{sourceButton: true, title: details.url_redirect }" style="padding: 10px 0px; width: auto; max-height: 200px;" :src="details.image"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="timeline-item">
                                                <div class="row">
                                                    <div class="col-xs-3 date">
                                                        <i class="fa fa-link"></i>
                                                        <br>
                                                        <small class="text-navy"></small>
                                                    </div>
                                                    <div class="col-xs-9 content">
                                                        <p class="m-b-xs"><strong>Link</strong></p>
                                                        <p>
                                                            <a target="_blank" v-bind:href="details.url_redirect"> {{ details.url_redirect }} </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="timeline-item">
                                                <div class="row">
                                                    <div class="col-xs-3 date">
                                                        <i class="fa fa-mouse-pointer"></i>
                                                        <br>
                                                        <small class="text-navy"></small>
                                                    </div>
                                                    <div class="col-xs-9 content">
                                                        <p class="m-b-xs"><strong>Clicks</strong></p>

                                                        <p>{{ details.clicks }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="timeline-item">
                                                <div class="row">
                                                    <div class="col-xs-3 date">
                                                        <i class="fa fa-th-list"></i>
                                                        <br>
                                                    </div>
                                                    <div class="col-xs-9 content">
                                                        <p class="m-b-xs"><strong>Categories</strong></p>
                                                        <p>
                                                            {{ categoryList(details.category) }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="timeline-item">
                                                <div class="row">
                                                    <div class="col-xs-3 date">
                                                        <i class="fa fa-file-word-o"></i>
                                                        <br>
                                                        <small class="text-navy"></small>
                                                    </div>
                                                    <div class="col-xs-9 content">
                                                        <p class="m-b-xs"><strong>Keywords</strong></p>

                                                        <p>{{ details.keywords.join(', ') }} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button class="btn btn-primary" type="submit"  data-dismiss="modal">Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Add Dynamic Banners Modal -->
        <div class="modal inmodal fade" id="add-banner-modal" tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
            <div class="modal-dialog modal-md" style="width: 80%;">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>

                        <h4 v-if="add === true" class="modal-title">Add Banner</h4>
                        <h4 v-if="add === false" class="modal-title">Edit Banner</h4>
                    </div>

                    <form @submit.prevent="validateBeforeSubmit(payload)" id="form-section-contact">

                        <div class="modal-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div v-model="payload">
                                        <div class="form-group col-lg-12" :class="{'has-error': errors.has(payload.name.value)}">
                                            <label class="label">{{ payload.name.label }}</label>

                                            <input v-model="payload.name.post" :name=payload.name.value  v-validate :data-vv-rules=payload.name.rules :data-vv-validate-on="validateForm" class="input form-control" type="text" :placeholder="payload.name.label"/>
                                            <span v-show="errors.has(payload.name.value)" class="help-block text-danger text-center">
                                                <strong>{{ errors.first(payload.name.value) }}</strong>
                                            </span>
                                        </div>

                                        <div class="form-group col-lg-12" :class="{'has-error': errors.has(payload.keywords.value)}">
                                            <label class="label">{{ payload.keywords.label }}</label>

                                            <input id="keywords-tags" data-role="tagsinput" v-model="payload.keywords.post" :name=payload.keywords.value  v-validate :data-vv-rules=payload.keywords.rules :data-vv-validate-on="validateForm" class="input form-control" type="text" :placeholder="payload.keywords.label"/>
                                            <span v-show="errors.has(payload.keywords.value)" class="help-block text-danger text-center">
                                                <strong>{{ errors.first(payload.keywords.value) }}</strong>
                                            </span>
                                        </div>
                                        <div class="form-group col-lg-12" :class="{'has-error': errors.has(payload.url.value)}">
                                            <label class="label">{{ payload.url.label }}</label>

                                            <input v-model="payload.url.post" :name=payload.url.value  v-validate :data-vv-rules=payload.url.rules :data-vv-validate-on="validateForm" class="input form-control" type="text" :placeholder="payload.url.label"/>
                                            <span v-show="errors.has(payload.url.value)" class="help-block text-danger text-center">
                                                <strong>{{ errors.first(payload.url.value) }}</strong>
                                            </span>
                                        </div>

                                        <div class="form-group col-lg-12" :class="{'has-error': errors.has(payload.imageLink.value)}">
                                            <label class="label">{{ payload.imageLink.label }}</label>

                                            <input v-model="payload.imageLink.post" :name=payload.imageLink.value  v-validate :data-vv-rules=payload.imageLink.rules :data-vv-validate-on="validateForm" class="input form-control" type="text" :placeholder="payload.imageLink.label"/>
                                            <span v-show="errors.has(payload.imageLink.value)" class="help-block text-danger text-center">
                                                <strong>{{ errors.first(payload.imageLink.value) }}</strong>
                                            </span>
                                        </div>

                                        <div class="col-lg-6 form-group" :class="{'has-error': errors.has(payload.brand.value)}">
                                            <label class="label" style="display: table-cell">{{ payload.brand.label }}</label>

                                            <select v-validate :data-vv-rules=payload.brand.rules :data-vv-validate-on="validateForm" title="Please choose one of the following options" :name=payload.brand.value  data-live-search="true" v-model=payload.brand.post class="selectpicker">
                                                <option :value="values.value" v-for="values in payload.brand.data">
                                                    <span v-bind:id="values.value">
                                                        {{ values.label }}
                                                    </span>
                                                </option>
                                            </select>
                                            <span v-show="errors.has(payload.brand.value)" class="help-block text-danger text-center">
                                                <strong>{{ errors.first(payload.brand.value) }}</strong>
                                            </span>
                                        </div>

                                        <div class="col-lg-6 form-group" :class="{'has-error': errors.has(payload.cat.value)}">
                                            <label class="label" style="display: table-cell">{{ payload.cat.label }}</label>

                                            <select data-actions-box="true" v-model=payload.cat.post data-live-search="true" multiple v-validate :data-vv-rules=payload.cat.rules :data-vv-validate-on="validateForm" title="Please choose one of the following options" :name=payload.cat.value  class="selectpicker">
                                                <option :value="values.value" v-for="values in payload.cat.data">
                                                    <span v-bind:id="values.value">
                                                        {{ values.label }}
                                                    </span>
                                                </option>
                                            </select>
                                            
                                            <span v-show="errors.has(payload.cat.value)" class="help-block text-danger text-center">
                                                <strong>{{ errors.first(payload.cat.value) }}</strong>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button class="btn btn-white" type="submit"  data-dismiss="modal">Cancel</button>
                            <button v-if="add === true"  class="ladda-button ladda-button-selector btn btn-primary" data-style="zoom-in" type="submit">Add Banner</button>
                            <button v-if="add === false" class="ladda-button ladda-button-selector btn btn-primary" data-style="zoom-in" type="submit">Edit Banner</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Edit Dynamic Banners Modal -->
        <div class="modal inmodal fade" id="edit-banner-modal" tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
            <div class="modal-dialog modal-md" style="width: 80%;">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">Edit Banner</h4>
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
                        </tr>
                    </thead>
                    <tbody v-if="data">
                        <tr v-for="(value, index) in data">
                            <td v-for="(value, internalIndex) in data[index]">
                                <span v-if="value === true">  <i style="color: #2fbab7" class="material-icons">&#xE876;</i> </span>
                                <span v-else-if="value === false"> <i style="color: #ED5565" class="material-icons">&#xE14C;</i> </span>

                                <span v-else-if="internalIndex === 'image'"> 
                                    <img style="height: 60px; padding: 5px 0;" v-img:group="{sourceButton: true, title: data[index].url_redirect }" v-bind:src="value">
                                </span>

                                <span v-else-if="internalIndex === 'url_redirect'"> 
                                    <span style="display: none;"> {{ data[index].url_redirect }} </span>
                                    <a target="_blank" v-bind:href="data[index].url_redirect"> URL </a>
                                </span>

                                <span v-else-if="internalIndex === 'keywords'"> 
                                    <!-- {{ data[index].keywords.join(', ').substring(0, 30) + '...' }} -->
                                    {{ data[index].keywords.join(', ') }}
                                </span>

                                <span v-else-if="internalIndex === 'category'"> 
                                    <!-- {{ categoryList(data[index].category).substring(0, 30) + '...' }} -->
                                    {{ categoryList(data[index].category) }}
                                </span>

                                <span v-else-if="internalIndex === 'Actions'">
                                    <a @click="detailsPopUp(data[index])" title="Details">  <i style="color: #2fbab7;" class="material-icons">&#xE8F4;</i></a>
                                    <a title="Edit" @click="addBanner(true, data[index])"> <i style="color: #F5AC59;" class="material-icons">mode_edit</i></a>
                                    <a title="Delete" @click="deleteFieldModal(data[index].id)"> <i style="color: #ED5565;" class="material-icons">&#xE5C9;</i></a>
                                 </span>

                                <span v-else>{{ value }} </span>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th v-for="column in columns">
                                <input style="text-align: center; outline: none; border: none;" type="text" v-bind:placeholder="column"/>
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
     // Vue Gallery
    import VueImg from 'v-img';
    Vue.use(VueImg);

    // VeeValidate import
    import VeeValidate from 'vee-validate';
    Vue.use(VeeValidate);

    export default {
        data () {
            return {
                add : true,
                id: null,
                validateForm: 'none',
                isLoading: true,
                tableName: null,
                tableId: null,
                columns: null,
                data: null,
                errorMessage: null,
                delteUrl: null,
                deleteId: null,
                requestUrl: null,

                details: {
                    category: [],
                    keywords: [] 
                },

                payload: {
                    keywords         : {
                        fieldType: 'text-field',
                        label : 'Keywords',
                        value : 'keywords',
                        rules : 'required',
                        post  : null,
                    },

                    name         : {
                        fieldType: 'text-field',
                        label : 'Name',
                        value : 'name',
                        rules : 'required',
                        post  : null,
                    },

                    url         : {
                        fieldType: 'text-field',
                        label : 'URL',
                        value : 'url',
                        rules : 'required',
                        post  : null,
                    },

                    imageLink         : {
                        fieldType: 'text-field',
                        label : 'Image Link',
                        value : 'imageLink',
                        rules : 'required',
                        post  : null,
                    },

                    brand : {
                        fieldType: 'combobox',
                        disabled: false,
                        label: 'Brand',
                        value: 'brand',
                        rules : 'required',
                        post: null,
                        data: []
                    },

                    cat : {
                        fieldType: 'comboboxMultiSelect',
                        disabled: false,
                        label: 'Categories',
                        value: 'cat',
                        rules : 'required',
                        post: [],
                        data: []
                    },
                }
            }
        },

        methods: {
            payloadMount () {
                let self          = this;
                let request       = this.payload;
                let payload       = {};

                Object.keys(self.payload).forEach(function (value) {
                    payload[value] = self.payload[value].post;
                })

                payload.id = this.id;

                return payload;
            },

            cleanForm () {
                let self = this;

                //Clean Form
                Object.keys(self.payload).forEach(function (value) {
                    self.payload[value].post = null
                });

                self.payload.cat.post             = [];
                self.payload.brand.post           = [];
                self.payload.keywords.post        = [];
                $("#keywords-tags").tagsinput('removeAll');

                self.loadComboBox();

            },

            loadComboBox () {
                this.$nextTick(function () {
                    $('.selectpicker').selectpicker();
                    $('.selectpicker').selectpicker('refresh');
                });
            },

            validateBeforeSubmit() {
                this.payload.keywords.post = $("#keywords-tags").tagsinput('items');

                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.postBanner();

                        console.log('Form Submitted!');
                    } else {
                        this.validateForm = null;
                        console.log('Correct them errors!');
                    }
                });
            },

            postBanner () {
                let action = 'add';

                if (this.add === false) {
                    action = 'edit';
                }

                let payload = this.payloadMount()

                let self = this;

                // Send a POST request
                axios({
                    method : 'post',
                    url    : action + '-dynamic-banner',
                    data   : payload
                })

                .then(function (response) {
                    // Hide Add Banner Modal
                    $('#add-banner-modal').modal('hide');

                    // Show success modal
                    $('#modal-success').modal('show');
                    window.closedTable.tablesRequest(self.requestUrl, true);
                    self.cleanForm();
                })
                .catch(function (error) {
                   // Show success modal
                    $('#modal-error').modal('show');
                });
            },

            editFieldModal (banner) {
                this.detailsEdit = banner;
                // Show Add Banner modal
                $('#edit-banner-modal').modal('show');

            },

            addBanner (flag, banner) {
                this.errors.clear();
                this.cleanForm();
                if (flag === false) {
                    this.add = true;
                } else if (flag === true) {
                    this.add = false;

                    for (let i = 0; i < banner.keywords.length; i++) {
                        $('#keywords-tags').tagsinput('add', banner.keywords[i]);
                    }

                    this.id                           = banner.id;
                    this.payload.imageLink.post       = banner.image;
                    this.payload.url.post             = banner.url_redirect;
                    this.payload.name.post            = banner.Name;
                    this.payload.cat.post             = banner.Actions.cat_ids;
                    this.payload.brand.post           = banner.Actions.brand_id;
                    this.payload.keywords.post        = $("#keywords-tags").tagsinput('items');

                    this.$nextTick(function () {
                        $('.selectpicker').selectpicker();
                        $('.selectpicker').selectpicker('refresh');
                    })
                }


                // Show Add Banner modal
                $('#add-banner-modal').modal('show');
            },

            detailsPopUp (details) {
                this.details = details;
                // Show banner details modal
                $('#banner-details-modal').modal('show');
            },

            categoryList (cat) {
                let categoryNamesList = '';

                console.log('debug')

                for (let i = 0; i < cat.length; i++) {
                    if (cat.length === i + 1) {
                        categoryNamesList = categoryNamesList + cat[i].name
                    } else {
                        categoryNamesList = categoryNamesList + cat[i].name + ', '
                    }
                }

                return categoryNamesList;
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
                this.id = id;
                $('#confirm-modal').modal('show');
            },

            deleteField() {
                // Create payload {id}
                let payload    = {}
                    payload.id = this.id;

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
                    order: [[ 0, 'desc' ]],
                    buttons: [
                        {text: '<i title="Add" class="material-icons">&#xE145;</i>', action: function () {
                                $('.selectpicker').selectpicker();
                                $('.selectpicker').selectpicker('refresh');

                                // Show Add Banner Modal
                                self.addBanner(false);
                            }  
                        },
                        {extend: 'pageLength',titleAttr: 'Page Lenght'},
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

            getBrands (instance) {
                // Send a POST request
                axios({
                    method: 'get',
                    url: 'get-brands-only',
                })

                .then(function (response) {
                    // Init ComboBox
                    instance.comboBoxMount(response.data.brands, 'brand');
                })
                .catch(function (error) {
                });
            },

            getBannersCategories (instance) {
                // Send a POST request
                axios({
                    method: 'get',
                    url: 'get-banners-categories',
                })

                .then(function (response) {
                    // Init ComboBox
                    instance.comboBoxMount(response.data.cat, 'cat');
                })
                .catch(function (error) {
                });
            },

            comboBoxMount (response, data) {
                this.payload[data].data     = response.data;
                this.payloadEdit[data].data = response.data;

                this.$nextTick(function () {
                    $('.selectpicker').selectpicker();
                    $('.selectpicker').selectpicker('refresh');
                })
            },
        },

        mounted() {
            // Get Brands
            this.getBrands(this);

            // Get Banners Types
            this.getBannersCategories(this);
        }
    }
</script>