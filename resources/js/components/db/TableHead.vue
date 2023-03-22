<template>
    <div class="border-4 border-top rounded-top border-secondary">
        <div class="mx-2 my-2">
            <div class="row vertical-center">

                <div :class="setClass(field.columnsCount, field.isHidden)" class="flex  fw-bold" v-for="(field, ckey) in fieldsCaptions"
                    v-bind:key="ckey">

                    <div v-if="field.isSortable" class="cursor-pointer" @click="changeDirection(ckey)">
                        {{ field.fieldCaption }}
                    </div>

                    <div v-if="!field.isSortable">
                        {{ field.fieldCaption }}
                    </div>

                    <a class="nav-link mx-1" v-if="field.isSortable">
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

    emits: ['updateSortedData'],

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
        for (let item in this.fieldsCaptions) {
            this.sortArrow[item] = 'fa-caret-down'
            this.sortDirection[item] = false
        }
    },

    methods: {
        setClass(width, hidden) {
            let colClass = 'col-sm-' + width + ' col-xs-' + width + ' col-lg-' + width
            return (hidden)?'hide':colClass
            // return colClass
        },

        changeDirection(ckey) {
            this.sortDirection[ckey]=!this.sortDirection[ckey]
            this.sortArrow[ckey] = (this.sortDirection[ckey])?'fa-caret-up':'fa-caret-down'

            console.log(ckey, this.sortDirection[ckey], this.fieldsCaptions[ckey])

            this.doSort(this.fieldsCaptions[ckey], this.sortDirection[ckey])
        },

        doSort(column, direction) {
            // this.sortColumn = column
            // this.sortDirection = direction
            this.$emit('updateSortedData', column.fieldName, direction)
        },

    }
}

</script>
