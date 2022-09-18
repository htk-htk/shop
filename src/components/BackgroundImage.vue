<template>
    <div>
        <div id="picture">
            <img :src="images[index]" alt="加载中">
            <button v-for="item in buttons"
                    :style="item.style"
                    :key="item.id"
                    @click="selectImage"
                    :data-id="item.id"></button>
        </div>


    </div>
</template>

<script>
    import img1 from '../assets/1.jpg'
    import img2 from '../assets/2.jpg'
    import img3 from '../assets/3.jpg'

    const CURRENT_COLOR = 'red'
    const DEFAULT_COLOR = 'green'
    export default {
        name: "BackgroundImage",
        data() {
            return {
                images: [img1, img2, img3],
                index: 0,
                idInterval: 0,
                buttons: [
                    {
                        id: 0,
                        style: {
                            backgroundColor: CURRENT_COLOR
                        }

                    },
                    {
                        id: 1,
                        style: {
                            backgroundColor: DEFAULT_COLOR
                        }
                    },
                    {
                        id: 2,
                        style: {
                            backgroundColor: DEFAULT_COLOR
                        }
                    },

                ]
            }
        },
        mounted() {
            this.animation()
        },
        destroyed() {
            this.clearAnimation()
        },
        methods: {
            autoChange() {
                let length = this.images.length
                this.index++
                this.index = this.index % length
                this.setImageStyle(this.index)
            },
            setImageStyle(index) {
                for (let i = 0; i < this.buttons.length; i++) {
                    if (index === i) {
                        this.buttons[i].style.backgroundColor = CURRENT_COLOR
                    } else {
                        this.buttons[i].style.backgroundColor = DEFAULT_COLOR
                    }
                }
            },
            animation() {
                this.idInterval = setInterval(this.autoChange, 2000)
            },
            clearAnimation() {
                clearInterval(this.idInterval)
            },
            selectImage(e) {
                this.clearAnimation()
                this.index = Number(e.target.dataset.id)
                this.setImageStyle(this.index)
                this.animation()

            }
        }
    }
</script>

<style scoped>
    img {
        display: block;
        width: 500px;
        height: 300px;
    }

    #picture {
        text-align: center;
        display: inline-block;
    }

    #picture button {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 1px white solid;
        margin: 5px;
    }

    #picture button:hover {
        cursor: pointer;
    }
</style>
