<template>
    <transition name="fade" :duration="{ enter: 1000, leave: 200 }">

        <div class="popup-modal " v-if="isVisible">
            <div class="window modal-dialog modal-content bg-light text-dark"
                :class="{
                    'w-50': dialogSize==0,
                    'w-75 h-75': dialogSize == 1,
                    'w-100 h-100': dialogSize == 2
                    }">
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
//    @import '../../../sass/app.scss';
//    @import '../../../sass/aligns.scss';
    @import '../../../sass/dialogs.scss';

</style>
