<template>
    <select v-model="id" class="form-select">
        <option v-for="(item, key) in items" v-bind:key="key" v-bind:value="item.id">
            {{ item.device_type_name }}
        </option>
    </select>   
    
</template>

<script>

export default {
    name: 'types',

    data (){
        return {
        // Parameters that change depending on the type of dialogue
            title: undefined,
            items: [],
            //id: undefined,
        }
    },

    props: ["id"], 

    setup(props) {
        
    },

    created(props) {        
        this.getDeviceTypes();
    },

    methods: {
        async getDeviceTypes(api_url) {
            api_url = api_url || '/api/device_types/read';
            // console.log(api_url, this.device_type_id);
             await fetch(api_url)
                    .then(response => response.json())
                    .then(response => {                        
                        this.items = response.data;
                        console.log(this.items)
                    })
                    //.then(response => console.log(response))
                    .catch(err => console.log(err));
        },

        getDeviceTypeID() {
            return this.id;
        },

        setId(){
            //this.id=3;
            console.log(this.props, this)
        }

    },
}

</script>