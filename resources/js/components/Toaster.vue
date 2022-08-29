<template>
  <div class="toast fade hide toastBasic" style="z-index: 99; top: 100px; right: 5%; width: 300px; position: absolute;" 
    id="toastBasic1" role="alert" aria-live="assertive" aria-atomic="true" data-delay="3000">
    <div id="toast-header" class="toast-header row">
        <div class="col-sm-10 col-xs-10 col-lg-10"> 
            <i class="fa fa-info-circle" style="margin-right: 10px;"></i>
            <strong class="mr-auto">{{ header }}</strong>
        </div>
        <div class="col-sm-2 col-xs-2 col-lg-2">
            <button class="btn btn-danger ml-2 mb-1 close" type="button" data-dismiss="toast" aria-label="Close" @click="hideToast">
                <span aria-hidden="true">×</span></button>
        </div>
        <div class="toast-body">{{ message }}</div>
    </div>
    
</div>
</template>

<script>
export default {
    data () {
        return {
            message: '',
            header: ''
        }
    },

    methods: {
        setMessage(_header, _message) {
            this.header = _header;
            this.message = _message;
            $('.toastBasic').toast('show');
        },

        hideToast(){
            $('.toastBasic').toast('hide');
        }
    },



}
</script>

<style>

</style>