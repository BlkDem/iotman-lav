<template>
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div class="toast hide toastBasic" role="alert" aria-live="assertive" aria-atomic="true" data-delay="3000">
            <div class="toast-header">
                <strong class="me-auto">{{ header }}</strong>
                <!-- <small>Info</small> -->
                <button type="button" class="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true"></span>
                </button>
            </div>
            <div class="toast-body">
                {{ message }}
            </div>
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
