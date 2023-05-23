<template >
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
                        type: String,
                        isVirtualImage: true,
                        isHighLight: true,
                        isSortable: false,
                        VirtualImage: 'fa-solid fa-images fa-2x',
                        columnsCount: 1
                    },

                    {
                        fieldName: 'id',
                        fieldCaption: 'ID',
                        type: Number,
                        isSortable: true,
                        isHighLight: true,
                        columnsCount: 1
                    },

                    {
                        fieldName: 'album_name',
                        fieldCaption: 'Name',
                        type: String,
                        // isEditable: true,
                        isSortable: true,
                        columnsCount: 3
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

        const apiAlbums = this.albums.api

        apiAlbums.get =    APIConstants.api_albums_read_page
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
