<template>


    <div class="card-body border-4 border-top border-bottom rounded-bottom rounded-top border-secondary py-2 mx-2"

    >

        <div class="flex-center-space">

            <div class="px-2 elipsis">
                <h5 class="mb-0"><i class="fa-solid fa-layer-group"></i><span class="mx-2">{{ layoutCaption }}</span></h5>
            </div>

            <div class="px-2">
                <button class="btn btn-primary btn-sm" :class="{'btn-secondary': selected4, 'hide': layoutVertical}"
                    @click="changeWidth('w-25', 'w-75')">
                    1/4
                </button>
                <button class="btn btn-primary btn-sm mx-1" :class="{'btn-secondary': selected3, 'hide': layoutVertical}"
                    @click="changeWidth('w-33', 'w-67')">
                    1/3
                </button>
                <button class="btn btn-primary btn-sm" :class="{'btn-secondary': selected2, 'hide': layoutVertical}"
                    @click="changeWidth('w-50', 'w-50')">
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
                default: false
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

                this.masterWidth = ''
                this.slaveWidth = ''
            }
            else {
                this.masterWidth = this.masterWidthStore
                this.slaveWidth = this.slaveWidthStore
            }
        },

        selectButton(master) {

            this.clearButtonSelectedStyle()

            switch (master) {
                case 'w-25': this.selected4 = true; break;
                case 'w-33': this.selected3 = true; break;
                case 'w-50': this.selected2 = true; break;
            default: break;
        }

        },

        changeWidth(master, slave) {

            this.layoutVertical = false
            this.masterWidth = master
            this.slaveWidth = slave

            this.selectButton(master)

        }
    },

    created(){

        this.masterWidth = this.masterWidthProp
        this.slaveWidth = this.slaveWidthProp
        this.layoutVertical = false
        // this.selected3 = true

        this.changeWidth(this.masterWidthProp, this.slaveWidthProp)
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
