<template>
    <PopupModal ref="popup" @keydown="onKeyDown" @click="onDialogClick">
        <div class="modal-header">
            <h2 class="w-100 text-center">{{ title }}</h2>
        </div>

        <div class="modal-body align-left">
            <label class="px-2">Album Name</label>
            <input v-model="album_name" class="form-control p-2 mb-4" placeholder="Input Album Name" />
            <label class="px-2">Album Desc</label>
            <textarea v-model="album_desc" class="form-control p-2 mb-4" style="min-height: 100px; max-height: 200px;"
                placeholder="Input Device Type Desc" cols="40" rows="3">
            </textarea>
        </div>
        <div class="align-center">
            <button class="btn btn-danger mx-1 btn-width-40" @click="_confirm">{{ okButton }}</button>
            <button class="btn btn-secondary mx-1 btn-width-40" @click="_cancel">{{ cancelButton }}</button>
        </div>
    </PopupModal>
</template>

<script>
import PopupModal from '../../../components/common/PopupModal.vue';
import MessagesConstants from '../../strings_constants/strings';

export default {
    name: 'AddAlbum',

    components: { PopupModal },

    data (){
        return {
        // Parameters that change depending on the type of dialogue
        edit_mode: false,
        title: undefined,
        message: undefined, // Main text content
        album_name: undefined,
        album_desc: undefined,
        album_image: undefined,
        okButton: undefined, // Text for confirm button; leave it empty because we don't know what we're using it for
        cancelButton: MessagesConstants.CANCEL_STRING, // text for cancel button

        // Private variables
        resolvePromise: undefined,
        rejectPromise: undefined,
        }
    },


    methods: {

        showDialogue(optsAdd = {}) {

            this.edit_mode = optsAdd.edit_mode;
            this.title = optsAdd.title
            this.message = optsAdd.message
            this.album_name = optsAdd.album_name
            this.album_desc = optsAdd.album_desc
            // this.device_type_image = optsAdd.device_type_image
            this.okButton = optsAdd.okButton
            if (optsAdd.cancelButton) {
                this.cancelButton = optsAdd.cancelButton
            }
            // console.log(this);
            // Once we set our config, we tell the popup modal to open

            this.$refs.popup.open()
            //console.log('gdti: ', this.$refs.types.getDeviceTypeID());


            // if (this.edit_mode) {
            //     console.log(this.$refs.popup);
            // }

            // Return promise so the caller can get results
            return new Promise((resolve, reject) => {
                this.resolvePromise = resolve
                this.rejectPromise = reject
            })
        },

        _confirm() {
            this.$refs.popup.close()
            this.resolvePromise(true, this)
        },

        _cancel() {
            this.$refs.popup.close()
            this.resolvePromise(false)
            // Or you can throw an error
            // this.rejectPromise(new Error('User cancelled the dialogue'))
        },

        onKeyDown(){
            if (event.key === 'Escape') this._cancel()
        },

        onDialogClick() {
            if (event.target.className === 'popup-modal') this._cancel()
            // console.log(event, (event.target.className === 'popup-modal'))
        }
    },
}
</script>
