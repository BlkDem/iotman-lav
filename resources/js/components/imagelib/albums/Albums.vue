<template>
        <div style="margin-top: 5.5rem">
        </div>

    <common-card :cardCaption="pageCaption">
        <AddAlbum ref="addAlbum" />

        <ConfirmDialogue ref="confirmDialogue" />
        <!-- <h1 class="align-left px-4 pb-3" style="margin-top: 5.5rem">
            {{ pageCaption }}
        </h1> -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <div class="container-fluid">
                <div class="navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav me-auto  d-flex">
                        <li class="nav-item  d-flex py-1">
                            <input class="form-control me-sm-2" type="text" placeholder="Search"
                                v-model="album_filter" />
                        </li>
                        <li class="nav-item dropdown me-auto vertical-center">
                            <!-- <button v-on:click="openImager()"></button> -->
                            <a class="nav-link dropdown-toggle mx-2" data-bs-toggle="dropdown" href="#" role="button"
                                aria-haspopup="true" aria-expanded="false">{{ SortName }}</a>
                            <div class="dropdown-menu w-100">
                                <a class="dropdown-item" href="#" v-for="rule in sortRules" :key="rule.key"
                                    :value="rule.key" @click="doSort(rule.key)">{{ rule.title }}</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" @click="
                                                                    sortDirection = !sortDirection;
                                                                    doSort(sortColumn);">
                                    {{ sortDirection ? sortOrderStrings[0] : sortOrderStrings[1] }}
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <button class="btn btn-primary  mx-2" :class="{'disabled' : compactView}" @click="compactView = true">
                            <i class="fas fa-list"></i>
                        </button>
                        <button class="btn btn-primary" :class="{'disabled' : !compactView}"
                            @click="compactView = false">
                            <i class="fas fa-th-large"></i>
                        </button>
                        <button class="btn btn-primary mx-2" @click="setAlbum">
                            Add Album
                        </button>
                        <button class="btn btn-primary" @click="getData">
                            <i class="fas fa-sync-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <div>
            <h5 class="text-primary my-2">{{ dataDescription }}</h5>
        </div>

        <div class="row my-2" v-show="!compactView">
            <div class="col-sm-4 col-xs-4 col-lg-4 p-2 fade-in" v-for="(album, key) in filteredAlbums"
                v-bind:key="key" v-bind:id="album.id">
                <div class="card border-light">
                    <h3 class="card-header">
                        {{ album.album_name }}
                        <span class="text-info">({{ album.id }})</span>
                    </h3>
                    <div class="card-body">
                        <h6 class="card-subtitle text-muted">
                            {{ album.album_desc }}
                        </h6>
                    </div>
                    <div class="card-body">
                            <i class="fas fa-images fa-8x text-info"></i>
                    </div>

                    <!-- <img v-bind:src="device_type.device_type_image" /> -->
                    <div class="card-body">
                        <button class="btn btn-info btn-width-40 mx-1" @click="doEditAlbum(key, album.id)">
                            <i class="fas fa-edit" aria-hidden="true"></i>
                            Edit
                        </button>

                        <button class="btn btn-warning btn-width-40 mx-1" @click="doDeleteAlbum(key, album.id)">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- compact view -->
        <div v-show="compactView" class="my-2">
            <div class="card border-primary mb-1 w-100 fade-in" v-for="(album, key) in filteredAlbums"
                v-bind:key="key" v-bind:id="album.id">
                <div class="mx-2 my-2">
                    <div class="row vertical-center">
                        <div class="col-sm-1 col-xs-1 col-lg-1 flex">
                            <i class="fas fa-images fa-2x text-info"></i>
                            <!-- <img v-bind:src="album.device_type_image" class="device-image" /> -->
                        </div>
                        <div class="col-sm-1 col-xs-1 col-lg-1 align-left">
                                <span class="text-info"> {{ album.id }} </span>
                        </div>
                        <div class="col-sm-7 col-xs-7 col-lg-7 align-left">
                                {{ album.album_name  }}
                        </div>
                        <div class="col-sm-3 col-xs-3 col-lg-3  edit-buttons">
                            <button class="btn btn-info mx-2" @click="doEditAlbum(key, album.id)">
                                <i class="fas fa-edit" aria-hidden="true"></i>
                            </button>

                            <button class="btn btn-secondary" @click="doDeleteAlbum(key, album.id)">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Paginator ref="paginatorDeviceTypes"></Paginator>
        <!-- <Imager ref="imager"/> -->
        <!-- <MyMqtt></MyMqtt> -->
    </common-card>


</template>

<script>
import ConfirmDialogue from '../../../components/common/ConfirmDialogue.vue';
import AddAlbum from './AddAlbum.vue';
import Paginator from '../../../components/common/Paginator.vue';
import MessagesConstants from '../../strings_constants/strings'
import APIConstants from "../../../rest_api.js";
import AlbumStringConstants from '../../../components/strings_constants/images/index';
import Sorting from "../../../components/common/js/Sorting.js";
import ParsingErrors from "../../common/js/ParsingErrors.js";
// import Imager from '../../components/common/Imager.vue';

    export default {

        components: {
            ConfirmDialogue,
            AddAlbum,
            Paginator,
            // Imager
        },

        data() {
            return {
                albums: [],
                // deviceTypesVisible: false,
                compactView: true,
                pageCaption: MessagesConstants.ALBUMS ?? 'Albums',
                filteredAlbums: [], //filtered array of devices
                dataDescription: "", //table data description label
                album_filter: "", //filtering string
                sortOrderStrings: [
                    MessagesConstants.SORT_ASC,
                    MessagesConstants.SORT_DESC,
                ],
                sortOrder: MessagesConstants.SORT_ASC,
                sortDirection: false,
                sortColumn: "album_name",
                sortRules: [{
                        key: "album_name",
                        title: MessagesConstants.SORT_BY_NAME
                    },
                    {
                        key: "id",
                        title: MessagesConstants.SORT_BY_ID
                    },
                ],
            };
        },

        created() {
            // this.page_description = AlbumStringConstants.DEVICE_TYPE_PAGE_DESCRIPTION;

            // if (localStorage.DeviceTypeCompactView == null) {
            //     localStorage.DeviceTypeCompactView = this.compactView;
            // }
            this.dataDescription = AlbumStringConstants.ALBUM_DATA_DESCRIPTION; //device dataset description

            this.getData();
        },

        mounted() {
            if (localStorage.getItem('CompactView')) {
                this.compactView = (localStorage.getItem('CompactView') === 'true');
            }
        },

        watch: {
            album_filter: function () {
                handler: this.doFilter();
            },

            selectSort: function () {
                handler: this.doSort();
            },

            compactView: function () {
                localStorage.CompactView = this.compactView;
            },
        },

        computed: {
            SortName() {
                return MessagesConstants.SortingCaption(this.sortColumn, this.sortDirection)
            },

            // getCompactView() {
            //     return this.compactView;
            // },
        },


        methods: {

            // openImager() {
            //     this.$refs.imager.createImager()
            // },

            doSort($column) {
                Sorting.doSort(this.filteredAlbums, $column, this.sortDirection)
                this.sortColumn = $column;
            },

            doFilter() {
                this.filteredAlbums = this.albums;
                const res = this.filteredAlbums.filter((album) => {

                    if (this.album_filter === "") return true;
                    else
                        return (
                            album.album_name
                            .toLowerCase()
                            .indexOf(this.album_filter.toLowerCase()) > -1
                        );
                });
                if (this.albums.length > res.length) {
                    this.filteredAlbums = res
                    this.doSort()
                }
                // return res;
            },

            async getData(_currentPage=1, _itemsPerPage=5) {
                fetch(APIConstants.api_albums_read_page + _currentPage + "/" + _itemsPerPage)
                    .then(response => response.json())
                    .then(response => {
                        this.albums = response.data
                        this.filteredAlbums = response.data
                        // this.processStrings();
                        //MessagesConstants.processDeviceTypeStrings(this.filteredAlbum)


                        this.$refs.paginatorDeviceTypes.setPaginator(
                            {
                                pagesCount: response.paginator.PagesCount,
                                currentPage: response.paginator.CurrentPage,
                                itemsPerPage: response.paginator.ItemsPerPage,
                                recordsCount: response.paginator.RecordsCount
                            }
                        )

                        this.albums = this.filteredAlbums
                        this.doSort(this.sortColumn)
                    })
                    .catch(err => console.log(err))
            },

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
