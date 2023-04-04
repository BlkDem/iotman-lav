<template>


    <div class="card-body border-4 border-top border-bottom rounded-bottom rounded-top border-secondary py-2 mx-2"
        :class="{'w-100': layoutVertical}"
    >

        <div class="flex-center-space">

            <div class="px-2">
                <h5><i class="fa-solid fa-layer-group"></i><span class="mx-2">{{ layoutCaption }}</span></h5>
            </div>

            <div class="px-2">
                <button class="btn btn-primary btn-sm" :class="{'btn-secondary': selected4, 'hide': layoutVertical}"
                    @click="changeWidth('w-25', 'w-75', 4)">
                    1/4
                </button>
                <button class="btn btn-primary btn-sm mx-1" :class="{'btn-secondary': selected3, 'hide': layoutVertical}"
                    @click="changeWidth('w-33', 'w-67', 3)">
                    1/3
                </button>
                <button class="btn btn-primary btn-sm" :class="{'btn-secondary': selected2, 'hide': layoutVertical}"
                    @click="changeWidth('w-50', 'w-50', 2)">
                    1/2
                </button>
                <button class="btn btn-primary btn-sm mx-1" :class="{'btn-secondary': !layoutVertical}"
                    @click="changeOrientation()">
                    <i class="fa-solid fa-table-columns"></i>
                </button>
            </div>

        </div>

    </div>


    <div :class="{'flex-top': !layoutVertical}">
        <div class="mx-2" :class="masterWidth">
            <slot name="master">

            </slot>
        </div>

        <div class="mx-2" :class="slaveWidth">
            <slot name="slave">

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

        masterWidthProp: {
            type: String,
            default: 'w-33'
        },

        slaveWidthProp: {
            type: String,
            default: 'w-67'
        }
    },


    data() {
        return {

            layoutVertical: {
                type: Boolean,
                default: false
            },

            masterWidth: {
                type: String,
                default: 'w-33'
            },

            slaveWidth: {
                type: String,
                default: 'w-67'
            },

            masterWidthStore: {
                type: String,
                default: 'w-33'
            },

            slaveWidthStore: {
                type: String,
                default: 'w-67'
            },

            selected2: {
                type: Boolean,
                default: false
            },

            selected3: {
                type: Boolean,
                default: true
            },

            selected4: {
                type: Boolean,
                default: false
            }

        }
    },

    methods: {

        clearButtonSelectedStyle(){
            this.selected2 = false
            this.selected3 = false
            this.selected4 = false
        },

        changeOrientation(){

            this.layoutVertical = !this.layoutVertical

            if (this.layoutVertical) {

                this.masterWidthStore = this.masterWidth
                this.slaveWidthStore = this.slaveWidth

                this.masterWidth = 'w-100'
                this.slaveWidth = 'w-100'
            }
            else {
                this.masterWidth = this.masterWidthStore
                this.slaveWidth = this.slaveWidthStore
            }
        },

        changeWidth(master, slave, btn) {
            this.layoutVertical = false
            this.masterWidth = master
            this.slaveWidth = slave

            this.clearButtonSelectedStyle()
            switch (btn) {
                case 2: this.selected2 = true; break;
                case 3: this.selected3 = true; break;
                case 4: this.selected4 = true; break;
                default: break;
            }

        }
    },

    created(){

        this.masterWidth = this.masterWidthProp
        this.slaveWidth = this.slaveWidthProp
        this.layoutVertical = false
        this.selected3 = true

        this.changeWidth(this.masterWidth, this.slaveWidth, 3)
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

</style>
