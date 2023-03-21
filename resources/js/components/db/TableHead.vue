<template>
            <div class="border-4 border-top rounded-top border-secondary"
            >
                <div class="mx-2 my-2">
                    <div class="row vertical-center">

                        <div :class="setClass(field.columnsCount)" class="flex  fw-bold"

                            v-for="(field, ckey) in fieldsCaptions" v-bind:key="ckey"
                        >

                            <span >
                                {{ field.fieldCaption }}
                            </span>

                            <a class="nav-link mx-1">
                                <i class="fa-solid" :class="sortArrow[ckey]" @click="changeDirection(ckey)"></i>
                            </a>
                        </div>

                        <div class="col-sm-3 col-xs-3 col-lg-3  edit-buttons ">
                        </div>
                    </div>
                </div>
            </div>

</template>

<script>

export default {
    props: {
        fieldsCaptions: {
            type: Array
        }
    },

    data() {
        return {
            sortArrow: [],
            sortDirection: []
        }
    },

    created() {
        for (let item in this.fieldsCaptions) this.sortArrow[item] = 'fa-caret-down'
    },

    methods: {
        setClass(width) {
            return 'col-' + width
        },

        changeDirection(ckey) {
            this.sortDirection[ckey]=!this.sortDirection[ckey]
            this.sortArrow[ckey] = (this.sortDirection[ckey])?'fa-caret-down':'fa-caret-up'
        }
    }
}

</script>
