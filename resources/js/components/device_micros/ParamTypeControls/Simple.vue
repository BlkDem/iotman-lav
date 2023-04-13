<template>
        <div class="flex-center">
            <span class="font-1_5rem text-info text-center min-width-150px"> {{ param_value }}</span>
        </div>
</template>

<script>

export default {

    props: {
        param_name: '',
        param_value: '',
    },

}

</script>

<style scoped>

.font-1_5rem {
    font-size: 1.5rem;
}

.min-width-150px {
    min-width: 150px;
}

</style>
