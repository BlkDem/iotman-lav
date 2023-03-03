<template>
    <select :value="id" class="form-select p-2" @change="setUserID($event.target.value)">
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
                user_id: ""
            }
        },

        props: {
            id: {
                required: true
            }
        },

        created(props) {
            this.getUsers();
            this.user_id = this.id
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
                return this.user_id
            },

            setUserID($id) {
                console.log($id)
                this.user_id = $id
            },

        },
    }

</script>
