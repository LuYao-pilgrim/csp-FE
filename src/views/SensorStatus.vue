<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> VDPM
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    
    <div class="containerVehicleStatus">
      <el-table
        :data="tableData1"
        border
        class="table1"
        ref="multipleTable"
        header-cell-class-name="table-header"
        style="width: 30%"
      >
        <el-table-column
          prop="name"
          label="ID"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
      </el-table>

      <el-table
        :data="tableData2"
        border
        class="table1"
        ref="multipleTable"
        header-cell-class-name="table-header"
        style="width: 30%"
      >
        <el-table-column
          prop="name"
          label="ID"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
      </el-table>

      <el-table
        :data="tableData3"
        border
        class="table"
        ref="multipleTable"
        header-cell-class-name="table-header"
        style="width: 30%"
      >
        <el-table-column
          prop="name"
          label="ID"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
      </el-table>
    </div>

    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> BSMU1
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="containerVehicleStatus">
      <el-table
        :data="tableData4"
        border
        class="table1"
        ref="multipleTable"
        header-cell-class-name="table-header"
        style="width: 30%"
      >
        <el-table-column
          prop="name"
          label="ID"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
      </el-table>

      <el-table
        :data="tableData5"
        border
        class="table1"
        ref="multipleTable"
        header-cell-class-name="table-header"
        style="width: 30%"
      >
        <el-table-column
          prop="name"
          label="ID"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
      </el-table>

      <el-table
        :data="tableData6"
        border
        class="table"
        ref="multipleTable"
        header-cell-class-name="table-header"
        style="width: 30%"
      >
        <el-table-column
          prop="name"
          label="ID"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
      </el-table>
    </div>

    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> BSMU2
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="containerVehicleStatus">
      <el-table
        :data="tableData7"
        border
        class="table1"
        ref="multipleTable"
        header-cell-class-name="table-header"
        style="width: 30%"
      >
        <el-table-column
          prop="name"
          label="ID"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
      </el-table>

      <el-table
        :data="tableData8"
        border
        class="table1"
        ref="multipleTable"
        header-cell-class-name="table-header"
        style="width: 30%"
      >
        <el-table-column
          prop="name"
          label="ID"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
      </el-table>

      <el-table
        :data="tableData9"
        border
        class="table"
        ref="multipleTable"
        header-cell-class-name="table-header"
        style="width: 30%"
      >
        <el-table-column
          prop="name"
          label="ID"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import axios from 'axios'
// import { ElMessage, ElMessageBox } from "element-plus";
// import { fetchData } from "../api/index";

export default {
  setup() {
    let intArray = ref() //int家族
    let floatArray1 = ref() //气压传感器测量值
    let float2 = ref() //手制动机拉力值
    let bsmu1int8Array = ref()
    let bsmu1uint8Array = ref()
    let bsmu1intArray = ref()
    let bsmu2int8Array = ref()
    let bsmu2uint8Array = ref()
    let bsmu2intArray = ref()

    const tableData1 = reactive([
      {
        name: '行程开关M1',
        status: ''
      },
      {
        name: '行程开关M2',
        status: '',
      },
      {
        name: '行程开关M3',
        status: '',
      },
      {
        name: '行程开关M4',
        status: '',
      },
      {
        name: '行程开关M5',
        status: '',
      },
      {
        name: '行程开关M6',
        status: '',
      },
      {
        name: '车体前置集成单元CQ',
        status: '',
      },
      {
        name: '横向车辆加速度传感器',
        status: '',
      },
      {
        name: '纵向车辆加速度传感器',
        status: '',
      },
    ]);
    const tableData2 = reactive([
      {
        name: '压力传感器P1',
        status: '',
      },
      {
        name: '压力传感器P2',
        status: '',
      },
      {
        name: '压力传感器P3',
        status: '',
      },
      {
        name: '压力传感器P4',
        status: '',
      },
      {
        name: '压力传感器P5',
        status: '',
      },
      {
        name: '手制动机拉力传感器TS',
        status: '',
      },
      {
        name: 'VDPM板卡',
        status: '',
      },
      {
        name: 'BSMU板卡1',
        status: '',
      },
      {
        name: 'BSMU板卡2',
        status: '',
      },
    ]);
    const tableData3 = reactive([
      {
        name: '轴端发电机状态',
        status: '',
      },
      {
        name: '轴端蓄电机状态',
        status: '',
      },
      {
        name: '轴端控制器状态',
        status: '',
      },
      {
        name: '电源板',
        status: '',
      },
    ]);
    const tableData4 = reactive([
      {
        name: '复合传感器S11',
        status: '',
      },
      {
        name: '复合传感器S12',
        status: '',
      },
      {
        name: '复合传感器S13',
        status: '',
      },
      {
        name: '复合传感器S14',
        status: '',
      },
      {
        name: '环温BQ11',
        status: '',
      },
    ]);
    const tableData5 = reactive([
      {
        name: '蛇形加速度传感器H11',
        status: '',
      },
      {
        name: '蛇形加速度传感器H12',
        status: '',
      },
      {
        name: '销轴传感器X11',
        status: '',
      },
      {
        name: '销轴传感器X12',
        status: '',
      },
      {
        name: '环温传感器BQ12',
        status: '',
      },
    ]);
    const tableData6 = reactive([
      {
        name: '位移传感器W11',
        status: '',
        value: '',
      },
      {
        name: '位移传感器W12',
        status: '',
      },
      {
        name: '侧架前置集成单元BQ11',
        status: '',
      },
      {
        name: '侧架前置集成单元BQ12',
        status: '',
      },
    ]);
    const tableData7 = reactive([
      {
        name: '复合传感器S21',
        status: '',
      },
      {
        name: '复合传感器S22',
        status: '',
      },
      {
        name: '复合传感器S23',
        status: '',
      },
      {
        name: '复合传感器S24',
        status: '',
      },
      {
        name: '环温BQ21',
        status: '',
      },
    ]);
    const tableData8 = reactive([
      {
        name: '蛇形加速度传感器H21',
        status: '',
      },
      {
        name: '蛇形加速度传感器H22',
        status: '',
      },
      {
        name: '销轴传感器X21',
        status: '',
      },
      {
        name: '销轴传感器X22',
        status: '',
      },
      {
        name: '环温传感器BQ22',
        status: '',
      },
    ]);
    const tableData9 = reactive([
      {
        name: '位移传感器W21',
        status: '',
        value: '',
      },
      {
        name: '位移传感器W22',
        status: '',
      },
      {
        name: '侧架前置集成单元BQ21',
        status: '',
      },
      {
        name: '侧架前置集成单元BQ22',
        status: '',
      },
    ]);
    
    const getData = () => {
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
      tableData1[0].status = intArray.value[0] === 0 ? '正常' : '异常';
      tableData1[1].status = intArray.value[1] === 0 ? '正常' : '异常';
      tableData1[2].status = intArray.value[2] === 0 ? '正常' : '异常';
      tableData1[3].status = intArray.value[3] === 0 ? '正常' : '异常';
      tableData1[4].status = intArray.value[4] === 0 ? '正常' : '异常';
      tableData1[5].status = intArray.value[5] === 0 ? '正常' : '异常';
      tableData1[6].status = intArray.value[56] === 0 ? '正常' : '异常';
      tableData1[7].status = intArray.value[157] === 0 ? '正常' : '异常';
      tableData1[8].status = intArray.value[158] === 0 ? '正常' : '异常';

      tableData2[0].status = intArray.value[18] === 0 ? '正常' : '报警';
      tableData2[1].status = intArray.value[19] === 0 ? '正常' : '报警';
      tableData2[2].status = intArray.value[20] === 0 ? '正常' : '报警';
      tableData2[3].status = intArray.value[21] === 0 ? '正常' : '报警';
      tableData2[4].status = intArray.value[22] === 0 ? '正常' : '报警';
      tableData2[5].status = intArray.value[48] === 0 ? '正常' : '报警';
      tableData2[6].status = intArray.value[58] === 0 ? '正常' : '异常';
      tableData2[7].status = intArray.value[56] === 0 ? '正常' : '异常';
      tableData2[8].status = intArray.value[57] === 0 ? '正常' : '异常';

      tableData3[0].status = intArray.value[70] === 0 ? '正常' : '异常';
      tableData3[1].status = intArray.value[71] === 0 ? '正常' : '异常';
      tableData3[2].status = intArray.value[72] === 0 ? '正常' : '异常';
      tableData3[3].status = intArray.value[59] === 0 ? '正常' : '异常';

      tableData4[0].status = bsmu1uint8Array.value[348] === 0 ? '正常' : '异常';
      tableData4[1].status = bsmu1uint8Array.value[349] === 0 ? '正常' : '异常';
      tableData4[2].status = bsmu1uint8Array.value[350] === 0 ? '正常' : '异常';
      tableData4[3].status = bsmu1uint8Array.value[351] === 0 ? '正常' : '异常';
      tableData4[4].status = bsmu1uint8Array.value[352] === 0 ? '正常' : '异常';

      tableData5[0].status = bsmu1intArray.value[83] === 0 ? '正常' : '异常';
      tableData5[1].status = bsmu1intArray.value[84] === 0 ? '正常' : '异常';
      tableData5[2].status = bsmu1uint8Array.value[384] === 0 ? '正常' : '异常';
      tableData5[3].status = bsmu1uint8Array.value[385] === 0 ? '正常' : '异常';
      tableData5[4].status = bsmu1uint8Array.value[353] === 0 ? '正常' : '异常';

      tableData6[0].status = bsmu1uint8Array.value[373] === 0 ? '正常' : '异常';
      tableData6[1].status = bsmu1uint8Array.value[374] === 0 ? '正常' : '异常';
      tableData6[2].status = bsmu1uint8Array.value[396] === 0 ? '正常' : '异常';
      tableData6[3].status = bsmu1uint8Array.value[397] === 0 ? '正常' : '异常';

      tableData7[0].status = bsmu2uint8Array.value[348] === 0 ? '正常' : '异常';
      tableData7[1].status = bsmu2uint8Array.value[349] === 0 ? '正常' : '异常';
      tableData7[2].status = bsmu2uint8Array.value[350] === 0 ? '正常' : '异常';
      tableData7[3].status = bsmu2uint8Array.value[351] === 0 ? '正常' : '异常';
      tableData7[4].status = bsmu2uint8Array.value[352] === 0 ? '正常' : '异常';

      tableData8[0].status = bsmu2intArray.value[83] === 0 ? '正常' : '异常';
      tableData8[1].status = bsmu2intArray.value[84] === 0 ? '正常' : '异常';
      tableData8[2].status = bsmu2uint8Array.value[384] === 0 ? '正常' : '异常';
      tableData8[3].status = bsmu2uint8Array.value[385] === 0 ? '正常' : '异常';
      tableData8[4].status = bsmu2uint8Array.value[353] === 0 ? '正常' : '异常';

      tableData9[0].status = bsmu2uint8Array.value[373] === 0 ? '正常' : '异常';
      tableData9[1].status = bsmu2uint8Array.value[374] === 0 ? '正常' : '异常';
      tableData9[2].status = bsmu2uint8Array.value[396] === 0 ? '正常' : '异常';
      tableData9[3].status = bsmu2uint8Array.value[397] === 0 ? '正常' : '异常';

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
        changeTable();
      },15000)
    })

    return {
      bsmu1int8Array,
      bsmu1uint8Array,
      bsmu1intArray,
      bsmu2int8Array,
      bsmu2uint8Array,
      bsmu2intArray,
      intArray,
      floatArray1,
      float2,
      tableData1,
      tableData2,
      tableData3,
      tableData4,
      tableData5,
      tableData6,
      tableData7,
      tableData8,
      tableData9,
      getData,
      changeTable,
    };
  },
};
</script>

<style scoped>

.containerVehicleStatus {
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-content: center;
}
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.table {
  font-size: 14px;
}
.table1 {
  margin-right: 3%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}

</style>