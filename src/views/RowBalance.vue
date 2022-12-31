<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-down"></i> 车体平稳性信号分析
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-upload
      class="upload"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
      :on-change="handleChange"
      :file-list="fileList"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        拖曳文件至此或 <em>点击以上传</em>
      </div>
    </el-upload>

    <el-button type="primary" @click="handleClick" class="uploadBTN">展示图表</el-button>

    <div id="rowChart1" class="t1"></div>
    <div id="rowChart2" class="t1"></div>
  </div>
</template>

<script>
import { reactive } from "vue";
import * as echarts from "echarts";
export default {
  setup() {
    let fileList = reactive([]);
    let list1 = reactive([]);
    let list2 = reactive([]);
    let list3 = reactive([]);
    let list4 = reactive([]);
    
    const handleChange = (file, fileList) => {
      fileList = fileList.slice(-1);
      let reader = new FileReader();
      reader.readAsText(file.raw, "UTF-8");
      if (typeof FileReader === "undefined") {
        alert("你的浏览器不支持");
        return;
      }
      reader.onload = (e) => {
        let res = e.target.result;
        let fourList = res.split("\n");
        list1 = fourList[0].split("\t")
        list2 = fourList[1].split("\t")
        list1 = list1.map(Number)
        list2 = list2.map(Number)
      };
    };

    const handleClick = () => {
        let t1 = echarts.init(document.getElementById("rowChart1"));
        let t2 = echarts.init(document.getElementById("rowChart2"));
        t1.setOption({
            title: {
                text: "转向架传感器1",
            },
            xAxis: {
            type: 'category',
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: list1,
                type: 'line'
                }
            ]});
        t2.setOption({
            title: {
                text: "转向架传感器2",
            },
            xAxis: {
            type: 'category',
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: list2,
                type: 'line'
                }
            ]});
        

        }

    return {
      fileList,
      list1,
      list2,
      handleChange,
      handleClick,
    };
  },
};
</script>

<style>
.uploadBTN {
  margin-top: 20px;
  margin-bottom: 20px;
}
.t1 {
  width: 1200px;
  height: 300px;
}
</style>