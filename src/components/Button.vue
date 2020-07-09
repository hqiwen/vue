<template>
  <a class="btn-fill" :class="white ? 'white' : null">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    white: {
      type: Boolean
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
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.4s;
}

a.btn-fill {
  background: #00c9b7;
  color: #fff;
}

a.btn-fill:hover {
  background: #fff;
  color: #00c9b7;
}

a.btn-fill.white {
  background: #fff;
  color: #00c9b7;
}

a.btn-fill.white:hover {
  background: #00c9b7;
  color: #fff;
}
</style>