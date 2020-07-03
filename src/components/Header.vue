<template>
    <header class="headerContainer">
      <el-row class="headerTop primary-bg">
        <el-col :xs="10" :sm="10" :md="8" :lg="6" :xl="6">
          <el-row class="social center">
            <a>
              <i class="fa fa-facebook"></i>
            </a>
            <a>
              <i class="fa fa-pinterest"></i>
            </a>
            <a>
              <i class="fa fa-twitter"></i>
            </a>
            <a>
              <i class="fa fa-linkedin"></i>
            </a>
          </el-row>
        </el-col>
        <el-col :xs="14" :sm="14" :md="16" :lg="18" :xl="18">
          <el-row class="languagesAndAccount center">
            <el-button round>ENG</el-button>
            <el-button round>MY ACCOUNT</el-button>
          </el-row>
        </el-col>
      </el-row>

      <nav>
        <div class="logo">
          <img alt="Vue logo" src="../assets/images/logo.png" />
        </div>
        <div class="navMenu"></div>
      </nav>
    </header>
</template>

<script>
export default {};
</script>

<style>
.primary-bg {
  background: #00C9B7;
}
.headerTop {
  padding: 20px 0;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.social a {
    height: 40px;
    width: 40px;
    line-height: 40px;
    text-align: center;
    color: #00C9B7;
    background: #ffffff;
    display: inline-block;
    border-radius: 50%;
    margin-right: 5px;
    cursor: pointer;
}
.languagesAndAccount button {
  border-radius: 50px;
  background:#00C9B7;
  color:#ffffff
}
.languagesAndAccount button:hover{
    background: #ffffff;
    color: #292929;
}
</style>