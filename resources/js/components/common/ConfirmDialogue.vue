<template>
    <PopupModal ref="popup">
        <h2 style="margin-top: 0">{{ title }}</h2>
        <p>{{ message }}</p>
        <div class="btns">
            <span class="btn btn-danger w-25 mx-1" @click="_confirm">{{ okButton }}</span>
            <button class="btn btn-primary w-25 mx-1" @click="_cancel">{{ cancelButton }}</button>
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
        // Parameters that change depending on the type of dialogue
        title: undefined,
        message: undefined, // Main text content
        okButton: undefined, // Text for confirm button; leave it empty because we don't know what we're using it for
        cancelButton: 'Cancel', // text for cancel button
        
        // Private variables
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
            // Once we set our config, we tell the popup modal to open 
            this.$refs.popup.open()
            // Return promise so the caller can get results
            return new Promise((resolve, reject) => {
                this.resolvePromise = resolve
                this.rejectPromise = reject
            })
        },

        _confirm() {
            this.$refs.popup.close()
            this.resolvePromise(true)
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