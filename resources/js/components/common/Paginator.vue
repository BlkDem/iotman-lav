<template>
    <div class="flex-right py-4">
        <ul class="pagination text-center">
            <li class="page-item disabled">
                <button class="page-link" >Total records: {{ recordsCount }} </button>
            </li>
        </ul>
        <div class="px-2">

        </div>
        <ul class="pagination text-center">
            <li class="page-item" :class="{'disabled': (itemsPerPage==2)}">
                <button class="page-link" v-on:click="setPage(1, 2)">2</button>
            </li>
            <li class="page-item" :class="{'disabled': (itemsPerPage==5)}">
                <button class="page-link" v-on:click="setPage(1, 5)">5</button>
            </li>
            <li class="page-item" :class="{'disabled': (itemsPerPage==10)}">
                <button class="page-link" v-on:click="setPage(1, 10)">10</button>
            </li>
        </ul>
        <div class="px-2">

        </div>
        <ul class="pagination text-center">
            <li class="page-item" :class="{'disabled': (currentPage==1)}">
                <button class="page-link" href="#">&laquo;</button>
            </li>
            <li class="page-item" :class="{'disabled': (page==currentPage)}"
                 v-for="(page, key) in pages"
                 v-bind:key="key" v-bind:page="page">
                    <button class="page-link" href="#" v-on:click="setPage(page, itemsPerPage)">{{ page }}</button>
            </li>
            <li class="page-item">
                <button class="page-link" :class="{'disabled': (pages==currentPage)}" href="#">&raquo;</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Paginator',

    // props: [
    //     "items",
    //     "pageCount",
    //     "currentPage",
    //     "nextPage",
    //     "prevPage"
    // ],

    data() {
        return {
            pages: 0,
            currentPage: 0,
            itemsPerPage: 0,
            recordsCount: 0,
            pageLink: "",
            nextPage: "",
            prevPage: ""
        }
    },

    created() {

    },

    mounted() {
        //console.log()
        //this.$parent.$emit('test', [1, '1'])
        //this.$parent.test(1, 2)
    },

    methods: {
        setPaginator(optsAdd = {}) {
            this.pages = optsAdd.itemsCount
            this.currentPage = optsAdd.currentPage
            this.itemsPerPage = optsAdd.itemsPerPage
            this.recordsCount = optsAdd.recordsCount
            //console.log(this.pages, this.currentPage)
            // this.pages = optsAdd.itemsCount
        },

        setPage(_currentPage, _itemsPerPage) {
            this.$parent.getData(_currentPage, _itemsPerPage)
        }

    },

    computed: {

    },

    watch: {

    },
}
</script>

<style>

.flex-right {
    display: flex;
    justify-content: flex-end;
}

</style>
