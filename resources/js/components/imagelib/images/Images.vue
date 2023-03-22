<template>
    <div style="margin-top: 5.5rem">

        <div class="row">
            <div class="col-sm-4 col-xs-4 col-lg-4">
                <data-table
                    :api="albums.api"
                    :dataFields="albums.albumsFields"
                    :pageCaption="albums.albumsCaption"
                    :selectableRow="true"
                    :selectedName="albums.selectedName"
                    :readOnly="albumsReadOnly"
                    @onRowClick="onRowClick">
                </data-table>

            </div>
            <div class="col-sm-8 col-xs-8 col-lg-8">
                <data-table
                    :api="images.api"
                    :dataFields="images.imagesFields"
                    :pageCaption="images.imagesCaption"
                    :foreignKey="images.album_id"
                    :foreignValue="images.selectedFkValue"
                    >
                </data-table>
            </div>
        </div>
    </div>
</template>

<script>
import MessagesConstants from '../../strings_constants/strings'
import APIConstants from "../../../api/rest_api";
import DataTable from '../../db/DataTable.vue';

export default {

    // emits: ['setAdditionalCaption'],

    components: {
        DataTable,
    },

    data() {
        return {
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
                        isText: true,
                        isEditable: true,
                        isSortable: true,
                        isHighLight: false,
                        columnsCount: 5
                    },
                    // {
                    //     fieldName: 'album_name',
                    //     fieldCaption: 'Album',
                    //     type: String,
                    //     isImage: false,
                    //     isSortable: true,
                    //     isHighLight: false,
                    //     columnsCount: 3
                    // },
                    // {
                    //     fieldName: 'id',
                    //     fieldCaption: 'ID',
                    //     type: Number,
                    //     isImage: false,
                    //     isEditable: false,
                    //     isSortable: true,
                    //     isHighLight: true,
                    //     columnsCount: 1
                    // },
                    {
                            fieldName: 'album_id',
                            displayName: 'album_name',
                            fieldCaption: 'Album',
                            type: String,
                            isImage: false,
                            isEditable: false,
                            isSortable: true,
                            isHighLight: false,
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
                        VirtualImage: 'fa-solid fa-images fa-2x',
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
        apiImages.get = APIConstants.api_images_read_page
        apiImages.insert = APIConstants.api_image_create
        apiImages.update = APIConstants.api_image_update
        apiImages.delete = APIConstants.api_image_delete
        apiImages.patch = APIConstants.api_image_patch

        const apiAlbums = this.albums.api

        apiAlbums.get =    APIConstants.api_albums_lookup

    },

    methods: {
        onRowClick(dataEvent) {
            console.log(dataEvent)
            this.images.selectedFkValue = dataEvent
        }
    },

};
</script>

<style>

</style>
