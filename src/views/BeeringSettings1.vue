<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 轴承结构参数
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row1">
      <div class="block1">
        <span class="span1">轴承型号</span>
        <el-input v-model="BSMU1beeringInput.beeringType" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">轴径</span>
        <el-input v-model="BSMU1beeringInput.bearingShaftDiameter" class="input1">
          <template #append>mm</template>
        </el-input>
      </div>

      <div class="block1">
        <span class="span1">外径</span>
        <el-input v-model="BSMU1beeringInput.bearingOutDiameter" class="input1">
          <template #append>mm</template>
        </el-input>
      </div>

      <div class="block1">
        <span class="span1">中径</span>
        <el-input v-model="BSMU1beeringInput.bearingMidDiameter" class="input1">
          <template #append>mm</template>
        </el-input>
      </div>
      
    </div>

    <div class="row1">
      <div class="block1">
        <span class="span1">滚子直径</span>
        <el-input v-model="BSMU1beeringInput.rollerDiameter" class="input1">
          <template #append>mm</template>
        </el-input>
      </div>

      <div class="block1">
        <span class="span1">滚子数量</span>
        <el-input v-model="BSMU1beeringInput.numRoller" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">滚子列数</span>
        <el-input v-model="BSMU1beeringInput.rowRoller" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">接触角</span>
        <el-input v-model="BSMU1beeringInput.contactAngle" class="input1"></el-input>
      </div>
      
    </div>

    <div class="row1">
      <div class="block1">
        <span class="span1">比邻</span>
        <el-input v-model="BSMU1beeringInput.ratioNeighbor" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">比轮</span>
        <el-input v-model="BSMU1beeringInput.ratioWheel" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">大齿</span>
        <el-input v-model="BSMU1beeringInput.numLargeTeeth" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">小齿</span>
        <el-input v-model="BSMU1beeringInput.numSmallTeeth" class="input1"></el-input>
      </div>
      
    </div>

    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 故障特征值
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row1">
      <div class="block1">
        <span class="span1">保持架外</span>
        <el-input v-model="BSMU1beeringInput.mev_outCage" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">保持架内</span>
        <el-input v-model="BSMU1beeringInput.mev_inCage" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">外环</span>
        <el-input v-model="BSMU1beeringInput.mev_outRing" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">内环</span>
        <el-input v-model="BSMU1beeringInput.mev_inRing" class="input1"></el-input>
      </div>
      
    </div>

    <div class="row1">
      <div class="block1">
        <span class="span1">滚单</span>
        <el-input v-model="BSMU1beeringInput.mev_singleRoller" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">滚双</span>
        <el-input v-model="BSMU1beeringInput.mev_doubleRoller" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">齿轮/踏面</span>
        <el-input v-model="BSMU1beeringInput.mev_gear_tread" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">邻齿</span>
        <el-input v-model="BSMU1beeringInput.mev_nearTeeth" class="input1"></el-input>
      </div>
      
    </div>

    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> FPGA设置
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row1">
      <div class="block1">
        <span class="span2">解调增益系数</span>
        <el-input v-model="BSMU1beeringInput.demudulateGainCoef" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">转速倍频系数</span>
        <el-input v-model="BSMU1beeringInput.speedMultiFreqCoef" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">高通滤波信号增益</span>
        <el-input v-model="BSMU1beeringInput.highPassFilterGain" class="input1"></el-input>
      </div>
      
    </div>

    <div class="row1">
      <div class="block1">
        <span class="span2">带通滤波信号增益</span>
        <el-input v-model="BSMU1beeringInput.bandPassFilterGain" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">检波滤波器信号增益</span>
        <el-input v-model="BSMU1beeringInput.detectFilterGain" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">低通滤波器信号增益</span>
        <el-input v-model="BSMU1beeringInput.lowPassFilterGain" class="input1"></el-input>
      </div>
      
    </div>

    <div class="row1">
      <div class="block1">
        <span class="span2">8阶低通滤波器信号增益</span>
        <el-input v-model="BSMU1beeringInput.lowPassFilterGain_8" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">5-8低通滤波器信号增益</span>
        <el-input v-model="BSMU1beeringInput.lowPassFilterGain_58" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">5-8低通滤波器频率</span>
        <el-input v-model="BSMU1beeringInput.lowPassFilterFreq_58" class="input1"></el-input>
      </div>
      
    </div>

    <div class="row1">
      <div class="block1">
        <span class="span2">原始每帧采样间隔</span>
        <el-input v-model="BSMU1beeringInput.originalInterval" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">FPGA数包大小</span>
        <el-input v-model="BSMU1beeringInput.packSizeEachTime" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">FPGA结果数包大小</span>
        <el-input v-model="BSMU1beeringInput.packSizeAll" class="input1"></el-input>
      </div>
      
    </div>

    <div class="row1">
      <div class="block1">
        <span class="span2">5-8增益系数</span>
        <el-input v-model="BSMU1beeringInput.gainCoef_58" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">FFT计算点数</span>
        <el-input v-model="BSMU1beeringInput.numFFTPoint" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">模拟转速设置</span>
        <div>
        <el-radio v-model="BSMU1beeringInput.isSimulateSpeed" label="1" size="large">是</el-radio>
        <el-radio v-model="BSMU1beeringInput.isSimulateSpeed" label="0" size="large">否</el-radio>
      </div>
      </div>
      
    </div>

    <div class="row1">
      <div class="block1">
        <span class="span2">轴承最小分析转速</span>
        <el-input v-model="BSMU1beeringInput.minSpeed_kmh" class="input1"></el-input>
      </div>
      
    </div>

    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 原始信号采样设置
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row1">
      <span class="span1">是否采样</span>
      <div>
        <el-radio v-model="BSMU1beeringInput.originalSampleLabel" label="0" size="large">是</el-radio>
        <el-radio v-model="BSMU1beeringInput.originalSampleLabel" label="1" size="large">否</el-radio>
      </div>
      
    </div>

    <div class="row1">
      <div class="block1">
        <span class="span1">原始采样率</span>
        <el-input v-model="BSMU1beeringInput.originalSampleRate" class="input1">
          <template #append>kHz</template>
        </el-input>
      </div>

      <div class="block1">
        <span class="span1">采样时间</span>
        <el-input v-model="BSMU1beeringInput.originalSampleDuration" class="input1">
          <template #append>s</template>
        </el-input>
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
    let formData = ref()
    let BSMU1beeringInput = reactive({
      beeringType: '', //轴承型号
      bearingShaftDiameter: '', // 轴径(mm)
      bearingOutDiameter: '', // 外径(mm)
      bearingMidDiameter: '', // 中径(mm)
      rollerDiameter: '', // 滚子直径(mm)
      numRoller: '', // 滚子数量
      rowRoller: '', // 滚子列数
      contactAngle: '', // 接触角
      ratioNeighbor: '', // 比邻
      ratioWheel: '', // 比轮
      numLargeTeeth: '', // 大齿
      numSmallTeeth: '', // 小齿

      mev_outCage: '',              // 保持架外
      mev_inCage: '',               // 保持架内
      mev_outRing: '',              // 外环
      mev_inRing: '',               // 内环
      mev_singleRoller: '',         // 滚单。也许有问题
      mev_doubleRoller: '',         // 滚双
      mev_gear_tread: '',           // 齿轮/踏面
      mev_nearTeeth: '',            // 邻齿

      th_tempRiseWarning: '',        // 温升预警
      th_tempRiseAlarm: '',          // 温升报警
      th_tempWarning: '',            // 温度预警
      th_tempAlarm: '',              // 温度报警
      th_outCageAlarm1: '',        // 保持架外, 保持架外1,
      th_outCageAlarm2: '',        // 保持架外, 保持架外1,
      th_outCageAlarm3: '',        // 保持架外, 保持架外1,
      th_inCageAlarm1: '',         // 保持架内
      th_inCageAlarm2: '',         // 保持架内
      th_inCageAlarm3: '',         // 保持架内
      th_outRingAlarm1: '',        // 外环,外环1,外环2级别
      th_outRingAlarm2: '',        // 外环,外环1,外环2级别
      th_outRingAlarm3: '',        // 外环,外环1,外环2级别
      th_inRingAlarm1: '',         // 内环，内环1，内环2级
      th_inRingAlarm2: '',         // 内环，内环1，内环2级
      th_inRingAlarm3: '',         // 内环，内环1，内环2级
      th_singleRollerAlarm1: '',   // 滚单，滚单1，滚单2级
      th_singleRollerAlarm2: '',   // 滚单，滚单1，滚单2级
      th_singleRollerAlarm3: '',   // 滚单，滚单1，滚单2级
      th_doubleRollerAlarm1: '',  // 滚双，滚双2，滚双2级
      th_doubleRollerAlarm2: '',  // 滚双，滚双2，滚双2级
      th_doubleRollerAlarm3: '',  // 滚双，滚双2，滚双2级
      th_treadAlarm1: '',          // 踏面
      th_treadAlarm2: '',          // 踏面
      th_treadAlarm3: '',          // 踏面
      th_nearGearAlarm1: '',       // 邻齿轮
      th_nearGearAlarm2: '',       // 邻齿轮
      th_nearGearAlarm3: '',       // 邻齿轮
      minSpeed_kmh: '',              // 最少转速(rpm)

      demudulateGainCoef: '',            // 解调增益系数
      speedMultiFreqCoef: '',             // 转速倍频系数
      highPassFilterGain: '',             // 高通滤波信号增益'
      bandPassFilterGain: '',             // 带通滤波器信号增益
      detectFilterGain: '',               // 检波滤波器信号增益
      lowPassFilterGain: '',              // 低通滤波器信号增益
      lowPassFilterGain_8: '',            // 8阶低通滤波器信号增益
      lowPassFilterGain_58: '',           // 5-8低通滤波器信号增益
      lowPassFilterFreq_58: '',           // 5-8低通滤波器频率
      originalInterval: '',               // 原始每帧采样间隔
      packSizeEachTime: '',               // 数包大小。每次读取的数量
      packSizeAll: '',                    // 结果数包大小。需要读取的数量
      gainCoef_58: '',                    // 5-8增益系数
      numFFTPoint: '',                    // FFT计算点数
      isSimulateSpeed: '',                // 模拟转速设置。是（1）否（0）采用模拟转速。
      originalSampleRate: '',             // 轴承原始信号采样率, 单位为 kHz
      originalSampleDuration: '',         // 轴承原始信号采样时间,单位为 s
      originalSampleLabel: '',            // 是否采样轴承原始信号标志位，0表示采样，1表示不采样

    })
    let char12beeringType = ref()
    let int32Array = ref()
    let floatArray = ref()
    let uint32Array = ref()

    const ab2str = (buf) => {
      return String.fromCharCode.apply(null, new Uint8Array(buf));
    }

    const getData = () => {
      axios({
        method:'get',
        url:'http://39.107.238.92:8080/bsmu1bearingConfig',
        responseType:'arraybuffer'
      }).then((res) => {
        int32Array.value = new Int32Array(res.data.slice(12,208))
        floatArray.value = new Float32Array(res.data.slice(12,208))
        uint32Array.value = new Uint32Array(res.data.slice(208,276))

        char12beeringType.value = ab2str(res.data.slice(0,12))
      }).catch((err) => {
        console.log(err);
      })
    };

    const sendData = () => {
      onloading.value = true
      formData = new FormData()
      Object.keys(BSMU1beeringInput).forEach((key) => {
        formData.append(key, BSMU1beeringInput[key])
      })
      axios(
        {
          method:'post',
          url:'http://39.107.238.92:8080/tcp/changeBSMU1BearingConfig',
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
      BSMU1beeringInput.beeringType = char12beeringType.value
      BSMU1beeringInput.bearingShaftDiameter = floatArray.value[0].toFixed(2)
      BSMU1beeringInput.bearingOutDiameter = floatArray.value[1].toFixed(2)
      BSMU1beeringInput.bearingMidDiameter = floatArray.value[2].toFixed(2)
      BSMU1beeringInput.rollerDiameter = floatArray.value[3]
      BSMU1beeringInput.numRoller = int32Array.value[4]
      BSMU1beeringInput.rowRoller = int32Array.value[5]
      BSMU1beeringInput.contactAngle = floatArray.value[6]
      BSMU1beeringInput.ratioNeighbor = floatArray.value[7].toFixed(2)
      BSMU1beeringInput.ratioWheel = floatArray.value[8].toFixed(2)
      BSMU1beeringInput.numLargeTeeth = int32Array.value[9]
      BSMU1beeringInput.numSmallTeeth = int32Array.value[10]

      BSMU1beeringInput.mev_outCage     = floatArray.value[11].toFixed(2)
      BSMU1beeringInput.mev_inCage      = floatArray.value[12].toFixed(2)
      BSMU1beeringInput.mev_outRing     = floatArray.value[13].toFixed(2)
      BSMU1beeringInput.mev_inRing      = floatArray.value[14].toFixed(2)
      BSMU1beeringInput.mev_singleRoller = floatArray.value[15].toFixed(2)
      BSMU1beeringInput.mev_doubleRoller = floatArray.value[16].toFixed(2)
      BSMU1beeringInput.mev_gear_tread  = floatArray.value[17].toFixed(2)
      BSMU1beeringInput.mev_nearTeeth   = floatArray.value[18].toFixed(2)

      BSMU1beeringInput.th_tempRiseWarning = int32Array.value[19]
      BSMU1beeringInput.th_tempRiseAlarm = int32Array.value[20]
      BSMU1beeringInput.th_tempWarning = int32Array.value[21]
      BSMU1beeringInput.th_tempAlarm = int32Array.value[22]
      BSMU1beeringInput.th_outCageAlarm1 = int32Array.value[23]
      BSMU1beeringInput.th_outCageAlarm2 = int32Array.value[24]
      BSMU1beeringInput.th_outCageAlarm3 = int32Array.value[25]
      BSMU1beeringInput.th_inCageAlarm1 = int32Array.value[26]
      BSMU1beeringInput.th_inCageAlarm2 = int32Array.value[27]
      BSMU1beeringInput.th_inCageAlarm3 = int32Array.value[28]
      BSMU1beeringInput.th_outRingAlarm1 = int32Array.value[29]
      BSMU1beeringInput.th_outRingAlarm2 = int32Array.value[30]
      BSMU1beeringInput.th_outRingAlarm3 = int32Array.value[31]
      BSMU1beeringInput.th_inRingAlarm1 = int32Array.value[32]
      BSMU1beeringInput.th_inRingAlarm2 = int32Array.value[33]
      BSMU1beeringInput.th_inRingAlarm3 = int32Array.value[34]
      BSMU1beeringInput.th_singleRollerAlarm1 = int32Array.value[35]
      BSMU1beeringInput.th_singleRollerAlarm2 = int32Array.value[36]
      BSMU1beeringInput.th_singleRollerAlarm3 = int32Array.value[37]
      BSMU1beeringInput.th_doubleRollerAlarm1 = int32Array.value[38]
      BSMU1beeringInput.th_doubleRollerAlarm2 = int32Array.value[39]
      BSMU1beeringInput.th_doubleRollerAlarm3 = int32Array.value[40]
      BSMU1beeringInput.th_treadAlarm1 = int32Array.value[41]
      BSMU1beeringInput.th_treadAlarm2 = int32Array.value[42]
      BSMU1beeringInput.th_treadAlarm3 = int32Array.value[43]
      BSMU1beeringInput.th_nearGearAlarm1 = int32Array.value[44]
      BSMU1beeringInput.th_nearGearAlarm2 = int32Array.value[45]
      BSMU1beeringInput.th_nearGearAlarm3 = int32Array.value[46]

      BSMU1beeringInput.minSpeed_kmh = int32Array.value[47]
      BSMU1beeringInput.demudulateGainCoef = floatArray.value[48]

      BSMU1beeringInput.speedMultiFreqCoef     = uint32Array.value[0]
      BSMU1beeringInput.highPassFilterGain     = uint32Array.value[1]
      BSMU1beeringInput.bandPassFilterGain     = uint32Array.value[2]
      BSMU1beeringInput.detectFilterGain       = uint32Array.value[3]
      BSMU1beeringInput.lowPassFilterGain      = uint32Array.value[4]
      BSMU1beeringInput.lowPassFilterGain_8    = uint32Array.value[5]
      BSMU1beeringInput.lowPassFilterGain_58   = uint32Array.value[6]
      BSMU1beeringInput.lowPassFilterFreq_58   = uint32Array.value[7]
      BSMU1beeringInput.originalInterval       = uint32Array.value[8]
      BSMU1beeringInput.packSizeEachTime       = uint32Array.value[9]
      BSMU1beeringInput.packSizeAll            = uint32Array.value[10]
      BSMU1beeringInput.gainCoef_58            = uint32Array.value[11]
      BSMU1beeringInput.numFFTPoint            = uint32Array.value[12]
      BSMU1beeringInput.isSimulateSpeed        = uint32Array.value[13]
      BSMU1beeringInput.originalSampleRate     = uint32Array.value[14]
      BSMU1beeringInput.originalSampleDuration = uint32Array.value[15]
      BSMU1beeringInput.originalSampleLabel    = uint32Array.value[16]

    };

    onMounted(() => {
      getData();
      setTimeout(() => {
        chanegData();
      },500)
    })


    return {
      chanegData,
      getData,
      ab2str,
      sendData,
      formData,
      onloading,
      int32Array,
      floatArray,
      uint32Array,
      BSMU1beeringInput,
      char12beeringType,
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
  width: 200px;
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
  margin-left: 10px;
}

</style>