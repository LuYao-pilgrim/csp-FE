<template>
    <div class="container">
        <div class="plugins-tips">欢迎使用列车智能监测云服务平台</div>
    </div>
    <div class="outer">
      <div class="left">
        <div class="crumbs">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>
              <i class="el-icon-lx-cascades"></i> 传感器分布
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="piccontainer"><img src="../assets/img/sensorDistribute/bogie.png" alt="" width="250" height="200"></div>
        <div class="piccontainer"><img src="../assets/img/sensorDistribute/carbody.png" alt="" width="250" height="200"></div>
        <div class="piccontainer"><img src="../assets/img/sensorDistribute/monitoringBox.png" alt="" width="250" height="200"></div>
        <div class="piccontainer"><img src="../assets/img/sensorDistribute/seneorBogie.png" alt="" width="250" height="200"></div>
        <div class="piccontainer"><img src="../assets/img/sensorDistribute/sensorBrake.png" alt="" width="250" height="200"></div>
        <div class="piccontainer"><img src="../assets/img/sensorDistribute/sensorDoor.png" alt="" width="250" height="200"></div>
      </div>

      <div class="right">
        <div class="crumbs">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>
              <i class="el-icon-lx-cascades"></i> 基础信息
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="containerVehicleStatus">
          
          <el-table
            :data="tableData1"
            border
            class="table1"
            header-cell-class-name="table-header"
            style="width: 100%"
          >
            <el-table-column
              prop="vehicle"
              label="车辆编号"
              align="center"
            ></el-table-column>
            <el-table-column prop="temperature" label="环境温度(℃)" align="center"></el-table-column>
            <el-table-column prop="distance" label="运行里程(km)" align="center"></el-table-column>
            <el-table-column prop="velocity" label="运行速度(km/h)" align="center"></el-table-column>
            <el-table-column prop="signal" label="主机生命信号" align="center"></el-table-column>
            <el-table-column prop="total" label="磁盘总量(GB)" align="center"></el-table-column>
            <el-table-column prop="used" label="已用磁盘量(GB)" align="center"></el-table-column>
          </el-table>
        </div>

        <div class="crumbs">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>
              <i class="el-icon-lx-cascades"></i> 车辆报警信息
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="containerVehicleStatus">
          <el-table
            :data="tableData2"
            border
            class="table1"
            ref="multipleTable"
            header-cell-class-name="table-header"
            style="width: 100%"
          >
            <el-table-column prop="time" label="报警时间" align="center"></el-table-column>
            <el-table-column
              prop="location"
              label="报警位置"
              align="center"
            ></el-table-column>
            <el-table-column prop="type" label="报警类型" align="center"></el-table-column>
            <el-table-column prop="hierarchy" label="报警等级" align="center"></el-table-column>
            <el-table-column prop="event" label="报警事件" align="center"></el-table-column>
          </el-table>
        </div>

        <div class="crumbs">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>
              <i class="el-icon-lx-cascades"></i> 传感器报警信息
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="containerVehicleStatus">
          <el-table
            :data="tableData3"
            border
            class="table1"
            ref="multipleTable"
            header-cell-class-name="table-header"
            style="width: 100%"
          >
            <el-table-column prop="time" label="报警时间" align="center"></el-table-column>
            <el-table-column
              prop="location"
              label="报警位置"
              align="center"
            ></el-table-column>
            <el-table-column prop="event" label="报警事件" align="center"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <div class="beian">
      <el-link href="https://beian.miit.gov.cn" target="_blank">浙ICP备2022014504</el-link>
    </div>
    
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import axios from 'axios'

export default {
    name: "dashboard",
    setup() {
      let coushu = ref(0)
      let double1 = ref()
      let double2 = ref()
      let double3 = ref()
      let basicint8Array = ref()
      let basicuint8Array = ref()
      let bsmu1intArray = ref()
      let intArray = ref() //int家族
      let bsmu1int8Array = ref()
      let bsmu1uint8Array = ref()
      let bsmu2int8Array = ref()
      let bsmu2uint8Array = ref()
      let bsmu2intArray = ref()

      const tableData1 = reactive([
        {
          vehicle: 0,
          temprature: 0,
          weight: 0,
          distance: 0,
          velocity: 0,
          signal: 0,
          total: 0,
          used: 0,
        },
      ]);
      const tableData2 = reactive([
      ]);
      const tableData3 = reactive([
      ]);
      const getData = () => {
        axios({
            method:'get',
            url:'http://39.107.238.92:8080/VDPMbasiccondition',
            responseType:'arraybuffer'
          }).then((res) => {
            console.log(res.data);
            double1.value = new Float64Array(res.data.slice(4,12))
            double2.value = new Float64Array(res.data.slice(24,32))
            double3.value = new Float64Array(res.data.slice(32,40))
            basicint8Array.value = new Int8Array(res.data.slice(4,41));
            basicuint8Array.value = new Uint8Array(res.data.slice(4,41));
          }).catch((err) => {
            console.log(err);
        })

        axios({
        method:'get',
        url:'http://39.107.238.92:8080/VDPMcondition',
        responseType:'arraybuffer'
      }).then((res) => {
        intArray.value = new Int8Array(res.data.slice(4,164));
      }).catch((err) => {
        console.log(err);
      })

      axios({
        method:'get',
        url:'http://39.107.238.92:8080/BSMU1condition',
        responseType:'arraybuffer'
      }).then((res) => {
        bsmu1int8Array.value = new Int8Array(res.data.slice(4,411));
        bsmu1uint8Array.value = new Uint8Array(res.data.slice(4,411));
        bsmu1intArray.value = new Int32Array(res.data.slice(4,408));
      }).catch((err) => {
        console.log(err);
      })

      axios({
        method:'get',
        url:'http://39.107.238.92:8080/BSMU2condition',
        responseType:'arraybuffer'
      }).then((res) => {
        bsmu2int8Array.value = new Int8Array(res.data.slice(4,411));
        bsmu2uint8Array.value = new Uint8Array(res.data.slice(4,411));
        bsmu2intArray.value = new Int32Array(res.data.slice(4,408));
      }).catch((err) => {
        console.log(err);
      })
      };

      const changeTable = () => {
        tableData1[0].signal = basicuint8Array.value[36]
        tableData1[0].distance = double1.value[0]
        tableData1[0].total = double2.value[0].toFixed(2)
        tableData1[0].used = double3.value[0].toFixed(2)

        // 车辆报警信息
        intArray.value[12] === 0 ? coushu = 1 : tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8), location: '车门M1', type: '/', hierarchy: '/', event: '报警'})
        intArray.value[13] === 0 ? coushu = 1 : tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8), location: '车门M2', type: '/', hierarchy: '/', event: '报警'})
        intArray.value[14] === 0 ? coushu = 1 : tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8), location: '车门M3', type: '/', hierarchy: '/', event: '报警'})
        intArray.value[15] === 0 ? coushu = 1 : tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8), location: '车门M4', type: '/', hierarchy: '/', event: '报警'})
        intArray.value[16] === 0 ? coushu = 1 : tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8), location: '车门M5', type: '/', hierarchy: '/', event: '报警'})
        intArray.value[17] === 0 ? coushu = 1 : tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8), location: '车门M6', type: '/', hierarchy: '/', event: '报警'})
        intArray.value[43] === 0 ? coushu = 1 : tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8), location: '制动系统P1', type: '/', hierarchy: '/', event: '报警'})
        intArray.value[44] === 0 ? coushu = 1 : tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8), location: '制动系统P2', type: '/', hierarchy: '/', event: '报警'})
        intArray.value[45] === 0 ? coushu = 1 : tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8), location: '制动系统P3', type: '/', hierarchy: '/', event: '报警'})
        intArray.value[46] === 0 ? coushu = 1 : tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8), location: '制动系统P4', type: '/', hierarchy: '/', event: '报警'})
        intArray.value[47] === 0 ? coushu = 1 : tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8), location: '制动系统P5', type: '/', hierarchy: '/', event: '报警'})
        intArray.value[54] === 0 ? coushu = 1 : tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8), location: '手制动机行车状态', type: '/', hierarchy: '/', event: '报警'})

        // 轴承S11
        if(bsmu1intArray.value[72] === 1 && bsmu1intArray.value[76] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '保持架碰撞外环', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[72] === 2 && bsmu1intArray.value[76] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '保持架碰撞外环', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[72] === 3 && bsmu1intArray.value[76] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '保持架碰撞外环', hierarchy: '2级报警', event: '/'})
        }
        if(bsmu1intArray.value[72] === 1 && bsmu1intArray.value[76] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '保持架碰撞内环', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[72] === 2 && bsmu1intArray.value[76] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '保持架碰撞内环', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[72] === 3 && bsmu1intArray.value[76] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '保持架碰撞内环', hierarchy: '2级报警', event: '/'})
        }
        if(bsmu1intArray.value[72] === 1 && bsmu1intArray.value[76] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '外环故障被滚子冲击', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[72] === 2 && bsmu1intArray.value[76] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '外环故障被滚子冲击', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[72] === 3 && bsmu1intArray.value[76] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '外环故障被滚子冲击', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[72] === 1 && bsmu1intArray.value[76] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '内环故障被滚子冲击', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[72] === 2 && bsmu1intArray.value[76] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '内环故障被滚子冲击', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[72] === 3 && bsmu1intArray.value[76] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '内环故障被滚子冲击', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[72] === 1 && bsmu1intArray.value[76] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '滚子故障冲击单滚道或挡边', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[72] === 2 && bsmu1intArray.value[76] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '滚子故障冲击单滚道或挡边', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[72] === 3 && bsmu1intArray.value[76] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '滚子故障冲击单滚道或挡边', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[72] === 1 && bsmu1intArray.value[76] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '滚子故障冲击双滚道或挡边', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[72] === 2 && bsmu1intArray.value[76] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '滚子故障冲击双滚道或挡边', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[72] === 3 && bsmu1intArray.value[76] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '滚子故障冲击双滚道或挡边', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[72] === 1 && bsmu1intArray.value[76] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '踏面故障', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[72] === 2 && bsmu1intArray.value[76] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '踏面故障', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[72] === 3 && bsmu1intArray.value[76] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '踏面故障', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[72] === 1 && bsmu1intArray.value[76] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[72] === 2 && bsmu1intArray.value[76] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[72] === 3 && bsmu1intArray.value[76] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S11', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '2级报警', event: '/'})
        }

        // 轴承S2
        if(bsmu1intArray.value[73] === 1 && bsmu1intArray.value[77] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '保持架碰撞外环', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[73] === 2 && bsmu1intArray.value[77] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '保持架碰撞外环', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[73] === 3 && bsmu1intArray.value[77] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '保持架碰撞外环', hierarchy: '2级报警', event: '/'})
        }
        if(bsmu1intArray.value[73] === 1 && bsmu1intArray.value[77] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '保持架碰撞内环', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[73] === 2 && bsmu1intArray.value[77] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '保持架碰撞内环', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[73] === 3 && bsmu1intArray.value[77] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '保持架碰撞内环', hierarchy: '2级报警', event: '/'})
        }
        if(bsmu1intArray.value[73] === 1 && bsmu1intArray.value[77] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '外环故障被滚子冲击', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[73] === 2 && bsmu1intArray.value[77] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '外环故障被滚子冲击', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[73] === 3 && bsmu1intArray.value[77] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '外环故障被滚子冲击', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[73] === 1 && bsmu1intArray.value[77] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '内环故障被滚子冲击', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[73] === 2 && bsmu1intArray.value[77] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '内环故障被滚子冲击', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[73] === 3 && bsmu1intArray.value[77] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '内环故障被滚子冲击', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[73] === 1 && bsmu1intArray.value[77] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '滚子故障冲击单滚道或挡边', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[73] === 2 && bsmu1intArray.value[77] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '滚子故障冲击单滚道或挡边', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[73] === 3 && bsmu1intArray.value[77] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '滚子故障冲击单滚道或挡边', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[73] === 1 && bsmu1intArray.value[77] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '滚子故障冲击双滚道或挡边', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[73] === 2 && bsmu1intArray.value[77] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '滚子故障冲击双滚道或挡边', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[73] === 3 && bsmu1intArray.value[77] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '滚子故障冲击双滚道或挡边', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[73] === 1 && bsmu1intArray.value[77] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '踏面故障', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[73] === 2 && bsmu1intArray.value[77] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '踏面故障', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[73] === 3 && bsmu1intArray.value[77] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '踏面故障', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[73] === 1 && bsmu1intArray.value[77] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[73] === 2 && bsmu1intArray.value[77] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[73] === 3 && bsmu1intArray.value[77] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S12', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '2级报警', event: '/'})
        }

        // 轴承S3
        if(bsmu1intArray.value[74] === 1 && bsmu1intArray.value[78] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '保持架碰撞外环', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[74] === 2 && bsmu1intArray.value[78] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '保持架碰撞外环', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[74] === 3 && bsmu1intArray.value[78] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '保持架碰撞外环', hierarchy: '2级报警', event: '/'})
        }
        if(bsmu1intArray.value[74] === 1 && bsmu1intArray.value[78] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '保持架碰撞内环', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[74] === 2 && bsmu1intArray.value[78] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '保持架碰撞内环', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[74] === 3 && bsmu1intArray.value[78] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '保持架碰撞内环', hierarchy: '2级报警', event: '/'})
        }
        if(bsmu1intArray.value[74] === 1 && bsmu1intArray.value[78] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '外环故障被滚子冲击', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[74] === 2 && bsmu1intArray.value[78] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '外环故障被滚子冲击', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[74] === 3 && bsmu1intArray.value[78] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '外环故障被滚子冲击', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[74] === 1 && bsmu1intArray.value[78] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '内环故障被滚子冲击', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[74] === 2 && bsmu1intArray.value[78] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '内环故障被滚子冲击', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[74] === 3 && bsmu1intArray.value[78] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '内环故障被滚子冲击', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[74] === 1 && bsmu1intArray.value[78] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '滚子故障冲击单滚道或挡边', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[74] === 2 && bsmu1intArray.value[78] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '滚子故障冲击单滚道或挡边', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[74] === 3 && bsmu1intArray.value[78] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '滚子故障冲击单滚道或挡边', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[74] === 1 && bsmu1intArray.value[78] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '滚子故障冲击双滚道或挡边', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[74] === 2 && bsmu1intArray.value[78] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '滚子故障冲击双滚道或挡边', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[74] === 3 && bsmu1intArray.value[78] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '滚子故障冲击双滚道或挡边', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[74] === 1 && bsmu1intArray.value[78] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '踏面故障', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[74] === 2 && bsmu1intArray.value[78] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '踏面故障', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[74] === 3 && bsmu1intArray.value[78] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '踏面故障', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[74] === 1 && bsmu1intArray.value[78] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[74] === 2 && bsmu1intArray.value[78] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[74] === 3 && bsmu1intArray.value[78] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S13', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '2级报警', event: '/'})
        }


        // 轴承S4
        if(bsmu1intArray.value[75] === 1 && bsmu1intArray.value[79] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '保持架碰撞外环', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[75] === 2 && bsmu1intArray.value[79] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '保持架碰撞外环', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[75] === 3 && bsmu1intArray.value[79] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '保持架碰撞外环', hierarchy: '2级报警', event: '/'})
        }
        if(bsmu1intArray.value[75] === 1 && bsmu1intArray.value[79] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '保持架碰撞内环', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[75] === 2 && bsmu1intArray.value[79] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '保持架碰撞内环', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[75] === 3 && bsmu1intArray.value[79] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '保持架碰撞内环', hierarchy: '2级报警', event: '/'})
        }
        if(bsmu1intArray.value[75] === 1 && bsmu1intArray.value[79] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '外环故障被滚子冲击', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[75] === 2 && bsmu1intArray.value[79] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '外环故障被滚子冲击', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[75] === 3 && bsmu1intArray.value[79] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '外环故障被滚子冲击', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[75] === 1 && bsmu1intArray.value[79] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '内环故障被滚子冲击', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[75] === 2 && bsmu1intArray.value[79] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '内环故障被滚子冲击', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[75] === 3 && bsmu1intArray.value[79] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '内环故障被滚子冲击', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[75] === 1 && bsmu1intArray.value[79] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '滚子故障冲击单滚道或挡边', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[75] === 2 && bsmu1intArray.value[79] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '滚子故障冲击单滚道或挡边', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[75] === 3 && bsmu1intArray.value[79] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '滚子故障冲击单滚道或挡边', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[75] === 1 && bsmu1intArray.value[79] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '滚子故障冲击双滚道或挡边', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[75] === 2 && bsmu1intArray.value[79] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '滚子故障冲击双滚道或挡边', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[75] === 3 && bsmu1intArray.value[79] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '滚子故障冲击双滚道或挡边', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[75] === 1 && bsmu1intArray.value[79] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '踏面故障', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[75] === 2 && bsmu1intArray.value[79] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '踏面故障', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[75] === 3 && bsmu1intArray.value[79] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '踏面故障', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu1intArray.value[75] === 1 && bsmu1intArray.value[79] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '预警', event: '/'})
        }
        if(bsmu1intArray.value[75] === 2 && bsmu1intArray.value[79] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu1intArray.value[75] === 3 && bsmu1intArray.value[79] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S14', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '2级报警', event: '/'})
        }


        // 轴承S21
        if(bsmu2intArray.value[72] === 1 && bsmu2intArray.value[76] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '保持架碰撞外环', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[72] === 2 && bsmu2intArray.value[76] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '保持架碰撞外环', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[72] === 3 && bsmu2intArray.value[76] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '保持架碰撞外环', hierarchy: '2级报警', event: '/'})
        }
        if(bsmu2intArray.value[72] === 1 && bsmu2intArray.value[76] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '保持架碰撞内环', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[72] === 2 && bsmu2intArray.value[76] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '保持架碰撞内环', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[72] === 3 && bsmu2intArray.value[76] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '保持架碰撞内环', hierarchy: '2级报警', event: '/'})
        }
        if(bsmu2intArray.value[72] === 1 && bsmu2intArray.value[76] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '外环故障被滚子冲击', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[72] === 2 && bsmu2intArray.value[76] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '外环故障被滚子冲击', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[72] === 3 && bsmu2intArray.value[76] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '外环故障被滚子冲击', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[72] === 1 && bsmu2intArray.value[76] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '内环故障被滚子冲击', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[72] === 2 && bsmu2intArray.value[76] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '内环故障被滚子冲击', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[72] === 3 && bsmu2intArray.value[76] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '内环故障被滚子冲击', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[72] === 1 && bsmu2intArray.value[76] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '滚子故障冲击单滚道或挡边', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[72] === 2 && bsmu2intArray.value[76] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '滚子故障冲击单滚道或挡边', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[72] === 3 && bsmu2intArray.value[76] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '滚子故障冲击单滚道或挡边', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[72] === 1 && bsmu2intArray.value[76] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '滚子故障冲击双滚道或挡边', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[72] === 2 && bsmu2intArray.value[76] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '滚子故障冲击双滚道或挡边', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[72] === 3 && bsmu2intArray.value[76] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '滚子故障冲击双滚道或挡边', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[72] === 1 && bsmu2intArray.value[76] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '踏面故障', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[72] === 2 && bsmu2intArray.value[76] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '踏面故障', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[72] === 3 && bsmu2intArray.value[76] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '踏面故障', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[72] === 1 && bsmu2intArray.value[76] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[72] === 2 && bsmu2intArray.value[76] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[72] === 3 && bsmu2intArray.value[76] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S21', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '2级报警', event: '/'})
        }

        // 轴承S2
        if(bsmu2intArray.value[73] === 1 && bsmu2intArray.value[77] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '保持架碰撞外环', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[73] === 2 && bsmu2intArray.value[77] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '保持架碰撞外环', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[73] === 3 && bsmu2intArray.value[77] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '保持架碰撞外环', hierarchy: '2级报警', event: '/'})
        }
        if(bsmu2intArray.value[73] === 1 && bsmu2intArray.value[77] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '保持架碰撞内环', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[73] === 2 && bsmu2intArray.value[77] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '保持架碰撞内环', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[73] === 3 && bsmu2intArray.value[77] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '保持架碰撞内环', hierarchy: '2级报警', event: '/'})
        }
        if(bsmu2intArray.value[73] === 1 && bsmu2intArray.value[77] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '外环故障被滚子冲击', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[73] === 2 && bsmu2intArray.value[77] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '外环故障被滚子冲击', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[73] === 3 && bsmu2intArray.value[77] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '外环故障被滚子冲击', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[73] === 1 && bsmu2intArray.value[77] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '内环故障被滚子冲击', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[73] === 2 && bsmu2intArray.value[77] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '内环故障被滚子冲击', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[73] === 3 && bsmu2intArray.value[77] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '内环故障被滚子冲击', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[73] === 1 && bsmu2intArray.value[77] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '滚子故障冲击单滚道或挡边', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[73] === 2 && bsmu2intArray.value[77] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '滚子故障冲击单滚道或挡边', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[73] === 3 && bsmu2intArray.value[77] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '滚子故障冲击单滚道或挡边', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[73] === 1 && bsmu2intArray.value[77] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '滚子故障冲击双滚道或挡边', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[73] === 2 && bsmu2intArray.value[77] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '滚子故障冲击双滚道或挡边', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[73] === 3 && bsmu2intArray.value[77] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '滚子故障冲击双滚道或挡边', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[73] === 1 && bsmu2intArray.value[77] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '踏面故障', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[73] === 2 && bsmu2intArray.value[77] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '踏面故障', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[73] === 3 && bsmu2intArray.value[77] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '踏面故障', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[73] === 1 && bsmu2intArray.value[77] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[73] === 2 && bsmu2intArray.value[77] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[73] === 3 && bsmu2intArray.value[77] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S22', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '2级报警', event: '/'})
        }

        // 轴承S3
        if(bsmu2intArray.value[74] === 1 && bsmu2intArray.value[78] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '保持架碰撞外环', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[74] === 2 && bsmu2intArray.value[78] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '保持架碰撞外环', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[74] === 3 && bsmu2intArray.value[78] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '保持架碰撞外环', hierarchy: '2级报警', event: '/'})
        }
        if(bsmu2intArray.value[74] === 1 && bsmu2intArray.value[78] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '保持架碰撞内环', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[74] === 2 && bsmu2intArray.value[78] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '保持架碰撞内环', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[74] === 3 && bsmu2intArray.value[78] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '保持架碰撞内环', hierarchy: '2级报警', event: '/'})
        }
        if(bsmu2intArray.value[74] === 1 && bsmu2intArray.value[78] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '外环故障被滚子冲击', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[74] === 2 && bsmu2intArray.value[78] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '外环故障被滚子冲击', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[74] === 3 && bsmu2intArray.value[78] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '外环故障被滚子冲击', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[74] === 1 && bsmu2intArray.value[78] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '内环故障被滚子冲击', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[74] === 2 && bsmu2intArray.value[78] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '内环故障被滚子冲击', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[74] === 3 && bsmu2intArray.value[78] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '内环故障被滚子冲击', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[74] === 1 && bsmu2intArray.value[78] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '滚子故障冲击单滚道或挡边', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[74] === 2 && bsmu2intArray.value[78] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '滚子故障冲击单滚道或挡边', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[74] === 3 && bsmu2intArray.value[78] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '滚子故障冲击单滚道或挡边', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[74] === 1 && bsmu2intArray.value[78] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '滚子故障冲击双滚道或挡边', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[74] === 2 && bsmu2intArray.value[78] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '滚子故障冲击双滚道或挡边', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[74] === 3 && bsmu2intArray.value[78] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '滚子故障冲击双滚道或挡边', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[74] === 1 && bsmu2intArray.value[78] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '踏面故障', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[74] === 2 && bsmu2intArray.value[78] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '踏面故障', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[74] === 3 && bsmu2intArray.value[78] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '踏面故障', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[74] === 1 && bsmu2intArray.value[78] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[74] === 2 && bsmu2intArray.value[78] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[74] === 3 && bsmu2intArray.value[78] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S23', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '2级报警', event: '/'})
        }


        // 轴承S24
        if(bsmu2intArray.value[75] === 1 && bsmu2intArray.value[79] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '保持架碰撞外环', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[75] === 2 && bsmu2intArray.value[79] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '保持架碰撞外环', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[75] === 3 && bsmu2intArray.value[79] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '保持架碰撞外环', hierarchy: '2级报警', event: '/'})
        }
        if(bsmu2intArray.value[75] === 1 && bsmu2intArray.value[79] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '保持架碰撞内环', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[75] === 2 && bsmu2intArray.value[79] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '保持架碰撞内环', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[75] === 3 && bsmu2intArray.value[79] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '保持架碰撞内环', hierarchy: '2级报警', event: '/'})
        }
        if(bsmu2intArray.value[75] === 1 && bsmu2intArray.value[79] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '外环故障被滚子冲击', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[75] === 2 && bsmu2intArray.value[79] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '外环故障被滚子冲击', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[75] === 3 && bsmu2intArray.value[79] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '外环故障被滚子冲击', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[75] === 1 && bsmu2intArray.value[79] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '内环故障被滚子冲击', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[75] === 2 && bsmu2intArray.value[79] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '内环故障被滚子冲击', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[75] === 3 && bsmu2intArray.value[79] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '内环故障被滚子冲击', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[75] === 1 && bsmu2intArray.value[79] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '滚子故障冲击单滚道或挡边', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[75] === 2 && bsmu2intArray.value[79] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '滚子故障冲击单滚道或挡边', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[75] === 3 && bsmu2intArray.value[79] === 5) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '滚子故障冲击单滚道或挡边', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[75] === 1 && bsmu2intArray.value[79] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '滚子故障冲击双滚道或挡边', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[75] === 2 && bsmu2intArray.value[79] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '滚子故障冲击双滚道或挡边', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[75] === 3 && bsmu2intArray.value[79] === 6) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '滚子故障冲击双滚道或挡边', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[75] === 1 && bsmu2intArray.value[79] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '踏面故障', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[75] === 2 && bsmu2intArray.value[79] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '踏面故障', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[75] === 3 && bsmu2intArray.value[79] === 7) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '踏面故障', hierarchy: '2级报警', event: '/'})
        }

        if(bsmu2intArray.value[75] === 1 && bsmu2intArray.value[79] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '预警', event: '/'})
        }
        if(bsmu2intArray.value[75] === 2 && bsmu2intArray.value[79] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '1级报警', event: '/'})
        }
        if(bsmu2intArray.value[75] === 3 && bsmu2intArray.value[79] === 8) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴承S24', type: '与本轴齿轮啮合的其他轴齿轮故障', hierarchy: '2级报警', event: '/'})
        }

        // 蛇行1
        if(bsmu1uint8Array.value[320] === 1 && bsmu1uint8Array.value[321] === 0) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1蛇行模块1', type: '/', hierarchy: '预警', event: '/'})
        }
        if(bsmu1uint8Array.value[320] === 1 && bsmu1uint8Array.value[321] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1蛇行模块1', type: '/', hierarchy: '报警', event: '/'})
        }
        if(bsmu1uint8Array.value[322] === 1 && bsmu1uint8Array.value[323] === 0) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1蛇行模块2', type: '/', hierarchy: '预警', event: '/'})
        }
        if(bsmu1uint8Array.value[322] === 1 && bsmu1uint8Array.value[323] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1蛇行模块2', type: '/', hierarchy: '报警', event: '/'})
        }

        // 蛇行2
        if(bsmu2uint8Array.value[320] === 1 && bsmu2uint8Array.value[321] === 0) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2蛇行模块1', type: '/', hierarchy: '预警', event: '/'})
        }
        if(bsmu2uint8Array.value[320] === 1 && bsmu2uint8Array.value[321] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2蛇行模块1', type: '/', hierarchy: '报警', event: '/'})
        }
        if(bsmu2uint8Array.value[322] === 1 && bsmu2uint8Array.value[323] === 0) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2蛇行模块2', type: '/', hierarchy: '预警', event: '/'})
        }
        if(bsmu2uint8Array.value[322] === 1 && bsmu2uint8Array.value[323] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2蛇行模块2', type: '/', hierarchy: '报警', event: '/'})
        }

        // 轴温状态1
        if(bsmu1uint8Array.value[354] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1轴温S11', type: '/', hierarchy: '温升预警', event: '/'})
        }
        if(bsmu1uint8Array.value[354] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1轴温S11', type: '/', hierarchy: '温升报警', event: '/'})
        }
        if(bsmu1uint8Array.value[354] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1轴温S11', type: '/', hierarchy: '温度预警', event: '/'})
        }
        if(bsmu1uint8Array.value[354] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1轴温S11', type: '/', hierarchy: '温度报警', event: '/'})
        }

        if(bsmu1uint8Array.value[355] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1轴温S12', type: '/', hierarchy: '温升预警', event: '/'})
        }
        if(bsmu1uint8Array.value[355] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1轴温S12', type: '/', hierarchy: '温升报警', event: '/'})
        }
        if(bsmu1uint8Array.value[355] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1轴温S12', type: '/', hierarchy: '温度预警', event: '/'})
        }
        if(bsmu1uint8Array.value[355] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1轴温S12', type: '/', hierarchy: '温度报警', event: '/'})
        }

        if(bsmu1uint8Array.value[356] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1轴温S13', type: '/', hierarchy: '温升预警', event: '/'})
        }
        if(bsmu1uint8Array.value[356] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1轴温S13', type: '/', hierarchy: '温升报警', event: '/'})
        }
        if(bsmu1uint8Array.value[356] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1轴温S13', type: '/', hierarchy: '温度预警', event: '/'})
        }
        if(bsmu1uint8Array.value[356] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1轴温S13', type: '/', hierarchy: '温度报警', event: '/'})
        }

        if(bsmu1uint8Array.value[357] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1轴温S14', type: '/', hierarchy: '温升预警', event: '/'})
        }
        if(bsmu1uint8Array.value[357] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1轴温S14', type: '/', hierarchy: '温升报警', event: '/'})
        }
        if(bsmu1uint8Array.value[357] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1轴温S14', type: '/', hierarchy: '温度预警', event: '/'})
        }
        if(bsmu1uint8Array.value[357] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1轴温S14', type: '/', hierarchy: '温度报警', event: '/'})
        }

        // 轴温状态2
        if(bsmu2uint8Array.value[354] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2轴温S11', type: '/', hierarchy: '温升预警', event: '/'})
        }
        if(bsmu2uint8Array.value[354] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2轴温S11', type: '/', hierarchy: '温升报警', event: '/'})
        }
        if(bsmu2uint8Array.value[354] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2轴温S11', type: '/', hierarchy: '温度预警', event: '/'})
        }
        if(bsmu2uint8Array.value[354] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2轴温S11', type: '/', hierarchy: '温度报警', event: '/'})
        }

        if(bsmu2uint8Array.value[355] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2轴温S12', type: '/', hierarchy: '温升预警', event: '/'})
        }
        if(bsmu2uint8Array.value[355] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2轴温S12', type: '/', hierarchy: '温升报警', event: '/'})
        }
        if(bsmu2uint8Array.value[355] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2轴温S12', type: '/', hierarchy: '温度预警', event: '/'})
        }
        if(bsmu2uint8Array.value[355] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2轴温S12', type: '/', hierarchy: '温度报警', event: '/'})
        }

        if(bsmu2uint8Array.value[356] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2轴温S13', type: '/', hierarchy: '温升预警', event: '/'})
        }
        if(bsmu2uint8Array.value[356] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2轴温S13', type: '/', hierarchy: '温升报警', event: '/'})
        }
        if(bsmu2uint8Array.value[356] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2轴温S13', type: '/', hierarchy: '温度预警', event: '/'})
        }
        if(bsmu2uint8Array.value[356] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2轴温S13', type: '/', hierarchy: '温度报警', event: '/'})
        }

        if(bsmu2uint8Array.value[357] === 1) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2轴温S14', type: '/', hierarchy: '温升预警', event: '/'})
        }
        if(bsmu2uint8Array.value[357] === 2) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2轴温S14', type: '/', hierarchy: '温升报警', event: '/'})
        }
        if(bsmu2uint8Array.value[357] === 3) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2轴温S14', type: '/', hierarchy: '温度预警', event: '/'})
        }
        if(bsmu2uint8Array.value[357] === 4) {
          tableData2.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2轴温S14', type: '/', hierarchy: '温度报警', event: '/'})
        }

        // 传感器报警信息
        intArray.value[0] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '行程开关M1传感器', event: '异常'})
        intArray.value[1] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '行程开关M2传感器', event: '异常'})
        intArray.value[2] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '行程开关M3传感器', event: '异常'})
        intArray.value[3] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '行程开关M4传感器', event: '异常'})
        intArray.value[4] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '行程开关M5传感器', event: '异常'})
        intArray.value[5] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '行程开关M6传感器', event: '异常'})
        intArray.value[56] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '前置集成单元CQ传感器', event: '异常'})
        intArray.value[157] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '横向加速度传感器', event: '异常'})
        intArray.value[158] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '纵向加速度传感器', event: '异常'})

        intArray.value[18] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '压力传感器P1', event: '异常'})
        intArray.value[19] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '压力传感器P2', event: '异常'})
        intArray.value[20] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '压力传感器P3', event: '异常'})
        intArray.value[21] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '压力传感器P4', event: '异常'})
        intArray.value[22] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '压力传感器P5', event: '异常'})
        intArray.value[48] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '手制动机拉力传感器TS', event: '异常'})
        intArray.value[58] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'VDPM板卡传感器', event: '异常'})
        intArray.value[56] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU1板卡传感器', event: '异常'})
        intArray.value[57] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: 'BSMU2板卡传感器', event: '异常'})
        intArray.value[70] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴端发电机传感器', event: '异常'})
        intArray.value[71] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴端蓄电机传感器', event: '异常'})
        intArray.value[72] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '轴端控制器传感器', event: '异常'})
        intArray.value[59] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '电源板传感器', event: '异常'})

        bsmu1uint8Array.value[348] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '复合传感器S11', event: '异常'})
        bsmu1uint8Array.value[349] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '复合传感器S12', event: '异常'})
        bsmu1uint8Array.value[350] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '复合传感器S13', event: '异常'})
        bsmu1uint8Array.value[351] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '复合传感器S14', event: '异常'})
        bsmu1uint8Array.value[352] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '环温传感器BQ11', event: '异常'})

        bsmu1intArray.value[83] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '蛇行加速度传感器H11', event: '异常'})
        bsmu1intArray.value[84] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '蛇行加速度传感器H12', event: '异常'})
        bsmu1uint8Array.value[384] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '销轴传感器X11', event: '异常'})
        bsmu1uint8Array.value[385] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '销轴传感器X12', event: '异常'})
        bsmu1uint8Array.value[353] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '环温传感器BQ12', event: '异常'})

        bsmu1uint8Array.value[373] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '位移传感器W11', event: '异常'})
        bsmu1uint8Array.value[374] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '位移传感器W12', event: '异常'})
        bsmu1uint8Array.value[396] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '侧架前置集成单元传感器BQ11', event: '异常'})
        bsmu1uint8Array.value[397] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '侧架前置集成单元传感器BQ12', event: '异常'})


        bsmu2uint8Array.value[348] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '复合传感器S21', event: '异常'})
        bsmu2uint8Array.value[349] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '复合传感器S22', event: '异常'})
        bsmu2uint8Array.value[350] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '复合传感器S23', event: '异常'})
        bsmu2uint8Array.value[351] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '复合传感器S24', event: '异常'})
        bsmu2uint8Array.value[352] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '环温传感器BQ21', event: '异常'})

        bsmu2intArray.value[83] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '蛇行加速度传感器H21', event: '异常'})
        bsmu2intArray.value[84] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '蛇行加速度传感器H22', event: '异常'})
        bsmu2uint8Array.value[384] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '销轴传感器X21', event: '异常'})
        bsmu2uint8Array.value[385] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '销轴传感器X22', event: '异常'})
        bsmu2uint8Array.value[353] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '环温传感器BQ12', event: '异常'})

        bsmu2uint8Array.value[373] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '位移传感器W21', event: '异常'})
        bsmu2uint8Array.value[374] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '位移传感器W22', event: '异常'})
        bsmu2uint8Array.value[396] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '侧架前置集成单元传感器BQ21', event: '异常'})
        bsmu2uint8Array.value[397] === 0 ? coushu = 1 : tableData3.push({time: (new Date()).toLocaleTimeString('en-US').slice(0,8),location: '侧架前置集成单元传感器BQ22', event: '异常'})
      };


      onMounted(() => {
        getData();
        setTimeout(() => {
          changeTable();
        },500)

        setInterval(() => {
          getData();
        },10000)
        setInterval(() => {
          tableData2.length = 0;
          tableData3.length = 0;
          changeTable();
        },10000)
    })

      return {
        coushu,
        tableData1,
        tableData2,
        tableData3,
        double1,
        double2,
        double3,
        basicuint8Array,
        basicint8Array,
        bsmu1intArray,
        intArray,
        bsmu1int8Array, 
        bsmu1uint8Array,
        bsmu2int8Array, 
        bsmu2uint8Array,
        bsmu2intArray,

        getData,
        changeTable,
      };
  },
};
</script>

<style scoped>
.plugins-tips {
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 40px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.outer {
  display: flex;
  justify-content: start;
  align-content: center;
}
.right {
  /* display: inline-block; */
  width: 45%;
}

.left {
  margin-right: 30px;
  /* display: inline-block; */
  width: 50%;
  
}
.container {
  margin-bottom: 20px;
}

.piccontainer {
  display: inline-block;
  padding: 5px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-right: 10px;
}
.containerVehicleStatus {
  display: flex;
  justify-content: center;
  align-content: center;
}
.table1 {
  margin-bottom: 20px;
}

.circle {
  display: block;
}

.beian {
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}


</style>
