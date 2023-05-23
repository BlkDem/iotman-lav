<template>
    <transition name="fade" >

        <div class="popup-modal " v-if="isVisible" @keydown="onKeyDown" @click="onDialogClick">
            <div class=" border-4 border-top border-bottom rounded-bottom rounded-top border-secondary py-4 window modal-dialog modal-content "
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

        cancelDialog() {
            this.close()
            // this.resolvePromise(false)
        },

        onKeyDown(){
            if (event.key === 'Escape') this.cancelDialog()
        },

        onDialogClick() {
            if (event.target.className === 'popup-modal fade-in') this.cancelDialog()
        }

    },
}
</script>

<style lang="scss" scoped>
    @import '../../../sass/dialogs.scss';

</style>
