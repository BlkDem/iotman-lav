<template>
    <div class="nav-item dropdown me-auto vertical-center">
    <div class="flex-center">
        <a class="nav-link mx-2" data-bs-toggle="dropdown" role="button" aria-haspopup="true"
            aria-expanded="false">{{ SortName }}
        </a>
        <a class="nav-link" @click="changeDirection()">
            <i class="fa-solid" :class="{'fa-caret-up': sortDirection, 'fa-caret-down': !sortDirection}"></i>
        </a>
        <div class="dropdown-menu">
            <a class="dropdown-item" v-for="sortField in sortDataFields"
                :key="sortField.fieldName" :value="sortField.fieldName"
                @click="doSort(sortField, sortDirection)">{{ sortField.fieldCaption }}</a>
            <!-- <div class="dropdown-divider"></div> -->
            <!-- <a class="dropdown-item" @click="changeDirection()">
                {{ sortDirection ? sortOrderStrings[0] : sortOrderStrings[1] }}
            </a> -->
        </div>
    </div>
    </div>
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
            sortColumn: undefined,
        }
    },

    computed: {
        SortName() {
            //combine elements to the caption string
            return this.SortingCaption(this.sortColumn.fieldCaption, this.sortDirection)
        },
    },

    created() {
        //set the default sort field
        this.sortColumn = this.sortDataFields[0]
    },

    methods: {

            //strings processing

            SortingCaption($column, $direction) {
                let res = ""
                //     $column === "id" ?
                //     this.SORT_BY_ID : this.SORT_BY + $column;
                switch ($column) {
                    case 'ID':
                        res = MessagesConstants.SORT_BY_ID;
                        break;
                    case 'Name':
                        res = MessagesConstants.SORT_BY_NAME;
                        break;
                    case 'Description':
                        res = MessagesConstants.SORT_BY_DESCRIPTION;
                        break;
                    default:
                        res = MessagesConstants.SORT_BY + $column;
                        break;
                }
                // res += " (";
                // res += !$direction ?
                //     '<i class="fa-solid fa-caret-down"></i>' :
                //     '<i class="fa-solid fa-caret-up"></i>';
                // res += ")";
                return res;
            },

            //chage sort direction ASC / DESC
            changeDirection() {
                this.sortDirection = !this.sortDirection;
                this.doSort(this.sortColumn, this.sortDirection);
            },

        //send a sort message
        doSort($column, $direction) {
            this.sortColumn = $column
            this.sortDirection = $direction
            this.$emit('updateSortedData', $column.fieldName, $direction)
        },
    }
}
</script>
