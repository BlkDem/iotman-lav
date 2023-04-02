<template>
    <div class="border-4 border-bottom rounded-bottom border-secondary" style="height: 32px;"></div>
    <div class="mb-4"></div>
    <div class="flex-right rounded-2 pt-2">
        <ul class="pagination text-center">
            <li class="page-item">
                <button class="page-link" disabled><i class="fa-solid fa-calculator"></i> {{ recordsCount }} </button>
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
        <ul class="pagination text-center mx-1" :class="{'hide': pagesCount<2}">
            <li class="page-item" :class="{'disabled': (currentPage==1)}" v-on:click="setPage(1, itemsPerPage)">
                <button class="page-link" >&laquo;</button>
            </li>
            <li class="page-item" :class="{'disabled': (page==currentPage)}"
                 v-for="(page, key) in pagesCount"
                 v-bind:key="key" v-bind:page="page">
                    <button class="page-link" v-on:click="setPage(page, itemsPerPage)">{{ page }}</button>
            </li>
            <li class="page-item">
                <button class="page-link" :class="{'disabled': (pagesCount==currentPage)}"
                    v-on:click="setPage(pagesCount, itemsPerPage)">&raquo;</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Paginator',

    data() {
        return {
            pagesCount: 0,
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

    methods: {
        setPaginator(optsAdd = {}) {
            this.pagesCount = optsAdd.pagesCount
            this.currentPage = optsAdd.currentPage
            this.itemsPerPage = optsAdd.itemsPerPage
            this.recordsCount = optsAdd.recordsCount
        },

        setPage(_currentPage, _itemsPerPage) {
            this.$parent.$parent.getData(_currentPage, _itemsPerPage)
        }

    },

}
</script>

<style>

.flex-right {
    display: flex;
    justify-content: flex-end;
}

</style>
