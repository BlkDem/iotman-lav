<template>
    <div class="row py-1 border rounded m-1">
        <div class="col-sm-4 col-md-4 col-lg-4">
            <h6 class="mx-2 font-1_5rem" for="newID">
                <i class="fa-solid fa-cubes text-info"></i>  {{ param_name }}
            </h6>
        </div>
        <div class="col-sm-8 col-md-8 col-lg-8 flex-left">
            <span class="font-1_5rem text-info"> {{ param_value }}</span>
        </div>
    </div>
</template>

<script>

import MakeID from '../../../helpers/MakeID';

export default {

    props: {
        param_name: {
            // type: String,
        },

        param_value: '',

        // init_param_value: {
        //     type: String,
        // }
    },

    data() {
        return {
            // param_value: undefined,
            newID: undefined
        }
    },

    created() {

        // this.param_value = this.init_param_value
        // this.newID = MakeID.makeId(8, 'simple_')
    },

    mounted() {
        console.log('simple', this.param_value)
    },

    methods: {
        setValue(value) {
            // this.param_value = value
        }
    }

}
</script>

<style scoped>

input[type=color] {
    height: 40px;
    padding: 0.5rem 0.5rem;
}

.font-1_5rem {
    font-size: 1.5rem;
}

</style>
