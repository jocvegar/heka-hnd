<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div v-for="test in tests" :key="test.id">
      <ul>
        <li>{{ test.name }}</li>
      </ul>
    </div>
    <button @click="addToTest">CLICK ME</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { db } from "../firebase.js";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  firestore() {
    return {
      tests: db.collection("test"),
    };
  },
  methods: {
    addToTest() {
      this.$firestore.tests.add({
        name: "NISHTA",
        last: "LASTME",
      });
    },
  },
};
</script>
