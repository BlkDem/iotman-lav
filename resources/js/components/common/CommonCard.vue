<template>
    <div class="card card-border my-4">
        <div class="card-body border-4 border-top border-bottom rounded-bottom rounded-top border-secondary">
            <div class="card-caption">

                <h3 class="card-title align-left px-2 "
                    :class="{'hide': isAdditionalCaption}">
                    {{ cardCaption }}
                </h3>

                <h3 ref="cardCaptionAdd" class="card-title align-left px-2"
                    :class="{'hide': !isAdditionalCaption}">
                    {{ cardCaptionAdd }}
                </h3>

                <div :class="{'hide': isCollapseButtonHidden ?? false}">
                    <button class="btn btn-primary btn-rounded" :class="{'hide': !isCollapsed}"
                        @click="isCollapsed=!isCollapsed">
                        <i class="fas fa-caret-down"></i>
                    </button>
                    <button class="btn btn-primary btn-rounded" :class="{'hide': isCollapsed}"
                        @click="isCollapsed=!isCollapsed">
                        <i class="fas fa-caret-up"></i>
                    </button>
                </div>
            </div>

            <div class="py-4 align-left" :class="{'mx-2': margins, 'collapse': isCollapsed}">
                <slot>Loading...</slot>
            </div>
        </div>
    </div>

</template>

<script>
export default {

    props: {
        cardCaption: {
            type: String,
            default: 'Caption'
        },

        cardCaptionAdd: {
            type: String,
            default: ''
        },

        margins: {
            type: Number,
            default: 0
        },

        isCollapsed: {
            type: Boolean,
            default: false
        },

        isCollapseButtonHidden: {
            type: Boolean,
            default: false
        },

        isAdditionalCaption: {
            type: Boolean,
            default: true
        }
    },

}
</script>

<style>
.card-caption {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.hide {
    display: none;
}
</style>
