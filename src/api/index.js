import request from '@/utils/request.js'
//添加分类
export function addCategory(data){
    return request({
        data:data,
        url:'/category/addCategory',
        method:'post'
    })
}
//查询分类
export function getCategory(data){
    return request({
        data:data,
        url:'/category/getCategory',
        method:'post'
    })
}