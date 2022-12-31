.<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 环温分析
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>


    <div id="temperatureChart1" class="t1"></div>
    <div id="temperatureChart2" class="t1"></div>
  </div>
</template>

<script>
import axios from 'axios'
import * as echarts from "echarts";
import { onMounted, reactive, ref } from 'vue'
export default {
  setup() {
    let bsmu1float2 = ref()
    let bsmu2float2 = ref()
    const bsmu1T1 = reactive([])
    const bsmu1T2 = reactive([])

    const bsmu2T1 = reactive([])
    const bsmu2T2 = reactive([])

    const axis1 = reactive([])
    const axis2 = reactive([])
    let option1 = ref({
      title:{
        text:"BSMU1环温1~2"
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['BSMU1环温1', 'BSMU1环温2',]
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: axis1,
      },
      yAxis: {},
      series: [
        {
          name: "BSMU1环温1",
          data: bsmu1T1,
          type: 'line',
        },
        {
          name: "BSMU1环温2",
          data: bsmu1T2,
          type: 'line',
        },
      ]
    })

    let option2 = ref({
      title:{
        text:"BSMU2环温1~2"
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['BSMU2环温1', 'BSMU2环温2',]
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: axis2,
      },
      yAxis: {},
      series: [
        {
          name: "BSMU2环温1",
          data: bsmu2T1,
          type: 'line',
        },
        {
          name: "BSMU2环温2",
          data: bsmu2T2,
          type: 'line',
        },
      ]
    })

    const getDrawData = () => {
      axios({
        method:'get',
        url:'http://39.107.238.92:8080/BSMU1condition',
        responseType:'arraybuffer'
      }).then((res) => {
        console.log(res.data);
        bsmu1float2.value = new Float32Array(res.data.slice(402,410));
      }).catch((err) => {
        console.log(err);
      })
      

      axios({
        method:'get',
        url:'http://39.107.238.92:8080/BSMU2condition',
        responseType:'arraybuffer'
      }).then((res) => {
        console.log(res.data);
        bsmu2float2.value = new Float32Array(res.data.slice(402,410));
      }).catch((err) => {
        console.log(err);
      })

      
    }

    const push = (x,y) => {
      if(bsmu1T1.length === 10) {
        bsmu1T1.shift()
      }
      if(bsmu1T2.length === 10) {
        bsmu1T2.shift()
      }
      if(axis1.length === 10) {
        axis1.shift()
      }
      bsmu1T1.push(x[0].toFixed(2))
      bsmu1T2.push(x[1].toFixed(2))
      axis1.push((new Date()).toLocaleTimeString('en-US').slice(0,8))

      if(bsmu2T1.length === 10) {
        bsmu2T1.shift()
      }
      if(bsmu2T2.length === 10) {
        bsmu2T2.shift()
      }
      if(axis2.length === 10) {
        axis2.shift()
      }
      bsmu2T1.push(y[0].toFixed(2))
      bsmu2T2.push(y[1].toFixed(2))
      axis2.push((new Date()).toLocaleTimeString('en-US').slice(0,8))
    }
    onMounted(() => {
      const data1 = option1.value
      const data2 = option2.value
      let t1 = echarts.init(document.getElementById("temperatureChart1"))
      let t2 = echarts.init(document.getElementById("temperatureChart2"))
      t1.setOption(data1)
      t2.setOption(data2)

      getDrawData();
      
      setInterval(() => {
        
        push(bsmu1float2.value,bsmu2float2.value)
        t1.setOption(data1)
        t2.setOption(data2)
        getDrawData()
      },10000)
      
    })
    

    return {
      push,
      getDrawData,
      axis1,
      axis2,
      bsmu1T1,
      bsmu1T2,
      bsmu2T1,
      bsmu2T2,
      option1,
      option2,
      bsmu1float2,
      bsmu2float2,
    }
  }

}
</script>

<style>
.t1 {
  width: 1000px;
  height: 300px;
}
</style>