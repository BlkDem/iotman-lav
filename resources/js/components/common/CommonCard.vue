<template>

    <div
        :class="{
            'expanded-fullscreen border-4 border-top rounded-top border-bottom rounded-bottom border-secondary p-2': isFullScreen,
            'card my-3': !isFullScreen
        }"
    >
        <div class="card-header flex-space pb-2">
            <h5 class="w-100 elipsis">
            <a style="text-decoration: none;" data-toggle="collapse"
                :href="'#'+cardId" aria-expanded="true" aria-controls="collapse-example"

                id="heading-example" class="d-block">
                <!-- <i class="fa fa-solid fa-caret-right"></i> -->
                <i class="fa fa-solid fa-caret-down mx-2"></i>
                {{ cardCaption }}
                <span  :class="{'hide': !isAdditionalCaption}" style="overflow-wrap: break-word;">
                    - {{ cardCaptionAdd }}
                </span>
            </a>
            </h5>
            <button class="btn btn-primary btn-sm" @click="switchFullscreenMode">
                <!-- <i class="fa fa-solid fa-caret-down mx-2"></i> -->
                <i
                    :class="{'fa-solid fa-maximize':!isFullScreen, 'fa-solid fa-compress':isFullScreen}"
                ></i>
                <!-- <i class="fa-solid fa-compress"></i> -->
            </button>
        </div>
        <div :id="cardId" class="collapse show" aria-labelledby="heading-example">
            <div class="card-body">
                <!-- <div class="card-caption">


                </div> -->


                <div :class="{'mx-2': margins, 'collapse': isCollapsed}">
                    <slot>Loading...</slot>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import MakeID from '../../helpers/MakeID';

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
            default: false
        }
    },

    data() {
        return {
            cardId: null,

            isFullScreen: false
        }
    },

    created() {
        this.cardId = MakeID.makeId(8, 'card_')
    },

    methods: {

        switchFullscreenMode(){
            this.isFullScreen=!this.isFullScreen;
            window.scrollTo(0, 0);
        }

    }

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

.card-header .fa {
    transition: .3s transform ease-in-out;
}

.card-header .collapsed .fa {
    transform: rotate(-90deg);
}

.elipsis {
    text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.expanded-fullscreen {
    position: absolute;
    top: 65px;
    left: 10px;
    right: 10px;
    bottom: auto;
    /* opacity: 1; */
    background-color: var(--bs-primary);
    z-index: 1000;
}

a {
    text-decoration: none;
}

</style>
