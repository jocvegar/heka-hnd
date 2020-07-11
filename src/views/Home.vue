<template>
  <div>
    <section id="header">
      <header>
        <span class="image avatar"
          ><img src="@/assets/jose.jpg" alt="Heka"
        /></span>
        <h1 id="logo"><a @click="scrollToHome">HEKA HND</a></h1>
        <p>
          Hi, my name is Jose and I am a web developer
          specializing in delivering awesome products.
        </p>
      </header>
      <nav id="nav">
        <ul>
          <li
            v-for="item in menu"
            :key="item.id"
            class="menu-list"
            :class="{ active: item.id === activeProjectId }"
            @click="setActive(item.id), scrollTo(item.name)"
          >
            {{ item.name }}
          </li>
        </ul>
      </nav>
      <footer>
        <ul class="icons">
          <li>
            <a
              href="http://github.com/jocvegar"
              target="_blank"
              class="icon brands fa-github"
              ><span class="label">Github</span></a
            >
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jose-carlos-vega"
              target="_blank"
              class="icon brands fa-linkedin"
              ><span class="label">LinkedIn</span></a
            >
          </li>
          <li>
            <a
              href="mailto:jocvegar@gmail.com"
              target="_blank"
              class="icon solid fa-envelope"
              ><span class="label">Email</span></a
            >
          </li>
          <li>
            <a
              href="https://twitter.com/hekahnd"
              target="_blank"
              class="icon brands fa-twitter"
              ><span class="label">Twitter</span></a
            >
          </li>
        </ul>
      </footer>
    </section>
    <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <!-- One -->
        <section class="section" id="about">
          <div class="image main" data-position="center">
            <img src="@/assets/hero.jpg" alt="heka-hnd" />
          </div>
          <div class="container">
            <header class="major">
              <h2>HEKA HND</h2>
              <p>
                Let's build something together! <br />
                Anything ranging from a simple landing page, to an e-commerce site to a
                complex app -I've got you covered!
              </p>
            </header>
            <p>
              Over the years I have learned the required tools to develop a
              succesful platform. I have developed projects using services like
              Braintree, AWS, Heroku, Netlify, 11ty, Middleman, among
              others.
            </p>
            <p>
              I am also proficient in several languages and frameworks such as Ruby on Rails,
              Html, CSS, Vue and React. I can also connect and/or build APIs.
            </p>
            <p>
              I am always interested in learning new languages so if you prefer a specific one or a different stack, we can make
              it work!
            </p>
          </div>
        </section>
        <!-- Two -->
        <section class="section" id="what-i-do">
          <div class="container">
            <h3>What I Do</h3>
            <ul class="feature-icons">
              <li class="icon solid fa-code">Unique websites</li>
              <li class="icon solid fa-mobile">Responsive design</li>
              <li class="icon solid fa-users">Intuitive UX | UI</li>
              <li class="icon solid fa-check">Continuous monitoring</li>
              <li class="icon solid fa-comments">
                Constant communication with client
              </li>
              <li class="icon solid fa-cubes">Unit tests</li>
            </ul>
          </div>
        </section>
        <!-- Three -->
        <section class="section" id="examples">
          <div class="container">
            <h3>Accomplishments</h3>
            <p>
              A showcase of a few accomplishments
            </p>
            <div class="features">
              <article>
                <a href="https://safetyspot.com/" class="image"
                  ><img src="@/assets/safety.png" alt=""
                /></a>
                <div class="inner">
                  <h4>Safety Spot Inc.</h4>
                  <p>
                    An application to manage personnel information, credentials
                    and emergency contact information from one central location.
                    It also manages and schedules both locations and equipment,
                    centralize e-resource storage, and grant personnel access to
                    connected devices.
                  </p>
                </div>
              </article>
              <article>
                <a href="http://wan-fu.netlify.com/" class="image"
                  ><img src="@/assets/wan.png" alt=""
                /></a>
                <div class="inner">
                  <h4>Wan Fu</h4>
                  <p>
                    An online site for a small family owned restaurant to
                    display menu and showcase pictures. This site was built
                    using Nuxt with Tailwind CSS hosted on Netlify.
                  </p>
                </div>
              </article>
              <article>
                <a href="https://memory-game-6b16f.web.app/" class="image"
                  ><img src="@/assets/memory.png" alt=""
                /></a>
                <div class="inner">
                  <h4>A Memory Game</h4>
                  <p>
                    A fun small game to test your memory -I have gotten up to 13
                    digits, I need to improve! This site was built using Vue.js,
                    Firebase authentication and hosted on Firebase.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <!-- Four -->
        <section class="section" id="contact">
          <div class="container">
            <h3>Contact</h3>
            <p>
              If you have a project in mind, have a question or simply want to
              say hi, please send me a message and I will respond ASAP!
            </p>
            <p>
              Want to see more? Please visit:
              <ul>
                <li><a href="http://jose-vega-resume.herokuapp.com/">English resumé</a></li>
                <li><a href="http://flask-portfolio-jv.herokuapp.com/">Spanish resumé</a></li>
              </ul>
            </p>
            <Form />
          </div>
        </section>
        <section id="footer">
          <div class="container">
            <ul class="copyright">
              <li>&copy; 2020</li>
              <li>
                Want to see more?
                <a
                  href="http://jose-vega-resume.herokuapp.com/"
                  target="_blank"
                  >Portfolio</a
                >
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";

export default {
  components: {
    Form,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      menu: [
        { id: 1, name: "About" },
        { id: 2, name: "What I Do" },
        { id: 3, name: "Examples" },
        { id: 4, name: "Contact" },
      ],
      activeProjectId: 1,
    };
  },
  methods: {
    scrollToHome() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    scrollTo(element) {
      let el = document.getElementById(
        element
          .toLowerCase()
          .split(" ")
          .join("-")
      );
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
    setActive(id) {
      setTimeout(() => (this.activeProjectId = id), 1000);
      document.body.classList.remove("header-visible");
    },
    handleScroll() {
      var section = document.querySelectorAll(".section");
      var sections = {};
      var i = 0;

      Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
      });

      var scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;

      for (i in sections) {
        if (sections[i] <= scrollPosition + 10) {
          let word = i
            .split("-")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
            )
            .join(" ");
          document.querySelector("li.active").classList.remove("active");
          let li = [...document.querySelectorAll("li.menu-list")].filter(
            (li) => li.innerText == word
          )[0];
          li.classList.add("active");
        }
      }
    },
  },
};
</script>
