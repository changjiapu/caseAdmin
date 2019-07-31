<template>
  <div class="caseInput">
    <el-row class="btn">
      <el-button type="success">查看委托资料</el-button>
    </el-row>
    <el-row class="table">
      <el-row class="t_content">
        <el-row class="table_row">
          <el-col :span="2" class="title">姓名</el-col>
          <el-col :span="6">
            <input class="input" type="text" />
          </el-col>
          <el-col :span="2" class="title">性别</el-col>
          <el-col :span="6">
            <input class="input" type="text" />
          </el-col>
          <el-col :span="2" class="title">证件类型</el-col>
          <el-col :span="6">
            <input class="input" type="text" />
          </el-col>
        </el-row>
        <el-row class="table_row">
          <el-col :span="2" class="title">证件号码</el-col>
          <el-col :span="6">
            <input class="input" type="text" />
          </el-col>
          <el-col :span="2" class="title">投保日期</el-col>
          <el-col :span="6">
            <input class="input" type="text" />
          </el-col>
          <el-col :span="2" class="title">出险时间</el-col>
          <el-col :span="6">
            <input class="input" type="text" />
          </el-col>
        </el-row>
        <el-row class="table_row2">
          <el-col :span="2" class="title">出险经过</el-col>
          <el-col :span="22">
            <textarea name id cols="200" rows="4"></textarea>
          </el-col>
        </el-row>
        <el-row class="table_row">
          <el-col :span="2" class="title">险种</el-col>
          <el-col :span="6">
            <input class="input" type="text" />
          </el-col>
          <el-col :span="2" class="title">案件类型</el-col>
          <el-col :span="6">
            <input class="input" type="text" />
          </el-col>
          <el-col :span="2" class="title">调查类型</el-col>
          <el-col :span="6">
            <input class="input" type="text" />
          </el-col>
        </el-row>
        <el-row class="table_row">
          <el-col :span="2" class="title">时效</el-col>
          <el-col :span="6">
            <input class="input" type="text" />
          </el-col>
          <el-col :span="2" class="title">调查事项</el-col>
          <el-col :span="6">
            <input class="input" type="text" />
          </el-col>
          <el-col :span="2" class="title">委托公司</el-col>
          <el-col :span="6">
            <input class="input" type="text" />
          </el-col>
        </el-row>
        <el-row class="table_row">
          <el-col :span="2" class="title">委托费用</el-col>
          <el-col :span="6">
            <input class="input" type="text" />
          </el-col>
          <el-col :span="2" class="title">奖励比列</el-col>
          <el-col :span="6">
            <input class="input" type="text" />
          </el-col>
          <el-col :span="2" class="title">回复天数</el-col>
          <el-col :span="6">
            <input class="input" type="text" />
          </el-col>
        </el-row>
        <el-row class="table_row3">
          <el-col :span="2" class="title">上传委托资料</el-col>
          <el-col :span="10">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-col>
        </el-row>
        <el-row class="table_row3">
          <el-col :span="2" class="title">申请书上传</el-col>
          <el-col :span="10">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-col>
        </el-row>
      </el-row>
      <el-row class="btn2">
        <el-button class="bt" >取消</el-button>
        <el-button  class="bt" type="primary">完成</el-button>
      </el-row>
    </el-row>
  </div>
</template>
<script>
import { baseURL, imgURL } from "@/utils/config.js";
import { addCategory, getCategory } from "@/api/index.js";
export default {
  data: function() {
    return {
      input: "",
      baseURL: baseURL,
      imgURL: imgURL
    };
  },
  created() {},
  methods: {}
};
</script>
<style lang='less' scoped>
input {
  outline: none;
}
textarea {
  outline: none;
}
.input {
  height: 49px;
  line-height: 49px;
  width: 100%;
  border: none;
  font-size: 16px;
}
textarea {
  border: none;
  width: 100%;
  font-size: 16px;
}
.caseInput {
  width: 100%;
  .btn {
    padding: 20px 0;
    display: flex;
    justify-content: flex-end;
  }
  .table {
    width: 100%;
    box-sizing: border-box;
    padding: 40px 20px;
    background-color: #ffffff;
    .t_content {
      width: 100%;
      border: 1px solid #cccccc;
      .table_row {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #cccccc;
        .title {
          height: 100%;
          line-height: 50px;
          background-color: #f5f5f5;
          text-align: center;
        }
      }
    }
    .table_row2 {
      width: 100%;
      height: 80px;
      border-bottom: 1px solid #cccccc;
      .title {
        height: 100%;
        line-height: 80px;
        background-color: #f5f5f5;
        text-align: center;
      }
    }
    .table_row3 {
      display: flex;
      width: 100%;
      border-bottom: 1px solid #cccccc;
      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f5f5f5;
      }
      .upload-demo {
        margin-top: 20px;
      }
    }
    .btn2{
      margin-top: 40px;
      display: flex;
      justify-content: center;
      .bt{
        width: 120px;
        height: 40px;
      }
    }
  }
}
</style>
<style>
.el-upload--text {
  height: 40px;
  border: none;
}
</style>



