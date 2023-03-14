<template>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <div class="container-fluid">
                <div class="navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav me-auto  d-flex">
                        <li class="nav-item  d-flex py-1  w-100">
                            <input class="form-control me-sm-2" type="text" placeholder="Search"
                                v-model="dataFilter" />
                        </li>
                        <li class="nav-item dropdown me-auto vertical-center">
                            <!-- <button v-on:click="openImager()"></button> -->
                            <a class="nav-link dropdown-toggle mx-2" data-bs-toggle="dropdown" href="#" role="button"
                                aria-haspopup="true" aria-expanded="false">{{ SortName }}</a>
                            <div class="dropdown-menu w-100">
                                <a class="dropdown-item" href="#" v-for="rule in sortRules" :key="rule.key"
                                    :value="rule.key" @click="doSort(rule.key)">{{ rule.title }}</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" @click="
                                                                    sortDirection = !sortDirection;
                                                                    doSort(sortColumn, sortDirection);">
                                    {{ sortDirection ? sortOrderStrings[0] : sortOrderStrings[1] }}
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <button class="btn btn-primary" :class="{'disabled' : compactView}"
                            @click="setCompactView(true)">
                            <i class="fas fa-list"></i>
                        </button>
                        <button class="btn btn-primary mx-2" :class="{'disabled' : !compactView}"
                            @click="setCompactView(false)">
                            <i class="fas fa-th-large"></i>
                        </button>
                        <button class="btn btn-primary" @click="$emit('addEvent')">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </nav>
</template>

<script>
import Sorting from "../../../helpers/Sorting";
import Filtering from "../../../helpers/Filtering";
import MessagesConstants from '../../strings_constants/strings';

export default {
    components: {
        Sorting,
        Filtering
    },

    emits: [
        "setCompactView",
        "addEvent",
        "doSort",
        "doFilter",
        "updateSortedData",
        "updateFilteredData"
    ],

    props: {
        sortColumn: undefined,
        sortRules: undefined
    },

    data() {
        return {
            compactView: true,
            dataFilter: "",
            sortOrderStrings: [
                MessagesConstants.SORT_ASC,
                MessagesConstants.SORT_DESC,
            ],
            sortOrder: MessagesConstants.SORT_ASC,
            sortDirection: false,
        }
    },

    mounted() {
        if (localStorage.getItem('CompactView')) {
            this.compactView = (localStorage.getItem('CompactView') === 'true');
        }
    },

    created() {},


    methods: {
        doSort($column, $direction) {
            this.$emit('updateSortedData', $column, $direction)
        },

        updateFilteredData() {
            this.$emit('updateFilteredData', this.dataFilter)
        },

        setCompactView(value) {
            this.compactView = value
            localStorage.setItem('CompactView', value)
            this.$emit('setCompactView', value)
        }
    },

    watch: {
        dataFilter: function () {
            handler: this.updateFilteredData();
        },
    },

    computed: {
        SortName() {
            return MessagesConstants.SortingCaption(this.sortColumn, this.sortDirection)
        },
    },

}
</script>
