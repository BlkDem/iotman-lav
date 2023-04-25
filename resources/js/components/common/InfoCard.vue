<template>
    <div class="card"
            :class="{
                'mb-4': marginBottom,
            }"
        >
        <div class="card-header">
            <h5>{{ infoCardCaption }} </h5>
        </div>
        <div class="card-body">
            <h6 class="card-title"><span class="text-info" v-html="markedParse(infoCardTitle)"></span></h6>

            <slot></slot>

            <p class="card-text fade-in my-2" v-if="moreInfoVisible">
                <span v-html="markedParse(infoCardText)"></span>
            </p>

            <button class="btn btn-light btn-sm"
                @click="showMoreClick"
                v-show="infoCardText.length>0" >
                {{ infoCardMoreButtonCaption }}
            </button>
        </div>
    </div>
</template>

<script>

import { marked } from 'marked';

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

        // infoCardMoreButtonCaption: {
        //     type: String,
        //     default: 'More'
        // },

        marginBottom: {
            type: Number,
            default: 0
        },

        // bgColor: {
        //     type: String,
        //     default: ''
        // },

        infoCardMoreText: {
            type: String,
            default: ''
        },

        moreVisible: {
            type: Boolean,
            default: true
        }
    },

    data() {
            return {
                buttonVisible: false,
                moreInfoVisible: false,
                infoCardMoreButtonCaption: 'More'
            }
        },

        mounted() {
            this.moreInfoVisible = this.moreVisible
            this.infoCardMoreButtonCaption = (this.moreInfoVisible) ? 'Less' : 'More'
        },

        methods: {
            showMoreClick() {
                this.moreInfoVisible = !this.moreInfoVisible
                this.infoCardMoreButtonCaption = (this.moreInfoVisible) ? 'Less' : 'More'
            },

            markedParse(text) {
                return marked.parse((text)?text:'');
            }
        }

    }

</script>
