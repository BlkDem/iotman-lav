<template>
    <li class="nav-item dropdown me-auto vertical-center">
        <a class="nav-link dropdown-toggle mx-2" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true"
            aria-expanded="false">{{ SortName }}</a>
        <div class="dropdown-menu w-100">
            <a class="dropdown-item" v-for="sortField in sortDataFields"
                :key="sortField.fieldName" :value="sortField.fieldName"
                @click="doSort(sortField, sortDirection)">{{ sortField.fieldCaption }}</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" @click="changeDirection()">
                {{ sortDirection ? sortOrderStrings[0] : sortOrderStrings[1] }}
            </a>
        </div>
    </li>
</template>

<script>

import MessagesConstants from '../../strings_constants/strings';

export default {

    props: {
        sortDataFields: {
            type: Array,
        },
    },

    emits: ["updateSortedData"],

    data() {
        return {
            sortOrderStrings: [
                    MessagesConstants.SORT_ASC,
                    MessagesConstants.SORT_DESC,
                ],
                sortOrder: MessagesConstants.SORT_ASC,
                sortDirection: false,
                sortColumn: undefined, // to props
                //sortFields: [],
        }
    },

    computed: {
        SortName() {
            return MessagesConstants.SortingCaption(this.sortColumn.fieldCaption, this.sortDirection)
        },
    },

    created() {
        this.sortColumn = this.sortDataFields[0]
        // console.log('fields: ', this.sortDataFields)
    },

    methods: {

        changeDirection() {
            this.sortDirection = !this.sortDirection;
            this.doSort(this.sortColumn, this.sortDirection);
        },

        doSort($column, $direction) {
            console.log('sort from sortcomp', $column, $direction)
            this.sortColumn = $column
            this.sortDirection = $direction
            this.$emit('updateSortedData', $column.fieldName, $direction)
        },

    }
}
</script>
