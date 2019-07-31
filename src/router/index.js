import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/caseInput',
                    component: resolve => require(['../components/page/caseInput.vue'], resolve),
                    meta: { title: '案件录入' }
                },
                {
                    path: '/caseShouli',
                    component: resolve => require(['../components/page/caseShouli.vue'], resolve),
                    meta: { title: '案件受理' }
                },
                {
                    path: '/caseList',
                    component: resolve => require(['../components/page/caseList.vue'], resolve),
                    meta: { title: '案件列表' }
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
