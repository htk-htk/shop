<template>
    <div >
        <div class="clearfix">
            <SortNavBar class="left"/>
            <BackgroundImage class="center"/>
        </div>
        <ImageContent :imgs="imgs"/>
    </div>
</template>

<script>
    import SortNavBar from "@/page/SortNavBar";
    import ImageContent from "@/components/ImageContent";
    import {mapState} from 'vuex'
    import BackgroundImage from "@/components/BackgroundImage";
    export default {
        components: {BackgroundImage, ImageContent, SortNavBar},
        props: {
            id: String
        },
        data() {
            return {
                items: [
                    {name: '用户名', type: 'text', value: '', event: 'a-a'},
                    {name: '密码', type: 'password', value: '', event: 'b-b',}
                ],
                boxs: [
                    {value: 'a', event: 'a-a', checked: true},
                    {value: 'b', event: 'b-b', checked: false},
                    {value: 'c', event: 'c-c', checked: true}
                ],
                radios: {
                    selected: '',
                    items: ['a', 'b', 'c']
                }

            }
        },
        computed: {
            ...mapState(['imgsDress','imgsPhone']),
            imgs() {
                if (this.id === 'dress') {
                    return this.imgsDress
                }
                if (this.id === 'phone') {
                    return this.imgsPhone
                }
                return this.imgsDress
            },
            filterBoxs() {
                let arr = []
                this.boxs.forEach(box => {
                    if (box.checked) arr.push(box.value)
                })

                return arr.join(",")
            },
            filterItems() {
                let arr = []
                this.items.forEach(item => {
                    if (item.value) arr.push(item.value)
                })
                console.log(arr)
                return arr.join(",")
            }
        },

    }
</script>

<style scoped>
.clearfix::after{
    content: "";
    clear: both;
    display: table;
}
    .left{
        float: left;
    }
    .center{
        margin: auto;
        width: 50%;
    }
</style>
