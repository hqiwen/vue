<template>
  <a class="btn-fill" :class="checkClass(white, hover)">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    white: {
      type: Boolean
    },
    hover: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    checkClass(white, hover) {
      let cls = "";
      !hover && (cls += " disable-hover");
      white && (cls += " white");
      return cls;
    }
  }
};
</script>
<style scoped>
a {
  font-size: 16px;
  font-weight: 600;
  padding: 14px 45px;
  display: inline-block;
  border-radius: 50px;
  text-transform: uppercase;
}

a.btn-fill {
  background: #00c9b7;
  color: #fff;
}

a.btn-fill:not(.disable-hover):hover {
  background: #fff;
  color: #00c9b7;
}

a.btn-fill.white {
  background: #fff;
  color: #00c9b7;
  border: 2px solid #00c9b7;
}

a.btn-fill.white:hover {
  background: #00c9b7;
  color: #fff;
}
</style>