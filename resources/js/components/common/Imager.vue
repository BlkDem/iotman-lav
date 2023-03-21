<template>
    <!-- Wrap the image or canvas element with a block element (container) -->
    <PopupModal ref="popup">
        <div >
            <vue-cropper ref="cropper" :src="image" style="height: 100%; width: 100%;">
            </vue-cropper>
            <hr>
            <div>
                <button class="btn btn-danger mx-1 btn-width-40" @click="_ok">{{ okButton }}</button>
                <button class="btn btn-secondary mx-1 btn-width-40" @click="_cancel">{{ cancelButton }}</button>
            </div>
        </div>
    </PopupModal>

</template>

<script>
// import Cropper from 'cropperjs';
import PopupModal from '../../components/common/PopupModal.vue';
import MessagesConstants from '../strings_constants/strings';
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

export default {

    components: { PopupModal, VueCropper },

    data() {
        return {
            image: "images/d_200.png",
            resolvePromise: undefined,
            rejectPromise: undefined,
            imageEdit: "imageEdit",
            okButton: "Save", // Text for confirm button; leave it empty because we don't know what we're using it for
            cancelButton: MessagesConstants.CANCEL_STRING, // text for cancel button

        }
    },

    created() {
        // console.log('loaded')
        //createImager()
    },

    methods: {
        createImager(optsAdd = {}) {

            this.$refs.popup.open(1)

            return new Promise((resolve, reject) => {
                this.resolvePromise = resolve
                this.rejectPromise = reject
            })
        },

        _ok() {
            this.$refs.popup.close()
            this.resolvePromise(true, this)
        },

        _cancel() {
            this.$refs.popup.close()
            this.resolvePromise(false)
            // Or you can throw an error
            // this.rejectPromise(new Error('User cancelled the dialogue'))
        },

    },
}
</script>

<style scoped>
img {
  display: block;

  /* This rule is very important, please don't ignore this */
  max-width: 100%;
}
</style>
