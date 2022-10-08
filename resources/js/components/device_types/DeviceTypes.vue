<template>

  <div v-show="deviceTypesVisible">
    <AddDeviceType ref="addDeviceType"></AddDeviceType>
    <ConfirmDialogue ref="confirmDialogue" />
    <h1 class="align-left px-4 pb-3" style="margin-top: 5.5rem">
      Device Types
    </h1>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto  d-flex">
            <li class="nav-item  d-flex py-1">
              <input
                class="form-control me-sm-2"
                type="text"
                placeholder="Search"
                v-model="device_type_filter"
              />
            </li>
            <li class="nav-item dropdown me-auto vertical-center">
              <a
                class="nav-link dropdown-toggle mx-2"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >{{ SortName }}</a
              >
              <div class="dropdown-menu w-100">
                <a
                  class="dropdown-item"
                  href="#"
                  v-for="rule in sortRules"
                  :key="rule.key"
                  :value="rule.key"
                  @click="doSort(rule.key)"
                  >{{ rule.title }}</a
                >
                <div class="dropdown-divider"></div>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="
                    sortDirection = !sortDirection;
                    doSort(sortColumn);
                  "
                >
                  {{
                    sortDirection ? sortOrderStrings[0] : sortOrderStrings[1]
                  }}
                </a>
              </div>
            </li>
          </ul>
          <div class="d-flex">
            <button class="btn btn-primary" @click="compactView = true">
              <i class="fas fa-list"></i>
            </button>
            <button class="btn btn-primary mx-2" @click="compactView = false">
              <i class="fas fa-th-large"></i>
            </button>
            <button class="btn btn-primary" @click="setDeviceType">
              Add Device Type
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div>
      <h5 class="text-primary my-2">{{ dataDescription }}</h5>
    </div>

    <div class="row my-2" v-if="!getCompactView">
      <div
        class="col-sm-4 col-xs-4 col-lg-4 p-2"
        v-for="(device_type, key) in filteredDeviceTypes" v-bind:key="key"
                v-bind:id="device_type.id">
        <div class="card border-light">
          <h3 class="card-header">
            {{ device_type.device_type_name }}
            <span class="text-info">({{ device_type.id }})</span>
          </h3>
          <div class="card-body">
            <h6 class="card-subtitle text-muted">
              {{ device_type.device_type_desc }}
            </h6>
          </div>
          <img v-bind:src="device_type.device_type_image" />
          <div class="card-body">
            <button class="btn btn-info btn-width-40 mx-1" @click="doEditType(key, device_type.id)">
              <i class="fas fa-edit" aria-hidden="true"></i>
              Edit
            </button>

            <button
              class="btn btn-warning btn-width-40 mx-1"
              @click="doDeleteType(key, device_type.id)"
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- compact view -->
    <div v-show="getCompactView" class="my-2">
      <div
        class="card border-primary mb-4 w-100"
        v-for="(device_type, key) in filteredDeviceTypes" v-bind:key="key"
                v-bind:id="device_type.id">
        <div class="card-header">
          <div class="row vertical-center">
            <div class="col-sm-1 col-xs-1 col-lg-1">
              <img v-bind:src="device_type.device_type_image" class="device-image" />
            </div>
            <div class="col-sm-1 col-xs-1 col-lg-1 align-left">
              <h5>
                <span class="text-info"> {{ device_type.id }} </span>
              </h5>
            </div>
            <div class="col-sm-7 col-xs-7 col-lg-7 align-left">
              <h5>
                {{ device_type.device_type_name  }}
              </h5>
            </div>
            <div class="col-sm-3 col-xs-3 col-lg-3 align-right">
              <button class="btn btn-info mx-2" @click="doEditType(key, device_type.id)">
                <i class="fas fa-edit" aria-hidden="true"></i>
              </button>

              <button
                class="btn btn-secondary"
                @click="doDeleteType(key, device_type.id)"
              >
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Paginator ref="paginatorDeviceTypes"></Paginator>
    <!-- <MyMqtt></MyMqtt> -->
  </div>


</template>

<script>
import ConfirmDialogue from '../../components/common/ConfirmDialogue.vue';
import AddDeviceType from './AddDeviceType.vue';
import Paginator from '../../components/common/Paginator.vue';
import MessagesConstants from '../strings_constants/strings';
import DeviceTypeStringConstants from '../../components/strings_constants/device_types/index';

    export default {
        components: { ConfirmDialogue, AddDeviceType, Paginator},
        data() {
            return {
                device_types: [],
                deviceTypesVisible: false,
                compactView: true,
                filteredDeviceTypes: [], //filtered array of devices
                dataDescription: "", //table data description label
                device_type_filter: "", //filtering string
                sortOrderStrings: [
                    MessagesConstants.SORT_ASC,
                    MessagesConstants.SORT_DESC,
                ],
                sortOrder: MessagesConstants.SORT_ASC,
                sortDirection: false,
                sortColumn: "device_type_name",
                sortRules: [
                    { key: "device_type_name", title: MessagesConstants.SORT_BY_NAME },
                    { key: "id", title: MessagesConstants.SORT_BY_ID },
                ],
            };
        },

        created() {
            this.page_description = DeviceTypeStringConstants.DEVICE_TYPE_PAGE_DESCRIPTION;
            this.getDeviceTypes();
            if (localStorage.DeviceTypeCompactView == null) {
                localStorage.DeviceTypeCompactView = this.compactView;
            }
            this.dataDescription = DeviceTypeStringConstants.DEVICE_TYPE_DATA_DESCRIPTION; //device dataset description
        },

        mounted() {
            if (localStorage.getItem('CompactView')) {
                this.compactView = (localStorage.getItem('CompactView') === 'true');
                } 
        },

    watch: {
        device_type_filter: function () {
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
            let res =
            this.sortColumn === "id"
                ? MessagesConstants.SORT_BY_ID
                : MessagesConstants.SORT_BY_NAME;
                res += " (";
                res += !this.sortDirection
                ? MessagesConstants.SORT_ASC
                : MessagesConstants.SORT_DESC;
                res += ")";
            return res;
    },

    getCompactView() {
      return this.compactView;
    },
  },


        methods: {   

    doSort($c) {
      const column = $c;
      this.sortColumn = column;
      const order = this.sortDirection;

      this.filteredDeviceTypes.sort(function (a, b) {
        if (column === "id") {
          var nameA = a[column];
          var nameB = b[column];
        } else {
          var nameA = a[column] + "".toUpperCase();
          var nameB = b[column] + "".toUpperCase();
        }

        if (order && nameA > nameB) {
          return -1;
        }

        if (order && nameA < nameB) {
          return 1;
        }

        if (!order && nameA < nameB) {
          return -1;
        }

        if (!order && nameA > nameB) {
          return 1;
        }

        return 0;
      });
    },

    doFilter() {
      this.filteredDeviceTypes = this.device_types;
      const res = this.filteredDeviceTypes.filter((device_type) => {
        
        if (this.device_type_filter === "") return true;
        else
          return (
            device_type.device_type_name
              .toLowerCase()
              .indexOf(this.device_type_filter.toLowerCase()) > -1
          );
      });
      if (this.device_types.length > res.length) {
        this.filteredDeviceTypes = res;
        console.log(res)
        this.doSort();
      }
      // return res;
    },

    //convert 'null' 'undefined' to predefined consts
    processStrings() {
      this.filteredDeviceTypes.forEach((dev_type, key) => {
        this.filteredDeviceTypes[key].device_type_desc =
          dev_type.device_type_desc == null
            ? MessagesConstants.NO_DESCRIPTION
            : dev_type.device_type_desc;
      });
    },
            getDeviceTypes(api_url) {
                api_url = api_url || '/api/device_types/read/';
                fetch(api_url)
                    .then(response => response.json())
                    .then(response => {
                        this.device_types = response.data;
                        this.filteredDeviceTypes = response.data;
                        this.processStrings();
                        this.device_types = this.filteredDeviceTypes;
                        this.doSort(this.sortColumn);
                    })
                    .catch(err => console.log(err));
            },

            async doDeleteType(key, id) {
                
                const ok = await this.$refs.confirmDialogue.showDialogue({
                    title: DeviceTypeStringConstants.DEVICE_TYPE_DELETING_CAPTION,
                    message: DeviceTypeStringConstants.DEVICE_TYPE_DELETING_MESSAGE + '"' + this.device_types[key].device_type_name + '"?',
                    okButton: DeviceTypeStringConstants.DEVICE_TYPE_DELETING_CAPTION,
                })
                
                if (ok) {
                    axios.delete('/api/device_types/delete/' + id)
                        .then(resp => {
                            this.device_types.splice(key, 1);                            
                            console.log(key, id, " - deleted");
                            this.$root.$refs.toaster.setMessage(MessagesConstants.DELETED_MESSAGE, MessagesConstants.PROCESS_SUCCESSFULLY);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                } else {
                    console.log(MessagesConstants.DELETING_CANCELLED);
                }
            },

            async setDeviceType() {
                const _add = await this.$refs.addDeviceType.showDialogue({
                    edit_mode: false,
                    title: DeviceTypeStringConstants.DEVICE_TYPE_ADDING_TITLE,
                    message: DeviceTypeStringConstants.DEVICE_TYPE_ADDING_MESSAGE,
                    device_type_name: DeviceTypeStringConstants.DEVICE_TYPE_NAME_PLACEHOLDER,
                    device_type_desc: DeviceTypeStringConstants.DEVICE_TYPE_DESC_PLACEHOLDER,
                    device_type_image: DeviceTypeStringConstants.DEVICE_TYPE_IMAGE_PLACEHOLDER,
                    okButton: DeviceTypeStringConstants.DEVICE_TYPE_ADDBUTTON_CAPTION,
                })

                if (_add) {
                    axios.post('/api/device_types/create/?device_type_name=' +  this.$refs.addDeviceType.device_type_name +
                            '&device_type_image=' + this.$refs.addDeviceType.device_type_image + 
                            '&device_type_desc=' + this.$refs.addDeviceType.device_type_desc)
                        .then(resp => {
                            console.log(resp['data']);
                            let newDevice = {
                                device_type_name: resp['data'].device_type_name,
                                device_type_desc: resp['data'].device_type_desc,
                                device_type_image: resp['data'].device_type_image,
                                id: resp['data'].id
                            }   
                            this.device_types.push(newDevice);
                            this.$root.$refs.toaster.setMessage(MessagesConstants.ADDED_MESSAGE, MessagesConstants.PROCESS_SUCCESSFULLY);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                } else {
                    console.log(MessagesConstants.INSERTING_CANCELLED);
                }

            },
            async doEditType(key, id) {
                const _edit = await this.$refs.addDeviceType.showDialogue({
                    edit_mode: true,
                    title: DeviceTypeStringConstants.DEVICE_TYPE_EDITING_TITLE,
                    message: DeviceTypeStringConstants.DEVICE_TYPE_EDITING_MESSAGE,
                    device_type_name: this.device_types[key].device_type_name,
                    device_type_desc: this.device_types[key].device_type_desc,
                    device_type_image: this.device_types[key].device_type_image,
                    okButton: DeviceTypeStringConstants.DEVICE_TYPE_EDITBUTTON_CAPTION,
                })

                if (_edit) {
                    let editDeviceTypePost = '/api/device_types/update/'+id+
                        '/?device_type_name=' + this.$refs.addDeviceType.device_type_name +
                        '&device_type_image=' + this.$refs.addDeviceType.device_type_image + 
                        '&device_type_desc=' + this.$refs.addDeviceType.device_type_desc;
                    console.log(editDeviceTypePost);

                    axios.put(editDeviceTypePost)
                        .then(resp => {
                            console.log(resp['data']);
                            this.device_types[key].device_type_name = resp['data'].device_type_name;
                            this.device_types[key].device_type_desc = resp['data'].device_type_desc;
                            this.device_types[key].device_type_image = resp['data'].device_type_image;
                            this.$root.$refs.toaster.setMessage(
                                MessagesConstants.EDITED_MESSAGE, 
                                MessagesConstants.PROCESS_SUCCESSFULLY
                            );
                        })
                        .then(resp => {
                            this.$root.$refs.DeviceRef.getDevices();
                        })
                        .catch(error => {
                            console.log(error);
                        })
                } else {
                    console.log(MessagesConstants.EDITING_CANCELLED);
                }

            },

            ShowHide(isVisible) {
                this.deviceTypesVisible = isVisible;
            },

            getVisible() {
                return this.deviceTypesVisible;
            }
        },
        
    };
</script>

<style lang="scss" scoped>

    //@import '../../../sass/lists.scss';
    //@import '../../../sass/aligns.scss';
    
</style>