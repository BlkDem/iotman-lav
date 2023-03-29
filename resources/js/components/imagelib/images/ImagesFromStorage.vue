<template>
    <button class="form-control nav-item dropdown mb-4">
        <a class="nav-link dropdown-toggle active a_cap"
            data-bs-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false">
                <!-- {{ themeCaption }}  -->
                <!-- {{ currentImage }} -->
        </a>
        <div class="dropdown-menu theme-dropdown ">
            <a class="dropdown-item a_cap"
                v-for="image in images"
                :key="image.id"
                @click='currentImage=image; changeImage(image.name)'
                >
                <!-- {{ theme }} -->
                <img :src="getImage(image.name)" style="width: 330px;"/>
            </a>
            <!-- <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="changeTheme('slate')">slate</a> -->
        </div>
    </button>
</template>

<script>

import APIConstants from "../../../api/rest_api";
import Pathes from "../../../config/pathes";

export default {

    emits: ['changeImage'],

    props: {
        fileName: {
            type: String
        },

        fieldKey: {
            type: Number
        }
    },

    data() {
        return {
            images: [], //themes list
            currentImage: '', //binded current theme combo caption
            // themeCaption: 'Theme' //binded theme caption preffix
        }
    },

    created() {
        this.readImages() //loading themes list from file themes.js
    },

    methods: {

        getImage(image) {
            return Pathes.storageImagesPath + image
        },

        async readImages() {
            await axios.get(APIConstants.api_images_from_storage)
                    .then(response => {
                        console.log(response)
                        this.images = response.data.data
                    })
        },

        changeImage(new_image) { // changing theme
            this.currentImage = new_image
            this.$emit('changeImage', new_image, this.fieldKey)
        },
    }
}
</script>

<style lang="scss" scoped>
  .theme-dropdown {
    margin-left: -32px;
    max-height: 400px;
    overflow-y: auto;
    width: 370px;
    margin-left: -90px;
  }
</style>
