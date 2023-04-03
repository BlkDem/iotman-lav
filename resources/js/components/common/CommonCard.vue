<template>

    <div class="card my-3">
        <h5 class="card-header">
            <a style="text-decoration: none;" data-toggle="collapse"
                :href="'#'+cardId" aria-expanded="true" aria-controls="collapse-example"

                id="heading-example" class="d-block">
                <!-- <i class="fa fa-solid fa-caret-right"></i> -->
                <i class="fa fa-solid fa-caret-down mx-2"></i>
                {{ cardCaption }}
                <span  :class="{'hide': !isAdditionalCaption}">
                    - {{ cardCaptionAdd }}
                </span>

            </a>
        </h5>
        <div :id="cardId" class="collapse show" aria-labelledby="heading-example">
            <div class="card-body">
                <div class="card-caption">


                </div>


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
            cardId: null
        }
    },

    created() {
        this.cardId = MakeID.makeId(8, 'card_')
        // console.log(this.cardId)
    },

    methods: {

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

a {
    text-decoration: none;
}

</style>
