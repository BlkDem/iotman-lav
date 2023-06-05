<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <div class="container-fluid">
            <div class="navbar-collapse" id="navbarColor02">
                <div class="navbar-nav me-auto  flex-center">
                    <filter-comp
                        :filterDataFields="filterDataFields"
                        @filterData="updateFilteredData">
                    </filter-comp>
                </div>

                <div class="flex-center my-2">
                    <button class="btn btn-primary btn-sm mx-2"
                        v-if="!readOnly"
                        :class="{'disabled' : compactView}"
                        @click="setCompactView(true)">
                        <i class="fas fa-list"></i>
                    </button>
                    <button class="btn btn-primary  btn-sm" :class="{'disabled' : !compactView}"
                        v-if="!readOnly"
                        @click="setCompactView(false)">
                        <i class="fas fa-th-large"></i>
                    </button>
                    <button class="btn btn-primary mx-2  btn-sm"
                        v-if="!readOnly"
                        @click="$emit('addEvent')">
                        <i class="fas fa-plus-circle"></i>
                    </button>
                    <button class="btn btn-primary  btn-sm" @click="getData">
                        <i class="fas fa-sync-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

import FilterComp from './FilterComp.vue';

export default {
    components: {
        FilterComp
    },

    emits: [
        "setCompactView",
        "addEvent",
        "updateSortedData",
        "updateFilteredData",
        'getData'
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
            filterDataFields: undefined
        }
    },

    mounted() {
        if (localStorage.getItem('CompactView')) {
            this.compactView = (localStorage.getItem('CompactView') === 'true');
        }
    },

    created() {
        this.prepareFilterFieldsArray()
    },


    methods: {

        prepareFilterFieldsArray() {
            // exclude 'image' fields from fieldset
            this.filterDataFields = this.dataFields.filter(field => !field.isImage);
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

        getData() {
            this.$emit('getData')
        }
    },

}
</script>
