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

<style scoped>
.pane {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .pane {
    flex-direction: column;
  }

  .pane img {
    width: 100%;
  }
}
</style>