<template>
    <div>
        <label  v-for="(item,index) in boxs" :key="index">
            <input type="checkbox"
                   :value="item.value"
                   :checked="item.checked"
                   @change="$emit(item.event,$event.target.checked)">
            {{item.value}}
        </label>
    </div>
</template>

<script>
    export default {
        name: "BaseCheckBox",
        props: {
            boxs: Array
        }
    }
</script>

<style scoped>

</style>
