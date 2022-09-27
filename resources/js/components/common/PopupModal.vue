<template>
    <transition name="fade">

        <div class="popup-modal " v-if="isVisible">
            <div class="window modal-dialog modal-content">
                <slot></slot>
            </div>
        </div>

    </transition>
</template>

<script>

export default {
    name: 'PopupModal',

    data() {
        return {
            isVisible: false,
        }
    },

    methods: {
        open() {
            this.isVisible = true
        },

        close() {
            this.isVisible = false
        },
    },
}
</script>

<style lang="scss" scoped>
    @import '../../../sass/app.scss';
    @import '../../../sass/aligns.scss';
    @import '../../../sass/dialogs.scss';
    
</style>