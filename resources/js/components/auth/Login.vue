<template>

<div style="margin-top: 5.5rem"></div>

<main class="container-xs">
            <div class="container data-in-center">
                <div class="row justify-content-center">
                    <div class="col-xs-8 col-md-10 col-lg-8">

    <div class="card m-4 py-4 border-4 border-top border-bottom rounded-bottom rounded-top border-secondary">
    <div class="mb-4 card-header text-center text-uppercase">

    <div @click="goRoot" style="cursor: pointer;
    display: flex;
    margin-right: 16px;
    margin-left: 4px;
    margin-bottom: -78px;
    margin-top: -18px;
    width: 100px;">
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality;
        fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 600.9 600.9" xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">

            <linearGradient id="linear-gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stop-color="var(--bs-secondary)" />
                <stop offset="50%" stop-color="var(--bs-primary)" />
                <stop offset="100%" stop-color="var(--bs-secondary)" />
            </linearGradient>

            <radialGradient id="radial-gradient">
                <stop offset="60%" stop-color="var(--bs-primary)" />
                <stop offset="100%" stop-color="var(--bs-secondary)" />
            </radialGradient>

            <g id="layer1">
                <metadata id="umolab_icon" />
                <circle class="fil0 str0" cx="300.45" cy="300.45" r="285.17" />
                <path class="fil1 str1"
                    d="M168.64 155.24l65.46 0 0 290.42 -32.95 0 -32.51 -32.51 0 -257.91zm263.62 0l0 257.91 -32.51 32.51 -118.63 0 0 -65.47 85.67 0 0 -224.95 65.47 0z" />
            </g>
        </svg>
    </div>

        <h1>Login</h1>
    </div>

    <div class="card-body">
        <form action="javascript:void(0)" method="post">
                            <div class="col-12" v-if="Object.keys(validationErrors).length > 0">
                                <div class="alert alert-danger">
                                    <ul class="mb-0">
                                        <li v-for="(value, key) in validationErrors" :key="key">{{ value[0] }}</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="email" class="col-md-4 col-form-label text-md-end">Email</label>
                                <div class="col-md-6">
                                    <input type="text" v-model="auth.email" name="email" id="email" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>
                                <div class="col-md-6">
                                    <input type="password" v-model="auth.password" name="password" id="password" class="form-control">
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary w-100 my-4" :disabled="processing" @click.prevent="login" >
                                        {{ processing ? "Please wait" : "Login" }}
                                    </button>
                                </div>
                            </div>


                            <div class="col-12 text-center">
                                <label>Don't have an account?
                                    <router-link :to="{name:'register'}">Register Now!</router-link>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

    </div>
</div>
        </main>

</template>

<script>

import {mapActions} from 'vuex';

export default {

    name:"login",

    data(){
        return {
            auth:{
                email:"",
                password:""
            },
            validationErrors:{},
            processing:false
        }
    },

    methods:{
        ...mapActions({
            signIn:'auth/login'
        }),

        async login(){
            this.processing = true
            await axios.get('/sanctum/csrf-cookie').then((response) => {
                console.log(response)
            })
            await axios.post('/login',this.auth).then(({data})=>{
                console.log(data)
                this.signIn()
            }).catch(({response})=>{
                if(response.status===422){
                    this.validationErrors = response.data.errors
                }else{
                    this.validationErrors = {}
                    alert(response.data.message)
                }
            }).finally(()=>{
                this.processing = false
            })
        },
    }
}

</script>

<style>

.str0 {
    stroke: var(--bs-white);
    stroke-opacity: 0.5;
    stroke-width: 30.55;
    stroke-miterlimit: 22.9256
}

.str1 {
    stroke: var(--bs-white);
    stroke-opacity: 0.5;
    stroke-width: 15.28;
    stroke-linejoin: bevel;
    stroke-miterlimit: 22.9256
}

/* .fil0 {fill:none} */
/* .fil0 {fill:var(--bs-dark);fill-rule:nonzero} */
.fil1 {
    /* fill: var(--bs-dark); */
    fill:url(#linear-gradient);
    /* fill-opacity: 0.1; */
    fill-rule: nonzero
}

.fil0 {
    /* fill: var(--bs-dark); */
    fill:url(#radial-gradient);
    /* fill-opacity: 0.1; */
    fill-rule: nonzero
}

.logo {
    display: flex;
    margin-right: 16px;
    margin-left: 4px;
    width: 36px;
}
</style>
