<template>
    <PopupModal ref="popup" class="fade-in" @keydown="onKeyDown" @click="onDialogClick">
        <div class="modal-header">
            <h2 class="w-100 text-center">{{ title }}</h2>
        </div>

        <div class="modal-body align-left py-4">

            <div v-for="(field, key) in dataFields" v-bind:key="key">

                <div v-if="!field.isImage&&field.fieldName!=='id'">
                    <label class="px-2">{{ field.fieldCaption }}</label>
                    <input class="form-control p-2 mb-4" :placeholder="'Input ' + field.fieldCaption"  v-model="field.value" />
                </div>
                <!-- <span v-if="!field.isImage" :class="{'text-info': field.isHighLight}"
                >
                    {{ field.fieldCaption }}
                </span> -->
                <div v-if="field.isImage" class="flex py-4">
                    <img class="device-image mx-2"
                                :src="imagesPath + field.value"
                                @error="replaceByDefault"
                    />
                    <input class="form-control" type="file" v-if="field.isEditable"/>
                </div>

            </div>





            <!-- <input v-model="device_type_name" class="form-control p-2 mb-4" placeholder="Input Name"/> -->

            <!-- <label class="px-2">Device Type Desc</label>
            <textarea v-model="device_type_desc" class="form-control p-2 mb-4" style="min-height: 100px; max-height: 200px;" placeholder="Input Device Type Desc" cols="40" rows="3">

            </textarea> -->
            <!-- <input v-model="device_type_desc" class="form-control p-2 mb-4" placeholder="Input Device Type Desc"/> -->
            <!-- <label class="px-2">Device Type Image</label>
            <input v-model="device_type_image" class="form-control p-2 mb-4" placeholder="Input Device Type Image"/> -->
        </div>
        <div class="align-center">
            <button class="btn btn-danger mx-1 btn-width-40" @click="confirmDialog">{{ okButton }}</button>
            <button class="btn btn-secondary mx-1 btn-width-40" @click="cancelDialog">{{ cancelButton }}</button>
        </div>
    </PopupModal>
</template>

<script>
import PopupModal from '../common/PopupModal.vue';
import MessagesConstants from '../strings_constants/strings';
import Pathes from '../../config/pathes';

export default {
    name: 'AddItem',

    components: { PopupModal },

    data (){
        return {
            edit_mode: false,
            title: undefined,
            message: undefined, // Main text content

            dataFields: undefined,
            postData: undefined,

            okButton: undefined, // Text for confirm button; leave it empty because we don't know what we're using it for
            cancelButton: MessagesConstants.CANCEL_STRING, // text for cancel button

            resolvePromise: undefined,
            rejectPromise: undefined,

            imagesPath: '',
        }
    },

    created() {
        this.imagesPath = Pathes.storageImagesPath;
    },

    methods: {

        replaceByDefault(e) {
                e.target.src = Pathes.storageImagePlug
        },

        showDialogue(optsAdd = {}) {

            this.edit_mode = optsAdd.edit_mode;
            this.title = optsAdd.title
            this.message = optsAdd.message
            this.dataFields = optsAdd.dataFields

            this.okButton = optsAdd.okButton
            if (optsAdd.cancelButton) {
                this.cancelButton = optsAdd.cancelButton
            }

            this.$refs.popup.open()

            for (let field in this.dataFields) {
                this.dataFields[field].value = ''
            }

            console.log(this.dataFields)

            return new Promise((resolve, reject) => {
                this.resolvePromise = resolve
                this.rejectPromise = reject
            })
        },

        confirmDialog() {
            this.$refs.popup.close()
            this.postData = this.dataFields.map(item => ({
                fieldName: item.fieldName,
                value: item.value
            }))
            console.log(this.postData)
            this.resolvePromise(true, this)
        },

        cancelDialog() {
            this.$refs.popup.close()
            this.resolvePromise(false)
        },

        onKeyDown(){
            if (event.key === 'Escape') this.cancelDialog()
        },

        onDialogClick() {
            if (event.target.className === 'popup-modal fade-in') this.cancelDialog()
            // console.log(event, (event.target.className === 'popup-modal'))
        }

    },
}
</script>
