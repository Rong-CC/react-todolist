/*
 * @Description: 
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2023-03-15 14:11:43
 * @LastEditors: rongcheng
 * @LastEditTime: 2023-03-15 14:13:41
 */
const path = require('path')
module.exports = {
    webpack:{
        alias:{
            '@': path.resolve(__dirname,'src')
        }
    }
}