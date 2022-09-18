<template>
    <div>
        <label v-for="(item,index) in items" :key="index">
            {{item.name}}
            <input
                    :type="item.type"
                    :value="item.value"
                    @input="$emit(item.event,$event.target.value)">
        </label>

    </div>
</template>

<script>
    export default {
        name: "BaseInput",
        props: {
            items: Array,
        }
    }
</script>

<style scoped>

</style>
