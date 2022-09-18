<template>
    <div>
        <label v-for="(item,index) in radios.items" :key="index">
            <input type="radio"
                   :value="item"
                   :checked="item===radios.selected"
                   @change="$emit('change',$event.target.value)">
            {{item}}
        </label>
    </div>
</template>
<script>
    export default {
        name: "BaseRadioBox",
        props: {
            radios: Object
        }
    }
</script>

<style scoped>

</style>
