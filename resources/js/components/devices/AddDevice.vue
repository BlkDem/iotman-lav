<template>
    <PopupModal ref="popup">
        <div class="modal-header">
            <h2 class="align-center w-100 pb-2">{{ title }}</h2>
        </div>
        
        <div class="modal-body align-left">
            <label class="px-2"><strong>Device Name</strong></label>
            <input v-model="device_name" class="form-control p-2 mb-2" placeholder="Input Device Name"/>
            <label class="px-2"><strong>Device Desc</strong></label>
            <input v-model="device_desc" class="form-control p-2 mb-2" placeholder="Input Device Desc"/>
            <label class="px-2"><strong>Device Hardware Address</strong></label>
            <input v-model="device_hwid" class="form-control p-2 mb-2" placeholder="Input Device HWID"/>
            <label class="px-2"><strong>Select Device Type</strong></label>
            <DeviceTypesCombo ref="types" v-bind:id="device_type_id"></DeviceTypesCombo>
        </div>
        <div class="btns my-2 d-grid gap-2 px-4">
            <button class="btn btn-danger" @click="_confirm">{{ okButton }}</button>
            <button class="btn btn-secondary" @click="_cancel">{{ cancelButton }}</button>
        </div>
    </PopupModal>
</template>

<script>
import PopupModal from '../../components/common/PopupModal.vue';
import DeviceTypesCombo from '../../components/device_types/DeviceTypesCombo.vue' 
import MessagesConstants from '../../components/strings_constants/messages';

export default {
    name: 'AddDevice',

    components: { PopupModal, DeviceTypesCombo },

    data (){
        return {
        // Parameters that change depending on the type of dialogue
        edit_mode: false,
        title: undefined,
        message: undefined, // Main text content
        device_name: undefined,
        device_desc: undefined,
        device_hwid: undefined,
        device_type_id: undefined,
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
            this.device_name = optsAdd.device_name
            this.device_desc = optsAdd.device_desc
            this.device_hwid = optsAdd.device_hwid
            this.device_type_id = optsAdd.device_type_id
            this.okButton = optsAdd.okButton
            if (optsAdd.cancelButton) {
                this.cancelButton = optsAdd.cancelButton
            }

            this.$refs.popup.open()

            
            // Return promise so the caller can get results
            return new Promise((resolve, reject) => {
                this.resolvePromise = resolve
                this.rejectPromise = reject
            })
        },

        _confirm() {
            this.device_type_id = this.$refs.types.getDeviceTypeID();
            console.log(this.device_type_id);
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

<style>
    @import '../../../sass/aligns.scss';
</style>