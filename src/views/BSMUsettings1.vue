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
        <span class="span1">板卡序号</span>
        <el-input v-model="BSMU1basicinput.boardNumber" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span1">车轮直径</span>
        <el-input v-model="BSMU1basicinput.wheelDiameter" class="input1">
          <template #append>mm</template>
        </el-input>
      </div>

      <div class="block1">
        <span class="span1">测速齿轮数量</span>
        <el-input v-model="BSMU1basicinput.numGetSpeedGearTooth" class="input1">
        </el-input>
      </div>
      
    </div>

    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 载荷模块
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row1">
      <div class="block1">
        <span class="span2">空车悬挂垂直刚度</span>
        <el-input v-model="BSMU1basicinput.k_emptyVertical" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">重车悬挂垂直刚度</span>
        <el-input v-model="BSMU1basicinput.k_fullVertical" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">空重车刚度变化临界值</span>
        <el-input v-model="BSMU1basicinput.th_kDifference" class="input1"></el-input>
      </div>
      
    </div>

    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 蛇行模块
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row1">
      <div class="block1">
        <span class="span2">采样频率</span>
        <el-input v-model="BSMU1basicinput.hunting_fs" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">采样点数</span>
        <el-input v-model="BSMU1basicinput.hunting_D1" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">传感器灵敏度</span>
        <el-input v-model="BSMU1basicinput.hunting_sensitivity" class="input1"></el-input>
      </div>
      
    </div>

    <div class="row1">
      <div class="block1">
        <span class="span2">带通低频</span>
        <el-input v-model="BSMU1basicinput.hunting_f2" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">带通高频</span>
        <el-input v-model="BSMU1basicinput.hunting_f3" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">主频滤波带宽</span>
        <el-input v-model="BSMU1basicinput.hunting_f4" class="input1"></el-input>
      </div>
      
    </div>

    <div class="row1">
      <div class="block1">
        <span class="span2">RMS计算步长</span>
        <el-input v-model="BSMU1basicinput.hunting_nword" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">RMS计算时长</span>
        <el-input v-model="BSMU1basicinput.hunting_D1" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">峰值最小值</span>
        <el-input v-model="BSMU1basicinput.hunting_H_mag" class="input1"></el-input>
      </div>
      
    </div>

    <div class="row1">
      <div class="block1">
        <span class="span2">峰值预警波形数</span>
        <el-input v-model="BSMU1basicinput.hunting_N1" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">峰值报警波形数</span>
        <el-input v-model="BSMU1basicinput.hunting_N2" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">峰值阙值</span>
        <el-input v-model="BSMU1basicinput.hunting_S" class="input1"></el-input>
      </div>
      
    </div>

    <div class="row1">
      <div class="block1">
        <span class="span2">RMS警示值</span>
        <el-input v-model="BSMU1basicinput.hunting_TR0" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">RMS预警值</span>
        <el-input v-model="BSMU1basicinput.hunting_TR1" class="input1"></el-input>
      </div>

      <div class="block1">
        <span class="span2">RMS报警值</span>
        <el-input v-model="BSMU1basicinput.hunting_TR2" class="input1"></el-input>
      </div>
      
    </div>

    <div class="row1">
      <div class="block1">
        <span class="span2">最小分析速度</span>
        <el-input v-model="BSMU1basicinput.hunting_minspeed" class="input1">
          <template #append>km/h</template>
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
    let int32Array = ref()
    let floatArray = ref()


    let BSMU1basicinput = reactive({
      boardNumber: '',               // 板卡序号
      wheelDiameter: '',             // 车轮直径
      numGetSpeedGearTooth: '',      // 测速齿轮齿数
      k_emptyVertical: '',          // 中央悬挂空车垂直刚度
      k_fullVertical: '',           // 中央悬挂重车垂直刚度
      th_kDifference: '',           // 空重车刚度变化临界值

      hunting_fs: '',              // 采样频率 256
      hunting_f2: '',              // 带通低频 1.5
      hunting_f3: '',              // 带通高频 12
      hunting_f4: '',              // 主频左右带通滤波 1
      hunting_N1: '',              // 预警波形数,N1=6
      hunting_N2: '',              // 报警波形数，N2=10,程序默认N1<N2！
      hunting_S: '',               // 横向加速度阈值,S1=6
      hunting_TR0: '',             // 横向加速度RMS警示值,TR1=0.01
      hunting_TR1: '',             // 横向加速度RMS预警值,TR1=3.12
      hunting_TR2: '',             // 横向加速度RMS报警值,TR2=4.19,程序默认R2>R1
      hunting_D1: '',              // 每隔D1计算一次RMS,单位s,也可以按照距离D1=10
      hunting_D: '',               // 计算前D的RMS，单位s,也可以按照距离D=100
      hunting_H_mag: '',           // 横移峰值最小值 0.02
      hunting_sensitivity: '',     // 传感器灵敏度系数，10G量程 1g=200mv sensitivity=5;
      hunting_nword: '',           // 数据长度
      hunting_minspeed: '',        // 最小分析速度(km/h)
    })

    const ab2str = (buf) => {
      return String.fromCharCode.apply(null, new Uint8Array(buf));
    }
    const getData = () => {
      axios({
        method:'get',
        url:'http://39.107.238.92:8080/bsmu1basicConfig',
        responseType:'arraybuffer'
      }).then((res) => {
        int32Array.value = new Int32Array(res.data)
        floatArray.value = new Float32Array(res.data)
      }).catch((err) => {
        console.log(err);
      })
    }
    
    const chanegData = () => {
      BSMU1basicinput.boardNumber = int32Array.value[0]
      BSMU1basicinput.wheelDiameter = int32Array.value[1]
      BSMU1basicinput.numGetSpeedGearTooth = int32Array.value[2]
      BSMU1basicinput.k_emptyVertical = floatArray.value[3].toFixed(2)
      BSMU1basicinput.k_fullVertical = floatArray.value[4].toFixed(2)
      BSMU1basicinput.th_kDifference = floatArray.value[5]

      BSMU1basicinput.hunting_fs = floatArray.value[6]
      BSMU1basicinput.hunting_f2 = floatArray.value[7]
      BSMU1basicinput.hunting_f3 = floatArray.value[8]
      BSMU1basicinput.hunting_f4 = floatArray.value[9]
      BSMU1basicinput.hunting_N1 = int32Array.value[10]
      BSMU1basicinput.hunting_N2 = int32Array.value[11]
      BSMU1basicinput.hunting_S = int32Array.value[12]
      BSMU1basicinput.hunting_TR0 = floatArray.value[13].toFixed(2)
      BSMU1basicinput.hunting_TR1 = floatArray.value[14].toFixed(2)
      BSMU1basicinput.hunting_TR2 = floatArray.value[15].toFixed(2)
      BSMU1basicinput.hunting_D1 = int32Array.value[16]
      BSMU1basicinput.hunting_D  = int32Array.value[17]
      BSMU1basicinput.hunting_H_mag        = floatArray.value[18].toFixed(2)
      BSMU1basicinput.hunting_sensitivity  = floatArray.value[19]
      BSMU1basicinput.hunting_nword     = int32Array.value[20]
      BSMU1basicinput.hunting_minspeed  = int32Array.value[21]
    }

    const sendData = () => {
      onloading.value = true
      formData = new FormData()
      Object.keys(BSMU1basicinput).forEach((key) => {
        formData.append(key, BSMU1basicinput[key])
      })
      axios(
        {
          method:'post',
          url:'http://39.107.238.92:8080/tcp/changeBSMU1BasicConfig',
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

    }

    onMounted(() => {
      getData();
      setTimeout(() => {
        chanegData();
      },500)
    })

    return {
      ab2str,
      chanegData,
      getData,
      sendData,
      formData,
      onloading,
      int32Array,
      floatArray,
      BSMU1basicinput
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
  width: 170px;
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