<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-wifi"></i> 设备数据传输
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            当前状态:&nbsp;VDPM{{connectStatusShow}}
        </div>
        <div class="container">
            <el-button @click="connectTimely" :disabled="connectStatus" >开始实时监测</el-button>
            <el-button @click="changeConfig" :disabled="configStatus" >修改配置</el-button>
            <el-button @click="fileTransform" :disabled="fileStatus" >接受板卡文件</el-button>
        </div>
        <div class="container">
            <el-button @click="disconnect" :disabled="disconnectStatus" >关闭实时监测</el-button>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import axios from 'axios';
import { ElMessage } from 'element-plus';
export default {
    setup() {
        let connectStatus = ref(false)
        let configStatus = ref(false)
        let fileStatus = ref(false)
        let disconnectStatus = ref(true)
        let connectStatusShow = ref('未连接')

        const connectTimely = () => {
            axios({
                method:'get',
                url:'http://39.107.238.92:8080/tcp/open',
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
                ElMessage('连接失败')
            })
            setTimeout(() => {
                
                connectStatus.value = true
                configStatus.value = true
                fileStatus.value = true
                disconnectStatus.value = false

                connectStatusShow.value = '实时监测中'
            },2000)
            
        }

        const changeConfig = () => {
            connectStatusShow.value = '修改配置中'
            connectStatus.value = true
            fileStatus.value = true
            disconnectStatus.value = true
            axios({
                method:'get',
                url:'http://39.107.238.92:8080/tcp/changeConfig',
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
                ElMessage('连接失败')
            })
            setTimeout(() => {
                
                connectStatus.value = false
                disconnectStatus.value = false
                fileStatus.value = false

                connectStatusShow.value = '未连接'
            },2000)
            
        }

        const fileTransform = () => {
            connectStatusShow.value = '接受文件中'
            connectStatus.value = true
            configStatus.value = true
            disconnectStatus.value = true
            axios({
                method:'get',
                url:'http://39.107.238.92:8080/tcp/file',
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
                ElMessage('连接失败')
            })
            setTimeout(() => {
                
                connectStatus.value = false
                configStatus.value = false
                disconnectStatus.value = false

                connectStatusShow.value = '未连接'
            },2000)
            
        }

        const disconnect = () => {
            axios({
                method:'get',
                url:'http://39.107.238.92:8080/tcp/close',
            }).then((res) => {
                console.log(res);
                connectStatusShow.value = '未连接'
            }).catch((err) => {
                console.log(err);
            })
            setTimeout(() => {
                configStatus.value = false
                fileStatus.value = false
                connectStatus.value = false
                disconnectStatus.value = true
            },1000)
            
        }

        return {
            disconnect,
            connectTimely,
            changeConfig,
            fileTransform,
            fileStatus,
            configStatus,
            connectStatusShow,
            connectStatus,
            disconnectStatus
        };
  }
};
</script>

<style>
</style>