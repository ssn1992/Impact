<style scoped>
    #submit-console {
        background-color: #263238;
        border-color: #263238;
        width: 100%;
        border-radius: 0;
        border: 0;
    }

    #submit-console disabled{
        cursor: auto;
    }

    #submit-console.btn-danger{
        background-color: #a94442;
        border: 0;
    }

    .btn-success {
        background-color: #2fbab7!important;
        border-color: #2fbab7!important;
        color: #FFFFFF!important;
    }
</style>
<template>
    <div>
        <div class="row" style="padding-bottom: 50px">
            <div class="col-lg-12">
                <div class="admin ibox float-e-margins m-t">
                    <div class="wrapper wrapper-content  animated fadeInRight">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="ibox ">
                                    <div class="ibox-title">
                                        <h5>Project Console <small>is a open terminal to the Impact project. Use this terminal with caution. </small>  </h5>
                                    </div>
                                    <textarea v-model="editor" style="display: none;" id="code"></textarea>

                                    <button id="submit-console" style="cursor: auto;" class="ladda-button ladda-button-submit btn btn-primary" data-style="zoom-in" type="submit">
                                        <i class="fa fa-terminal submit" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
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
                editor: null,
            }
        },

        methods: {
            initConsole () {
                window.editor = CodeMirror.fromTextArea(document.getElementById("code"), {
                    lineNumbers: true,
                    matchBrackets: true,
                    styleActiveLine: true,
                    theme: "material"
                });

                var instanceSubmit = this;
                $('.CodeMirror').keyup(function(event){
                    var key = event.which || event.keyCode;
                    if (key === 13) {
                        instanceSubmit.submitCommand();

                    }
                });
            },

            submitCommand () {
                var parts = window.editor.getValue().split("\n");
                var value = parts[parts.length - 2];

                if (value == 'clear') {
                    window.editor.setValue('');
                } else {
                    window.l = Ladda.create(document.querySelector('.ladda-button-submit'));
                    window.l.start();

                    var payload = {}
                        payload.command = value;

                    // Send a POST request
                    axios({
                        method: 'post',
                        url: 'admin-area/console-command',
                        data: payload,
                    })

                    .then(function (response) {
                        window.l.stop();
                        $('#submit-console').fadeIn(1000, function () {
                            $('#submit-console').addClass('btn-success');
                        });
                        setTimeout(function () {
                            $('#submit-console').fadeIn(1000, function () {
                                $('#submit-console').removeClass('btn-success');
                            });
                        }, 2000)

                        window.editor.replaceRange("\n" + response.data, CodeMirror.Pos(editor.lastLine()))
                        window.editor.focus();
                        window.editor.setCursor(window.editor.lineCount(), 0);
                    })

                    .catch(function (error) {
                        window.l.stop();
                        $('#submit-console').fadeIn(1000, function () {
                            $('#submit-console').addClass('btn-danger');
                        });
                        setTimeout(function () {
                            $('#submit-console').fadeIn(1000, function () {
                                $('#submit-console').removeClass('btn-danger');
                            });
                        }, 2000)

                        window.editor.replaceRange("\n" + response.data, CodeMirror.Pos(editor.lastLine()))
                        window.editor.focus();
                        window.editor.setCursor(window.editor.lineCount(), 0);

                    });
                }
            }
        },

        mounted() {
            this.initConsole();
        },
    }
</script>

