<template>
  <div class="departments tabs">
    <div class="tabs-bar">
      <!--标签页标题，通过v-for实现循环-->
      <div
        :class="tabCls(item)"
        v-for="(item,index) in navList"
        @click="handleChange(index)"
        :key="item.name"
      >
        <div class="nav-icon mb-30">
          <i :class="item.icon"></i>
        </div>
        <p>{{item.label}}</p>
      </div>
    </div>
    <div class="tabs-content">
      <!--slot放置pane组件内容-->
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tabs",
  props: {
    value: {
      type: String,
      default: "1"
    }
  },
  data() {
    return {
      currentValue: this.value,
      navList: []
    };
  },
  methods: {
    tabCls(item) {
      return [
        "tabs-tab",
        {
          "tabs-tab-active": item.name === this.currentValue
        }
      ];
    },
    getTabs() {
      //获取pane
      return this.$children.filter(function(item) {
        return item.$options.name === "pane";
      });
    },
    updateNav() {
      //获取标题，name,并放置到navList数组中
      this.navList = [];
      let _this = this;
      this.getTabs().forEach(function(pane, index) {
        _this.navList.push({
          label: pane.label,
          icon: pane.icon,
          name: pane.name || index
        });
        if (!pane.name) pane.name = index;
        if (index === 0) {
          if (!_this.currentValue) {
            _this.currentValue = pane.name || index;
          }
        }
      });
      this.updateStatus();
    },
    updateStatus() {
      let tabs = this.getTabs();
      let _this = this;
      tabs.forEach(function(tab) {
        let b = tab.name === _this.currentValue;
        tab.show = b;
        return tab.show;
      });
    },
    handleChange(index) {
      let nav = this.navList[index];
      let name = nav.name;
      this.currentValue = name;
      this.$emit("input", name);
      this.$emit("on-click", name);
    }
  },
  watch: {
    value: function(val) {
      this.currentValue = val;
    },
    currentValue() {
      this.updateStatus();
    }
  }
};
</script>

<style>
.tabs {
  color: #657180;

  font-size: 14px;
}
.tabs-bar:after {
  display: block;

  width: 100%;
  height: 1px;
  margin-top: -1px;

  content: "";

  background: #d7dde4;
}
.tabs-tab {
  position: relative;

  display: inline-block;

  width: 12%;
  margin-right: 6px;
  padding: 20px;

  cursor: pointer;
  text-align: center;

  background: #fff;
}
.tabs-tab-active {
  color: #fff;
  background: #00c9b7;
}
.tabs-tab-active:before {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  display: block;

  height: 1px;

  content: "";

  background: #39f;
}
.nav-icon {
  width: 40px;
  height: 40px;
  margin: 0 auto;

  cursor: pointer;
  text-align: center;

  color: #fff;
  border-radius: 50%;
  background: #00c9b7;

  line-height: 40px;
}
.tabs-tab-active .nav-icon {
  color: #00c9b7;
  background: #fff;
}
.tabs-content {
  padding: 8px 0;
}
</style>