<template>
  <div class="section-area">
    <div class="container">
      <div class="section-header">
        <slot name="header"></slot>
      </div>
      <div class="section-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.section-area {
  padding: 100px 0;

  text-align: center;
}

.section-header {
  width: 60%;
  margin: 30px auto;
}

.department-area .section-header {
  display: flex;
  align-items: center;

  width: 100%;
}

h2.section-title {
  margin-bottom: 30px;
}

h2.section-title:after {
  position: absolute;
  bottom: -20px;
  left: 50%;

  width: 40px;
  height: 4px;

  content: "";
  transform: translate(-50%, 0);

  background: #00c9b7;
}

.section-content {
  display: flex;
}

.call-to-action .section-content {
  justify-content: space-around;
}

.service .section-content {
  flex-wrap: wrap;
}

.service .section-item {
  width: 30%;
}

@media screen and (max-width: 768px) {
  .section-content {
    flex-direction: column;
  }

  .service .section-item {
    width: 100%;
  }

  .department-area .section-header {
    flex-direction: column;
  }
}
</style>