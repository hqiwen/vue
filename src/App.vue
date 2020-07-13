<template>
  <div id="app">
    <Header id="top" />

    <main>
      <div class="single-hero">
        <div class="container relative">
          <el-row class="pb-70">
            <el-col :span="14" :xs="24">
              <h1 class="hero title mb-30">Meet with you best Doctor here</h1>
              <p
                class="hero description mb-30"
              >Ridiculus elit amet sagittis arcu cras ornare, amet a ameturna, vitae cras. Ipsum sociosqu.</p>
              <div class="hero operation">
                <Button class="mr-20">Appointment</Button>
                <Button white>LEARN MORE</Button>
              </div>
            </el-col>
          </el-row>
          <el-row class="hero-widgets sm--0">
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
            <el-col class="book-img sm--0">
              <img src="./assets/images/doctor.png" />
            </el-col>
            <el-col>
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

      <Section class="service gray-bg">
        <template v-slot:header>
          <h2 class="section-title">our services</h2>
          <p>Condimentum rutrum placerat egestas condimentum mi eros. Eleifend cras quirntum Feugiat elit placerat. Diam tempor malesuada</p>
        </template>

        <template v-slot:content>
          <el-card class="single-service-info section-item">
            <div class="info-icon">
              <i class="fa fa-facebook"></i>
            </div>
            <h3 class="info-title mb-5">Cardiology</h3>
            <p
              class="info-content"
            >Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce</p>
          </el-card>
          <el-card class="single-service-info section-item">
            <div class="info-icon">
              <i class="fa fa-facebook"></i>
            </div>
            <h3 class="info-title .mb-5">Cardiology</h3>
            <p
              class="info-content"
            >Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce</p>
          </el-card>
          <el-card class="single-service-info section-item">
            <div class="info-icon">
              <i class="fa fa-facebook"></i>
            </div>
            <h3 class="info-title mb-5">Cardiology</h3>
            <p
              class="info-content"
            >Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce</p>
          </el-card>
          <el-card class="single-service-info section-item">
            <div class="info-icon">
              <i class="fa fa-facebook"></i>
            </div>
            <h3 class="info-title mb-5">Cardiology</h3>
            <p
              class="info-content"
            >Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce</p>
          </el-card>
          <el-card class="single-service-info section-item">
            <div class="info-icon">
              <i class="fa fa-facebook"></i>
            </div>
            <h3 class="info-title mb-5">Cardiology</h3>
            <p
              class="info-content"
            >Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce</p>
          </el-card>
          <el-card class="single-service-info section-item">
            <div class="info-icon">
              <i class="fa fa-facebook"></i>
            </div>
            <h3 class="info-title mb-5">Cardiology</h3>
            <p
              class="info-content"
            >Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis urna nam. Ultricies sapien fusce</p>
          </el-card>
        </template>
      </Section>

      <Section class="expert-doctor">
        <template v-slot:header>
          <h2 class="section-title">Our Expert Doctor</h2>
          <p
            class="doctor-content pb-100"
          >Condimentum rutrum placerat egestas condimentum mi eros. Eleifend cras quirntum Feugiat elit placerat. Diam tempor malesuada</p>
        </template>

        <template v-slot:content>
          <el-card class="single-doctor-info pt-100">
            <div class="info-img">
              <img src="./assets/images/1.png" alt />
            </div>
            <h3 class="info-title mb-5">Dr. Khaled Hossen</h3>
            <p class="mb-30">Physical Medicine, MBBS</p>
            <p
              class="info-content mb-30"
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

          <el-card class="single-doctor-info pt-100">
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

          <el-card class="single-doctor-info pt-100">
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
        </template>
      </Section>

      <Section class="counter-area gray-bg">
        <template v-slot:content>
          <div class="single-counter">
            <h3 class="count blue-bg">
              <Tween :changeValue="589" />
            </h3>
            <h5>Total Stuff</h5>
          </div>
          <div class="single-counter">
            <h3 class="count blue-bg">
              <Tween :changeValue="1576" />
            </h3>
            <h5>Total Stuff</h5>
          </div>
          <div class="single-counter">
            <h3 class="count blue-bg">
              <Tween :changeValue="2946" />
            </h3>
            <h5>Total Stuff</h5>
          </div>
          <div class="single-counter">
            <h3 class="count blue-bg">
              <Tween :changeValue="312" />
            </h3>
            <h5>Total Stuff</h5>
          </div>
        </template>
      </Section>

      <Section class="department-area">
        <template v-slot:header>
          <h2 class="header-title">Our Departments is best for you</h2>
          <p
            class="header-content"
          >Lorem ipsum dolor sit amet, nunc sodales massa turpis cursus iaculis, ur nam. Ultricies sapien fusce vitae duis, ut torquent a. Pede nec libero tristique, eget fusce, quis lorem vel tortor lacinia amet.</p>
        </template>

        <template v-slot:content>
          <Tabs v-model="value">
            <Tab label="dental" icon="fa fa-facebook" name="1">
              <div>
                <img src="./assets/images/dept_1.jpg" />
              </div>
              <div class="department-description">
                <h3 class="mb-30">Dental surgery</h3>
                <p
                  class="mb-30"
                >Ridiculus elit amet sagittis arcu cras ornare, amet a amet urna vicras. Ipsum sociosqu. Mi consequat nec, per urna sed vitae mi lectusn egestas, in consectetuer sed. Nunc id venenatis</p>
                <ul>
                  <li
                    class="department-list-item"
                  >Liver Function Tests. The Liver Function Tests (LFT)ed</li>
                  <li
                    class="department-list-item"
                  >Liver Function Tests. The Liver Function Tests (LFT)ed</li>
                  <li
                    class="department-list-item"
                  >Liver Function Tests. The Liver Function Tests (LFT)ed</li>
                  <li
                    class="department-list-item"
                  >Liver Function Tests. The Liver Function Tests (LFT)ed</li>
                </ul>
              </div>
            </Tab>
            <Tab label="emergency" name="2">标签二内容</Tab>
            <Tab label="Lab" name="3">标签三内容</Tab>
            <Tab label="dental" name="4">
              <div>
                <img src="./assets/images/dept_1.jpg" />
              </div>
              <div>
                <h3>Dental surgery</h3>
                <p>Ridiculus elit amet sagittis arcu cras ornare, amet a amet urna vicras. Ipsum sociosqu. Mi consequat nec, per urna sed vitae mi lectusn egestas, in consectetuer sed. Nunc id venenatis</p>
              </div>
            </Tab>
            <Tab label="emergency" name="5">
              <div>
                <img src="./assets/images/dept_1.jpg" />
              </div>
              <div>
                <h3>Dental surgery</h3>
                <p>Ridiculus elit amet sagittis arcu cras ornare, amet a amet urna vicras. Ipsum sociosqu. Mi consequat nec, per urna sed vitae mi lectusn egestas, in consectetuer sed. Nunc id venenatis</p>
              </div>
            </Tab>
            <Tab label="Lab" name="6">
              <div>
                <img src="./assets/images/dept_1.jpg" />
              </div>
              <div>
                <h3>Dental surgery</h3>
                <p>Ridiculus elit amet sagittis arcu cras ornare, amet a amet urna vicras. Ipsum sociosqu. Mi consequat nec, per urna sed vitae mi lectusn egestas, in consectetuer sed. Nunc id venenatis</p>
              </div>
            </Tab>
          </Tabs>
        </template>
      </Section>

      <Section class="call-to-action primary-bg">
        <template v-slot:content>
          <div class="action-description">
            <h3 class="mb-30">30% off any diganestic let's check</h3>
            <p>You can get upto 30% off for 45 days in here ! So Contact with Us</p>
          </div>
          <div class="action-btn">
            <Button class="get-service-btn" white>GET SERVICE</Button>
          </div>
        </template>
      </Section>

      <Section class="client-testimonial">
        <template v-slot:header>
          <h2 class="section-title">client testimonial</h2>
          <p
            class="header-content"
          >Condimentum rutrum placerat egestas condimentum mi eros. Eleifend cras quirntum Feugiat elit placerat. Diam tempor malesuada.</p>
        </template>

        <template v-slot:content>
          <el-carousel
            class="client-testimonial--container"
            trigger="click"
            indicator-position="outside"
            arrow="never"
            :autoplay="false"
          >
            <el-carousel-item class="client-testimonial--item">
              <el-card>
                <div
                  class="mb-30"
                >Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party young abode state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consulted contained. It chicken oh colonel pressed.</div>
                <div class="justify-content-start">
                  <div class="mr-20">
                    <img src="./assets/images/reviwer.png" />
                  </div>
                  <div>
                    <h3>Mario Speedwage</h3>
                    <span>bussinessman</span>
                  </div>
                </div>
              </el-card>

              <el-card>
                <div
                  class="mb-30"
                >Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party young abode state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consulted contained. It chicken oh colonel pressed.</div>
                <div class="justify-content-start">
                  <div class="mr-20">
                    <img src="./assets/images/reviwer.png" />
                  </div>
                  <div>
                    <h3>Mario Speedwage</h3>
                    <span>bussinessman</span>
                  </div>
                </div>
              </el-card>
            </el-carousel-item>
            <el-carousel-item class="client-testimonial--item">
              <el-card>
                <div
                  class="mb-30"
                >Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party young abode state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consulted contained. It chicken oh colonel pressed.</div>
                <div class="justify-content-start">
                  <div class="mr-20">
                    <img src="./assets/images/reviwer.png" />
                  </div>
                  <div>
                    <h3>Mario Speedwage</h3>
                    <span>bussinessman</span>
                  </div>
                </div>
              </el-card>

              <el-card>
                <div
                  class="mb-30"
                >Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party young abode state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consulted contained. It chicken oh colonel pressed.</div>
                <div class="justify-content-start">
                  <div class="mr-20">
                    <img src="./assets/images/reviwer.png" />
                  </div>
                  <div>
                    <h3>Mario Speedwage</h3>
                    <span>bussinessman</span>
                  </div>
                </div>
              </el-card>
            </el-carousel-item>
          </el-carousel>
        </template>
      </Section>

      <Section class="price-area gray-bg">
        <template v-slot:header>
          <h2 class="section-title">Choose Pricing Plan</h2>
          <p
            class="header-content"
          >Condimentum rutrum placerat egestas condimentum mi eros. Eleifend cras quirntum Feugiat elit placerat. Diam tempor malesuada.</p>
        </template>

        <template v-slot:content>
          <el-card>
            <div class="price-header">
              <h4>Basic</h4>
              <h3>
                $57
                <span>month</span>
              </h3>
            </div>
            <div class="price-body">
              <ul>
                <li
                  class="department-list-item"
                >Liver Function Tests. The Liver Function Tests (LFT)ed</li>
                <li class="department-list-item">Full Blood Examination.</li>
                <li
                  class="department-list-item"
                >TSH (Thyroid Stimulating Hormone) Quantification Urinalysis.</li>
                <li class="department-list-item">INR (International Normalized Ratio)</li>
              </ul>
              <Button class="buy-btn" white>BUY NOW</Button>
            </div>
          </el-card>
          <el-card>
            <div class="price-header">
              <h4>Basic</h4>
              <h3>
                $57
                <span>month</span>
              </h3>
            </div>
            <div class="price-body">
              <ul>
                <li
                  class="department-list-item"
                >Liver Function Tests. The Liver Function Tests (LFT)ed</li>
                <li class="department-list-item">Full Blood Examination.</li>
                <li
                  class="department-list-item"
                >TSH (Thyroid Stimulating Hormone) Quantification Urinalysis.</li>
                <li class="department-list-item">INR (International Normalized Ratio)</li>
              </ul>
              <Button class="buy-btn" white>BUY NOW</Button>
            </div>
          </el-card>
          <el-card>
            <div class="price-header">
              <h4>Basic</h4>
              <h3>
                $57
                <span>month</span>
              </h3>
            </div>
            <div class="price-body">
              <ul>
                <li
                  class="department-list-item"
                >Liver Function Tests. The Liver Function Tests (LFT)ed</li>
                <li class="department-list-item">Full Blood Examination.</li>
                <li
                  class="department-list-item"
                >TSH (Thyroid Stimulating Hormone) Quantification Urinalysis.</li>
                <li class="department-list-item">INR (International Normalized Ratio)</li>
              </ul>
              <Button class="buy-btn" white>BUY NOW</Button>
            </div>
          </el-card>
        </template>
      </Section>

      <Section class="blog-area">
        <template v-slot:header>
          <h2 class="section-title">Latest Update</h2>
          <p>Condimentum rutrum placerat egestas condimentum mi eros. Eleifend cras quirntum Feugiat elit placerat. Diam tempor malesuada.</p>
        </template>

        <template v-slot:content>
          <el-card class="card-item">
            <div class="card-img mb-30">
              <img src="./assets/images/1.jpg" />
              <Button class="card-btn--date" :hover="false">01 JULY 2019</Button>
            </div>
            <div class="card-author">
              <span>By Admin</span>
              <span>Doctor, Clinic</span>
            </div>
            <h4 class="mb-30">Remember Outweigh Do He Desirous No Cheerful</h4>
            <p
              class="mb-30"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            <Button white>READ MORE</Button>
          </el-card>
          <el-card class="card-item">
            <div class="card-img mb-30">
              <img src="./assets/images/1.jpg" />
              <Button class="card-btn--date" :hover="false">01 JULY 2019</Button>
            </div>
            <div class="card-author">
              <span>By Admin</span>
              <span>Doctor, Clinic</span>
            </div>
            <h4 class="mb-30">Remember Outweigh Do He Desirous No Cheerful</h4>
            <p
              class="mb-30"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            <Button white>READ MORE</Button>
          </el-card>
          <el-card class="card-item">
            <div class="card-img mb-30">
              <img src="./assets/images/1.jpg" />
              <Button class="card-btn--date" :hover="false">01 JULY 2019</Button>
            </div>
            <div class="card-author">
              <span>By Admin</span>
              <span>Doctor, Clinic</span>
            </div>
            <h4 class="mb-30">Remember Outweigh Do He Desirous No Cheerful</h4>
            <p
              class="mb-30"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            <Button white>READ MORE</Button>
          </el-card>
        </template>
      </Section>
    </main>

    <Footer />

    <div class="back-to-top">
      <a href="#top">
        <i class="fa fa-angle-up"></i>
      </a>
    </div>
  </div>
</template>

<script>
import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tab from "./components/Tab";
import Tabs from "./components/Tabs";
import Tween from "./components/Tween";
import Section from "./components/Section";

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
      },
      value: "1"
    };
  },
  components: {
    Header,
    Button,
    Tween,
    Tabs,
    Tab,
    Footer,
    Section
  },
  methods: {
    onSubmit() {
      console.log("submit");
    }
  }
};
</script>

<style>
/* hero 区域开始 */
.single-hero {
  background: url("assets/images/hero.jpg") no-repeat center / 100% 100%;
}

.hero.title {
  font-size: 60px;
  font-weight: 700;
}

.hero.description {
  color: #555555;

  font-size: 18px;
  font-weight: 600;
}

.hero-widgets .card {
  /** */
  display: flex;

  padding: 40px;
  padding-right: 0;

  color: #ffffff;
}

.hero-widgets {
  position: absolute;
  bottom: 0;
  left: 50%;

  display: flex;

  width: 100%;
  padding: 0 15px;

  transform: translate(-50%, 50%);
}

.widgets-icon {
  width: 10%;
}

/* book 区域开始 */
.book-card h2 {
  text-align: center;

  font-size: 40px;
}

.book-img img {
  width: 100%;
}

/* service 区域开始 */
.service .single-service-info {
  margin: 15px;
}

.service .info-title:hover {
  color: #00c9b7;
}

.service .info-icon {
  width: 70px;
  height: 70px;
  margin: 20px auto;

  border-radius: 50%;
  background: #90e7e0;

  line-height: 70px;
}

.service i {
  display: inline-block;

  width: 60px;
  height: 60px;
  margin: auto;
  margin-top: 5px;

  color: #fff;
  border-radius: 50%;
  background: #00c9b7;

  font-size: 28px;
  line-height: 60px;
}

/* doctor 区域开始 */
.expert-doctor .single-doctor-info {
  position: relative;

  overflow: visible;

  margin: 15px;
}

.single-doctor-info .info-img {
  position: absolute;
  top: 0;
  left: 50%;

  transform: translate(-50%, -50%);
}

.single-doctor-info .team-social a {
  display: inline-block;

  width: 35px;
  height: 35px;
  margin: 0 2px;

  text-align: center;

  color: #ffffff;
  border-radius: 50%;
  background: #3b5999;

  font-size: 14px;
  line-height: 35px;
}

/* counter区域 */
.counter-area .single-counter {
  flex: 1;
}
.counter-area .count {
  width: 150px;
  height: 125px;
  margin: auto;
  margin-bottom: 20px;

  color: #ffffff;

  font-size: 26px;
  font-weight: 600;
  line-height: 125px;

  clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
}

/* department 区域开始 */
.department-area .header-title {
  flex: 2;

  padding-right: 10px;

  border-right: 5px solid #00c9b7;
}

.department-area .header-content {
  flex: 3;

  padding: 10px;
}

.department-description {
  padding: 0 50px;

  text-align: left;
}

.department-list-item::before {
  margin-right: 5px;

  content: "\f00c";

  color: #00c9b7;

  font-family: Fontawesome;
}

/* call-to-action 区域 */
.action-description {
  color: #fff;
}

/* client-testimonial 区域 */
.client-testimonial--container {
  width: 100%;
}

.client-testimonial--item {
  display: flex;
}

.client-testimonial--item .el-card {
  margin: 0 15px;
}

/* price 区域 */
.price-area .price-header {
  position: relative;
  color: white;
  padding: 40px 0;
}

.price-area .price-body {
  padding: 40px 0;
}

.price-area .price-body ul {
  text-align: left;
}

.price-area .price-header::before {
  position: absolute;
  content: "";
  top: -35px;
  left: 0;
  width: 100%;
  height: 200px;
  background: #00c9b7;
  border-radius: 0 0 50% 50%/ 30% 30%;
  transform: scaleX(1.1);
}

.price-area .el-card {
  margin: 0 15px;
}

/* blog 区域开始 */
.blog-area .card-item {
  margin: 0 15px;
}

.blog-area .card-item .el-card__body {
  padding: 0;
  padding-bottom: 50px;
}

.blog-area .card-item .card-img {
  position: relative;
}

.card-item img {
  display: block;

  width: 100%;

  transition: 0.4;
}
.card-item img:hover {
  opacity: 0.7;
}
.card-item .card-author {
  display: flex;
  justify-content: space-around;

  margin: 30px 0;
}
.card-item .card-btn--date {
  position: absolute;
  bottom: 0;
  left: 50%;

  width: max-content;

  transform: translate(-50%, 50%);
}

@media screen and (max-width: 768px) {
  .service .single-service-info {
    margin: 15px 0;
  }

  .sm--0 {
    display: none;
  }
}

.back-to-top a {
  position: fixed;
  z-index: 2;
  right: 30px;
  bottom: 30px;

  width: 35px;
  height: 35px;

  text-align: center;

  color: #ffffff;
  border-radius: 50%;
  background-color: #00c9b7;

  font-size: 14px;
  line-height: 35px;
}
</style>
