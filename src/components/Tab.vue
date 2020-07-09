<template>
  <div class="pane" v-show="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "pane",
  props: {
    name: {
      type: String
    },
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: String
    }
  },
  data() {
    return {
      show: true
    };
  },
  methods: {
    updateNav() {
      this.$parent.updateNav();
    }
  },
  watch: {
    label() {
      this.updateNav();
    }
  },
  mounted() {
    this.updateNav();
  },
  computed: {
    active() {
      return false;
    }
  }
};
</script>

<style lang="css" scoped>
.pane {
  display: flex;
  align-items: center;
}
</style>