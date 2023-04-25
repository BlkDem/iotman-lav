<template>
    <div class="border-4 border-bottom rounded-bottom border-secondary h-32px"></div>
    <div class="mb-4"></div>
    <div class="flex-right rounded-2 pt-2">
        <ul class="pagination text-center">
            <li class="page-item">
                <button class="page-link" disabled>
                    <i class="fa-solid fa-calculator"></i> {{ paginatorInfo.recordsCount }}
                </button>
            </li>
        </ul>
        <div class="px-2">

        </div>
        <ul class="pagination text-center">
            <li class="page-item" :class="{'disabled': (paginatorInfo.itemsPerPage==5)}">
                <button class="page-link" @click="setPage(1, 5)">5</button>
            </li>
            <li class="page-item" :class="{'disabled': (paginatorInfo.itemsPerPage==10)}">
                <button class="page-link" @click="setPage(1, 10)">10</button>
            </li>
            <li class="page-item" :class="{'disabled': (paginatorInfo.itemsPerPage==50)}">
                <button class="page-link" @click="setPage(1, 50)">50</button>
            </li>
        </ul>
        <div class="px-2">

        </div>
        <ul class="pagination text-center mx-1"
            :class="{'hide': paginatorInfo.pagesCount<2}">
            <li class="page-item"
                    :class="{'disabled': (paginatorInfo.currentPage==1)}"
                    @click="setPage(1, paginatorInfo.itemsPerPage)">
                <button class="page-link" >&laquo;</button>
            </li>
            <li class="page-item"
                :class="{'disabled': (page==paginatorInfo.currentPage)}"
                v-for="(page, key) in paginatorInfo.pagesCount"
                    :key="key"
                    :page="page">
                <button class="page-link"
                    @click="setPage(page, paginatorInfo.itemsPerPage)">{{ page }}
                </button>
            </li>
            <li class="page-item">
                <button class="page-link"
                    :class="{'disabled': (paginatorInfo.pagesCount==paginatorInfo.currentPage)}"
                    @click="setPage(paginatorInfo.pagesCount, paginatorInfo.itemsPerPage)">&raquo;
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Paginator',

    data() {
        return {
            paginatorInfo: {
                pagesCount: 0,
                currentPage: 0,
                itemsPerPage: 0,
                recordsCount: 0,
            },

            objectRef: {},

        }
    },

    methods: {

        setPaginator(optsAdd = {}) {

            this.paginatorInfo = optsAdd;
            this.objectRef = optsAdd.objectRef;
        },

        setPage(_currentPage, _itemsPerPage) {
            this.objectRef.getData(_currentPage, _itemsPerPage)
        }

    },

}
</script>

<style scoped>

.flex-right {
    display: flex;
    justify-content: flex-end;
}

.h-32px {
    height: 32px;
}

</style>
