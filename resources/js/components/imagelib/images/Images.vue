<template>
    <div class="mt-55"></div>

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
                    @onRowClick="onRowClick"
                >
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
import Api from '../../../api/ApiStruct';
import FieldStruct from './FieldStruct';

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

            //Image model
            images: {
                imagesCaption: MessagesConstants.IMAGES,

                api: { Api },

                imagesFields: [
                    ...FieldStruct.ImageFieldStruct
                ],

                album_id: 'album_id',
                album_id_value: 1,

            },

            //Album model
            albums: {
                albumsCaption: MessagesConstants.ALBUMS,

                api: { Api },

                albumsFields: [
                    ...FieldStruct.AlbumFieldStruct
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
        apiImages.insert = APIConstants.api_image_create
        apiImages.update = APIConstants.api_image_update
        apiImages.delete = APIConstants.api_image_delete
        apiImages.patch = APIConstants.api_image_patch

        const apiAlbums = this.albums.api

        apiAlbums.get =    APIConstants.api_albums_lookup

    },

    methods: {
        onRowClick(fkKey) {
            this.images.selectedFkValue = fkKey
        },
    },

};
</script>

<style>

</style>
