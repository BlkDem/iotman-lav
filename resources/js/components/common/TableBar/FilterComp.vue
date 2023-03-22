<template>
    <div class="flex-center mx-2">
            <a class="nav-link" type="button" id="dropdownMenuFilter"
                data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-caret-down"></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuFilter" style="position: absolute; ">

                <div v-for="(fillterField, key) in filterDataFields" :id="fillterField.fieldName">
                    <a class="dropdown-item" v-if="fillterField.isSortable"
                        @click="currentField=fillterField.fieldName;currentFieldCaption=fillterField.fieldCaption;"
                    >{{ fillterField.fieldCaption }}</a>
                </div>
            </div>
        </div>
        <div class="flex-center">
        <input class="form-control" type="text" :value="dataFilter" :placeholder="'Filter: ' + currentFieldCaption"
            @input="onInput" />
    </div>
</template>

<script>

export default {

    emits: ['filterData'],

    props: {
        filterDataFields: Array,
    },

    data() {
        return {
            dataFilter: '',
            currentField: '',
            currentFieldCaption: ''
        }
    },

    created() {
        const firstField = this.filterDataFields[0] //possible virtual field
        const secondField = this.filterDataFields[1]
        this.currentField = (firstField.isSortable)?firstField.fieldName : secondField.fieldName
        this.currentFieldCaption = (firstField.isSortable)?firstField.fieldCaption : secondField.fieldCaption
    },

    methods: {
        onInput(){
            this.$emit('filterData', this.currentField, event.target.value)
        }
    }
}

</script>
