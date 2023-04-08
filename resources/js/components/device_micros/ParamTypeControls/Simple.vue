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

export default {

    props: {
        param_name: '',
        param_value: '',
    },

    data() {
        return {
        }
    },

    mounted() {
        console.log('simple', this.param_value)
    },

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
