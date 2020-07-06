<template>
  <header>
    <Affix>
      <div class="headerTop primary-bg">
        <el-row class="topContent container">
            <el-col>
              <el-row class="social justify-content-start">
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
            <el-col>
              <el-row class="languagesAndAccount justify-content-end">
                <el-button round>ENG</el-button>
                <el-button round>MY ACCOUNT</el-button>
              </el-row>
            </el-col>
          </el-row>
      </div>

      <!-- 导航区域 -->
      <el-row class="nav container">
        <el-col class="logo justify-content-start">
          <img alt="Vue logo" src="../assets/images/logo.png" />
        </el-col>
        <!-- 水平菜单 -->
        <el-col class="horizontalMenu justify-content-end">
          <el-menu class="navMenu" mode="horizontal">
            <el-menu-item index="1">
              <a>HOME</a>
            </el-menu-item>
            <el-menu-item index="2"><a>ABOUT US</a></el-menu-item>
            <el-submenu index="3">
              <template slot="title">SERVICES</template>
              <el-menu-item index="3-1"><a>SERVICES 1</a></el-menu-item>
              <el-menu-item index="3-2"><a>SERVICES 2</a></el-menu-item>
              <el-menu-item index="3-3"><a>SERVICES DETAILS</a></el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">PAGES</template>
              <el-menu-item index="4-1"><a>DOCTORS</a></el-menu-item>
              <el-menu-item index="4-2"><a>DOCTORS DETAILS</a></el-menu-item>
              <el-menu-item index="4-3"><a>BLOG</a></el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">BLOG</template>
              <el-menu-item index="5-1"><a>BLOGS</a></el-menu-item>
              <el-menu-item index="5-2"><a>BLOGS DETAILS</a></el-menu-item>
            </el-submenu>
            <el-menu-item index="6">
              <a href>CONTACT</a>
            </el-menu-item>
            <el-menu-item index="7">
              <button class="primary-bg search" @click="handleSearch"><i class="fa fa-search white"></i></button>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col class="verticalMenu justify-content-end">
          <button class="" @click="handleOpen"><i class="el-icon-menu"></i></button>
        </el-col>
      </el-row>
      <!-- 导航区域 -->
      
      <!-- 垂直菜单 -->
      <el-row>
          <el-menu v-if="showMenu" class="navMenu" mode="vertical">
              <el-menu-item index="1">
                <a>HOME</a>
              </el-menu-item>
              <el-menu-item index="2">ABOUT US</el-menu-item>
              <el-submenu index="3">
                <template slot="title">SERVICES</template>
                <el-menu-item index="3-1">SERVICES 1</el-menu-item>
                <el-menu-item index="3-2">SERVICES 2</el-menu-item>
                <el-menu-item index="3-3">SERVICES DETAILS</el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">PAGES</template>
                <el-menu-item index="4-1">DOCTORS</el-menu-item>
                <el-menu-item index="4-2">DOCTORS DETAILS</el-menu-item>
                <el-menu-item index="4-3">BLOG</el-menu-item>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">BLOG</template>
                <el-menu-item index="5-1">ALL BLOGS</el-menu-item>
                <el-menu-item index="5-2">BLOGS DETAILS</el-menu-item>
              </el-submenu>
              <el-menu-item index="6">
                <a href>CONTACT</a>
              </el-menu-item>
              <el-menu-item index="7">
                <button class="primary-bg search" @click="handleSearch"><i class="fa fa-search white"></i></button>
              </el-menu-item>
            </el-menu>
        </el-row>
    </Affix>
  </header>
</template>

<script>
import Affix from './Affix'

export default {
  data() {
    return {
      showSearch: false,
      showMenu: false
    }
  },
  methods: {
    handleOpen() {
      this.showMenu = !this.showMenu
    },
    handleSearch() {
      this.$prompt(null, null, {
          confirmButtonText: '搜索',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的搜索内容: ' + value
          });
        })
    }
  },
  components: {
    Affix
  }
};
</script>

<style>
.topContent {
  display: flex;
  flex-flow: row;
}

@media screen and (min-width: 575px) {
  .verticalMenu.justify-content-end {
    display: none
  }
}

@media (max-width: 575px) {

  .horizontalMenu.justify-content-end {
    display: none
  }

  .topContent {
    flex-flow: column;
  }

  .topContent .social {
    justify-content: center;
  }

  .topContent .languagesAndAccount {
    justify-content: center;
    margin-top: 10px;
  }
}

.verticalMenu .el-icon-menu {
  font-size: 3rem
}

.headerTop {
  padding: 20px 0;
}

.languagesAndAccount {
  flex-flow: wrap;
}

.social a {
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  color: #00c9b7;
  background: #ffffff;
  display: inline-block;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
}

.languagesAndAccount button {
  border-radius: 50px;
  background: #00c9b7;
  color: #ffffff;
}

.languagesAndAccount button:hover {
  background: #ffffff;
  color: #292929;
}

.nav {
  display: flex;
  padding: 0.5rem 0;
}

.nav .logo {
  flex: 1;
}

.navMenu.el-menu.el-menu--horizontal {
  border: none;
  background: none;
}

.navMenu.el-menu--horizontal>.el-menu-item.is-active {
  border: none
}

.navMenu .search {
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  display: inline-block;
  border-radius: 50%;
  border: none;
}

.navMenu .white {
  color: #fff;
  cursor: pointer;
}

.navMenu .search:focus {
  outline: none;
}

</style>
