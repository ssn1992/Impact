<style scoped>
</style>

<template>
    <div>
        <Snowf
                :amount="50"
                :size="5"
                :speed="1.5"
                :wind="0"
                :opacity="0.8"
                :swing="1"
                :image="null"
                :zIndex="9999999999999999999999999999999999999999999"
                :resize="true"
                color="#fff"
        />
    </div>
</template>

<script>
    import Snowf from 'vue-snowf';

    export default {
        components: {
            Snowf
        },
    }
</script>


