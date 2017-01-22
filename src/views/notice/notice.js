import { Swipe, SwipeItem } from 'mint-ui';

export default {
    data() {
        return {
            
        }
    },
    mounted(){
        console.log(this.$route.query);
    },
    methods: {
        goTest(){
            this.$router.go(-1);
        }
    },
    components: {
        'mt-swipe': Swipe,
        'mt-swipe-item': SwipeItem
    }
}
