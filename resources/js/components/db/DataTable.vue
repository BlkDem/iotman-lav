<template>

    <Viewer ref="viewer" :imageSrc="imageSrc" />


    <common-card

        :cardCaption="pageCaption"
        :isCollapseButtonHidden="false"
        :cardCaptionAdd="cardCaptionAdd"
        :isAdditionalCaption="isAdditionalCaption"
        :isReadOnly="readOnly"
    >
        <AddItem ref="addItem" />

        <ConfirmDialogue ref="confirmDialogue" />

        <table-nav

            :compactView="compactView"
            :dataFields="dataFields"
            :foreignValue="foreignValue"
            :readOnly="readOnly"

            @getData="getData"
            @setCompactView="setCompactView"
            @addEvent="addItem"
            @updateSortedData="updateSortedData"
            @updateFilteredData="updateFilteredData"
            @rowClick="rowClick"
        >
        </table-nav>

        <div>
            <!-- <h5 class="text-primary my-2 align-center">{{ dataDescription }}</h5> -->
        </div>

        <div class="row my-2" v-if="!compactView">
            <div class="col-sm-4 col-xs-4 col-lg-4 p-2" v-for="(item, key) in filteredItems"
                v-bind:key="key" v-bind:id="item.id.value"
                :class="{
                    'border-info bg-warning': selectedRow[key]===true,
                    'border-primary text-secondary': selectedRow[key]===false||selectedRow[key]==null}"
                @click="rowClick(key)"
                >

                <div class="card flex border-light py-2"
                >
                    <div class="w-100 flex-center py-2" v-for="(column, ckey) in Object.keys(item)"
                        v-bind:key="ckey"
                        :class="{
                            'bg-secondary text-primary': ckey%2===1&&ckey>0,
                            'bg-primary text-secondary': ckey%2===0&&ckey>0
                        }"
                    >

                        <div class="p-2" v-if="item[column].isLookup"
                            :class="{'text-info': item[column].isHighLight}"
                        >
                            {{ getValue(item[column]) }}
                        </div>

                        <div class="p-2" v-if="
                                                (activeCol!==key||activeRow!==ckey)&&
                                                (!item[column].isImage)&&
                                                (!item[column].isLookup)
                                            "
                            :class="{
                                        'text-info': item[column].isHighLight,
                                        'hide': item[column].isHidden,
                                    }"

                        >
                            {{ item[column].value }}
                        </div>

                        <img v-if="item[column].isImage" class="w-100 p-2" @click="imageClick($event)"
                            :src="(!item[column].isVirtualImage)?imagesPath + item[column].value:imagePlug"
                            @error="replaceByDefault"
                        />

                        <div class="p-2" v-if="item[column].isVirtualImage"
                                :class="{
                                            'text-info': item[column].isHighLight,
                                            'hide': item[column].isHidden,
                                            'cursor-pointer': selectableRow
                                        }"
                            >
                                <i :class="item[column].VirtualImage" class="fa-10x my-4"></i>
                        </div>
                    </div>

                    <div class="card-body w-100">
                        <div class="flex-center">
                        <button class="btn btn-info btn-width-40 mx-1"
                            @keyup="editBtnKeyUp($event.key, key, item.id.value)"
                            @click="doEdit(key, item.id.value)">
                            <i class="fas fa-edit" aria-hidden="true"></i>
                            <!-- Edit -->
                        </button>

                        <button class="btn btn-secondary btn-width-40 mx-1"
                            @keyup="deleteBtnKeyUp($event.key, key, item.id.value)"
                            @click="doDelete(key, item.id.value)">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                            <!-- Delete -->
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- compact view -->
        <div v-show="compactView" class="my-3" >
            <TableHead
                :fieldsCaptions="dataFields"
                @updateSortedData="updateSortedData"
            >
            </TableHead>

            <TransitionGroup name="list" tag="div">
            <div class="card mb-1 w-100"
                v-for="(item, key) in filteredItems"
                :key="key"
                :id="item.id.value"
                :class="{
                            'cursor-pointer': readOnly,
                            'border-info bg-warning text-dark': selectedRow[key]===true,
                            'border-primary': selectedRow[key]===false||selectedRow[key]==null
                        }"
                @click="rowClick(key)"
            >
                <div class="mx-2 my-2">
                    <div class="row vertical-center">
                        <div class="flex" v-for="(column, ckey) in Object.keys(item)" v-bind:key="ckey"
                            :class="setLastColumnAlignClass(item[column].class, Object.keys(item).length, ckey)"
                        >

                        <div class="w-100 elipsis"

                            data-bs-toggle="tooltip" data-bs-placement="top"
                            :title="getTooltip(item[column])"
                        >

                            <span v-if="isDefaultField(item[column], ckey, key)"
                                :class="{
                                            'text-info': item[column].isHighLight,
                                            'text-light': item[column].isLightColor,
                                        }"
                                @click.stop="onCellClick(item[column].isEditable, ckey, key)"
                            >

                                {{ item[column].value }}
                            </span>

                            <span v-if="item[column].isLookup"
                                :class="{
                                            'text-info': item[column].isHighLight || item[column].isHidden,
                                        }"
                                @click.stop="onCellClick(item[column].isEditable, ckey, key)"
                            >
                                {{ getValue(item[column]) }}
                            </span>

                            <span v-if="item[column].isVirtualImage"
                                :class="{'text-info': item[column].isHighLight}"
                            >

                                <router-link v-if="item[column].Link != null" :to="item[column].Link + item.id.value">
                                    <i :class="getVirtualImage(selectedRow[key], item[column])"></i>
                                </router-link>

                                <i v-else :class="getVirtualImage(selectedRow[key], item[column])"></i>

                            </span>

                            <span v-if="item[column].isDirectionVirtualImage"
                                :class="{'text-info': item[column].isHighLight}"
                            >
                                <i :class="getDirectionImage(item[column])"></i>
                            </span>

                            <img v-if="item[column].isImage" class="device-image"
                                :src="getImage(item[column])"
                                @error="replaceByDefault"
                                @click="imageClick($event)"
                            />

                            <div class="flex w-100" v-if="activeCol===key&&activeRow===ckey">
                                <input class="form-control w-100" :value="item[column].value"
                                    :id="setId(key, ckey)"
                                    :name="setId(key, ckey)"
                                    @keyup.enter="onInputEnter()"
                                    @keyup.esc="onInputEsc()"
                                    @change="onInputChange(
                                        item.id.value,
                                        key,
                                        column,
                                        $event.target.value,
                                        isEsc
                                    )"
                                />
                                <button class="btn btn-primary btn-sm mx-1"
                                    :id="item.id.value"
                                    @click.stop="saveRecord(
                                        item.id.value,
                                        item[column].value,
                                        item[column].value,
                                        $event.target.value
                                    )"
                                >
                                    <i class="far fa-check-circle"></i>
                                </button>

                                <button class="btn btn-primary btn-sm"
                                    @mousedown="
                                        this.isEsc=true;
                                        this.cancelEditCell()"
                                >
                                    <i class="far fa-times-circle"></i>
                                </button>

                            </div>
                        </div>
                    </div>

                        <div class="col-sm-2 col-xs-2 col-lg-2 edit-buttons" v-if="!readOnly">
                            <button class="btn btn-info  btn-sm mx-2"
                                @keyup="editBtnKeyUp($event.key, key, item.id.value)"
                                @click="doEdit(key, item.id.value)">

                                <i class="fas fa-edit" aria-hidden="true"></i>
                            </button>

                            <button class="btn btn-secondary btn-sm"
                                @keyup="deleteBtnKeyUp($event.key, key, item.id.value)"
                                @click="doDelete(key, item.id.value)">

                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </TransitionGroup>
        </div>
        <Paginator ref="refPaginator"></Paginator>
    </common-card>

</template>

<script>
import ConfirmDialogue from '../../components/common/ConfirmDialogue.vue';
import Paginator from './Paginator.vue';
import MessagesConstants from '../strings_constants/strings'
import Pathes from "../../config/pathes";
import Sorting from "../../helpers/Sorting";
import Filtering from "../../helpers/Filtering";
import ParsingErrors from "../../helpers/ParsingErrors";
import AddItem from './AddDialog.vue';
import TableNav from '../../components/common/TableBar/TableNav.vue';
import TableHead from './TableHead.vue';
import Viewer from '../imagelib/Viewer.vue';
import Repository from '../../api/repository';
import { Tooltip } from 'bootstrap'
import { errorEvent } from '../../api/errors';

export default {

        emits: ['onRowClick', 'onDataClear'],

        props: {
            api: {
                type: Object
            },

            pageCaption: {
                type: String
            },

            dataFields: {
                type: Array
            },

            selectedName: {
                type: String,
                default: ''
            },

            currentImage: {
                type: String,
                default: ''
            },

            foreignValue: {
                type: Number,
                default: 0
            },

            isSlave: {
                type: Boolean,
                default: false
            },

            selectableRow: {
                type: Boolean,
                default: false
            },

            readOnly: {
                type: Boolean,
                default: false
            },

            isAdditionalCaption: {
                type: Boolean,
                default: false
            },
        },


        components: {
            ConfirmDialogue,
            Paginator,
            AddItem,
            TableNav,
            TableHead,
            Viewer
        },

        data() {
            return {

                activeCol: undefined,
                activeRow: undefined,

                isEsc: false,

                Items: [],
                filteredItems: [], //filtered array of devices

                itemsVisible: false,
                compactView: true,

                imagesPath: '',
                imagePlug: '',

                imageSrc: Pathes.storageImagePlug,

                selectedRow: [],

                cardCaptionAdd: '',

            };
        },

        created() {
            this.getData();
            this.imagesPath = Pathes.storageImagesPath;
            this.imagePlug = Pathes.storageImagePlug
        },

        mounted() {
            new Tooltip(document.body, {
                selector: "[data-bs-toggle='tooltip']",
            })

            if (!this.readOnly) {
                if (localStorage.getItem('CompactView')) {
                    this.compactView = (localStorage.getItem('CompactView') === 'true');
                }
            } else this.compactView = true

            this.emitter.on("new-lang", _lang => {
                this.setLang(_lang)
            })



        },

        watch: {
            // master-slave datasets event
            foreignValue() {
                this.getData()
            }
        },

        methods: {

            isDefaultField(item, ckey, key) {
                return (this.activeCol!==key||this.activeRow!==ckey)&&
                        (!item.isImage)&&
                        (!item.isDirectionVirtualImage)&&
                        // (!item.isHidden)&&
                        (!item.isLookup)
            },

            // Edit button event
            editBtnKeyUp(event_key, key, id) {
                console.log('edit', event_key);
                if (event_key === 'Escape') this.$refs.addItem.cancelDialog();
                if (event_key === 'Enter') this.$refs.addItem.confirmDialog();
            },

            // Delete button event
            deleteBtnKeyUp(event_key, key, id) {
                console.log('delete', event_key);
                if (event_key === 'Escape') this.$refs.confirmDialogue.cancelDialog();
                if (event_key === 'Enter') this.$refs.confirmDialogue.confirmDialog();
            },

            //Make tooltip value
            getTooltip(item){
                if (item.lookupValue != '') return item.lookupValue
                if (item.value != null) return item.value
                return ''
            },

            //for opened/closed folder image etc.
            getVirtualImage(selected, item) {
                return (selected)?item.selectedVirtualImage : item.VirtualImage
            },

            /*
            * Show direction arrows <- <-> ->
            * IN/OUT params
            */
            getDirectionImage(item) {

                switch(item.value) {
                    case -1: return item.subscribeVirtualImage; break;
                    case 0: return item.biDirectionalVirtualImage; break;
                    case 1: return item.publishVirtualImage; break;
                    default: return ''; break;
                }

            },

            //Show Image Viewer
            imageClick(event) {
                this.imageSrc = event.target.src
                this.$refs.viewer.showImage()
            },

            // Row click event
            rowClick(row){

                //no selected rows - nothing to do
                if (!this.selectableRow) return

                //reset selected array
                for (let item in this.filteredItems) { this.selectedRow[item] = false }

                //select item with row index
                this.selectedRow[row] = true

                //display selection name in card head
                this.cardCaptionAdd = this.filteredItems[row][this.selectedName].value

                //send FK value to child table
                this.$emit('onRowClick', this.filteredItems[row].id.value)

            },

            //value or lookup field value
            getValue(item) {
                return (item.lookupValue == null)?item.value:item.lookupValue
            },

            //get image src with full path
            getImage(item) {
                if (item?.value==='') return this.imagePlug
                return Pathes.storageImagesPath + item.value
            },

            //set the default image plug
            replaceByDefault(e) {
                e.target.src = Pathes.storageImagePlug
            },

            //set the cell uID
            setId(key, ckey) {
                return "id" + key + "_" + ckey
            },

            //columns align rules
            setLastColumnAlignClass(classList, keysCount, key) {
                let alignClass = ''
                switch (key) {

                    //first column
                    case 0: alignClass = 'flex-center'
                    break;

                    //last column
                    case (keysCount - 1): alignClass = 'flex-right'
                    break;

                    //default column
                    default: alignClass = ''
                    break;
                }
                return classList + ' ' + alignClass
            },

            //reset edit cell
            cancelEditCell() {
                this.activeCol = null
                this.activeRow = null
            },

            //saving cell data if changed and cancel edit
            onInputEnter(){
                this.cancelEditCell()
            },

            //cancel editing cell data
            onInputEsc(){
                this.isEsc = true
                this.cancelEditCell()
            },

            //after cell editing method (patch)
            async onInputChange(item, key, dataCol, value, isEsc){

                if (isEsc) {
                    this.isEsc = false
                    return
                }

                try {
                    //save new value to dataset (patch route)
                    if (await this.saveRecord(item, dataCol, value)) {

                        //update arrays
                        this.filteredItems[key][dataCol].value = value
                        this.Items[key][dataCol].value = value
                    }
                }
                catch(e) {
                    console.log(e)
                }
            },

            //save cell data to dataset
            async saveRecord(id, field, value) {

                try {

                    //finish editing
                    this.cancelEditCell()

                    //patch dataset record $id such as 'field -> value'
                    await Repository.execute('patch', this.api.patch + id + '/' + field + '/' + value)

                    this.$root.$refs.toaster.showMessage(
                            MessagesConstants.EDITED_MESSAGE,
                            MessagesConstants.PROCESS_SUCCESSFULLY
                    );

                    return true;

                } catch(error) {
                    errorEvent(error);
                    this.$root.$refs.toaster.showMessage(
                            MessagesConstants.PATCHING_ERROR,
                            ParsingErrors.getError(error),
                            ParsingErrors.ERROR_LEVEL_ERROR
                    )
                    return false;
                }
            },

            //start editing cell
            onCellClick(isEditable, ckey=undefined, key=undefined) {
                if (!isEditable) return //check editable cell
                this.activeCol = key //set active column
                this.activeRow = ckey //set active row

                setTimeout(() => { //delay for set focus to active input
                    const el = document.getElementsByName("id" + key + "_" + ckey)[0];
                    // console.log(el);
                    if (el) el.focus();
                }, 200)

            },

            //For future (will use vuex-i18n)
            setLang(_lang) {
                // this.pageCaption = _lang.DEVICE_TYPES ?? 'Device Types'
            },

            //sorting
            updateSortedData(column, direction) {
                Sorting.doSort(this.filteredItems, column, direction)
            },

            //filtering
            updateFilteredData(fieldName, filter) {

                this.filteredItems = this.Items;
                this.filteredItems = Filtering.doFilter(this.filteredItems, fieldName, filter)
            },

            //switch dataset view
            setCompactView(value) {
                if (!this.readOnly) {
                    this.compactView = value
                }
                else this.compactView = true
            },

            //mutating field with extended parameters
            processListItem(listItem) {

                let newListItemData = {}

                try {

                    /**
                     * This code needs to refactoring (!) - fixed (1). Refactor+ / Stage 1
                     * This code populate the datatable with the special prepared properties which define its view
                     * like Image/Lookup/Hidden/Linked/Editable etc.
                     */

                    for (let field in this.dataFields) {

                        const dataField = this.dataFields[field];

                        let newListItemMutated = { ...dataField };

                        newListItemData[dataField.fieldName] = newListItemMutated;

                        newListItemMutated.value = (dataField.fieldName != null) ? listItem[dataField.fieldName] : ''
                        newListItemMutated.lookupValue = (dataField.displayName != null) ? listItem[dataField.displayName] : '',
                        newListItemMutated.selectedVirtualImage = dataField.selectedVirtualImage ?? dataField.VirtualImage,
                        newListItemMutated.class =  "col-sm-" + dataField.columnsCount +
                                                    " col-xs-" + dataField.columnsCount +
                                                    " col-lg-" + dataField.columnsCount;


                    }

                    return newListItemData;

                } catch (error) {
                    console.log(error)
                }
            },

            //Populate DataTable
            populateListItems(items) {

                    let newList = items

                    // transform fields to objects with extended properties
                    for (let itemRow in items) {
                        newList[itemRow] = this.processListItem(items[itemRow])
                    }

                    return newList;
            },

            //Getting data from DataRepository (in progress now)
            async getData(currentPage=1, itemsPerPage=50) {

                //async loading master/slave datasets
                //if dataset is slave waiting for master keys value

                // (foreignValue===0) - clear items event

                console.log('fkValue', this.foreignValue)
                if (this.foreignValue===0) {
                    this.filteredItems = []
                    this.Items = []
                }

                //slave without FK - nothing to do
                if (this.isSlave&&!this.foreignValue>0) return

                //prepare request with or w/o FK
                let fkValue = (this.foreignValue>0)?'/'+this.foreignValue:''

                try {
                    console.log(this.api.get)
                    const response = await Repository.getData(this.api.get + currentPage + "/" + itemsPerPage + fkValue)
                    // .then(response => {

                        this.Items = await this.populateListItems(response.data);
                        this.filteredItems = this.Items;

                        if (this.Items.length === 0) this.$emit('onDataClear') //clear child dataset event

                        if ((this.filteredItems.length>0)&&(this.selectableRow)) this.rowClick(0)


                        // setup paginator
                        this.$refs.refPaginator.setPaginator(
                            {
                                pagesCount: response.paginator.PagesCount,
                                currentPage: response.paginator.CurrentPage,
                                itemsPerPage: response.paginator.ItemsPerPage,
                                recordsCount: response.paginator.RecordsCount,
                                objectRef: this
                            }
                        )
                    // })
                    }
                    catch(error) {
                        errorEvent(error)
                    };
            },

            async doDelete(key, id) {

                const confirmDelete = await this.$refs.confirmDialogue.showDialogue({
                    title: MessagesConstants.DELETE_CAPTION,
                    message: MessagesConstants.DELETE_CONFORMATION,
                    okButton: MessagesConstants.DELETE_BUTTON,
                })

                if (confirmDelete) {
                    try {
                        // await axios.delete(this.api.delete + id)
                        await Repository.execute('delete', this.api.delete + id);
                        this.Items.splice(key, 1);
                        this.Items = this.filteredItems
                        this.$root.$refs.toaster.showMessage(
                                MessagesConstants.DELETED_MESSAGE,
                                MessagesConstants.PROCESS_SUCCESSFULLY
                        )
                    }
                    catch(error) {
                        errorEvent(error);
                        // console.log(error);
                        this.$root.$refs.toaster.showMessage(
                            MessagesConstants.DELETING_ERROR,
                            ParsingErrors.getError(error),
                            ParsingErrors.ERROR_LEVEL_ERROR
                        )
                    }
                } else {
                    console.log(MessagesConstants.DELETING_CANCELLED)
                }
            },

            async addItem() {

                for (let item in this.dataFields) {
                    this.dataFields[item].value = ''
                }

                const _add = await this.$refs.addItem.showDialogue({
                    edit_mode: false,
                    title: MessagesConstants.ITEM_ADDING_TITLE,
                    message: MessagesConstants.ITEM_ADDING_MESSAGE,
                    okButton: MessagesConstants.ITEM_ADDBUTTON_CAPTION,
                    dataFields: this.dataFields
                })

                if (_add) {
                    const newItemData = this.$refs.addItem.postData

                    const _values = {}

                    for (let field in newItemData) {
                        _values[newItemData[field].fieldName] = newItemData[field].value
                    }

                    try {


                        // const response = await axios.post(this.api.insert, _values)
                        console.log(_values)
                        const response = await Repository.execute('post', this.api.insert, _values)
                        console.log(console.response)
                        const _res = response.data

                        const transformItem = this.processListItem(_res)

                        this.Items.push(transformItem);
                        this.filteredItems = this.Items

                        this.$root.$refs.toaster.showMessage(
                                MessagesConstants.ADDED_MESSAGE,
                                MessagesConstants.PROCESS_SUCCESSFULLY
                        )
                    } catch(error) {
                        errorEvent(error)
                        this.$root.$refs.toaster.showMessage(
                                MessagesConstants.INSERTING_ERROR,
                                ParsingErrors.getError(error),
                                ParsingErrors.ERROR_LEVEL_ERROR
                        )
                    }
                } else {
                    console.log(MessagesConstants.INSERTING_CANCELLED);
                }

            },

            async doEdit(key, id) {

                let postFields = this.dataFields

                for (let item in this.dataFields) {
                    postFields[item].value = this.filteredItems[key][this.dataFields[item].fieldName].value;
                }

                const _edit = await this.$refs.addItem.showDialogue(
                    {
                        edit_mode: true,
                        title: MessagesConstants.ITEM_EDITING_TITLE,
                        message: MessagesConstants.ITEM_EDITING_MESSAGE,
                        dataFields: this.dataFields,
                        okButton: MessagesConstants.ITEM_EDITBUTTON_CAPTION,
                    }
                )

                if (_edit) {

                    try {
                        const editItem = this.$refs.addItem.postData;

                        const _values = {}

                        for (let field in editItem) {
                            _values[editItem[field].fieldName] = editItem[field].value;
                        }

                        console.log(_values)
                        const response = await Repository.execute('put', this.api.update + id, _values)

                        // console.log('response: ', response.data)
                        const listItem = response.data
                        this.filteredItems[key] = this.processListItem(listItem)
                        this.Items[key] = this.filteredItems[key]

                        this.$root.$refs.toaster.showMessage(
                                MessagesConstants.EDITED_MESSAGE,
                                MessagesConstants.PROCESS_SUCCESSFULLY
                        );

                    } catch(error) {

                        errorEvent(error);

                        this.$root.$refs.toaster.showMessage(
                                MessagesConstants.EDITING_ERROR,
                                ParsingErrors.getError(error),
                                ParsingErrors.ERROR_LEVEL_ERROR
                        )

                    }
                } else {
                    console.log(MessagesConstants.EDITING_CANCELLED);
                }
            },
        },
    };
</script>

<style scoped>

input {
    max-height: 2rem;
}

.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}

</style>
