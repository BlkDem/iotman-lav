<template>
    <div class="flex-center mx-2">
            <a class="nav-link dropdown-toggle" type="button" id="dropdownMenuFilter"
                data-bs-toggle="dropdown" aria-expanded="false">
                <!-- <i class="fas fa-ellipsis-h"></i> -->
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuFilter" style="position: absolute; ">
                <div v-for="(fillterField, key) in filterDataFields" :key="fillterField.fieldName">
                    <a class="dropdown-item" @click="currentField=fillterField.fieldCaption">{{ fillterField.fieldCaption }}</a>
                </div>
            </div>
        </div>
        <div class="flex-center">
        <input class="form-control" type="text" :value="dataFilter" :placeholder="'Filter: ' + currentField"
            @input="oninput" />
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
