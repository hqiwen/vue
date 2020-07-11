<template>
  <footer class="footer-area">
    <div class="container">
      <div class="footer-top primary-bg">
        <img src="./assets/images/1 (1).png" />
        <img src="./assets/images/2 (1).png" />
        <img src="./assets/images/1 (1).png" />
        <img src="./assets/images/2 (1).png" />
        <img src="./assets/images/1 (1).png" />
      </div>
    </div>

    <div class="footer-link">
      <div class="container justify-content-start">
        <div class="acout-company">
          <h3>acout-company</h3>
          <p>Penatibus in, litora dictumst suspendamuanim egestas, libero mollis molestiae sit et sem nisl inquam vitae euismoellentesque. Iaculpellus est officia. Non sed id mollis molestie ut ut mi qelibero donec and this is over head</p>
        </div>
        <div class="useful-link">
          <h3>useful-link</h3>
          <ul>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Our Services</a>
            </li>
            <li>
              <a>Compoany Mission</a>
            </li>
            <li>
              <a>Find Doctor</a>
            </li>
          </ul>
        </div>
        <div class="our-services">
          <h3>our-services</h3>
          <ul>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Our Services</a>
            </li>
            <li>
              <a>Compoany Mission</a>
            </li>
            <li>
              <a>Find Doctor</a>
            </li>
          </ul>
        </div>
        <div class="contact-us">
          <h3>contact-us</h3>
          <el-form>
            <div class="input-all">
              <input name="name" placeholder="name" />
              <input name="email" placeholder="email" />
            </div>
            <textarea placeholder="write message" />
            <button class="send-message btn--fill btn--mid">send messages</button>
          </el-form>
        </div>
      </div>
    </div>

    <div class="copyright">Copyright © 2019 All Rights Reserved.</div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.footer-top {
  position: relative;
  display: flex;
  padding: 30px;
  justify-content: center;
}

.footer-top::before {
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  transform: translate(-100%);
  border-color: transparent #04b4a4;
  border-width: 94px 40px 0 0;
  border-style: solid;
}
.footer-top img {
  margin: 0 30px;
}

.footer-link {
  background: #262229;
  color: #fff;
  padding: 50px 0;
}

.footer-link h3 {
  margin-bottom: 30px;
}

.footer-link h3::after {
  position: absolute;
  left: 0;
  bottom: -20px;
  height: 4px;
  width: 40px;
  content: "";
  background: #00c9b7;
}

.footer-link .justify-content-start {
  align-items: flex-start;
}

.footer-link .container div {
  margin-right: 10px;
}

.acout-company {
  flex: 2;
}

.useful-link {
  flex: 1;
}

.contact-us {
  flex: 2;
}

.footer-link.container h3 {
  margin-bottom: 30px;
}

.footer-link.container div {
  margin: 0 5px;
}

.footer-link li::before {
  content: "\f101";
  left: 0;
  top: 0;
  font-family: Fontawesome;
  margin-right: 5px;
}

.contact-us .input-all {
  display: flex;
  margin-bottom: 30px;
}

.contact-us input {
  width: 100%;
  background: #3d3c3e;
  height: 50px;
  text-indent: 15px;
  border-radius: 4px;
  margin-right: 10px;
  margin-bottom: 20px;
  color: #ffffff;
  border: none;
}

.contact-us .send-message {
  width: 100%;
  border-radius: 0;
}

.contact-us textarea {
  width: 100%;
  height: 70px;
  background: #3d3c3e;
  text-indent: 15px;
  padding-top: 10px;
  margin-bottom: 15px;
  color: #ffffff;
  border-radius: 4px;
}

.footer-area .copyright {
  text-align: center;
}
</style>