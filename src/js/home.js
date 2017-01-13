import api from 'api';
import { Toast } from 'mint-ui';
import { dateFormat } from './../filters';
import headerComponent from './../components/header.vue';
export default {
    data() {
        return {
            headerTitle: '实时监测',
            link: '/'
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.alarmRecords('video');
        });
    },
    methods: {
        // 报警记录
        alarmRecords(type) {
            let self = this;
            let params = {
                type: type,
                cycle: 'all'
            };
            api.alarmRecordsData(params).then(result => {
                if (!result) return false
                if (result.code == 0) {
                    
                }
            })
        },
        todo(){
            Toast('提示信息');
        },
        // filters
        dateFormat
    },
    components: {
        headerComponent
    }
}