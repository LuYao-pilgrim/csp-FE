<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-down"></i> 轴箱振动信号分析
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
    <div id="rowChart3" class="t1"></div>
    <div id="rowChart4" class="t1"></div>
  </div>
</template>

<script>
import { onMounted, ref, reactive } from "vue";
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
        list3 = fourList[2].split("\t")
        list4 = fourList[3].split("\t")
        list1 = list1.map(Number)
        list2 = list2.map(Number)
        list3 = list3.map(Number)
        list4 = list4.map(Number)
      };
    };

    const handleClick = () => {
        let t1 = echarts.init(document.getElementById("rowChart1"));
        let t2 = echarts.init(document.getElementById("rowChart2"));
        let t3 = echarts.init(document.getElementById("rowChart3"));
        let t4 = echarts.init(document.getElementById("rowChart4"));
        t1.setOption({
            title: {
                text: "转向架轴箱1",
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
                text: "转向架轴箱2",
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
        t3.setOption({
            title: {
                text: "转向架轴箱3",
            },
            xAxis: {
            type: 'category',
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: list3,
                type: 'line'
                }
            ]});
        t4.setOption({
            title: {
                text: "转向架轴箱4",
            },
            xAxis: {
            type: 'category',
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: list4,
                type: 'line'
                }
            ]});

        }

    return {
      fileList,
      list1,
      list2,
      list3,
      list4,
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
  width: 1000px;
  height: 300px;
}
</style>