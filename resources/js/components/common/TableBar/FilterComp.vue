<template>
    <li class="nav-item  d-flex py-1  w-100">
        <input class="form-control me-sm-2" type="text" :value="dataFilter" :placeholder="'Filter: ' + currentField"
            @input="oninput" />
        <div class="dropdown">
            <button class="btn btn-primary" type="button" id="dropdownMenuFilter"
                data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuFilter">
                <li v-for="(fillterField, key) in filterDataFields" :key="fillterField.fieldName">
                    <a class="dropdown-item" @click="currentField=fillterField.fieldCaption">{{ fillterField.fieldCaption }}</a>
                </li>
            </ul>
        </div>
    </li>
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
            currentField: ''
        }
    },

    created() {
        this.currentField = this.filterDataFields[0].fieldCaption
    },

    methods: {
        oninput(){
            this.$emit('filterData', event.target.value)
        }
    }
}

</script>
