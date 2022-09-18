<template>
    <div>

        <ul>
            <template v-for="i in preCount">
                <li v-if="getMusic(i-1)" :key="getMusic(i-1).id">
                    {{getMusic(i-1).title}}
                </li>
            </template>
        </ul>

        <button @click="next">next</button>
        <button @click="back">back</button>

    </div>
</template>

<script>
    export default {
        name: "ListPage",
        data() {
            return {
                preCount: 4,

                music: [
                    {
                        id: 0,
                        title: "初见"
                    },
                    {
                        id: 1,
                        title: "太多"
                    }, {
                        id: 2,
                        title: "只要平凡"
                    }, {
                        id: 3,
                        title: "孤勇者"
                    }, {
                        id: 4,
                        title: "一滴泪的时间"
                    }, {
                        id:5,
                        title: "奔赴星空"
                    },
                    {
                        id: 6,
                        title: "念念"
                    },
                    {
                        id: 7,
                        title: "如愿"
                    },{
                        id: 8,
                        title: "置身世外"
                    },
                ],
                zoneIndex: 0
            }
        },
        computed: {
            sum() {
                return Math.ceil(this.music.length / this.preCount)
            },
            countIndex(){
               return  (index)=>this.preCount*this.zoneIndex+index
            },
            getMusic(){
                return (index)=> this.music[this.countIndex(index)]
            }
        },
        filters:{

        },
        methods: {
            next() {
                this.zoneIndex++
                this.zoneIndex = this.zoneIndex % this.sum
            },
            back() {

                this.zoneIndex--
                if (this.zoneIndex < 0) this.zoneIndex = this.sum - 1
            }
        }
    }
</script>

<style scoped>

</style>
