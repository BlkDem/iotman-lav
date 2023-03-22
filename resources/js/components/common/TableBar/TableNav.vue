<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <div class="container-fluid">
            <div class="navbar-collapse" id="navbarColor02">
                <div class="navbar-nav me-auto  flex-center">
                    <filter-comp
                        :filterDataFields="filterDataFields"
                        @filterData="updateFilteredData">
                    </filter-comp>
                    <!-- <li class="nav-item  d-flex py-1  w-100">
                        <input class="form-control me-sm-2" type="text" v-model="dataFilter" />
                    </li> -->
                </div>

                <div>
                    <sort-comp v-if="!readOnly"
                        :sortDataFields="sortDataFields"
                        @updateSortedData="doSort">
                    </sort-comp>
                </div>

                <div class="d-flex">
                    <button class="btn btn-primary mx-2"
                        v-if="!readOnly"
                        :class="{'disabled' : compactView}"
                        @click="setCompactView(true)">
                        <i class="fas fa-list"></i>
                    </button>
                    <button class="btn btn-primary" :class="{'disabled' : !compactView}"
                        v-if="!readOnly"
                        @click="setCompactView(false)">
                        <i class="fas fa-th-large"></i>
                    </button>
                    <button class="btn btn-primary mx-2"
                        v-if="!readOnly"
                        @click="$emit('addEvent')">
                        <i class="fas fa-plus-circle"></i>
                    </button>
                    <button class="btn btn-primary" @click="getTableData">
                        <i class="fas fa-sync-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import SortComp from './SortComp.vue';
import FilterComp from './FilterComp.vue';

export default {
    components: {
        SortComp,
        FilterComp
    },

    emits: [
        "setCompactView",
        "addEvent",
        "doSort",
        "doFilter",
        "updateSortedData",
        "updateFilteredData",
        'getTableData'
    ],

    props: {
        dataFields: {
            type: Array,
        },

        readOnly: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            compactView: true,
            dataFilter: "",
            sortDataFields: undefined,
            filterDataFields: undefined
        }
    },

    mounted() {
        if (localStorage.getItem('CompactView')) {
            this.compactView = (localStorage.getItem('CompactView') === 'true');
        }
    },

    created() {
        this.prepareSortFieldsArray()
        this.prepareFilterFieldsArray()
    },


    methods: {

        prepareSortFieldsArray() {
            // exclude 'image' fields from fieldset
            this.sortDataFields = this.dataFields.filter(field => !field.isImage);
        },

        prepareFilterFieldsArray() {
            // exclude 'image' fields from fieldset
            this.filterDataFields = this.dataFields.filter(field => !field.isImage);
        },

        doSort($column, $direction) {
            // console.log('sort from tablenav', $column, $direction)
            this.$emit('updateSortedData', $column, $direction)
        },

        updateFilteredData(fieldName, filter) {
            console.log(filter)
            this.$emit('updateFilteredData', fieldName, filter)
        },

        setCompactView(value) {
            this.compactView = value
            localStorage.setItem('CompactView', value)
            this.$emit('setCompactView', value)
        },

        getTableData() {
            this.$emit('getTableData')
        }
    },

    watch: {
        // dataFilter: function () {
        //     handler: this.updateFilteredData();
        // },
    },
}
</script>
