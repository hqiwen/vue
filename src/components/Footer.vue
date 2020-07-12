<template>
  <footer class="footer-area">
    <div class="footer-top primary-bg">
      <div class="container">
        <img src="../assets/images/1 (1).png" />
        <img src="../assets/images/2 (1).png" />
        <img src="../assets/images/1 (1).png" />
        <img src="../assets/images/2 (1).png" />
        <img src="../assets/images/1 (1).png" />
      </div>
    </div>

    <div class="footer-link">
      <div class="container justify-content-start">
        <div class="about-company">
          <h3>about-company</h3>
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
  flex-wrap: wrap;
  justify-content: center;

  padding: 30px;
}

.footer-top::before {
  position: absolute;
  bottom: 0;
  left: 0;

  width: 0;
  height: 0;

  content: "";
  transform: translate(-100%);

  border-width: 94px 40px 0 0;
  border-style: solid;
  border-color: transparent #04b4a4;
}
.footer-top img {
  margin: 0 30px;
}

.footer-link {
  padding: 50px 0;

  color: #fff;
  background: #262229;
}

.footer-link h3 {
  margin-bottom: 30px;
}

.footer-link h3::after {
  position: absolute;
  bottom: -20px;
  left: 0;

  width: 40px;
  height: 4px;

  content: "";

  background: #00c9b7;
}

.footer-link .justify-content-start {
  align-items: flex-start;
}

.footer-link .container div {
  margin-right: 10px;
}

.about-company {
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
  top: 0;
  left: 0;

  margin-right: 5px;

  content: "\f101";

  font-family: Fontawesome;
}

.contact-us {
  width: 100%;
}

.contact-us .input-all {
  display: flex;

  margin-bottom: 30px;
}

.contact-us input {
  width: 100%;
  height: 50px;
  margin-right: 10px;
  margin-bottom: 20px;

  text-indent: 15px;

  color: #ffffff;
  border: none;
  border-radius: 4px;
  background: #3d3c3e;
}

.contact-us .send-message {
  width: 100%;

  border-radius: 0;
}

.contact-us textarea {
  width: 100%;
  height: 70px;
  margin-bottom: 15px;
  padding-top: 10px;

  text-indent: 15px;

  color: #ffffff;
  border-radius: 4px;
  background: #3d3c3e;
}

.footer-area .copyright {
  text-align: center;
}

@media screen and (max-width: 768px) {
  .footer-top {
    flex-direction: column;
  }

  .footer-link .justify-content-start {
    flex-direction: column;
  }
}
</style>