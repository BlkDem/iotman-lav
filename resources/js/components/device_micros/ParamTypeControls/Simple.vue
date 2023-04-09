<template>
        <div class="flex-center">
            <span class="font-1_5rem text-info"> {{ param_value }}</span>
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
