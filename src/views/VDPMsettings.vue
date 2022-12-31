<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 基本信息
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row1">
      <div class="block1">
        <span class="span1">线路</span>
        <el-input v-model="VDPMinput.circuit" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">车辆型号</span>
        <el-input v-model="VDPMinput.carModel" class="input1">
        </el-input>
      </div>

      <div class="block1">
        <span class="span1">列车号</span>
        <el-input v-model="VDPMinput.trainNumber" class="input1">
        </el-input>
      </div>

      <div class="block1">
        <span class="span1">车辆编号</span>
        <el-input v-model="VDPMinput.vehicleNumber" class="input1">
        </el-input>
      </div>
      
    </div>

    <div class="row1">
      <div class="block1">
        <span class="span1">车轮直径</span>
        <el-input v-model="VDPMinput.wheelDiameter" class="input1">
          <template #append>mm</template>
        </el-input>
      </div>

      <div class="block1">
        <span class="span1">测速齿轮数</span>
        <el-input v-model="VDPMinput.speedGearNumber" class="input1"></el-input>
      </div>
      
    </div>

    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 设备信息
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row1">
      <div class="block1">
        <span class="span1">机箱编号</span>
        <el-input v-model="VDPMinput.crateNumber" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">软件版本</span>
        <el-input v-model="VDPMinput.softVersion" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">硬件版本</span>
        <el-input v-model="VDPMinput.hardVersion" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">配置版本</span>
        <el-input v-model="VDPMinput.configVersion" class="input1"></el-input>
      </div>
      
    </div>

    <div class="row1">
      <div class="block1">
        <span class="span1">主机数量</span>
        <el-input v-model="VDPMinput.mainNumber" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">分机数量</span>
        <el-input v-model="VDPMinput.otherNumber" class="input1"></el-input>
      </div>
      
    </div>

    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> RS485模块
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row1">
      <div class="block1">
        <span class="span1">定压方式</span>
        <el-input v-model="VDPMinput.levelPressure" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">空车重量</span>
        <el-input v-model="VDPMinput.emptyWeight" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">总里程</span>
        <el-input v-model="VDPMinput.totalDistance" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">超重阀值</span>
        <el-input v-model="VDPMinput.overWeight" class="input1"></el-input>
      </div>
      
    </div>

    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 轴端电机模块
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row1">
      <div class="block1">
        <span class="span2">绕组温度预警阀值</span>
        <el-input v-model="VDPMinput.windingEarlyWarning" class="input2"></el-input>
      </div>

      <div class="block1">
        <span class="span2">绕组温度报警阀值</span>
        <el-input v-model="VDPMinput.windingWarning" class="input2"></el-input>
      </div>

      <div class="block1">
        <span class="span2">蓄电池温度预警阀值</span>
        <el-input v-model="VDPMinput.batteryEarlyWarning" class="input2"></el-input>
      </div>

      <div class="block1">
        <span class="span2">蓄电池温度报警阀值</span>
        <el-input v-model="VDPMinput.batteryWarning" class="input2"></el-input>
      </div>
      
    </div>

    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 平稳性模块
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row1">
      <div class="block1">
        <span class="span1">数据采样率</span>
        <el-input v-model="VDPMinput.dataSamplingRate" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">数据长度</span>
        <el-input v-model="VDPMinput.dataLength" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">传感器灵敏度</span>
        <el-input v-model="VDPMinput.sensorSensitivity" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">最小分析速度</span>
        <el-input v-model="VDPMinput.minAnalysisVelocity" class="input1">
          <template #append>km/h</template>
        </el-input>
      </div>
      
    </div>
    <div class="row1">
      <div class="block1">
        <span class="span1">平稳性指标1</span>
        <el-input v-model="VDPMinput.balance1" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">平稳性指标2</span>
        <el-input v-model="VDPMinput.balance2" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">平稳性指标3</span>
        <el-input v-model="VDPMinput.balance3" class="input1"></el-input>
      </div>
      
    </div>

    <div class="row1">
      <div class="block1">
        <span class="span1">横向运行品质</span>
        <el-input v-model="VDPMinput.lateralQuality" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">垂向运行品质</span>
        <el-input v-model="VDPMinput.verticalQuality" class="input1"></el-input>
      </div>
      
    </div>

    <br>
    <hr>
    <br>

    <div class="config">
      <el-button type="default" @click="sendData" :loading="onloading">保存配置</el-button>
      <span class="zhu">&nbsp;&nbsp;注:配置需修改并重连后生效</span>
    </div>

  </div>
</template>

<script>
import { ref, reactive, onMounted, } from "vue";
import axios from 'axios';

export default {
  setup() {
    let onloading = ref(false)
    let intArray = ref()
    let int32Array = ref()

    let char8circuit = ref()
    let char8vehicleType = ref()
    let char8vehicleID = ref()
    let char8crateID = ref()
    let char8softVersion = ref()
    let char8hardVersion = ref()
    let char8configVersion = ref()
    let floatEmptyWeight = ref()
    let floatSensor = ref()
    let double1 = ref()
    let double2 = ref()
    let formData = ref()

    let VDPMinput = reactive({
      circuit: '', //线路
      carModel: '', //车辆型号
      trainNumber: '', //列车号
      vehicleNumber: '', //车辆编号
      wheelDiameter: '', //车轮直径
      speedGearNumber: '', //测速齿轮数量
      crateNumber: '', //机箱编号
      softVersion: '', //软件版本
      hardVersion: '', //硬件版本
      configVersion: '', //配置版本
      mainNumber: '', //主机数量
      otherNumber: '', //分机数量
      levelPressure: '', //定压方式
      emptyWeight: '', //空车重量
      totalDistance: '', //总里程
      overWeight: '', //超重阙值
      windingEarlyWarning: '', //绕组温度预警阙值
      windingWarning: '', //绕组温度报警阙值
      batteryEarlyWarning: '', //蓄电池温度预警阙值
      batteryWarning: '', //蓄电池温度报警阙值
      dataSamplingRate: '', //数据采样率
      dataLength: '', //数据长度
      sensorSensitivity: '', //传感器灵敏度
      minAnalysisVelocity: '', //最小分析速度
      balance1: '', //平稳性指标1
      balance2: '',
      balance3: '',
      lateralQuality: '', //横向运行品质
      verticalQuality: '', //垂向运行品质
    })

    const ab2str = (buf) => {
      return String.fromCharCode.apply(null, new Uint8Array(buf));
    }
    const getData = () => {
      axios({
        method:'get',
        url:'http://39.107.238.92:8080/vdpmConfig',
        responseType:'arraybuffer'
      }).then((res) => {
        intArray.value = new Int8Array(res.data)
        int32Array.value = new Int32Array(res.data)
        floatEmptyWeight.value = new Float32Array(res.data.slice(80,96))
        floatSensor.value = new Float32Array(res.data.slice(116,120))
        
        
        char8circuit.value = ab2str(res.data.slice(0,4))
        char8vehicleType.value = ab2str(res.data.slice(8,12))
        char8vehicleID.value = ab2str(res.data.slice(16,20))
        char8crateID.value = ab2str(res.data.slice(36,44))
        char8softVersion.value = ab2str(res.data.slice(44,52))
        char8hardVersion.value = ab2str(res.data.slice(52,60))
        char8configVersion.value = ab2str(res.data.slice(60,68))

        double1.value = new Float64Array(res.data.slice(84,92))
        double2.value = new Float64Array(res.data.slice(124,164))
        
        
        console.log(intArray.value);
        
      }).catch((err) => {
        console.log(err);
      })
    }

    const sendData = () => {
      onloading.value = true
      formData = new FormData()
      Object.keys(VDPMinput).forEach((key) => {
        formData.append(key, VDPMinput[key])
      })
      axios(
        {
          method:'post',
          url:'http://39.107.238.92:8080/tcp/changeVDPMConfig',
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        }
      ).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })

      setTimeout(() => {
        onloading.value = false
      },2000)

    };
    
    const chanegData = () => {
      VDPMinput.circuit = char8circuit.value
      VDPMinput.carModel = char8vehicleType.value
      VDPMinput.trainNumber = char8vehicleID.value

      VDPMinput.crateNumber = char8crateID.value
      VDPMinput.softVersion = char8softVersion.value
      VDPMinput.hardVersion = char8hardVersion.value
      VDPMinput.configVersion = char8configVersion.value

      VDPMinput.vehicleNumber = int32Array.value[6]
      VDPMinput.wheelDiameter = int32Array.value[7]
      VDPMinput.speedGearNumber = int32Array.value[8]
      VDPMinput.mainNumber = int32Array.value[17]
      VDPMinput.otherNumber = int32Array.value[18]
      VDPMinput.levelPressure = int32Array.value[19]
      VDPMinput.emptyWeight = floatEmptyWeight.value[0]
      VDPMinput.overWeight = floatEmptyWeight.value[3]
      VDPMinput.totalDistance = double1.value[0]

      VDPMinput.windingEarlyWarning = int32Array.value[24]
      VDPMinput.windingWarning = int32Array.value[25]
      VDPMinput.batteryEarlyWarning = int32Array.value[26]
      VDPMinput.batteryWarning = int32Array.value[27]

      VDPMinput.dataSamplingRate = int32Array.value[28]
      VDPMinput.dataLength = int32Array.value[30]
      VDPMinput.balance1 = double2.value[0]
      VDPMinput.balance2 = double2.value[1]
      VDPMinput.balance3 = double2.value[2]
      VDPMinput.lateralQuality = double2.value[3]
      VDPMinput.verticalQuality = double2.value[4]
      VDPMinput.sensorSensitivity = floatSensor.value[0]
      VDPMinput.minAnalysisVelocity = int32Array.value[41]
    }

    onMounted(() => {
      getData();
      setTimeout(() => {
        chanegData();
      },500)
    })

    return {
      onloading,
      ab2str,
      chanegData,
      getData,
      sendData,
      formData,
      double1,
      double2,
      floatSensor,
      floatEmptyWeight,
      char8configVersion,
      char8hardVersion,
      char8softVersion,
      char8crateID,
      char8vehicleID,
      char8vehicleType,
      char8circuit,
      int32Array,
      intArray,
      VDPMinput,
    };
  }

}
</script>

<style scoped>
.config {
  display: flex;
  justify-content: center;
  align-self: center;
}
.zhu {
  font-size: small;
}
.crumbs {
  margin-bottom: 10px;
}
.span1 {
  display: inline-block;
  width: 100px;
}

.span2 {
  display: inline-block;
  width: 150px;
}
.row1 {
  display: flex;
  justify-content: start;
  align-content: center;
  margin-bottom: 10px;
}
.block1 {
  display: inline-block;
}
.input1 {
  width: 150px;
  margin-right: 20px;
  margin-left: 5px;
}

.input2 {
  width: 100px;
  margin-right: 20px;
  margin-left: 10px;
}

</style>