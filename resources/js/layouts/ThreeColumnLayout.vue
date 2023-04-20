<template>


    <div class="card-body border-2 border-top border-bottom rounded-bottom rounded-top border-secondary py-2 mx-2"

    >

        <div class="flex-center-space">

            <div class="px-2 elipsis">
                <h5 class="mb-0"><i class="fa-solid fa-layer-group"></i><span class="mx-2">{{ layoutCaption }}</span></h5>
            </div>

            <div class="px-2">
                <button class="btn btn-primary btn-sm" :class="{'btn-secondary': selected[layoutModes.first], 'hide': layoutVertical}"
                    @click="changeWidth('w-25', 'w-25', 'w-50', layoutModes.first)">
                    &frac14;
                </button>
                <button class="btn btn-primary btn-sm mx-1" :class="{'btn-secondary': selected[layoutModes.middle], 'hide': layoutVertical}"
                    @click="changeWidth('w-33', 'w-33', 'w-33', layoutModes.middle)">
                    &frac12;
                </button>
                <button class="btn btn-primary btn-sm" :class="{'btn-secondary': selected[layoutModes.last], 'hide': layoutVertical}"
                    @click="changeWidth('w-25', 'w-50', 'w-25', layoutModes.last)">
                    &frac34;
                </button>
                <button class="btn btn-primary btn-sm mx-1" :class="{'btn-secondary': !layoutVertical}"
                    @click="changeOrientation()">
                    <i class="fa-solid fa-table-columns"></i>
                </button>
            </div>

        </div>

    </div>


    <div :class="{'flex-top': !layoutVertical}">
        <div class="mx-2" :class="firstWidth">
            <slot name="first">

            </slot>
        </div>

        <div class="mx-2" :class="middleWidth">
            <slot name="middle">

            </slot>
        </div>

        <div class="mx-2" :class="lastWidth">
            <slot name="last">

            </slot>
        </div>

    </div>

</template>

<script>

export default {

    props: {

        layoutCaption: {
            type: String,

        },

        firstWidthProp: {
            type: String,
            default: 'w-25'
        },

        middleWidthProp: {
            type: String,
            default: 'w-50'
        },

        lastWidthProp: {
            type: String,
            default: 'w-25'
        }
    },


    data() {
        return {

            layoutModes: {
                first: 0,
                middle: 1,
                last: 2,
            },

            layoutVertical: {
                type: Boolean,
                default: false
            },

            firstWidth: {
                type: String,
                default: 'w-25'
            },

            lastWidth: {
                type: String,
                default: 'w-25'
            },

            middleWidth: {
                type: String,
                default: 'w-50'
            },

            selected: {
                type: Array,
                default: []
            },

        }
    },

    methods: {


        test(val)
        {
            return false
        },

        clearButtonSelectedStyle(){

            this.selected = []

        },

        changeOrientation(){

            this.layoutVertical = !this.layoutVertical

            if (this.layoutVertical) {

                this.firstWidthStore = this.firstWidth
                this.lastWidthStore = this.lastWidth
                this.middleWidthStore = this.middleWidth

                this.firstWidth = ''
                this.lastWidth = ''
                this.middleWidth = ''
            }
            else {
                this.firstWidth = this.firstWidthStore
                this.lastWidth = this.lastWidthStore
                this.middleWidth = this.middleWidthStore
            }
        },

        changeWidth(first, last, middle, btn) {
            this.layoutVertical = false
            this.firstWidth = first
            this.lastWidth = last
            this.middleWidth = middle

            this.clearButtonSelectedStyle()

            switch (btn) {
                case this.layoutModes.first: this.selected[this.layoutModes.first] = true; break;
                case this.layoutModes.last: this.selected[this.layoutModes.last] = true; break;
                case this.layoutModes.middle: this.selected[this.layoutModes.middle] = true; break;
                default: break;
            }

        }
    },

    created(){

        this.firstWidth = this.firstWidthProp
        this.lastWidth = this.lastWidthProp
        this.middleWidth = this.middleWidthProp

        this.layoutVertical = false //verticat layout (default)

        this.selected[this.layoutModes.first] = true //first layout mode active

        this.changeWidth(this.firstWidth, this.lastWidth, this.middleWidth, this.layoutModes.first) //apply mode
    }
}

</script>

<style scoped>
.flex-top {
    display: flex;
    align-items: flex-start;
}
.flex-center-space {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.w-33 {
    width: 33%;
}
.w-67 {
    width: 67%;
}

.mb-0 {
    margin-bottom: 0;
}


</style>
