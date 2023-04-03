<template>
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" :checked="switchState">
        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
    </div>
</template>

<script>

export default {
    props: {
        switchState: {
            type: Boolean,
            default: false
        }
    }
}

</script>
