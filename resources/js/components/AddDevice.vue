<template>
    <PopupModal ref="popup">
        <h2 style="margin-top: 0">{{ title }}</h2>
        <p>{{ message }}</p>
        <div class="">
            <input type="text" class="form-control p-2 mb-4" placeholder="Input Device Name" name="device_name" 
                id="device_name" v-bind:value="device_name" >
            <input type="text" class="form-control p-2 mb-4" placeholder="Input Device Desc" name="device_desc" 
                id="device_desc" v-bind:value="device_desc" >
            <input type="text" class="form-control p-2 mb-4" placeholder="Input Device Type ID" name="device_type_id" 
                id="device_type_id" v-bind:value="device_type_id" >
        </div>
        <div class="btns">
            <span class="btn btn-danger p-2" @click="_confirm">{{ okButton }}</span>
            <button class="btn btn-secondary mx-2" @click="_cancel">{{ cancelButton }}</button>
        </div>
    </PopupModal>
</template>

<script>
import PopupModal from './PopupModal.vue'
import {ref} from 'vue'

export default {
    name: 'AddDevice',

    components: { PopupModal },

    data (){
        return {
        // Parameters that change depending on the type of dialogue
        title: undefined,
        message: undefined, // Main text content
        device_name: undefined,
        device_desc: undefined,
        device_type_id: undefined,
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
        showDialogue(optsAdd = {}) {
            console.log(optsAdd)
            this.title = optsAdd.title
            this.message = optsAdd.message
            this.device_name = optsAdd.new_device_name
            this.device_desc = optsAdd.new_device_desc
            this.device_type_id = optsAdd.new_device_type_id
            this.okButton = optsAdd.okButton
            if (optsAdd.cancelButton) {
                this.cancelButton = optsAdd.cancelButton
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
            this.device_name = $('#device_name').val();
            this.device_desc = $('#device_desc').val();
            this.device_type_id = $('#device_type_id').val();
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