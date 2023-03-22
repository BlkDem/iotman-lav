<template >
    <div style="margin-top: 5.5rem">

    <!-- Amage Widget -->
    <data-table
        :api="images.api"
        :dataFields="images.imagesFields"
        :pageCaption="images.imagesCaption"
    >
    </data-table>
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
                    {
                        fieldName: 'album_name',
                        fieldCaption: 'Album',
                        type: String,
                        isImage: false,
                        isSortable: true,
                        isHighLight: false,
                        columnsCount: 3
                    },
                ],

                album_id: 'album_id',
                album_id_value: 1,

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

    },

    methods: {

    },

};
</script>

<style>

</style>
