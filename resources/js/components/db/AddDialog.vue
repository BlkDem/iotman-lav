<template>
    <PopupModal ref="popup" class="fade-in" @keydown="onKeyDown" @click="onDialogClick">
        <div class="modal-header">
            <h2 class="w-100 text-center">{{ title }}</h2>
        </div>

        <div class="modal-body align-left py-2">
            <!-- <div>{{ message }}</div> -->

            <div v-for="(field, key) in dataFields" :key="key">

                <div v-if="
                    !field.isImage&&
                    field.fieldName!=='id'&&
                    !field.isLookup&&
                    !field.isVirtualImage"
                >

                    <label class="px-2">{{ field.fieldCaption }}</label>

                    <textarea v-if="field.isText" v-model="field.value" class="form-control p-2 mb-1"
                        style="min-height: 100px; max-height: 200px;"
                        :placeholder="'Input ' + field.fieldCaption" cols="40" rows="2">
                    </textarea>

                    <input v-if="field.isDateTime" type="datetime-local" class="form-control p-2 mb-1" v-model="field.value" />

                    <input v-if="!field.isText&&!field.isDateTime" class="form-control p-2 mb-1" :placeholder="'Input ' + field.fieldCaption"  v-model="field.value" />

                </div>

                <div v-if="field.isLookup" :class="{'hide': field.isHidden}" class="mb-1">
                    <label class="px-2">{{ field.fieldCaption }} </label>
                    <DataSelect
                        :dataTableReadApi="field.lookupApi"
                        :nameField="field.displayName"
                        :lookupField="field.lookupId"
                        :value="field.value"
                        @onDataSelect="onDataSelect"
                    >
                    </DataSelect>
                    <!-- <input class="form-control p-2 mb-4" :placeholder="'Input ' + field.fieldCaption"  v-model="field.value" /> -->
                </div>


                <div v-if="field.isImage&&field.isEditable" class="flex-center-column py-1">
                    <ImagesFromDisk
                        :fileName="field.fileName"
                        :fieldKey="key"
                        @changeImage="setImage"
                    />
                    <div style="max-height: 200px; margin-bottom: 20px">
                        <img class="mx-2" style="margin-bottom: 20px; max-height: inherit;"
                                :src="getImage(field)"
                                :class="{
                                        'device-image': !field.isEditable,
                                        // 'w-75': field.isEditable,
                                    }"
                                @error="replaceByDefault"
                        />
                    </div>
                    <form action="post" class="w-100">
                        <input class="form-control" type="file"
                            v-if="field.isEditable"
                            @change="handleFileUpload( $event, key )"
                        />
                    </form>
                </div>
            </div>
        </div>
        <hr>
        <div class="text-center mt-2">
            <button class="btn btn-danger mx-1 btn-width-40" @click="confirmDialog">{{ okButton }}</button>
            <button class="btn btn-secondary mx-1 btn-width-40" @click="cancelDialog">{{ cancelButton }}</button>
        </div>
    </PopupModal>
</template>

<script>
import PopupModal from '../common/PopupModal.vue';
import MessagesConstants from '../strings_constants/strings';
import Pathes from '../../config/pathes';
import DataSelect from './DataSelect.vue';
import APIConstants from "../../api/rest_api";
import ParsingErrors from "../../helpers/ParsingErrors.js";
import ImagesFromDisk from '../imagelib/images/ImagesFromDisk.vue';

export default {
    name: 'AddItem',

    components: { PopupModal, DataSelect, ImagesFromDisk },

    data (){
        return {
            edit_mode: false,
            title: undefined,
            message: undefined, // Main text content

            dataFields: undefined,
            postData: [],

            okButton: undefined, // Text for confirm button;
            cancelButton: MessagesConstants.CANCEL_STRING, // text for cancel button

            resolvePromise: undefined,
            rejectPromise: undefined,

            imagesPath: '',
            imagePlug: '',

            file: ''
        }
    },

    created() {
        this.imagesPath = Pathes.storageImagesPath;
        this.imagePlug = Pathes.storageImagePlug
    },

    methods: {

        submitFile(key){

            let formData = new FormData();

            formData.append('image_file', this.file);
            axios.post( APIConstants.api_image_upload,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            .then(resp => {
                this.setImage(resp.data.fileName, key)
            })
            .then(resp => {
                this.$root.$refs.toaster.showMessage(
                    MessagesConstants.IMAGE_UPLOADED,
                    MessagesConstants.PROCESS_SUCCESSFULLY
                )
            })
            .catch(error => {
                this.$root.$refs.toaster.showMessage(
                    MessagesConstants.EDITING_ERROR,
                    ParsingErrors.getError(error),
                    ParsingErrors.ERROR_LEVEL_ERROR
                )
            })
      },

        handleFileUpload(event, key){
            this.file = event.target.files[0]
            this.submitFile(key)
        },

        onDataSelect(_value, _fieldName) {
            for (let item in this.dataFields) {
                if (this.dataFields[item].fieldName === _fieldName) {
                    this.dataFields[item].value = _value
                }
            }
        },

        getImage(item) {
            if ((item.value==='') || (item.isVirtualImage)) return this.imagePlug
            return Pathes.storageImagesPath + item.value
        },

        setImage(fileName, key) {
            this.dataFields[key].value = fileName
            console.log(this.dataFields)
        },

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

            for (let field in this.dataFields) {

                if (this.dataFields[field].isImage&&this.dataFields[field].value==='') {
                    this.dataFields[field].value = Pathes.storageImagePlugName
                }
            }

            this.$refs.popup.open()

            return new Promise((resolve, reject) => {
                this.resolvePromise = resolve
                this.rejectPromise = reject
            })
        },

        confirmDialog() {
            this.$refs.popup.close()

            for (let item in this.dataFields) {
                if (!this.dataFields[item].isFieldIgnore)
                this.postData.push(this.dataFields[item])
            }

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
        }

    },
}
</script>
