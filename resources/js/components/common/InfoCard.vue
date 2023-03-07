<template>
    <div class="card text-white"
            :class="{
                'mb-4': marginBottom,
                'bg-info': bgColor === 'bg-info',
                'bg-success': bgColor === 'bg-success',
            }"
        >
        <div class="card-header">
            {{ infoCardCaption }}
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ infoCardTitle }}</h5>
            <p class="card-text">
                {{ infoCardText }}
            </p>
            <p class="card-text" v-if="moreInfoVisible">
                {{ infoCardMoreText }}
            </p>
            <button class="btn btn-primary"
                @click="moreInfoVisible=!moreInfoVisible"
                v-show="infoCardMoreText.length>0" >
                {{ infoCardMoreButtonCaption }}
            </button>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        infoCardCaption: {
            type: String,
            default: 'Caption'
        },

        infoCardTitle: {
            type: String,
            default: ''
        },

        infoCardText: {
            type: String,
            default: ''
        },

        infoCardMoreButtonCaption: {
            type: String,
            default: 'More'
        },

        marginBottom: {
            type: Number,
            default: 0
        },

        bgColor: {
            type: String,
            default: ''
        },

        infoCardMoreText: {
            type: String,
            default: ''
        }
    },

    data() {
        return {
            buttonVisible: false,
            moreInfoVisible: false,

            methods: {
                showMoreClick() {

                }
            }
        }
    }
}

</script>
