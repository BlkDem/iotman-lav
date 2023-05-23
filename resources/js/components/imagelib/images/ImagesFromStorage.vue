<template>
    <button class="form-control nav-item dropdown mb-4">
        <a class="nav-link dropdown-toggle active a_cap"
            data-bs-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false">
        </a>
        <div class="dropdown-menu theme-dropdown ">
            <a class="dropdown-item a_cap"
                v-for="image in images"
                :key="image.id"
                @click='currentImage=image; changeImage(image.name)'
                >
                <img :src="getImage(image.name)" style="width: 330px;"/>
            </a>
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
            images: [],
            currentImage: '',
        }
    },

    created() {
        this.readImages();
    },

    methods: {

        getImage(image) {
            return Pathes.storageImagesPath + image;
        },

        async readImages() {
            await axios.get(APIConstants.api_images_from_storage)
                    .then(response => {
                        console.log(response);
                        this.images = response.data.data;
                    })
        },

        changeImage(new_image) {
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
