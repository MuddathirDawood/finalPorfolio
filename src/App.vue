<template>
  <Navbar/>
  <main>
    <router-view/>
  </main>
  <Footer/>
</template>

<script>
import Footer from "../src/components/Footer.vue";
import Navbar from './components/Navbar.vue';

export default {
  components:{
    Footer,
    Navbar
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  margin: 0;
  padding: 0;
}

main{
  min-height: 100vh;
}

body{
  overflow-x: hidden;
}

</style>
