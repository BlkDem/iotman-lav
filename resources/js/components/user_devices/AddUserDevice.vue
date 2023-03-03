<template>
    <PopupModal ref="popup">
        <div class="modal-header">
            <h2 class="align-center w-100 pb-2">{{ title }}</h2>
        </div>

        <div class="modal-body align-left">
            <label class="px-2"><strong>User Device Name</strong></label>
            <input v-model="user_device_name" class="form-control p-2 mb-2" placeholder="Input Device Name"/>
            <!-- <label class="px-2"><strong>Device Description</strong></label>
            <input v-model="device_desc" class="form-control p-2 mb-2 disabled"/> -->
            <!-- <label class="px-2"><strong>Device Hardware Address</strong></label>
            <input v-model="user_device_hwid" class="form-control p-2 mb-2 disabled"/> -->
            <label class="px-2"><strong>Device Password</strong></label>
            <input v-model="user_device_pass" class="form-control p-2 mb-2" placeholder="Input User Device Password"/>
            <label class="px-2"><strong>Select Device</strong></label>
            <!-- <DeviceTypesCombo ref="types" v-bind:id="device_type_id"></DeviceTypesCombo> -->
            <DeviceCombo ref="devices_combo" v-bind:id="device_id"></DeviceCombo>
            <label class="px-2"><strong>Select User</strong></label>
            <UserCombo ref="users_combo" v-bind:id="user_id"></UserCombo>
        </div>
        <hr>
        <div>
            <button class="btn btn-danger mx-1 btn-width-40" @click="_confirm">{{ okButton }}</button>
            <button class="btn btn-secondary mx-1 btn-width-40" @click="_cancel">{{ cancelButton }}</button>
        </div>
    </PopupModal>
</template>

<script>
import PopupModal from '../../components/common/PopupModal.vue';
import MessagesConstants from '../strings_constants/strings';
import DeviceCombo from "../../components/devices/DevicesCombo.vue";
import UserCombo from "../../components/user_devices/UsersCombo.vue";

export default {
    name: 'AddUserDevice',

    components: {
        PopupModal, DeviceCombo, UserCombo,
    },

    data (){
        return {
        // Parameters that change depending on the type of dialogue
        edit_mode: false,
        title: undefined,
        message: undefined, // Main text content
        user_device_name: undefined,
        user_device_pass: undefined,
        device_desc: undefined,
        device_hwid: undefined,
        device_id: undefined,
        user_id: undefined,
        okButton: undefined, // Text for confirm button; leave it empty because we don't know what we're using it for
        cancelButton: MessagesConstants.CANCEL_STRING, // text for cancel button

        // Private variables
        resolvePromise: undefined,
        rejectPromise: undefined,
        }
    },


    methods: {

        showDialogue(optsAdd = {}) {
            //console.log(optsAdd)
            this.edit_mode = optsAdd.edit_mode;
            this.title = optsAdd.title
            this.message = optsAdd.message
            this.user_device_name = optsAdd.user_device_name
            this.device_desc = optsAdd.device_desc
            this.device_hwid = optsAdd.device_hwid
            this.user_device_pass = optsAdd.user_device_pass
            this.device_id = optsAdd.device_id
            this.user_id = optsAdd.user_id
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
            this.user_id = this.$refs.users_combo.getUserID()
            this.device_id = this.$refs.devices_combo.getDeviceID()
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

<style lang='scss'>
    @import '../../../sass/aligns.scss';
</style>
