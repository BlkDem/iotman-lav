<template>
    <PopupModal ref="popup">
        <div class="modal-header">
            <h2 class="align-center w-100 pb-2">{{ title }}</h2>
        </div>

        <div class="modal-body align-left">
            <label class="px-2"><strong>Device Name</strong></label>
            <input v-model="device_name" class="form-control p-2 mb-2" placeholder="Input Device Name"/>
            <label class="px-2"><strong>Device Description</strong></label>
            <input v-model="device_desc" class="form-control p-2 mb-2" placeholder="Input Device Desc"/>
            <label class="px-2"><strong>Device Hardware Address</strong></label>
            <input v-model="device_hwid" class="form-control p-2 mb-2" placeholder="Input Device HWID"/>
            <label class="px-2"><strong>Select Device Type</strong></label>
            <data-set-select
                name="deviceTypes"
                :value="device_type_id"
                :device_type_id="device_type_id"
                :dataTableReadApi="deviceTypesApi"
                :nameField="'device_type_name'"
                @onDataSetSelect="deviceTypeSelect">
            </data-set-select>

        </div>
        <hr>
        <div class="align-center">
            <button class="btn btn-danger mx-1 btn-width-40" @click="_confirm">{{ okButton }}</button>
            <button class="btn btn-secondary mx-1 btn-width-40" @click="_cancel">{{ cancelButton }}</button>
        </div>
    </PopupModal>
</template>

<script>
import PopupModal from '../../components/common/PopupModal.vue';
import MessagesConstants from '../strings_constants/strings';
import APIConstants from "../../rest_api";
import DataSetSelect  from "../../components/db/DataSetSelect.vue";



export default {
    name: 'AddDevice',

    components: { PopupModal, DataSetSelect },

    data (){
        return {
        // Parameters that change depending on the type of dialogue
        edit_mode: false,
        title: undefined,
        message: undefined, // Main text content
        device_name: undefined,
        device_desc: undefined,
        device_hwid: undefined,
        // device_pass: undefined,
        device_type_id: undefined,
        okButton: undefined, // Text for confirm button; leave it empty because we don't know what we're using it for
        cancelButton: MessagesConstants.CANCEL_STRING, // text for cancel button

        // Private variables
        resolvePromise: undefined,
        rejectPromise: undefined,

        deviceTypesApi: undefined
        }
    },

    created() {
        this.deviceTypesApi = APIConstants.api_device_types_read
    },


    methods: {

        showDialogue(optsAdd = {}) {

            this.edit_mode = optsAdd.edit_mode;
            this.title = optsAdd.title
            this.message = optsAdd.message
            this.device_name = optsAdd.device_name
            this.device_desc = optsAdd.device_desc
            this.device_hwid = optsAdd.device_hwid
            // this.device_pass = optsAdd.device_pass
            this.device_type_id = optsAdd.device_type_id
            // this.$refs.types.id = this.device_type_id
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
            this.$refs.popup.close()
            this.resolvePromise(true, this)
        },

        _cancel() {
            this.$refs.popup.close()
            this.resolvePromise(false)
        },

        deviceTypeSelect(){
            // console.log(event.target.value)
            this.device_type_id = event.target.value
        }

    },
}
</script>

<style lang='scss'>
    @import '../../../sass/aligns.scss';
</style>
