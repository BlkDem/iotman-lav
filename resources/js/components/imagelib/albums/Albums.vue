<template >
        <div style="margin-top: 5.5rem">


        <!-- Album Widget -->
        <data-table
            :api="albums.api"
            :dataFields="albums.albumsFields"
            :pageCaption="albums.albumsCaption"
        >
        </data-table>

        <!-- Amage Widget -->
        <data-table
            :api="images.api"
            :dataFields="images.imagesFields"
            :foreignKey="images.album_id"
            :foreignValue="images.album_id_value"
            :pageCaption="images.imagesCaption"
        >
        </data-table>
    </div>
</template>

<script>
// import ConfirmDialogue from '../../../components/common/ConfirmDialogue.vue';
// import AddAlbum from './AddAlbum.vue';
// import Paginator from '../../../components/common/Paginator.vue';
import MessagesConstants from '../../strings_constants/strings'
import APIConstants from "../../../api/rest_api";
// import AlbumStringConstants from '../../../components/strings_constants/images/index';
// import Sorting from "../../../helpers/Sorting";
// import Filtering from "../../../helpers/Filtering";
import ParsingErrors from "../../../helpers/ParsingErrors.js";
import DataTable from '../../db/DataTable.vue';
// import TableNavBar from '../../common/TableBar/TableNav.vue';
// import Imager from '../../components/common/Imager.vue';

    export default {

        components: {
            // ConfirmDialogue,
            // AddAlbum,
            // Paginator,
            DataTable,
            // TableNav
            // Imager
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
                }
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
        },

        methods: {
            async doDeleteAlbum(key, id) {

                const confirmDelete = await this.$refs.confirmDialogue.showDialogue({
                    title: AlbumStringConstants.ALBUM_DELETING_CAPTION,
                    message: AlbumStringConstants.ALBUM_DELETING_MESSAGE + '"' +
                    this.filteredAlbums[key].album_name + '"?',
                    okButton: AlbumStringConstants.ALBUM_DELETING_CAPTION,
                })

                if (confirmDelete) {
                    axios.delete(APIConstants.api_album_delete + id)
                        .then(resp => {
                            this.filteredAlbums.splice(key, 1);
                            this.albums = this.filteredAlbums
                            // console.log(key, id, " - deleted");
                            this.$root.$refs.toaster.showMessage(
                                MessagesConstants.DELETED_MESSAGE,
                                MessagesConstants.PROCESS_SUCCESSFULLY
                            )
                        })
                        .catch(error => {
                            console.log(error);
                        })
                } else {
                    console.log(MessagesConstants.DELETING_CANCELLED)
                }
            },

            updateSortedData($column, $direction) {
                this.sortDirection = $direction
                this.sortColumn = $column
                // console.log(this.sortColumn, this.sortDirection)
                Sorting.doSort(this.filteredItems, this.sortColumn, this.sortDirection)
            },

            updateFilteredData($filter) {

                this.filteredItems = this.Items;
                this.filteredItems = Filtering.doFilter(this.filteredItems, this.sortColumn, $filter)
            },

            async setAlbum() {
                const _add = await this.$refs.addAlbum.showDialogue({
                    edit_mode: false,
                    title: AlbumStringConstants.ALBUM_ADDING_TITLE,
                    message: AlbumStringConstants.ALBUM_ADDING_MESSAGE,
                    album_name: "",
                    album_desc: "",
                    // device_type_image: "",
                    okButton: AlbumStringConstants.ALBUM_ADDBUTTON_CAPTION,
                })

                if (_add) {
                    axios.post(APIConstants.api_album_create, {
                                album_name: this.$refs.addAlbum.album_name,
                                album_desc: this.$refs.addAlbum.album_desc
                            }
                        )
                        .then(resp => {
                            // console.log(resp['data']);
                            let newAlbum = {
                                album_name:  resp['data'].album_name,
                                album_desc:  resp['data'].album_desc,
                                // album_image: resp['data'].album_image,
                                id: resp['data'].id
                            }
                            this.albums.push(newAlbum);
                            this.$root.$refs.toaster.showMessage(
                                MessagesConstants.ADDED_MESSAGE,
                                MessagesConstants.PROCESS_SUCCESSFULLY
                            )
                        })
                        .catch(error => {
                            //
                            //const Toaster = app.component('toaster')
                            this.$root.$refs.toaster.showMessage(
                                MessagesConstants.INSERTING_ERROR,
                                ParsingErrors.getError(error),
                                ParsingErrors.ERROR_LEVEL_ERROR
                            )
                        })
                } else {
                    console.log(MessagesConstants.INSERTING_CANCELLED);
                }

            },
            async doEditAlbum(key, id) {
                const _edit = await this.$refs.addAlbum.showDialogue(
                    {
                        edit_mode: true,
                        title: AlbumStringConstants.ALBUM_EDITING_TITLE,
                        message: AlbumStringConstants.ALBUM_EDITING_MESSAGE,
                        album_name:  this.albums[key].album_name,
                        album_desc:  this.albums[key].album_desc,
                        // device_type_image: this.albums[key].device_type_image,
                        okButton: AlbumStringConstants.ALBUM_EDITBUTTON_CAPTION,
                    }
                )

                if (_edit) {
                    let editAlbum = {
                        album_name:  this.$refs.addAlbum.album_name,
                        // album_image: this.$refs.addAlbum.album_image,
                        album_desc:  this.$refs.addAlbum.album_desc
                    }
                    console.log(editAlbum);

                    axios.put(APIConstants.api_album_update + id, editAlbum)
                        .then(resp => {
                            // console.log(resp['data']);
                            this.albums[key].album_name =  resp['data'].album_name;
                            this.albums[key].album_desc =  resp['data'].album_desc;
                            // this.albums[key].device_type_image = resp['data'].device_type_image;
                            this.$root.$refs.toaster.showMessage(
                                MessagesConstants.EDITED_MESSAGE,
                                MessagesConstants.PROCESS_SUCCESSFULLY
                            );
                        })
                        .then(resp => {
                            // this.$root.$refs.DeviceRef.getData();
                        })
                        .catch(error => {
                            this.$root.$refs.toaster.showMessage(
                                MessagesConstants.EDITING_ERROR,
                                ParsingErrors.getError(error),
                                ParsingErrors.ERROR_LEVEL_ERROR
                            )
                        })
                } else {
                    console.log(MessagesConstants.EDITING_CANCELLED);
                }

            },

        },

    };
</script>

<style>

</style>
