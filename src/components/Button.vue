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
  display: inline-block;

  padding: 14px 45px;

  text-transform: uppercase;

  border-radius: 50px;

  font-size: 16px;
  font-weight: 600;
}

a.btn-fill {
  color: #fff;
  background: #00c9b7;
}

a.btn-fill:not(.disable-hover):hover {
  color: #00c9b7;
  background: #fff;
}

a.btn-fill.white {
  color: #00c9b7;
  border: 2px solid #00c9b7;
  background: #fff;
}

a.btn-fill.white:hover {
  color: #fff;
  background: #00c9b7;
}
</style>