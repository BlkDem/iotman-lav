<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <div class="container-fluid">
            <div class="navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav me-auto  d-flex">
                    <filter-comp :filterDataFields="filterDataFields"></filter-comp>
                    <!-- <li class="nav-item  d-flex py-1  w-100">
                        <input class="form-control me-sm-2" type="text" v-model="dataFilter" />
                    </li> -->
                    <sort-comp :sortDataFields="sortDataFields" @updateSortedData="doSort"></sort-comp>
                </ul>
                <div class="d-flex">
                    <button class="btn btn-primary mx-2" :class="{'disabled' : compactView}"
                        @click="setCompactView(true)">
                        <i class="fas fa-list"></i>
                    </button>
                    <button class="btn btn-primary" :class="{'disabled' : !compactView}" @click="setCompactView(false)">
                        <i class="fas fa-th-large"></i>
                    </button>
                    <button class="btn btn-primary mx-2" @click="$emit('addEvent')">
                        Add
                    </button>
                    <button class="btn btn-primary" @click="getData">
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
        'getData'
    ],

    props: {
        dataFields: {
            type: Array,
        },
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

        updateFilteredData() {
            this.$emit('updateFilteredData', this.dataFilter)
        },

        setCompactView(value) {
            this.compactView = value
            localStorage.setItem('CompactView', value)
            this.$emit('setCompactView', value)
        },

        getData() {
            this.$emit('getData')
        }
    },

    watch: {
        dataFilter: function () {
            handler: this.updateFilteredData();
        },
    },
}
</script>
