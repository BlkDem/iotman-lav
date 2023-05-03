<template>
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div class="toast toastBasic max-width-400px" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000"
            :class="{'hide': !isShow, 'show': isShow}"
        >
            <div class="toast-header text-light bg-info flex-center" :class="{'bg-danger': isError, 'br-warning': isWarning }">
                <strong class="me-auto">{{ header }}</strong>
                <!-- <small>Info</small> -->
                <button type="button" class="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true"></span>
                </button>
            </div>
            <div class="toast-body"> <span v-html="message"></span>
                <!-- {{  }} -->
            </div>
        </div>
    </div>
</template>

<script>

export default {

    name: "Toaster",

    data () {
        return {
             message: '',
             header: '',
             isError: false,
             isWarning: false,
             isShow: false
        }
    },

    methods: {
        showMessage(_header, _message, _errorLevel=0) {
            this.isWarning = false
            this.isError = false

            switch (_errorLevel) {
                case 1:
                    this.isWarning = true
                    break;
                case 2:
                    this.isError = true
                    break;
                default:
                    break;
            }
            this.header = _header;
            this.message = _message;
            this.isShow = true;
            setTimeout(() => {this.isShow = false}, 5000);
        },

        hideToast(){
            // $('.toastBasic').toast('hide');
            this.isShow = false;
        }
    },
}
</script>

<style scoped>
.max-width-400px {
    width: 400px;
}
</style>
