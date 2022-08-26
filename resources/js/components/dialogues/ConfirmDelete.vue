<template>
    <div id="modalDelete" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="media-body">
                    <p>{{msg}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['msg'],

        mounted: function(){
            $('#modalDelete').modal('show')
        }
    }
</script>