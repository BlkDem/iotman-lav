<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary my-4">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Umolab</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" v-bind:class="{ active: isDeviceTypesActive }" @click="onDeviceTypesClick" href="#">Device Types</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-bind:class="{ active: isDevicesActive }" @click="onDevicesClick" href="#">Devices</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" v-bind:class="{ active: isUserDevicesActive }" @click="onUserDevicesClick">User's Devices</a>
                    </li>
                    
                </ul>
                <form class="d-flex">
                    <input class="form-control me-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

</template>

<script>

export default {

    
    data() {
        return {
            isDeviceTypesVisible: false,
            isDevicesVisible: true,
            isUserDevicesVisible: false,
            isDeviceTypesActive: false,
            isDevicesActive: true,
            isUserDevicesActive: false
        }
    },

    created() {
        //this.isDeviceTypesVisible = this.$root.$refs.DeviceTypeRef.getVisible();
        //console.log(this.$root.$refs.DeviceTypeRef);
    },


    methods: {
        onDeviceTypesClick() {
            //this.isDeviceTypesVisible = !this.isDeviceTypesVisible;
            //this.isDeviceTypesActive = this.isDeviceTypesVisible;
            this.isDevicesActive = false;
            this.isUserDevicesActive = false;
            this.isDeviceTypesActive = true;

            this.$root.$refs.DeviceRef.ShowHide(false);
            this.$root.$refs.DeviceUserRef.ShowHide(false);
            this.$root.$refs.DeviceTypeRef.ShowHide(true);
            //this.$root.$refs.DeviceTypeRef.ShowHide(this.isDeviceTypesVisible);
        },

        onDevicesClick() {
            this.isDevicesActive = true;
            this.isUserDevicesActive = false;
            this.isDeviceTypesActive = false;

            this.$root.$refs.DeviceRef.ShowHide(true);
            this.$root.$refs.DeviceUserRef.ShowHide(false);
            this.$root.$refs.DeviceTypeRef.ShowHide(false);
            /*this.isDevicesVisible = !this.isDevicesVisible;
            this.isDevicesActive = this.isDevicesVisible;
            this.$root.$refs.DeviceRef.ShowHide(this.isDevicesVisible);*/
        },

        onUserDevicesClick() {
            this.isDevicesActive = false;
            this.isUserDevicesActive = true;
            this.isDeviceTypesActive = false;

            this.$root.$refs.DeviceRef.ShowHide(false);
            this.$root.$refs.DeviceUserRef.ShowHide(true);
            this.$root.$refs.DeviceTypeRef.ShowHide(false);

            /*this.isUserDevicesVisible = !this.isUserDevicesVisible;
            this.isUserDevicesActive = this.isUserDevicesVisible;
            this.$root.$refs.DeviceUserRef.ShowHide(this.isUserDevicesVisible);*/
        }


    },
}
</script>