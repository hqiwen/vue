<template>
  <div>{{value}}</div>
</template>
<script>
/*
 * t: current time（当前时间）；
 * b: beginning value（初始值）；
 * c: change in value（变化量）；
 * d: duration（持续时间）。
 */
function Linear(t, b, c, d) {
  return (c * t) / d + b;
}

function isInViewPortOfOne(el) {
  // viewPortHeight 兼容所有浏览器写法
  const viewPortHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  const offsetTop = el.offsetTop;
  const scrollTop = document.documentElement.scrollTop;
  const top = offsetTop - scrollTop;
  return top <= viewPortHeight;
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
      default: 10
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
        Linear(
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
      if (this.once) {
        return;
      } else {
        if (isInViewPortOfOne(this.$el)) {
          this.step();
          this.once = true;
        }
      }
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
