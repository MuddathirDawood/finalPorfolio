<template>
  <div id="header">
    <Navbar/>
  </div>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </main>
  <div id="footer">
    <Footer/>
  </div>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

*{
  margin: 0;
  padding: 0;
}

#header{
  height: 70px;
}

main{
  min-height: 91vh;
  background: url("./assets/images.jpg") no-repeat center center/cover;
}

#footer{
  height: 284px;
}

body{
  overflow-x: hidden;
}

.route-enter-from{
  opacity: 0;
  transform: translateX(-200px);
}

.route-enter-active{
  transition: all 0.75s ease-out;
}

.route-leave-to{
  opacity: 0;
  transform: translateX(1200px);
}

.route-leave-active{
  transition: all 0.75s ease-in;
}

/*\\\\ SCROLLBARR ////*/
::-webkit-scrollbar {
  width: 6px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background: #8C8C8E;
}

::-webkit-scrollbar-thumb {
  background: #ff5e14;
}

</style>
