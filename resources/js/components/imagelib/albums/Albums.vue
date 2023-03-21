<template >
        <div style="margin-top: 5.5rem">


        <!-- Album Widget -->
        <data-table
            :api="albums.api"
            :dataFields="albums.albumsFields"
            :pageCaption="albums.albumsCaption"
            :selectableRow="true"
            :selectedName="selectedName"
            @onRowClick="onRowClick"
        >
        </data-table>

        <!-- Amage Widget -->
        <data-table
            :api="images.api"
            :dataFields="images.imagesFields"
            :foreignKey="images.album_id"
            :foreignValue="selectedFkValue"
            :pageCaption="images.imagesCaption"
        >
        </data-table>
    </div>
</template>

<script>
import MessagesConstants from '../../strings_constants/strings'
import APIConstants from "../../../api/rest_api";
// import ParsingErrors from "../../../helpers/ParsingErrors.js";
import DataTable from '../../db/DataTable.vue';

    export default {

        emits: ['setAdditionalCaption'],

        components: {
            DataTable,
        },

        data() {
            return {

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
                            isEditable: false,
                            isSortable: true,
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
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 7
                        },
                    ],

                    album_id: 'album_id',
                    album_id_value: 1,

                },

                //Albums Widget Setup
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
                            fieldCaption: 'Image',
                            type: String,
                            isImage: true,
                            isVirtualImage: true,
                            VirtualImage: 'picture',
                            isEditable: false,
                            isSortable: false,
                            isHighLight: true,
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
                            fieldName: 'album_name',
                            fieldCaption: 'Name',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 3
                        },

                        {
                            fieldName: 'album_desc',
                            fieldCaption: 'Description',
                            type: String,
                            isImage: false,
                            isEditable: true,
                            isSortable: true,
                            isHighLight: false,
                            columnsCount: 4
                        },
                    ],
                },

                //card caption selected album
                selectedName: 'album_name',

                //selected album id for child table images
                selectedFkValue: 0,
            }
        },

        created() {

            const apiImages = this.images.api

            apiImages.get = APIConstants.api_images_read_page
            apiImages.get = APIConstants.api_images_read_page
            apiImages.insert = APIConstants.api_image_create
            apiImages.update = APIConstants.api_image_update
            apiImages.delete = APIConstants.api_image_delete
            apiImages.patch = APIConstants.api_image_patch

            const apiAlbums = this.albums.api

            apiAlbums.get =    APIConstants.api_albums_read_page
            apiAlbums.insert = APIConstants.api_album_create
            apiAlbums.update = APIConstants.api_album_update
            apiAlbums.delete = APIConstants.api_album_delete
            apiAlbums.patch = APIConstants.api_album_patch
        },

        methods: {

            //switch FK for filtering images
            onRowClick(dataEvent) {
                console.log(dataEvent)
                this.selectedFkValue = dataEvent
            }
        },

    };
</script>

<style>

</style>
