<template>

    <PopupModal ref="popup" class="fade-in"  @keydown="onKeyDown" @click="onDialogClick"
    >
        <div class="flex-center">
            <img :src="imageSrc" class="img-fluid rounded" @click="cancelDialog">
        </div>

    </PopupModal>

</template>

<script>

import PopupModal from '../common/PopupModal.vue';
import pathes from '../../config/pathes';

export default {

    components: {
        PopupModal,
    },

    props: {
        imageSrc: {
            type: String,
            default: pathes.storageImagePlug
        }
    },

    data() {
        return {

        }
    },

    methods: {
        showImage() {
            this.$refs.popup.open()

            // return new Promise((resolve, reject) => {
            //     this.resolvePromise = resolve
            //     this.rejectPromise = reject
            // })
        },

        cancelDialog() {
            this.$refs.popup.close()
            // this.resolvePromise(false)
        },

        onKeyDown(){
            if (event.key === 'Escape') this.cancelDialog()
        },


        onDialogClick() {
            console.log()
            if (event.target.className === 'popup-modal fade-in') this.cancelDialog()
        }

    }
}
</script>
