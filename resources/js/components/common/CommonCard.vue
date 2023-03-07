<template>
            <div class="card card-border my-4">
                <div class="card-body border-4 border-top border-bottom rounded-bottom rounded-top border-secondary">
                    <h3 class="card-title align-left px-2 ">{{ cardCaption }}</h3>
                    <!-- <p class="card-text">Paragraph</p> -->
                    <div class="py-4 align-left" :class="{'mx-2': margins}">
                        <slot></slot>
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

        margins: {
            type: Number,
            default: 0
        }
    },

    // data() {

    // }
}
</script>
