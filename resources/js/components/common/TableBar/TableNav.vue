<template>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <div class="container-fluid">
                <div class="navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav me-auto  d-flex">
                        <li class="nav-item  d-flex py-1  w-100">
                            <input class="form-control me-sm-2" type="text"
                                v-model="dataFilter" />
                        </li>
                        <sort-comp
                            :sortDataFields="sortDataFields"
                            @updateSortedData="doSort"
                        ></sort-comp>
                        <!-- <li class="nav-item dropdown me-auto vertical-center">
                            <a class="nav-link dropdown-toggle mx-2" data-bs-toggle="dropdown" href="#" role="button"
                                aria-haspopup="true" aria-expanded="false">{{ SortName }}</a>
                            <div class="dropdown-menu w-100">
                                <a class="dropdown-item" v-for="rule in sortRules" :key="rule.key"
                                    :value="rule.key" @click="doSort(rule.key, sortDirection)">{{ rule.title }}</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" @click="changeDirection()">
                                    {{ sortDirection ? sortOrderStrings[0] : sortOrderStrings[1] }}
                                </a>
                            </div>
                        </li> -->
                    </ul>
                    <div class="d-flex">
                        <button class="btn btn-primary mx-2" :class="{'disabled' : compactView}"
                            @click="setCompactView(true)">
                            <i class="fas fa-list"></i>
                        </button>
                        <button class="btn btn-primary" :class="{'disabled' : !compactView}"
                            @click="setCompactView(false)">
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
// import Sorting from "../../../helpers/Sorting";
// import Filtering from "../../../helpers/Filtering";
import SortComp from './SortComp.vue';
import MessagesConstants from '../../strings_constants/strings';

export default {
    components: {
        // Sorting,
        // Filtering
        SortComp
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
            sortDataFields: undefined
        }
    },

    mounted() {
        if (localStorage.getItem('CompactView')) {
            this.compactView = (localStorage.getItem('CompactView') === 'true');
        }
    },

    created() {
        this.sortDataFields = this.dataFields
        // console.log('dataFields in table-nav', this.dataFields)

    },


    methods: {

        changeDirection() {
            this.sortDirection = !this.sortDirection;
            // this.doSort(this.sortColumn, this.sortDirection);
        },

        doSort($column, $direction) {
            console.log('sort from tablenav', $column, $direction)
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

    computed: {
        SortName() {
            //return MessagesConstants.SortingCaption(this.sortColumn, this.sortDirection)
        },
    },

}
</script>
