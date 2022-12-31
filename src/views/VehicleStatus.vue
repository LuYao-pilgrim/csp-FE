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
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
        <el-table-column prop="value" label="测量值" align="center"></el-table-column>
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
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
        <el-table-column prop="value" label="测量值" align="center"></el-table-column>
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
        <el-table-column prop="value" label="测量值" align="center"></el-table-column>
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
        <el-table-column prop="value" label="测量值" align="center"></el-table-column>
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
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
        <el-table-column prop="value" label="测量值" align="center"></el-table-column>
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
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
        <el-table-column prop="value" label="测量值" align="center"></el-table-column>
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
        <el-table-column prop="value" label="测量值" align="center"></el-table-column>
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
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
        <el-table-column prop="value" label="测量值" align="center"></el-table-column>
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
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
        <el-table-column prop="value" label="测量值" align="center"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import axios from 'axios'
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    let intArray = ref() //int家族
    let floatArray1 = ref() //气压传感器测量值
    let float2 = ref() //手制动机拉力值
    let float3 = ref() //车体总载荷
    let double1 = ref() // 运行品质与平稳性测量值

    let bsmu1int32Array = ref()
    let bsmu1int8Array = ref()
    let bsmu1uint8Array = ref()
    let bsmu1float1 = ref() // h1峰值与RMS值
    let bsmu1float2 = ref() // 轴温
    let bsmu1float3 = ref() // w1,w2测量值
    let bsmu1float4 = ref() // x1,x2测量值
    let bsmu1float5 = ref() // 环温

    let bsmu2int32Array = ref()
    let bsmu2int8Array = ref()
    let bsmu2uint8Array = ref()
    let bsmu2float1 = ref() // h1峰值与RMS值
    let bsmu2float2 = ref() // 轴温
    let bsmu2float3 = ref() // w1,w2测量值
    let bsmu2float4 = ref() // x1,x2测量值
    let bsmu2float5 = ref() // 环温

    const tableData1 = reactive([
      {
        name: '车门M1',
        status: '',
        value: '',
      },
      {
        name: '车门M2',
        status: '',
        value: '',
      },
      {
        name: '车门M3',
        status: '',
        value: '',
      },
      {
        name: '车门M4',
        status: '',
        value: '',
      },
      {
        name: '车门M5',
        status: '',
        value: '',
      },
      {
        name: '车门M6',
        status: '',
        value: '',
      },
    ]);
    const tableData2 = reactive([
      {
        name: '制动系统压力P1',
        status: '',
        value: '',
      },
      {
        name: '制动系统压力P2',
        status: '',
        value: '',
      },
      {
        name: '制动系统压力P3',
        status: '',
        value: '',
      },
      {
        name: '制动系统压力P4',
        status: '',
        value: '',
      },
      {
        name: '制动系统压力P5',
        status: '',
        value: '',
      },
      {
        name: '手制动机',
        status: '',
        value: '',
      },
    ]);
    const tableData3 = reactive([
      {
        name: '车辆横向运行品质',
        status: '',
        value: '',
      },
      {
        name: '车辆垂向运行品质',
        status: '',
        value: '',
      },
      {
        name: '车辆横向平稳性',
        status: '',
        value: '',
      },
      {
        name: '车辆垂向平稳性',
        status: '',
        value: '',
      },
      {
        name: '车体总载荷',
        status: '/',
        value: '',
      },
      {
        name: '车体前后偏载状态',
        status: '',
        value: '/',
      },
      {
        name: '车体左右偏载状态',
        status: '',
        value: '/',
      },
    ]);
    const tableData4 = reactive([
      {
        name: '轴承温度S11',
        status: '',
        value: '',
      },
      {
        name: '轴承温度S12',
        status: '',
        value: '',
      },
      {
        name: '轴承温度S13',
        status: '',
        value: '',
      },
      {
        name: '轴承温度S14',
        status: '',
        value: '',
      },
      {
        name: '环温BQ11',
        status: '/',
        value: '',
      },
      {
        name: '环温BQ12',
        status: '/',
        value: '',
      },
      {
        name: '车体载荷W11(t)',
        status: '/',
        value: '',
      },
    ]);
    const tableData5 = reactive([
      {
        name: '轴承振动S11',
        status: '',
        value: '',
      },
      {
        name: '轴承振动S12',
        status: '',
        value: '',
      },
      {
        name: '轴承振动S13',
        status: '',
        value: '',
      },
      {
        name: '轴承振动S14',
        status: '',
        value: '',
      },
      {
        name: '转向架蛇行H11',
        status: '',
        value: '',
      },
      {
        name: '转向架蛇行H12',
        status: '',
        value: '',
      },
      {
        name: '车体载荷W12(t)',
        status: '/',
        value: '',
      },
    ]);
    const tableData6 = reactive([
      {
        name: '踏面S11',
        status: '',
        value: '',
      },
      {
        name: '踏面S12',
        status: '',
        value: '',
      },
      {
        name: '踏面S13',
        status: '',
        value: '',
      },
      {
        name: '踏面S14',
        status: '',
        value: '',
      },
      {
        name: '闸瓦与踏面接触X11',
        status: '',
        value: '',
      },
      {
        name: '闸瓦与踏面接触X12',
        status: '',
        value: '',
      },
    ]);
    const tableData7 = reactive([
      {
        name: '轴承温度S21',
        status: '',
        value: '',
      },
      {
        name: '轴承温度S22',
        status: '',
        value: '',
      },
      {
        name: '轴承温度S23',
        status: '',
        value: '',
      },
      {
        name: '轴承温度S24',
        status: '',
        value: '',
      },
      {
        name: '环温BQ21',
        status: '/',
        value: '',
      },
      {
        name: '环温BQ22',
        status: '/',
        value: '',
      },
      {
        name: '车体载荷W21(t)',
        status: '/',
        value: '',
      },
    ]);
    const tableData8 = reactive([
      {
        name: '轴承振动S21',
        status: '',
        value: '',
      },
      {
        name: '轴承振动S22',
        status: '',
        value: '',
      },
      {
        name: '轴承振动S23',
        status: '',
        value: '',
      },
      {
        name: '轴承振动S24',
        status: '',
        value: '',
      },
      {
        name: '转向架蛇行H21',
        status: '',
        value: '',
      },
      {
        name: '转向架蛇行H22',
        status: '',
        value: '',
      },
      {
        name: '车体载荷W22(t)',
        status: '/',
        value: '',
      },
    ]);
    const tableData9 = reactive([
      {
        name: '踏面S21',
        status: '',
        value: '',
      },
      {
        name: '踏面S22',
        status: '',
        value: '',
      },
      {
        name: '踏面S23',
        status: '',
        value: '',
      },
      {
        name: '踏面S24',
        status: '',
        value: '',
      },
      {
        name: '闸瓦与踏面接触X21',
        status: '',
        value: '',
      },
      {
        name: '闸瓦与踏面接触X22',
        status: '',
        value: '',
      },
    ]);
    
    const getData = () => {
      axios({
        method:'get',
        url:'http://39.107.238.92:8080/VDPMcondition',
        responseType:'arraybuffer'
      }).then((res) => {
        console.log(res.data);
        intArray.value = new Int8Array(res.data.slice(4,164));
        floatArray1.value = new Float32Array(res.data.slice(27,47));
        float2.value = new Float32Array(res.data.slice(53,57));
        float3.value = new Float32Array(res.data.slice(64,68))
        double1.value = new Float64Array(res.data.slice(129,161))
        
      }).catch((err) => {
        console.log(err);
      })

      axios({
        method:'get',
        url:'http://39.107.238.92:8080/BSMU1condition',
        responseType:'arraybuffer'
      }).then((res) => {
        console.log(res.data);
        bsmu1int32Array.value = new Int32Array(res.data.slice(4,408));
        bsmu1int8Array.value = new Int8Array(res.data.slice(4,411));
        bsmu1uint8Array.value = new Uint8Array(res.data.slice(4,411));
        bsmu1float1.value = new Float32Array(res.data.slice(324,340));
        bsmu1float2.value = new Float32Array(res.data.slice(362,378));
        bsmu1float3.value = new Float32Array(res.data.slice(380,388));
        bsmu1float4.value = new Float32Array(res.data.slice(392,400));
        bsmu1float5.value = new Float32Array(res.data.slice(402,410));
      }).catch((err) => {
        console.log(err);
      })

      axios({
        method:'get',
        url:'http://39.107.238.92:8080/BSMU2condition',
        responseType:'arraybuffer'
      }).then((res) => {
        console.log(res.data);
        bsmu2int32Array.value = new Int32Array(res.data.slice(4,408));
        bsmu2int8Array.value = new Int8Array(res.data.slice(4,411));
        bsmu2uint8Array.value = new Uint8Array(res.data.slice(4,411));
        bsmu2float1.value = new Float32Array(res.data.slice(324,340));
        bsmu2float2.value = new Float32Array(res.data.slice(362,378));
        bsmu2float3.value = new Float32Array(res.data.slice(380,388));
        bsmu2float4.value = new Float32Array(res.data.slice(392,400));
        bsmu2float5.value = new Float32Array(res.data.slice(402,410));
      }).catch((err) => {
        console.log(err);
      })
    };

    const changeTable = () => {
      // 车门
      tableData1[0].status = intArray.value[12] === 0 ? '正常' : '报警';
      tableData1[1].status = intArray.value[13] === 0 ? '正常' : '报警';
      tableData1[2].status = intArray.value[14] === 0 ? '正常' : '报警';
      tableData1[3].status = intArray.value[15] === 0 ? '正常' : '报警';
      tableData1[4].status = intArray.value[16] === 0 ? '正常' : '报警';
      tableData1[5].status = intArray.value[17] === 0 ? '正常' : '报警';

      tableData1[0].value = intArray.value[6] === 0 ? '开' : '闭';
      tableData1[1].value = intArray.value[7] === 0 ? '开' : '闭';
      tableData1[2].value = intArray.value[8] === 0 ? '开' : '闭';
      tableData1[3].value = intArray.value[9] === 0 ? '开' : '闭';
      tableData1[4].value = intArray.value[10] === 0 ? '开' : '闭';
      tableData1[5].value = intArray.value[11] === 0 ? '开' : '闭';

      // 制动
      tableData2[0].status = intArray.value[43] === 0 ? '正常' : '报警';
      tableData2[1].status = intArray.value[44] === 0 ? '正常' : '报警';
      tableData2[2].status = intArray.value[45] === 0 ? '正常' : '报警';
      tableData2[3].status = intArray.value[46] === 0 ? '正常' : '报警';
      tableData2[4].status = intArray.value[47] === 0 ? '正常' : '报警';
      tableData2[0].value = floatArray1.value[0]+' kpa';
      tableData2[1].value = floatArray1.value[1]+' kpa';
      tableData2[2].value = floatArray1.value[2]+' kpa';
      tableData2[3].value = floatArray1.value[3]+' kpa';
      tableData2[4].value = floatArray1.value[4]+' kpa';
      tableData2[5].status = intArray.value[53] === 0 ? '缓解' : '制动';
      tableData2[5].value = float2.value[0]+' kN';

      tableData3[0].status = chargeBalance(intArray.value[123]);
      tableData3[1].status = chargeBalance(intArray.value[124]);
      tableData3[2].status = intArray.value[121] === 0 ? '优' : '差';
      tableData3[3].status = intArray.value[122] === 0 ? '优' : '差';
      tableData3[0].value = double1.value[2]+'';
      tableData3[1].value = double1.value[3]+'';
      tableData3[2].value = double1.value[0]+'';
      tableData3[3].value = double1.value[1]+'';
      tableData3[4].value = float3.value[0]+' t';
      tableData3[5].status = chargeFrontBackWeight(intArray.value[65]); 
      tableData3[6].status = chargeLeftRightWeight(intArray.value[66]); 

      // 轴温，环温
      tableData4[0].status = chargeTempreture(bsmu1uint8Array.value[354]);
      tableData4[1].status = chargeTempreture(bsmu1uint8Array.value[355]);
      tableData4[2].status = chargeTempreture(bsmu1uint8Array.value[356]);
      tableData4[3].status = chargeTempreture(bsmu1uint8Array.value[357]);
      tableData4[0].value = bsmu1float2.value[0].toFixed(2)+'°C';
      tableData4[1].value = bsmu1float2.value[1].toFixed(2)+'°C';
      tableData4[2].value = bsmu1float2.value[2].toFixed(2)+'°C';
      tableData4[3].value = bsmu1float2.value[3].toFixed(2)+'°C';
      tableData4[4].value = bsmu1float5.value[0].toFixed(2)+'°C';
      tableData4[5].value = bsmu1float5.value[1].toFixed(2)+'°C';

      // 载荷
      tableData4[6].value = bsmu1float3.value[0].toFixed(2)+' t';
      tableData5[6].value = bsmu1float3.value[1].toFixed(2)+' t';

      tableData7[0].status = chargeTempreture(bsmu2uint8Array.value[354]);
      tableData7[1].status = chargeTempreture(bsmu2uint8Array.value[355]);
      tableData7[2].status = chargeTempreture(bsmu2uint8Array.value[356]);
      tableData7[3].status = chargeTempreture(bsmu2uint8Array.value[357]);
      tableData7[0].value = bsmu2float2.value[0].toFixed(2)+'°C';
      tableData7[1].value = bsmu2float2.value[1].toFixed(2)+'°C';
      tableData7[2].value = bsmu2float2.value[2].toFixed(2)+'°C';
      tableData7[3].value = bsmu2float2.value[3].toFixed(2)+'°C';
      tableData7[4].value = bsmu2float5.value[0].toFixed(2)+'°C';
      tableData7[5].value = bsmu2float5.value[1].toFixed(2)+'°C';

      tableData7[6].value = bsmu2float3.value[0].toFixed(2)+' t';
      tableData8[6].value = bsmu2float3.value[1].toFixed(2)+' t';

      // 销轴
      tableData6[4].status = bsmu1uint8Array.value[384] === 0 ? '缓解' : '制动'
      tableData6[5].status = bsmu1uint8Array.value[385] === 0 ? '缓解' : '制动'
      tableData6[4].value = bsmu1float4.value[0]+' kN'
      tableData6[5].value = bsmu1float4.value[1]+' kN'

      tableData9[4].status = bsmu2uint8Array.value[384] === 0 ? '缓解' : '制动'
      tableData9[5].status = bsmu2uint8Array.value[385] === 0 ? '缓解' : '制动'
      tableData9[4].value = bsmu2float4.value[0]+' kN'
      tableData9[5].value = bsmu2float4.value[1]+' kN'

      // 蛇行
      tableData5[4].status = snackStatus(bsmu1uint8Array.value[320],bsmu1uint8Array.value[321])
      tableData5[5].status = snackStatus(bsmu1uint8Array.value[322],bsmu1uint8Array.value[323])
      tableData8[4].status = snackStatus(bsmu2uint8Array.value[320],bsmu1uint8Array.value[321])
      tableData8[5].status = snackStatus(bsmu2uint8Array.value[322],bsmu1uint8Array.value[323])

      tableData5[4].value = 'H1峰值:' + bsmu1float1.value[0].toFixed(3) + '\nRMS值:' + bsmu1float1.value[1].toFixed(3)
      tableData5[5].value = 'H2峰值:' + bsmu1float1.value[2].toFixed(3) + '\nRMS值:' + bsmu1float1.value[3].toFixed(3)
      tableData8[4].value = 'H1峰值:' + bsmu2float1.value[0].toFixed(3) + '\nRMS值:' + bsmu2float1.value[1].toFixed(3)
      tableData8[5].value = 'H2峰值:' + bsmu2float1.value[2].toFixed(3) + '\nRMS值:' + bsmu2float1.value[3].toFixed(3)

      //轴承振动
      tableData5[0].status = bearStatus(bsmu1int32Array.value[76])
      tableData5[1].status = bearStatus(bsmu1int32Array.value[77])
      tableData5[2].status = bearStatus(bsmu1int32Array.value[78])
      tableData5[3].status = bearStatus(bsmu1int32Array.value[79])

      tableData5[0].value = bsmu1bear1Value(bsmu1int32Array.value[76])
      tableData5[1].value = bsmu1bear2Value(bsmu1int32Array.value[77])
      tableData5[2].value = bsmu1bear3Value(bsmu1int32Array.value[78])
      tableData5[3].value = bsmu1bear4Value(bsmu1int32Array.value[79])

      tableData8[0].status = bearStatus(bsmu2int32Array.value[76])
      tableData8[1].status = bearStatus(bsmu2int32Array.value[77])
      tableData8[2].status = bearStatus(bsmu2int32Array.value[78])
      tableData8[3].status = bearStatus(bsmu2int32Array.value[79])

      tableData8[0].value = bsmu2bear1Value(bsmu2int32Array.value[76])
      tableData8[1].value = bsmu2bear2Value(bsmu2int32Array.value[77])
      tableData8[2].value = bsmu2bear3Value(bsmu2int32Array.value[78])
      tableData8[3].value = bsmu2bear4Value(bsmu2int32Array.value[79])

      //踏面
      tableData6[0].status = bsmu1int32Array.value[76] === 7 ? '故障' : '正常'
      tableData6[1].status = bsmu1int32Array.value[77] === 7 ? '故障' : '正常'
      tableData6[2].status = bsmu1int32Array.value[78] === 7 ? '故障' : '正常'
      tableData6[3].status = bsmu1int32Array.value[79] === 7 ? '故障' : '正常'

      tableData6[0].value = bsmu1int32Array.value[76] === 7 ? 'SV值:' + bsmu1int32Array.value[14].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[46].toFixed(3) : '无故障值'
      tableData6[1].value = bsmu1int32Array.value[77] === 7 ? 'SV值:' + bsmu1int32Array.value[22].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[54].toFixed(3) : '无故障值'
      tableData6[2].value = bsmu1int32Array.value[78] === 7 ? 'SV值:' + bsmu1int32Array.value[30].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[62].toFixed(3) : '无故障值'
      tableData6[3].value = bsmu1int32Array.value[79] === 7 ? 'SV值:' + bsmu1int32Array.value[38].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[70].toFixed(3) : '无故障值'

      tableData9[0].status = bsmu2int32Array.value[76] === 7 ? '故障' : '正常'
      tableData9[1].status = bsmu2int32Array.value[77] === 7 ? '故障' : '正常'
      tableData9[2].status = bsmu2int32Array.value[78] === 7 ? '故障' : '正常'
      tableData9[3].status = bsmu2int32Array.value[79] === 7 ? '故障' : '正常'

      tableData9[0].value = bsmu2int32Array.value[76] === 7 ? 'SV值:' + bsmu2int32Array.value[14].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[46].toFixed(3) : '无故障值'
      tableData9[1].value = bsmu2int32Array.value[77] === 7 ? 'SV值:' + bsmu2int32Array.value[22].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[54].toFixed(3) : '无故障值'
      tableData9[2].value = bsmu2int32Array.value[78] === 7 ? 'SV值:' + bsmu2int32Array.value[30].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[62].toFixed(3) : '无故障值'
      tableData9[3].value = bsmu2int32Array.value[79] === 7 ? 'SV值:' + bsmu2int32Array.value[38].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[70].toFixed(3) : '无故障值'
    };

    const snackStatus = (x,y) => {
      if(x === 0 && y === 0) {
        return '正常'
      } else if (x === 1 && y === 0) {
        return '蛇行预警'
      } else if (x === 1 && y === 1) {
        return '蛇行报警'
      } else {
        return '异常数据'
      }
    };

    const bearStatus = (x) => {
      if(x === 0) {
        return '正常'
      } else if (x === 1) {
        return '保持架碰撞外环'
      } else if (x === 2) {
        return '保持架碰撞内环'
      } else if (x === 3) {
        return '外环故障被滚子冲击'
      } else if (x === 4) {
        return '内环故障被滚子冲击'
      } else if (x === 5) {
        return '滚子故障冲击单滚道或挡边'
      } else if (x === 6) {
        return '滚子故障冲击双滚道或挡边'
      } else if (x === 7) {
        return '踏面故障'
      } else if (x === 8) {
        return '与本轴齿轮啮合的其他轴齿轮故障'
      }

      
    }

    const bsmu1bear1Value = (x) => {
        if(x === 0) {
          return '无故障测量值'
        } else if (x === 1) {
          return 'SV值:' + bsmu1int32Array.value[8].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[40].toFixed(3)
        } else if (x === 2) {
          return 'SV值:' + bsmu1int32Array.value[9].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[41].toFixed(3)
        } else if (x === 3) {
          return 'SV值:' + bsmu1int32Array.value[10].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[42].toFixed(3)
        } else if (x === 4) {
          return 'SV值:' + bsmu1int32Array.value[11].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[43].toFixed(3)
        } else if (x === 5) {
          return 'SV值:' + bsmu1int32Array.value[12].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[44].toFixed(3)
        } else if (x === 6) {
          return 'SV值:' + bsmu1int32Array.value[13].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[45].toFixed(3)
        } else if (x === 7) {
          return '/'
        } else if (x === 8) {
          return 'SV值:' + bsmu1int32Array.value[15].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[47].toFixed(3)
        }
      }
    const bsmu1bear2Value = (x) => {
      if(x === 0) {
        return '无故障测量值'
      } else if (x === 1) {
        return 'SV值:' + bsmu1int32Array.value[16].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[48].toFixed(3)
      } else if (x === 2) {
        return 'SV值:' + bsmu1int32Array.value[17].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[49].toFixed(3)
      } else if (x === 3) {
        return 'SV值:' + bsmu1int32Array.value[18].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[50].toFixed(3)
      } else if (x === 4) {
        return 'SV值:' + bsmu1int32Array.value[19].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[51].toFixed(3)
      } else if (x === 5) {
        return 'SV值:' + bsmu1int32Array.value[20].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[52].toFixed(3)
      } else if (x === 6) {
        return 'SV值:' + bsmu1int32Array.value[21].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[53].toFixed(3)
      } else if (x === 7) {
        return '/'
      } else if (x === 8) {
        return 'SV值:' + bsmu1int32Array.value[23].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[55].toFixed(3)
      }
    }
    const bsmu1bear3Value = (x) => {
      if(x === 0) {
        return '无故障测量值'
      } else if (x === 1) {
        return 'SV值:' + bsmu1int32Array.value[24].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[56].toFixed(3)
      } else if (x === 2) {
        return 'SV值:' + bsmu1int32Array.value[25].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[57].toFixed(3)
      } else if (x === 3) {
        return 'SV值:' + bsmu1int32Array.value[26].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[58].toFixed(3)
      } else if (x === 4) {
        return 'SV值:' + bsmu1int32Array.value[27].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[59].toFixed(3)
      } else if (x === 5) {
        return 'SV值:' + bsmu1int32Array.value[28].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[60].toFixed(3)
      } else if (x === 6) {
        return 'SV值:' + bsmu1int32Array.value[29].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[61].toFixed(3)
      } else if (x === 7) {
        return '/'
      } else if (x === 8) {
        return 'SV值:' + bsmu1int32Array.value[31].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[63].toFixed(3)
      }
    }
    const bsmu1bear4Value = (x) => {
      if(x === 0) {
        return '无故障测量值'
      } else if (x === 1) {
        return 'SV值:' + bsmu1int32Array.value[32].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[64].toFixed(3)
      } else if (x === 2) {
        return 'SV值:' + bsmu1int32Array.value[33].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[65].toFixed(3)
      } else if (x === 3) {
        return 'SV值:' + bsmu1int32Array.value[34].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[66].toFixed(3)
      } else if (x === 4) {
        return 'SV值:' + bsmu1int32Array.value[35].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[67].toFixed(3)
      } else if (x === 5) {
        return 'SV值:' + bsmu1int32Array.value[36].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[68].toFixed(3)
      } else if (x === 6) {
        return 'SV值:' + bsmu1int32Array.value[37].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[69].toFixed(3)
      } else if (x === 7) {
        return '/'
      } else if (x === 8) {
        return 'SV值:' + bsmu1int32Array.value[39].toFixed(3) + '\nDB值:' + bsmu1int32Array.value[71].toFixed(3)
      }
    }

    const bsmu2bear1Value = (x) => {
        if(x === 0) {
          return '无故障测量值'
        } else if (x === 1) {
          return 'SV值:' + bsmu2int32Array.value[8].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[40].toFixed(3)
        } else if (x === 2) {
          return 'SV值:' + bsmu2int32Array.value[9].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[41].toFixed(3)
        } else if (x === 3) {
          return 'SV值:' + bsmu2int32Array.value[10].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[42].toFixed(3)
        } else if (x === 4) {
          return 'SV值:' + bsmu2int32Array.value[11].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[43].toFixed(3)
        } else if (x === 5) {
          return 'SV值:' + bsmu2int32Array.value[12].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[44].toFixed(3)
        } else if (x === 6) {
          return 'SV值:' + bsmu2int32Array.value[13].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[45].toFixed(3)
        } else if (x === 7) {
          return '/'
        } else if (x === 8) {
          return 'SV值:' + bsmu2int32Array.value[15].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[47].toFixed(3)
        }
      }
    const bsmu2bear2Value = (x) => {
      if(x === 0) {
        return '无故障测量值'
      } else if (x === 1) {
        return 'SV值:' + bsmu2int32Array.value[16].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[48].toFixed(3)
      } else if (x === 2) {
        return 'SV值:' + bsmu2int32Array.value[17].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[49].toFixed(3)
      } else if (x === 3) {
        return 'SV值:' + bsmu2int32Array.value[18].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[50].toFixed(3)
      } else if (x === 4) {
        return 'SV值:' + bsmu2int32Array.value[19].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[51].toFixed(3)
      } else if (x === 5) {
        return 'SV值:' + bsmu2int32Array.value[20].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[52].toFixed(3)
      } else if (x === 6) {
        return 'SV值:' + bsmu2int32Array.value[21].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[53].toFixed(3)
      } else if (x === 7) {
        return '/'
      } else if (x === 8) {
        return 'SV值:' + bsmu2int32Array.value[23].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[55].toFixed(3)
      }
    }
    const bsmu2bear3Value = (x) => {
      if(x === 0) {
        return '无故障测量值'
      } else if (x === 1) {
        return 'SV值:' + bsmu2int32Array.value[24].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[56].toFixed(3)
      } else if (x === 2) {
        return 'SV值:' + bsmu2int32Array.value[25].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[57].toFixed(3)
      } else if (x === 3) {
        return 'SV值:' + bsmu2int32Array.value[26].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[58].toFixed(3)
      } else if (x === 4) {
        return 'SV值:' + bsmu2int32Array.value[27].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[59].toFixed(3)
      } else if (x === 5) {
        return 'SV值:' + bsmu2int32Array.value[28].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[60].toFixed(3)
      } else if (x === 6) {
        return 'SV值:' + bsmu2int32Array.value[29].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[61].toFixed(3)
      } else if (x === 7) {
        return '/'
      } else if (x === 8) {
        return 'SV值:' + bsmu2int32Array.value[31].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[63].toFixed(3)
      }
    }
    const bsmu2bear4Value = (x) => {
      if(x === 0) {
        return '无故障测量值'
      } else if (x === 1) {
        return 'SV值:' + bsmu2int32Array.value[32].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[64].toFixed(3)
      } else if (x === 2) {
        return 'SV值:' + bsmu2int32Array.value[33].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[65].toFixed(3)
      } else if (x === 3) {
        return 'SV值:' + bsmu2int32Array.value[34].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[66].toFixed(3)
      } else if (x === 4) {
        return 'SV值:' + bsmu2int32Array.value[35].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[67].toFixed(3)
      } else if (x === 5) {
        return 'SV值:' + bsmu2int32Array.value[36].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[68].toFixed(3)
      } else if (x === 6) {
        return 'SV值:' + bsmu2int32Array.value[37].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[69].toFixed(3)
      } else if (x === 7) {
        return '/'
      } else if (x === 8) {
        return 'SV值:' + bsmu2int32Array.value[39].toFixed(3) + '\nDB值:' + bsmu2int32Array.value[71].toFixed(3)
      }
    }

    const chargeTempreture = (x) => {
      if(x === 0) {
        return '正常';
      } else if (x === 1) {
        return '温升预警';
      } else if (x === 2) {
        return '温升报警';
      } else if (x === 3) {
        return '温度预警';
      } else if (x === 4) {
        return '温度报警';
      }
    };
    const chargeFrontBackWeight = (x) => {
      if(x === 0) {
        return '无偏载';
      } else if (x === 1) {
        return '前偏载';
      } else if (x === 2) {
        return '后偏载'
      }
      return '数据异常'
    };
    const chargeLeftRightWeight = (x) => {
      if(x === 0) {
        return '无偏载';
      } else if (x === 1) {
        return '左偏载';
      } else if (x === 2) {
        return '右偏载'
      }
      return '数据异常'
    };
    const chargeBalance = (x) => {
      if(x === 0) {
        return '优';
      } else if (x === 1) {
        return '良好'
      } else if (x === 2) {
        return '合格'
      } else if (x === 3) {
        return '差'
      }
      return '数据异常'
    };
    const changeTdraw = () => {
      store.commit("changebsmu1T1",bsmu1float2.value[0])
      store.commit("changebsmu1T2",bsmu1float2.value[1])
      store.commit("changebsmu1T3",bsmu1float2.value[2])
      store.commit("changebsmu1T4",bsmu1float2.value[3])
    }
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
        changeTdraw();
      },10500)
    })

    return {
      changeTdraw,
      chargeBalance,
      chargeFrontBackWeight,
      chargeLeftRightWeight,
      chargeTempreture,
      snackStatus,
      bsmu1bear1Value,
      bsmu1bear2Value,
      bsmu1bear3Value,
      bsmu1bear4Value,
      bsmu2bear1Value,
      bsmu2bear2Value,
      bsmu2bear3Value,
      bsmu2bear4Value,
      bsmu1int32Array,
      bsmu1int8Array,
      bsmu1uint8Array,
      bsmu1float1,
      bsmu1float2,
      bsmu1float3,
      bsmu1float4,
      bsmu1float5,
      bsmu2int32Array,
      bsmu2int8Array,
      bsmu2uint8Array,
      bsmu2float1,
      bsmu2float2,
      bsmu2float3,
      bsmu2float4,
      bsmu2float5,
      intArray,
      floatArray1,
      float2,
      float3,
      double1,
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