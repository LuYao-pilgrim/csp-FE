<template>
  <div>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>
                <i class="el-icon-lx-down"></i> 设备数据下载
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>

    <div class="mainCC">
      <el-card class="box-card">
          <template #header>
          <div class="card-header">
              <span>BSMU1-轴承数据</span>
          </div>
          </template>
          <div class="block">
            <el-date-picker
              v-model="month1"
              type="month"
              placeholder="Pick a month"
            />
        </div>
        <div class="log">
          <el-button @click="log1">查询</el-button>
        </div>
        <el-drawer v-model="draw1" :before-close="handleClose1" title="点击文件名下载">
          <div v-for="(value,index) in monthFiles1" :key='index' class="text item">
              <el-button @click="rowDownload1(value)" type="text">{{value}}</el-button>
              <br/>
          </div>
        </el-drawer>
      </el-card>

      <el-card class="box-card">
          <template #header>
          <div class="card-header">
              <span>BSMU1-蛇行稳定性数据</span>
          </div>
          </template>
          <div class="block">
            <el-date-picker
              v-model="month2"
              type="month"
              placeholder="Pick a month"
            />
        </div>
        <div class="log">
          <el-button @click="log2">查询</el-button>
        </div>
        <el-drawer v-model="draw2" :before-close="handleClose2" title="点击文件名下载">
          <div v-for="(value,index) in monthFiles1" :key='index' class="text item">
              <el-button @click="rowDownload2(value)" type="text">{{value}}</el-button>
              <br/>
          </div>
        </el-drawer>
      </el-card>

      <el-card class="box-card">
          <template #header>
          <div class="card-header">
              <span>BSMU1-车体平稳性数据</span>
          </div>
          </template>
          <div class="block">
            <el-date-picker
              v-model="month3"
              type="month"
              placeholder="Pick a month"
            />
        </div>
        <div class="log">
          <el-button @click="log1">查询</el-button>
        </div>
        <el-drawer v-model="draw3" :before-close="handleClose3" title="点击文件名下载">
          <div v-for="(value,index) in monthFiles1" :key='index' class="text item">
              <el-button @click="rowDownload1(value)" type="text">{{value}}</el-button>
              <br/>
          </div>
        </el-drawer>
      </el-card>

      <el-card class="box-card">
          <template #header>
          <div class="card-header">
              <span>BSMU1-原始采样数据</span>
          </div>
          </template>
          <div class="block">
            <el-date-picker
              v-model="month4"
              type="month"
              placeholder="Pick a month"
            />
        </div>
        <div class="log">
          <el-button @click="log1">查询</el-button>
        </div>
        <el-drawer v-model="draw4" :before-close="handleClose4" title="点击文件名下载">
          <div v-for="(value,index) in monthFiles1" :key='index' class="text item">
              <el-button @click="rowDownload1(value)" type="text">{{value}}</el-button>
              <br/>
          </div>
        </el-drawer>
      </el-card>
    </div>

    <div class="mainCC">
      <el-card class="box-card">
          <template #header>
          <div class="card-header">
              <span>BSMU2-轴承数据</span>
          </div>
          </template>
          <div class="block">
            <el-date-picker
              v-model="month5"
              type="month"
              placeholder="Pick a month"
            />
        </div>
        <div class="log">
          <el-button @click="log1">查询</el-button>
        </div>
        <el-drawer v-model="draw5" :before-close="handleClose5" title="点击文件名下载">
          <div v-for="(value,index) in monthFiles1" :key='index' class="text item">
              <el-button @click="rowDownload3(value)" type="text">{{value}}</el-button>
              <br/>
          </div>
        </el-drawer>
      </el-card>

      <el-card class="box-card">
          <template #header>
          <div class="card-header">
              <span>BSMU2-蛇行稳定性数据</span>
          </div>
          </template>
          <div class="block">
            <el-date-picker
              v-model="month6"
              type="month"
              placeholder="Pick a month"
            />
        </div>
        <div class="log">
          <el-button @click="log1">查询</el-button>
        </div>
        <el-drawer v-model="draw6" :before-close="handleClose6" title="点击文件名下载">
          <div v-for="(value,index) in monthFiles1" :key='index' class="text item">
              <el-button @click="rowDownload4(value)" type="text">{{value}}</el-button>
              <br/>
          </div>
        </el-drawer>
      </el-card>

      <el-card class="box-card">
          <template #header>
          <div class="card-header">
              <span>BSMU2-车体平稳性数据</span>
          </div>
          </template>
          <div class="block">
            <el-date-picker
              v-model="month7"
              type="month"
              placeholder="Pick a month"
            />
        </div>
        <div class="log">
          <el-button @click="log1">查询</el-button>
        </div>
        <el-drawer v-model="draw7" :before-close="handleClose7" title="点击文件名下载">
          <div v-for="(value,index) in monthFiles1" :key='index' class="text item">
              <el-button @click="rowDownload3(value)" type="text">{{value}}</el-button>
              <br/>
          </div>
        </el-drawer>
      </el-card>

      <el-card class="box-card">
          <template #header>
          <div class="card-header">
              <span>BSMU2-原始采样数据</span>
          </div>
          </template>
          <div class="block">
            <el-date-picker
              v-model="month8"
              type="month"
              placeholder="Pick a month"
            />
        </div>
        <div class="log">
          <el-button @click="log1">查询</el-button>
        </div>
        <el-drawer v-model="draw8" :before-close="handleClose8" title="点击文件名下载">
          <div v-for="(value,index) in monthFiles1" :key='index' class="text item">
              <el-button @click="rowDownload3(value)" type="text">{{value}}</el-button>
              <br/>
          </div>
        </el-drawer>
      </el-card>
    </div>

    
  </div>
</template>

<script>
import { onMounted, ref, reactive } from "vue";
import axios from 'axios';
export default {
  setup() {
      let fileNames1 = reactive([]) // BSMU1轴承
      let fileNames2 = reactive([]) // BSMU1蛇行
      let monthFiles1 = reactive([])
      let draw1 = ref(false)
      let draw2 = ref(false)
      let month1 = ref('')
      let month2 = ref('')
      const rowDownload1 = (value) => {
          axios({
              url: "http://39.107.238.92:8080/download/row/downFile1", //your url
              method: 'GET',
              responseType: 'blob', // important
              params: {
                  name: value
              }
          }).then((response) => {
              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', value); //or any other extension
              document.body.appendChild(link);
              link.click();
          });
      };

      const rowDownload2 = (value) => {
          axios({
              url: "http://39.107.238.92:8080/download/row/downFile2", //your url
              method: 'GET',
              responseType: 'blob', // important
              params: {
                  name: value
              }
          }).then((response) => {
              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', value); //or any other extension
              document.body.appendChild(link);
              link.click();
          });
      };

      const rowDownload3 = (value) => {
          axios({
              url: "http://39.107.238.92:8080/download/row/downFile3", //your url
              method: 'GET',
              responseType: 'blob', // important
              params: {
                  name: value
              }
          }).then((response) => {
              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', value); //or any other extension
              document.body.appendChild(link);
              link.click();
          });
      };

      const rowDownload4 = (value) => {
          axios({
              url: "http://39.107.238.92:8080/download/row/downFile4", //your url
              method: 'GET',
              responseType: 'blob', // important
              params: {
                  name: value
              }
          }).then((response) => {
              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', value); //or any other extension
              document.body.appendChild(link);
              link.click();
          });
      };

      const getNames = () => {
          axios({
              url: 'http://39.107.238.92:8080/download/row/filenames1', //your url
              method: 'GET',
          }).then((response) => {
              console.log(response);
              response.data.forEach(item => {
                  fileNames1.push(item)
              });
          });

          axios({
              url: 'http://39.107.238.92:8080/download/row/filenames2', //your url
              method: 'GET',
          }).then((response) => {
              console.log(response);
              response.data.forEach(item => {
                  fileNames2.push(item)
              });
          });
      };

      const log1 = () => {
        fileNames1.forEach((item) => {
          if(JSON.stringify(month1.value).slice(6,8) === '12') {
            if(item.slice(0,4) == parseInt(JSON.stringify(month1.value).slice(1,5))+1 && item.slice(4,6) == '01') {
              monthFiles1.push(item)
            }
          } else {
            if(item.slice(0,4) === JSON.stringify(month1.value).slice(1,5) && item.slice(4,6) == parseInt(JSON.stringify(month1.value).slice(6,8))+1) {
              monthFiles1.push(item)
            }
          }
        })
        draw1.value = true
      }

      const handleClose1 = () => {
        monthFiles1.length = 0
        draw1.value = false
      }

      const log2 = () => {
        fileNames2.forEach((item) => {
          if(JSON.stringify(month2.value).slice(6,8) === '12') {
            if(item.slice(0,4) == parseInt(JSON.stringify(month2.value).slice(1,5))+1 && item.slice(4,6) == '01') {
              monthFiles1.push(item)
            }
          } else {
            if(item.slice(0,4) === JSON.stringify(month2.value).slice(1,5) && item.slice(4,6) == parseInt(JSON.stringify(month2.value).slice(6,8))+1) {
              monthFiles1.push(item)
            }
          }
        })
        draw2.value = true
      }

      const handleClose2 = () => {
        monthFiles1.length = 0
        draw2.value = false
      }

      onMounted(() => {
          getNames()
          
      })

      return {
        rowDownload1,
        rowDownload2,
        rowDownload3,
        rowDownload4,
        getNames,
        monthFiles1,
        fileNames1,
        fileNames2,
        month1,
        month2,
        draw1,
        draw2,
        log1,
        log2,
        handleClose1,
        handleClose2,
      }
  }
}
</script>

<style>
.container {
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 40%;
    display: inline-block;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.log {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  font-size: 16px;
}

.item {
  margin-bottom: 10px;
  margin-left: 20px;
}

.box-card {
  width: 480px;
  margin: 10px;
}

.block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.mainCC {
  display: flex;
  justify-content: center;
  align-items: center;
  
}
</style>