<style lang="scss" scoped>
    .bug-report {
        .label {
            background-color: #ED5565;
            color: #fff;
        }

        .form-control:focus, .single-line:focus {
            border-color: #ED5565!important;
        }
    }
</style>

<template>
    <div style="display: inline-block;">

        <!-- Notifications Modal -->
        <div v-if="false" class="modal inmodal fade" id="notifications-modal" tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">You have a new feature!</h4>
                    </div>
                    <div class="modal-body" style="text-align: center; display: block;">
                        <i style="color: #2caeab; display: block; padding-bottom: 20px;" class="fa fa-warning fa-5x fa-bell"></i>
                        <small class="font-bold"> Please check de notification center on the top navbar and follow the tutorial </small><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>


        <div class="bug-report" style="display: inline-block">
            <div class="modal inmodal fade" id="modal-bug-report" tabindex="-1" role="dialog"  aria-hidden="true" style="z-index: 209999950!important;">
                <div class="modal-dialog modal-md">
                    <form @submit.prevent="validateBeforeSubmit(payload)" id="form-section-projects" enctype='multipart/form-data'>
                        <div class="modal-content">
                            <div class="modal-header">
                                <button leadType="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                                <h4 class="modal-title">Bug Report</h4>

                                <i class="fa fa fa-bug fa-4x text-danger" style="display: block;"></i>
                            </div>
                            <div class="modal-body" style="text-align: center; display: block;">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group label-floating text-left" :class="{'has-error': errors.has(payload.tittle.value)}">
                                            <label class="label btn-danger" style="background-color: #ED5565; color: #fff;">{{ payload.tittle.label }}</label>
                                            <input v-model="payload.tittle.post" :name=payload.tittle.value  v-validate :data-vv-rules=payload.tittle.rules :data-vv-validate-on="validateForm" type="text" class="input form-control"></input>
                                        </div>
                                        <span v-show="errors.has(payload.tittle.value)" class="help-block text-danger text-center">
                                                <strong>{{ errors.first(payload.tittle.value) }}</strong>
                                            </span>
                                    </div>
                                </div>

                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group label-floating text-left" :class="{'has-error': errors.has(payload.bug.value)}">
                                                <label class="label btn-danger" style="background-color: #ED5565; color: #fff;">{{ payload.bug.label }}</label>
                                                <textarea style="max-width: 538px;" v-model="payload.bug.post" :name=payload.bug.value  v-validate :data-vv-rules=payload.bug.rules :data-vv-validate-on="validateForm" type="text" class="input form-control"></textarea>
                                            </div>
                                            <span v-show="errors.has(payload.bug.value)" class="help-block text-danger text-center">
                                                <strong>{{ errors.first(payload.bug.value) }}</strong>
                                            </span>
                                        </div>
                                    </div>

                            </div>
                            <div class="modal-footer">
                                <button leadType="button" class="btn btn-white" data-dismiss="modal">Close</button>

                                <button type="submit" class="btn btn-danger pull-right ladda-button ladda-button-selector-bug-report" data-style="expand-right">Report</button>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <a @click="bugReportPopUp()" id="bug-report" class="dropdown-toggle count-info" title="Bug Report" alt="Bug Report">
                <i class="fa fa-bug" style="color: #ec4c5d"></i>
            </a>
        </div>

        <li class="dropdown" style="display: none;">
            <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                <i class="fa fa-bell" style="color: #999c9e;"></i>  <span style="right: 1px; top: -8px;" class="label label-primary">1</span>
            </a>
            <ul class="dropdown-menu dropdown-alerts">
                <li>
                    <a>
                        <div>
                            <i style="color: #2fbab7;" class="fa fa-check-square fa-fw"></i> You have 1 new feature

                            <div class="slider" style="padding-top: 10px;">
                                <img v-img:my-group="{sourceButton: true, title: 'Now you can filter multiple fields on table' }" class="img-responsive" src="/images/features/filters/tutorial-1.png">
                                <img style="padding-top: 3px;" v-img:my-group="{sourceButton: true, title: 'Choose your filter on footer and start typing' }" class="img-responsive" src="/images/features/filters/tutorial-2.png">
                                <img style="padding-top: 3px;" v-img:my-group="{sourceButton: true, title: 'You can combine multiple fields options' }" class="img-responsive" src="/images/features/filters/tutorial-3.png">
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </li>
    </div>
</template>

<script>
    // VeeValidate import
    import VeeValidate from 'vee-validate';
    Vue.use(VeeValidate);

    // Vue Gallery
    import VueImg from 'v-img';
    Vue.use(VueImg);

    export default {
        data () {
            return {
                validateForm: 'none',
                payload: {
                    bug : {
                        fieldType: 'text-field',
                        label: 'Bug',
                        value: 'bug',
                        rules: 'required',
                        post  : null,
                    },
                    tittle : {
                        fieldType: 'text-field',
                        label: 'Title',
                        value: 'tittle',
                        rules: 'required',
                        post  : null,
                    },
                }
            }
        },

        methods: {

            bugReportPopUp () {
                // Show Bug Report Modal
                $('#modal-bug-report').appendTo("body").modal('show');
            },

            createComboboxPayload (data) {
                let payload = []
                let obj = {};

                data.forEach(function(element, index) {
                    payload.push({"label": element.name, "value": element.name});
                });

                payload = {"data": payload};

                return payload;
            },

            postInsertBug (payload) {
                // Bind Create button loader
                window.buttonLoader = Ladda.create(document.querySelector( '.ladda-button-selector-bug-report'));
                window.buttonLoader.start();

                // Send a POST request
                axios({
                    method: 'post',
                    url: 'bug-report/insert',
                    data: payload
                })

                .then(function (response) {
                    window.buttonLoader.stop();
                    $('.ladda-button-selector-bug-report').fadeIn(1000, function() {
                        $(this).append('<i style="padding-left: 5px;" class="fa fa-check"></i>');
                    });

                    setTimeout(function(){
                        $('.ladda-button-selector-bug-report > .fa-check').fadeOut(1000, function() { $(this).removeClass('fa-check') });

                    }, 1000)

                    // Show success modal
                    $('#modal-success').modal('show');

                })
                .catch(function (error) {
                    if (error.response.status === 419) {
                        error.response.statusText = "Your session has expired, will be redirected to the login";

                        setTimeout(function() {
                            window.location.href = '/';
                        }, 3000);
                    }

                    window.buttonLoader.stop();

                    $('.ladda-button-selector-bug-report').fadeIn(1000, function() {
                        $(this).append('<i style="padding-left: 5px;" class="fa fa-close"></i>').addClass('btn-danger');
                    });

                    setTimeout(function(){
                        $('.ladda-button-selector-bug-report > .fa-close').fadeOut(1000, function() { $(this).remove(); });
                        $('.ladda-button-selector-bug-report').removeClass('btn-danger');
                    }, 1000)

                    // Show success modal
                    $('#modal-error').modal('show');
                });
            },

            validateBeforeSubmit(request) {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        var payload = {};

                        Object.keys(request).forEach(function (value) {
                            payload[value] = request[value].post;
                        })

                        this.postInsertBug(payload);

                        console.log(payload);

                        console.log('Form Submitted!');

                        return;
                    } else {
                        this.validateForm = null;
                        console.log('Correct them errors!');
                    }
                });
            },
        },

        mounted() {
        }
    }
</script>


