<template>
    <transition name="fade" >

        <div class="popup-modal " v-if="isVisible">
            <div class="window modal-dialog modal-content bg-light text-dark"
            >
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
            dialogSize: 0 //0 - 50%, 1 - 75%, 2 - 100%
        }
    },

    methods: {
        open($dialogSize=0) {
            this.isVisible = true
            this.dialogSize = $dialogSize
        },

        close() {
            this.isVisible = false
        },
    },
}
</script>

<style lang="scss" scoped>
    @import '../../../sass/dialogs.scss';

</style>
