<template>
    <PopupModal ref="popup" class="fade-in" @keydown="onKeyDown" @click="onDialogClick">
        <div class="modal-header">
            <h2 class="w-100 text-center">{{ title }}</h2>
        </div>

        <div class="modal-body align-left py-4">
            <!-- <div>{{ message }}</div> -->

            <div v-for="(field, key) in dataFields" v-bind:key="key">

                <div v-if="!field.isImage&&field.fieldName!=='id'">
                    <label class="px-2">{{ field.fieldCaption }}</label>
                    <input class="form-control p-2 mb-4" :placeholder="'Input ' + field.fieldCaption"  v-model="field.value" />
                </div>

                <div v-if="field.isImage" class="flex py-4">
                    <img class="device-image mx-2"
                                :src="getImage(field)"
                                @error="replaceByDefault"
                    />
                    <input class="form-control" type="file" v-if="field.isEditable"/>
                </div>
            </div>
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
            postData: {},

            okButton: undefined, // Text for confirm button; leave it empty because we don't know what we're using it for
            cancelButton: MessagesConstants.CANCEL_STRING, // text for cancel button

            resolvePromise: undefined,
            rejectPromise: undefined,

            imagesPath: '',
            imagePlug: ''
        }
    },

    created() {
        this.imagesPath = Pathes.storageImagesPath;
        this.imagePlug = Pathes.storageImagePlug
    },

    methods: {

        getImage(item) {
            if ((item.value==='') || (item.isVirtualImage)) return this.imagePlug
            return Pathes.storageImagesPath + item.value
        },

        replaceByDefault(e) {
                e.target.src = Pathes.storageImagePlug
        },

        showDialogue(optsAdd = {}) {

            this.edit_mode = optsAdd.edit_mode;
            this.title = optsAdd.title
            this.message = optsAdd.message
            this.dataFields = optsAdd.dataFields

            console.log('on show: ', this.dataFields)

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
            console.log('before confirm: ', this.dataFields)
            if (!this.edit_mode) {
                this.dataFields.forEach(element => {
                    this.postData[element.fieldName] = element.value;
                    // this.postData[element.fieldName] = element.value
                    // console.log(o)
                })
            }
            else this.postData = this.dataFields
            console.log('edit Ok: ', this.postData)
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
