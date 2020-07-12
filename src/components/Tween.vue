<template>
  <div @click="showValue">{{value}}</div>
</template>
<script>
/*
 * t: current time（当前时间）；
 * b: beginning value（初始值）；
 * c: change in value（变化量）；
 * d: duration（持续时间）。
 */

// eslint-disable-next-line
function Linear(t, b, c, d) {
  return (c * t) / d + b;
}

function EaseInOut(t, b, c, d) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
  return (-c / 2) * (--t * (t - 2) - 1) + b;
}

function isInViewPortOfOne(el) {
  // viewPortHeight 兼容所有浏览器写法
  const viewPortHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  const top = el.getBoundingClientRect() && el.getBoundingClientRect().top;
  // 让可视元素高于底部200px
  return top <= viewPortHeight - 200;
}

export default {
  props: {
    beginningValue: {
      type: Number,
      default: 0
    },
    changeValue: {
      type: Number,
      default: 500
    },
    duration: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      currentTime: 0,
      once: false,
      value: 0
    };
  },
  methods: {
    step() {
      // value就是当前的位置值
      let nextValue = Math.round(
        EaseInOut(
          this.currentTime,
          this.beginningValue,
          this.changeValue,
          this.duration
        )
      );
      this.value = nextValue;
      this.currentTime++;
      if (this.currentTime <= this.duration) {
        window && window.requestAnimationFrame(this.step);
      }
    },
    handleScroll() {
      if (!this.once && isInViewPortOfOne(this.$el)) {
        this.once = true;
        this.step();
      }
    },
    showValue() {
      this.$message({
        type: "success",
        message: "你的点击内容: " + this.value
      });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
