<template>
    <select v-model="id" class="form-select p-2">
        <option v-for="(item, key) in items" v-bind:key="key" v-bind:value="item.id">
            {{ item.name }}
        </option>
    </select>

</template>

<script>


import APIConstants from "../../rest_api";

export default {
    name: 'UserCombo',

        data() {
            return {
                items: [],
            }
        },

        props: ["id"],

        created(props) {
            this.getUsers();
        },

        methods: {
            async getUsers() {
                await fetch(APIConstants.api_users_read)
                    .then(response => response.json())
                    .then(response => {
                        this.items = response.data;
                    })
                    .catch(err => console.log(err));
            },

            getUserID() {
                return this.id
            }
        },
    }

</script>
