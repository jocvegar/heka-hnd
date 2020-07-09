<template>
  <div>
    <section id="header">
      <header>
        <span class="image avatar"
          ><img src="@/assets/jose.jpg" alt="Heka"
        /></span>
        <h1 id="logo"><a @click="scrollToHome">HEKA HND</a></h1>
        <p>
          I got reprogrammed by a rogue AI<br />
          and now I'm totally cray
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
            <a href="#" class="icon brands fa-twitter"
              ><span class="label">Twitter</span></a
            >
          </li>
          <li>
            <a href="#" class="icon brands fa-facebook-f"
              ><span class="label">Facebook</span></a
            >
          </li>
          <li>
            <a href="#" class="icon brands fa-instagram"
              ><span class="label">Instagram</span></a
            >
          </li>
          <li>
            <a href="#" class="icon brands fa-github"
              ><span class="label">Github</span></a
            >
          </li>
          <li>
            <a href="#" class="icon solid fa-envelope"
              ><span class="label">Email</span></a
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
                Just an incredibly simple responsive site<br />
                template freebie by <a href="http://html5up.net">HTML5 UP</a>.
              </p>
            </header>
            <p>
              Powerslide salad grind pressure flip Tommy Guerrero wax nosegrind
              skate key. Fast plant stoked boneless body varial cab flip method
              air. Mike Taylor air ledge slap maxwell 720 nose bump nosebone.
              Sick hardware Japan air hand rail boardslide downhill. Death box
              invert sponsored crooked grind manual Blind rad. Stalefish dude
              270 frigid air mongo transition. Steps g-turn bone air Thrasher
              baseplate hang-up casper slide. Hard flip bone air betty ho-ho
              Memory Screen dude opposite footed. Flypaper kickflip kick-nose
              Tracker pogo death box. Cess slide salad grind hurricane frigid
              air hand rail roll-in. Roll-in fakie kickturn axle set Bullet 66
              tailslide concave.
            </p>
          </div>
        </section>
        <!-- Two -->
        <section class="section" id="what-i-do">
          <div class="container">
            <h3>Te Puedo Ayudar</h3>
            <p>
              Aplicaciones y páginas web modernas.
            </p>
            <ul class="feature-icons">
              <li class="icon solid fa-code">Write all the code</li>
              <li class="icon solid fa-cubes">Stack small boxes</li>
              <li class="icon solid fa-book">Read books and stuff</li>
              <li class="icon solid fa-coffee">Drink much coffee</li>
              <li class="icon solid fa-bolt">Lightning bolt</li>
              <li class="icon solid fa-users">Shadow clone technique</li>
            </ul>
          </div>
        </section>
        <!-- Three -->
        <section class="section" id="examples">
          <div class="container">
            <h3>A Few Accomplishments</h3>
            <p>
              Integer eu ante ornare amet commetus vestibulum blandit integer in
              curae ac faucibus integer non. Adipiscing cubilia elementum
              integer. Integer eu ante ornare amet commetus.
            </p>
            <div class="features">
              <article>
                <a href="#" class="image"
                  ><img src="images/pic01.jpg" alt=""
                /></a>
                <div class="inner">
                  <h4>Possibly broke spacetime</h4>
                  <p>
                    Skate ipsum dolor sit amet, S.K.A.T.E. carve bruised heel
                    backside slob air. Birdie gnar bucket ollie north carve.
                    50-50 bluntslide front foot impossible spine. Bluntslide
                    yeah air ho-ho. Pivot death box nose slide launch ramp John
                    Grigley. Acid drop snake crail grab alley oop Rector.
                  </p>
                </div>
              </article>
              <article>
                <a href="#" class="image"
                  ><img src="images/pic02.jpg" alt=""
                /></a>
                <div class="inner">
                  <h4>Terraformed a small moon</h4>
                  <p>
                    Skate ipsum dolor sit amet, S.K.A.T.E. carve bruised heel
                    backside slob air. Birdie gnar bucket ollie north carve.
                    50-50 bluntslide front foot impossible spine. Bluntslide
                    yeah air ho-ho. Pivot death box nose slide launch ramp John
                    Grigley. Acid drop snake crail grab alley oop Rector.
                  </p>
                </div>
              </article>
              <article>
                <a href="#" class="image"
                  ><img src="images/pic03.jpg" alt=""
                /></a>
                <div class="inner">
                  <h4>Snapped dark matter in the wild</h4>
                  <p>
                    Skate ipsum dolor sit amet, S.K.A.T.E. carve bruised heel
                    backside slob air. Birdie gnar bucket ollie north carve.
                    50-50 bluntslide front foot impossible spine. Bluntslide
                    yeah air ho-ho. Pivot death box nose slide launch ramp John
                    Grigley. Acid drop snake crail grab alley oop Rector.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <!-- Four -->
        <section class="section" id="contact">
          <div class="container">
            <h3>Contacto</h3>
            <p>
              Si tienes cualquier pregunta, comentario o simplemente quieres
              decir hola mandame un mensaje y pronto te respondo!
            </p>
            <Form />
          </div>
        </section>
        <section id="footer">
          <div class="container">
            <ul class="copyright">
              <li>&copy; 2020</li>
              <li>
                Queres Ver Más?
                <a
                  href="https://flask-portfolio-jv.herokuapp.com/"
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
    Form
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
        { id: 4, name: "Contact" }
      ],
      activeProjectId: 1
    };
  },
  methods: {
    scrollToHome() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
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
          behavior: "smooth"
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
              word =>
                word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
            )
            .join(" ");
          document.querySelector("li.active").classList.remove("active");
          let li = [...document.querySelectorAll("li.menu-list")].filter(
            li => li.innerText == word
          )[0];
          li.classList.add("active");
        }
      }
    }
  }
};
</script>
