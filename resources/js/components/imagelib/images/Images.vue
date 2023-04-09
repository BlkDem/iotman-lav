<template>
    <div style="margin-top: 5.5rem">
    </div>

    <!-- <button @click="showDialogue">123</button> -->

    <MasterSlaveLayout
        :layoutCaption="layoutCaption"
    >

            <template v-slot:master>

                <data-table
                    :api="albums.api"
                    :dataFields="albums.albumsFields"
                    :pageCaption="albums.albumsCaption"
                    :selectableRow="true"
                    :selectedName="albums.selectedName"
                    :readOnly="albumsReadOnly"
                    :isAdditionalCaption="true"
                    @onRowClick="onRowClick">
                </data-table>

            </template>

            <template v-slot:slave>

                <data-table
                    :api="images.api"
                    :dataFields="images.imagesFields"
                    :pageCaption="images.imagesCaption"
                    :isSlave="true"
                    :foreignValue="images.selectedFkValue"
                    :currentImage="currentImage"
                    >
                </data-table>

            </template>


        </MasterSlaveLayout>


</template>

<script>
import MessagesConstants from '../../strings_constants/strings'
import APIConstants from "../../../api/rest_api";
import DataTable from '../../db/DataTable.vue';
import MasterSlaveLayout from '../../../layouts/MasterSlaveLayout.vue';
import pathes from '../../../config/pathes';

export default {

    components: {
        DataTable, MasterSlaveLayout
    },

    data() {
        return {

            imageSrc: pathes.storageImagePlug,
            currentImage: '',

            layoutCaption: MessagesConstants.IMAGES,

            albumsReadOnly: true,

            //Images Widget Setup
            images: {
                imagesCaption: MessagesConstants.IMAGES,

                api: {
                    get: '',
                    insert: '',
                    update: '',
                    delete: '',
                    patch: ''
                },

                imagesFields: [
                    {
                        fieldName: 'image_name',
                        fieldCaption: 'Name',
                        type: String,
                        isImage: true,
                        isEditable: true,
                        isHighLight: false,
                        columnsCount: 1
                    },

                    {
                        fieldName: 'id',
                        fieldCaption: 'ID',
                        type: Number,
                        isImage: false,
                        isEditable: false,
                        isSortable: true,
                        isHighLight: true,
                        columnsCount: 1
                    },

                    {
                        fieldName: 'image_desc',
                        fieldCaption: 'Description',
                        type: String,
                        isImage: false,
                        isText: true,
                        isEditable: true,
                        isSortable: true,
                        isHighLight: false,
                        columnsCount: 5
                    },
                    {
                            fieldName: 'album_id',
                            displayName: 'album_name',
                            fieldCaption: 'Album',
                            type: String,
                            // isHidden: true,
                            // isSortable: true,
                            columnsCount: 3,
                            lookupId: 'album_id',
                            lookupApi: APIConstants.api_albums_read,
                            isLookup: true,
                        },

                ],

                album_id: 'album_id',
                album_id_value: 1,

            },

            albums: {
                albumsCaption: MessagesConstants.ALBUMS,

                api: {
                    get: '',
                    insert: '',
                    update: '',
                    delete: '',
                    patch: ''
                },

                albumsFields: [

                    {
                        fieldName: 'Image',
                        type: String,
                        isVirtualImage: true,
                        isHighLight: true,
                        isSortable: false,
                        VirtualImage: 'fa-solid fa-folder-closed fa-2x',
                        selectedVirtualImage: 'fa-solid fa-folder-open fa-2x',
                        columnsCount: 2
                    },

                    {
                        fieldName: 'id',
                        fieldCaption: 'ID',
                        type: Number,
                        isSortable: true,
                        isHighLight: true,
                        columnsCount: 2
                    },

                    {
                        fieldName: 'album_name',
                        fieldCaption: 'Name',
                        type: String,
                        // isEditable: true,
                        isSortable: true,
                        columnsCount: 6
                    },

                    {
                        fieldName: 'images_count',
                        fieldCaption: 'Cnt',
                        type: Number,
                        isSortable: true,
                        isHighLight: true,
                        columnsCount: 2
                    },

                ],

                selectedName: 'album_name',

                //selected album id for child table images
                selectedFkValue: 0,

            },


        }
    },

    created() {

        const apiImages = this.images.api

        apiImages.get = APIConstants.api_images_read_page
        // apiImages.get = APIConstants.api_images_read_page
        apiImages.insert = APIConstants.api_image_create
        apiImages.update = APIConstants.api_image_update
        apiImages.delete = APIConstants.api_image_delete
        apiImages.patch = APIConstants.api_image_patch

        const apiAlbums = this.albums.api

        apiAlbums.get =    APIConstants.api_albums_lookup

    },

    methods: {
        onRowClick(dataEvent) {
            this.images.selectedFkValue = dataEvent
        },

        // showDialogue() {
        //     console.log('click')
        //     this.$refs.viewer.showImage()
        // },

        // imageClick(event) {
        //     console.log(event.target.src)

        //     this.imageSrc = event.target.src
        //     this.$refs.viewer.showImage()
        // }
    },

};
</script>

<style>

</style>
