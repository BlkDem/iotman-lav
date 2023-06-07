import { mapActions } from 'vuex';
import store from '../../store'
import router from '../../router'

export default {

    methods:{
        ...mapActions({
            signOut:'auth/logout'
        }),

        async logout(){
            await axios.post('/logout')
            await store.dispatch('auth/logout')
            router.push({name:"login"})
        }
    }
}
