<template>
    <PopupModal ref="popup">
        <div class="modal-header">
            <h2 style="margin-top: 0">{{ title }}</h2>
        </div>
        
        <div class="modal-body">
            <label>Device Type Name</label>
            <input v-model="device_type_name" class="form-control p-2 mb-4" placeholder="Input Device Type Name"/>
            <label class="ml-n4">Device Type Desc</label>
            <input v-model="device_type_desc" class="form-control p-2 mb-4" placeholder="Input Device Type Desc"/>
            <label class="ml-n4">Device Type Image</label>
            <input v-model="device_type_image" class="form-control p-2 mb-4" placeholder="Input Device Type Image"/>
        </div>
        <div class="btns my-2 d-grid gap-2 px-4">
            <button class="btn btn-danger" @click="_confirm">{{ okButton }}</button>
            <button class="btn btn-secondary" @click="_cancel">{{ cancelButton }}</button>
        </div>
    </PopupModal>
</template>

<script>
import PopupModal from './PopupModal.vue';
import {ref} from 'vue'

export default {
    name: 'AddDeviceType',

    components: { PopupModal },

    data (){
        return {
        // Parameters that change depending on the type of dialogue
        edit_mode: false,
        title: undefined,
        message: undefined, // Main text content
        device_type_name: undefined,
        device_type_desc: undefined,
        device_type_image: undefined,
        okButton: undefined, // Text for confirm button; leave it empty because we don't know what we're using it for
        cancelButton: 'Cancel', // text for cancel button
        
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
            this.device_type_name = optsAdd.device_type_name
            this.device_type_desc = optsAdd.device_type_desc
            this.device_type_image = optsAdd.device_type_image
            this.okButton = optsAdd.okButton
            if (optsAdd.cancelButton) {
                this.cancelButton = optsAdd.cancelButton
            }
            console.log(this);
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
            //this.device_name = $('#device_name').val();
            //this.device_desc = $('#device_desc').val();
            //console.log(this.$refs.types);
            
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