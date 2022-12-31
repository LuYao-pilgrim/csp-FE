import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    }, {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: '系统首页'
                },
                component: () => import ("../views/Dashboard.vue")
            }, {
                path: "/beeringSettings1",
                name: "beeringSettings1",
                meta: {
                    title: '轴承设置1'
                },
                component: () => import ("../views/BeeringSettings1.vue")
            }, {
                path: "/beeringSettings2",
                name: "beeringSettings2",
                meta: {
                    title: '轴承设置2'
                },
                component: () => import ("../views/BeeringSettings2.vue")
            }, {
                path: "/BSMUsettings1",
                name: "BSMUsettings1",
                meta: {
                    title: 'BSMU设置1'
                },
                component: () => import ("../views/BSMUsettings1.vue")
            }, {
                path: "/BSMUsettings2",
                name: "BSMUsettings2",
                meta: {
                    title: 'BSMU设置2'
                },
                component: () => import ("../views/BSMUsettings2.vue")
            }, {
                path: "/VDPMsettings",
                name: "VDPMsettings",
                meta: {
                    title: 'VDPM设置'
                },
                component: () => import ("../views/VDPMsettings.vue")
            }, {
                path: "/vehicleStatus",
                name: "vehicleStatus",
                meta: {
                    title: '车辆状态'
                },
                component: () => import ("../views/VehicleStatus.vue")
            }, {
                path: "/sensorStatus",
                name: "sensorStatus",
                meta: {
                    title: '传感器状态'
                },
                component: () => import ("../views/SensorStatus.vue")
            }, {
                path: "/temperatureAnalysis",
                name: "temperatureAnalysis",
                meta: {
                    title: '轴温分析'
                },
                component: () => import ("../views/TemperatureAnalysis.vue")
            }, {
                path: "/environmentTemperatureAnalysis",
                name: "environmentTemperatureAnalysis",
                meta: {
                    title: '环温分析'
                },
                component: () => import ("../views/environmentTemperatureAnalysis.vue")
            }, {
                path: "/rowDraw",
                name: "rowDraw",
                meta: {
                    title: '轴箱振动信号分析'
                },
                component: () => import ("../views/RowDraw.vue")
            }, {
                path: "/rowHunting",
                name: "rowHunting",
                meta: {
                    title: '转向架蛇形信号分析'
                },
                component: () => import ("../views/RowHunting.vue")
            }, {
                path: "/rowBalance",
                name: "rowBalance",
                meta: {
                    title: '转向架蛇形信号分析'
                },
                component: () => import ("../views/RowBalance.vue")
            }, {
                path: '/404',
                name: '404',
                meta: {
                    title: '找不到页面'
                },
                component: () => import ("../views/404.vue")
            }, {
                path: '/403',
                name: '403',
                meta: {
                    title: '没有权限'
                },
                component: () => import ("../views/403.vue")
            }, {
                path: '/connect',
                name: 'connect',
                meta: {
                    title: '设备连接'
                },
                component: () => import ("../views/Connect.vue")
            }, {
                path: '/download',
                name: 'download',
                meta: {
                    title: '数据下载'
                },
                component: () => import ("../views/Download.vue")
            },
        ]
    }, {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import ( /* webpackChunkName: "login" */ "../views/Login.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin'
            ? next()
            : next('/403');
    } else {
        next();
    }
});

export default router;