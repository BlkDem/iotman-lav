<template>
    <PopupModal ref="popup" class="align-center fade-in">
        <h2 style="margin-top: 0">{{ title }}</h2>
        <p>{{ message }}</p>
        <div class="flex-center mt-2">
            <span class="btn btn-danger btn-width-40 mx-1" @click="confirmDialog">{{ okButton }}</span>
            <button class="btn btn-primary btn-width-40 mx-1" @click="cancelDialog">{{ cancelButton }}</button>
        </div>
    </PopupModal>
</template>

<script>
import PopupModal from './PopupModal.vue'
import {ref} from 'vue'

export default {

    name: 'ConfirmDialogue',

    components: { PopupModal },

    data (){
        return {

            title: undefined,
            message: undefined, // Main text content
            okButton: undefined, // Text for ok button
            cancelButton: 'Cancel', // text for cancel button

            resolvePromise: undefined,
            rejectPromise: undefined,
        }
    },
    setup() {
        const popup = ref(null);
        return { popup };
    },
    methods: {
        showDialogue(opts = {}) {
            this.title = opts.title
            this.message = opts.message
            this.okButton = opts.okButton
            if (opts.cancelButton) {
                this.cancelButton = opts.cancelButton
            }
            // popup modal to open
            this.$refs.popup.open()

            // Return promise so the caller can get results
            return new Promise((resolve, reject) => {
                this.resolvePromise = resolve
                this.rejectPromise = reject
            })
        },

        confirmDialog() {
            console.log('confirm')
            this.$refs.popup.close()
            this.resolvePromise(true)
        },


        cancelDialog() {
            this.$refs.popup.close()
            this.resolvePromise(false)
        },
    },
}
</script>
