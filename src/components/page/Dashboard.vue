<template>
  <div>
    <el-row>
      <el-col class="table_title" :span="24">
        <span>案件录入受理模块</span>
        <span style="color:#176ca5" @click="gotoDetail()">更多》</span>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%" stripe="true">
      <el-table-column type='index' label="序号" width="50" align="center"></el-table-column>
      <el-table-column prop="anjianhao" label="案件号" width="180" align="center"></el-table-column>
      <el-table-column prop="xingming" label="姓名" width="80" align="center"></el-table-column>
      <el-table-column prop="shenfenzheng" label="身份证号" width="220" align="center"></el-table-column>
      <el-table-column prop="type" label="案件类型" width="80" align="center"></el-table-column>
      <el-table-column prop="dcType" label="调查类型" width="80" align="center"></el-table-column>
      <el-table-column prop="diaochaTime" label="委托时间" width="180" align="center"></el-table-column>
      <el-table-column prop="jiezhiTile" label="截止日期" width="180" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="案件状态" width="180" align="center"></el-table-column>
      <el-table-column prop="weituoGongsi" label="委托公司" width="180" align="center"></el-table-column>
      <el-table-column label="案件详情" width="180" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col class="table_title" :span="24">
        <span>案件录入受理模块</span>
        <span style="color:#176ca5">更多》</span>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%" stripe="true">
      <el-table-column type='index' label="序号" width="50" align="center"></el-table-column>
      <el-table-column prop="anjianhao" label="案件号" width="180" align="center"></el-table-column>
      <el-table-column prop="xingming" label="姓名" width="80" align="center"></el-table-column>
      <el-table-column prop="shenfenzheng" label="身份证号" width="220" align="center"></el-table-column>
      <el-table-column prop="type" label="案件类型" width="80" align="center"></el-table-column>
      <el-table-column prop="dcType" label="调查类型" width="80" align="center"></el-table-column>
      <el-table-column prop="diaochaTime" label="委托时间" width="180" align="center"></el-table-column>
      <el-table-column prop="jiezhiTile" label="截止日期" width="180" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="案件状态" width="180" align="center"></el-table-column>
      <el-table-column prop="weituoGongsi" label="委托公司" width="180" align="center"></el-table-column>
      <el-table-column label="案件详情" width="180" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col class="table_title" :span="24">
        <span>案件录入受理模块</span>
        <span style="color:#176ca5">更多》</span>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%" stripe="true">
       <el-table-column type='index' label="序号" width="50" align="center"></el-table-column>
      <el-table-column prop="anjianhao" label="案件号" width="180" align="center"></el-table-column>
      <el-table-column prop="xingming" label="姓名" width="80" align="center"></el-table-column>
      <el-table-column prop="shenfenzheng" label="身份证号" width="220" align="center"></el-table-column>
      <el-table-column prop="type" label="案件类型" width="80" align="center"></el-table-column>
      <el-table-column prop="dcType" label="调查类型" width="80" align="center"></el-table-column>
      <el-table-column prop="diaochaTime" label="委托时间" width="180" align="center"></el-table-column>
      <el-table-column prop="jiezhiTile" label="截止日期" width="180" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="案件状态" width="180" align="center"></el-table-column>
      <el-table-column prop="weituoGongsi" label="委托公司" width="180" align="center"></el-table-column>
      <el-table-column label="案件详情" width="180" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import bus from "../common/bus";
export default {
  name: "dashboard",
  data() {
    return {
      tableData: [
        {
          xuhao: "",
          anjianhao: "(2019)案件号开始",
          xingming: "子谦",
          shenfenzheng: 612323199212248313,
          type: "即时案件",
          dcType: "全单",
          diaochaTime: "2019-7-29",
          jiezhiTile: "2019-8-29",
          zhuangtai: "待处理",
          weituoGongsi: "西安唐墨科技"
        },
        {
          xuhao: "",
          anjianhao: "(2019)案件号开始",
          xingming: "子谦",
          shenfenzheng: 612323199212248313,
          type: "即时案件",
          dcType: "全单",
          diaochaTime: "2019-7-29",
          jiezhiTile: "2019-8-29",
          zhuangtai: "待处理",
          weituoGongsi: "西安唐墨科技"
        },
        {
          xuhao: "",
          anjianhao: "(2019)案件号开始",
          xingming: "子谦",
          shenfenzheng: 612323199212248313,
          type: "即时案件",
          dcType: "全单",
          diaochaTime: "2019-7-29",
          jiezhiTile: "2019-8-29",
          zhuangtai: "待处理",
          weituoGongsi: "西安唐墨科技"
        }
      ]
    };
  },
  computed: {
    role() {
      return this.name === "admin" ? "超级管理员" : "普通用户";
    }
  },
  created() {
    this.handleListener();
    this.changeDate();
  },
  activated() {
    this.handleListener();
  },
  deactivated() {
    window.removeEventListener("resize", this.renderChart);
    bus.$off("collapse", this.handleBus);
  },
  methods: {
    handleClick(e) {
      console.log(e);
      this.$router.push("/caseShouli");
    },
    gotoDetail() {
      this.$router.push("/fenlei1");
    },
    changeDate() {
      const now = new Date().getTime();
      this.data.forEach((item, index) => {
        const date = new Date(now - (6 - index) * 86400000);
        item.name = `${date.getFullYear()}/${date.getMonth() +
          1}/${date.getDate()}`;
      });
    },
    handleListener() {
      bus.$on("collapse", this.handleBus);
      // 调用renderChart方法对图表进行重新渲染
      window.addEventListener("resize", this.renderChart);
    },
    handleBus(msg) {
      setTimeout(() => {
        this.renderChart();
      }, 300);
    },
    renderChart() {
      this.$refs.bar.renderChart();
      this.$refs.line.renderChart();
    }
  }
};
</script>


<style scoped>
.table_title {
  padding: 20px;
  padding-bottom: 0px;
  display: flex;
  justify-content: space-between;
}
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}

.schart {
  width: 100%;
  height: 300px;
}
</style>
