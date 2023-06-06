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
        <div class="flex-center w-100">
        <input class="form-control w-100" type="text"
            :placeholder="'&#xF002; ' + currentFieldCaption"

            v-debounce:300="onInput"
            />
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
            // dataFilter: '',
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

        onInput(val, e){
            this.$emit('filterData', this.currentField, val)
        }
    }
}

</script>

<style scoped>

input {
    font-family: var(--bs-body-font-family), FontAwesome;
    max-height: 2rem;
}

</style>
