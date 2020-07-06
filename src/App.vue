<template>
  <div id="app">
    <Header />

    <main>
      <div class="single-hero">
        <div class="container relative">
          <el-row class="pb-70">
            <el-col :span="14">
              <h1 class="hero title mb-30">Meet with you best Doctor here</h1>
              <p
                class="hero description mb-30"
              >Ridiculus elit amet sagittis arcu cras ornare, amet a ameturna, vitae cras. Ipsum sociosqu.</p>
              <div class="hero operation">
                <Button class="mr-20">Appointment</Button>
                <Button color="white">LEARN MORE</Button>
              </div>
            </el-col>
          </el-row>
          <el-row class="hero-widgets">
            <el-col class="card primary-bg-dark">
              <div class="widgets-icon">
                <i class="fa fa-facebook"></i>
              </div>
              <div class="widgets-content">
                <h4>Friday to Saturday</h4>
                <p>08:30 am to 05:00 pm</p>
              </div>
            </el-col>
            <el-col class="card primary-bg">
              <div class="widgets-icon">
                <i class="fa fa-facebook"></i>
              </div>
              <div class="widgets-content">
                <h4>Friday to Saturday</h4>
                <p>08:30 am to 05:00 pm</p>
              </div>
            </el-col>
            <el-col class="card primary-bg-dark">
              <div class="widgets-icon">
                <i class="fa fa-facebook"></i>
              </div>
              <div class="widgets-content">
                <h4>Friday to Saturday</h4>
                <p>08:30 am to 05:00 pm</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>

      <div class="book-appointment">
        <div class="container">
          <el-row style="display: flex; align-items:center; padding-top: 70px;">
            <el-col :offset="1" :span="12" class="book-img">
              <img src="./assets/images/doctor.png" />
            </el-col>
            <el-col :offset="2" :span="8">
              <el-card class="book-card">
                <div slot="header" class="clearfix">
                  <h2>Book Appointment</h2>
                </div>
                <div class="choose-book-info">
                  <el-form ref="form" :model="form" :rules="rules">
                    <el-form-item>
                      <el-select style="width: 100%;" v-model="form.area" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item>
                      <el-select style="width: 100%;" v-model="form.doctor" placeholder="请选择医生">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item prop="fullName" placeholder="fullName" required>
                      <el-input v-model="form.fullName"></el-input>
                    </el-form-item>
                    <el-form-item prop="phone">
                      <el-input v-model="form.phone" placeholder="phone number"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="form.date"
                        style="width: 100%;"
                        required
                      ></el-date-picker>
                    </el-form-item>
                    <el-form-item>
                      <button
                        class="btn--mid btn--fill"
                        style="width: 100%;"
                        @click="onSubmit"
                      >BOOK YOU APPOINTMENT</button>
                    </el-form-item>
                  </el-form>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>

      <div class="services gray-bg section-area">
        <div class="container">
          <div class="service-header section-header mb-30 mt-30">
            <h2 class="services-title section-title mb-30">our services</h2>
            <p
              class="services-content"
            >Condimentum rutrum placerat egestas condimentum mi eros. Eleifend cras quirntum Feugiat elit placerat. Diam tempor malesuada</p>
          </div>

          <div class="service-info">
            <el-card class="single-service-info">
              <div class="info-icon">
                <i class="fa fa-facebook"></i>
              </div>
              <h3 class="info-title mb-5">Cardiology</h3>
              <p
                class="info-content"
              >Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce</p>
            </el-card>
            <el-card class="single-service-info">
              <div class="info-icon">
                <i class="fa fa-facebook"></i>
              </div>
              <h3 class="info-title .mb-5">Cardiology</h3>
              <p
                class="info-content"
              >Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce</p>
            </el-card>
            <el-card class="single-service-info">
              <div class="info-icon">
                <i class="fa fa-facebook"></i>
              </div>
              <h3 class="info-title mb-5">Cardiology</h3>
              <p
                class="info-content"
              >Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce</p>
            </el-card>
            <el-card class="single-service-info">
              <div class="info-icon">
                <i class="fa fa-facebook"></i>
              </div>
              <h3 class="info-title mb-5">Cardiology</h3>
              <p
                class="info-content"
              >Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce</p>
            </el-card>
            <el-card class="single-service-info">
              <div class="info-icon">
                <i class="fa fa-facebook"></i>
              </div>
              <h3 class="info-title mb-5">Cardiology</h3>
              <p
                class="info-content"
              >Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce</p>
            </el-card>
            <el-card class="single-service-info">
              <div class="info-icon">
                <i class="fa fa-facebook"></i>
              </div>
              <h3 class="info-title mb-5">Cardiology</h3>
              <p
                class="info-content"
              >Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce</p>
            </el-card>
          </div>
        </div>
      </div>

      <div class="expert-doctor section-area">
        <div class="container">
          <div class="doctor-header section-header mb-30 mt-30">
            <h2 class="doctor-title section-title mb-30">Our Expert Doctor</h2>
            <p
              class="doctor-content"
            >Condimentum rutrum placerat egestas condimentum mi eros. Eleifend cras quirntum Feugiat elit placerat. Diam tempor malesuada</p>
          </div>

          <div class="doctor-info">
            <el-card class="single-doctor-info">
              <div class="info-img">
                // todo: 图片位置的调整
                <img src="./assets/images/1.png" alt />
              </div>
              <h3 class="info-title mb-5">Cardiology</h3>
              <p
                class="info-content"
              >Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce</p>
              <div class="team-social">
                <a href class="facebook-bg">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href class="twitter-bg">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href class="google-plus-bg">
                  <i class="fa fa-google-plus"></i>
                </a>
              </div>
            </el-card>

            <el-card class="single-doctor-info">
              <div class="info-img">
                <img src="./assets/images/2.png" alt />
              </div>

              <h3 class="info-title mb-5">Cardiology</h3>
              <p
                class="info-content"
              >Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce</p>

              <div class="team-social">
                <a href class="facebook-bg">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href class="twitter-bg">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href class="google-plus-bg">
                  <i class="fa fa-google-plus"></i>
                </a>
              </div>
            </el-card>

            <el-card class="single-doctor-info">
              <div class="info-img">
                <img src="./assets/images/3.png" alt />
              </div>

              <h3 class="info-title mb-5">Cardiology</h3>
              <p
                class="info-content"
              >Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce</p>

              <div class="team-social">
                <a href class="facebook-bg">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href class="twitter-bg">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href class="google-plus-bg">
                  <i class="fa fa-google-plus"></i>
                </a>
              </div>
            </el-card>
          </div>
        </div>
      </div>

      <content class="mainContainer">
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </content>
    </main>

    <footer></footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Button from "./components/Button";
import Header from "./components/Header.vue";

export default {
  name: "App",
  data() {
    return {
      form: {
        area: "",
        doctor: "",
        fullName: "",
        phone: "",
        date: false
      },
      rules: {
        phone: [{ min: 12, max: 12, message: "长度12 个字符", trigger: "blur" }]
      }
    };
  },
  components: {
    HelloWorld,
    Header,
    Button
  },
  methods: {
    onSubmit() {
      console.log("submit");
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
}

body {
  font-size: 16px;
  color: #292929;
  line-height: 1.7em;
  font-weight: 400;
  background: #ffffff;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  font-family: "Open Sans", sans-serif;
}

a {
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
}

.justify-content-start {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.justify-content-end {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1200px;
}

.primary-bg {
  background: #00c9b7;
}
.primary-bg-dark {
  background: #03afa0;
}
.gray-bg {
  background: #f9f9f9;
}

.btn--mid {
  position: relative;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 45px;
  display: inline-block;
  border-radius: 50px;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.4s;
}

.btn--fill {
  color: #ffffff;
  background: #00c9b7;
}

.mr-20 {
  margin-right: 20px;
}

.mb-5 {
  margin-bottom: 5px;
}

.mb-30 {
  margin-bottom: 30px;
}

.mt-70 {
  margin-top: 70px;
}

.pb-70 {
  padding-bottom: 70px;
}

.relative {
  position: relative;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  position: relative;
  font-weight: 700;
  margin: 0px;
  background: none;
  line-height: 1.2em;
  font-family: "Poppins", sans-serif;
}

h2 {
  color: #292929;
  font-size: 40px;
}

p {
  line-height: 1.6em;
  font-family: "Open Sans", sans-serif;
}

.clearfix::after {
  content: "\20";
  display: block;
  height: 0;
  clear: both;
}

#app mainContainer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.single-hero {
  background: url("assets/images/hero.jpg") no-repeat center / 100% 100%;
}

.hero.title {
  font-size: 60px;
  font-weight: 700;
}

.hero.description {
  font-size: 18px;
  font-weight: 600;
  color: #555555;
}

.hero-widgets {
  display: flex;
}

.hero-widgets .card {
  /** */
  display: flex;
  padding: 40px;
  padding-right: 0;
  color: #ffffff;
}

.hero-widgets {
  width: 100%;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  padding: 0 15px;
}

.widgets-icon {
  width: 10%;
}

.book-card h2 {
  text-align: center;
  font-size: 40px;
}

.book-img img {
  width: 100%;
}

.section-area {
  text-align: center;
}

@media (max-width: 575px) {
  .service-info .single-service-info {
    width: 50%;
  }
}

.section-header {
  width: 60%;
  margin: 0 auto;
}

.service-info {
  display: flex;
  flex-flow: wrap;
}

.service-info .single-service-info {
  width: 30%;
  margin: 15px;
}

.info-title:hover {
  color: #00c9b7;
}

.service-info .info-icon {
  height: 70px;
  width: 70px;
  line-height: 70px;
  margin: 20px auto;
  border-radius: 50%;
  background: #90e7e0;
}

.service-info i {
  height: 60px;
  width: 60px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;
  font-size: 28px;
  display: inline-block;
  margin: auto;
  margin-top: 5px;
  background: #00c9b7;
}

.doctor-info {
  display: flex;
  flex-flow: wrap;
}

.doctor-info .single-doctor-info {
  width: 30%;
  margin: 15px;
}

.single-doctor-info {
  position: relative;
}

.single-doctor-info .info-img {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: -50%;
}
</style>
