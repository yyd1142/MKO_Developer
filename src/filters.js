import moment from 'moment'
// 日期格式化
function dateFormat(val) {
    return moment(new Date(val)).format("YYYY-MM-DD HH:mm:ss");
}

export { dateFormat }