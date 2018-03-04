<style lang="scss">
    .popover-content {
        text-align: center;
    }
</style>
<template>
    <div>
        <div class="col-lg-12" v-for="(data, index) in workflows" style="margin-top: 80px; margin-bottom: 130px;">
            <button v-for="(data, index) in workflows[index]" v-bind:data-content="data.leadVisitors" href="#" title="Visitors" data-toggle="popover" v-bind:data-placement="getPosition()" type="button" :class="getColor(workflows[index])" class="btn btn-arrow-right">
                <span>{{ data.url }}</span>

                {{ data[index] }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            colors       : ['btn-info', 'btn-warning'],
            lastColors   : 0,
            position     : ['top', 'bottom'],
            lastPosition : 0,
            workflows    : []
        }
    },

    methods: {
        getWorkflows (instance) {
            let self = this;

            // Send a POST request
            axios({
                method: 'get',
                url: 'workflow-dashboard',
            })

            .then(function (response) {

                console.log(response)
                // Init ComboBox
                 instance.workflows = response.data.workflows.data;

                self.$nextTick(function () {
                    $('button[data-toggle="popover"]').popover('show');
                });

            })
            .catch(function (error) {

            });
        },

        objectLength (obj) {
            var result = 0;
            for(var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    result++;
                }
            }
            return result;
        },

        getPosition () {
            let position = this.position[this.lastPosition];

            if (this.lastPosition === 0) {
                this.lastPosition = 1
            } else {
                this.lastPosition = 0
            }

            return position;
        },

        getColor (objectsNumber) {

            let color = this.colors[this.lastColors];

            if (this.lastColors != 1) {
                this.lastColors = this.lastColors + 1
            } else {
                this.lastColors = 0
            }

            return color;
        },
    },

    mounted() {
        //Get Workflows
        this.getWorkflows(this);
    }
}
</script>