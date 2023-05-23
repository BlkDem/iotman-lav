<template >
        <div style="margin-top: 5.5rem">


        <!-- Album Widget -->
        <data-table
            :api="albums.api"
            :dataFields="albums.albumsFields"
            :pageCaption="albums.albumsCaption"
            :selectedName="selectedName"
            @onRowClick="onRowClick"
        >
        </data-table>

    </div>
</template>

<script>
import MessagesConstants from '../../strings_constants/strings'
import APIConstants from "../../../api/rest_api";
import DataTable from '../../db/DataTable.vue';
import Api from '../../../api/ApiStruct';
import FieldStruct from './FieldStruct';

    export default {

        emits: ['setAdditionalCaption'],

        components: {
            DataTable,
        },

        data() {
            return {

                //Albums Widget Setup
                albums: {
                    albumsCaption: MessagesConstants.ALBUMS,

                    api: { Api },

                    albumsFields: [
                        ...FieldStruct.AlbumFieldStruct
                    ],
                },

                //card caption selected album
                selectedName: 'album_name',

                //selected album id for child table images
                selectedFkValue: 0,
            }
        },

        created() {

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
