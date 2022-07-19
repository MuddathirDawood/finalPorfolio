<template>
  <div class="container">
    <div>
      <transition name="slide-right" appear>
      <p style="text-align: start;">I am</p>
      </transition>
      <transition name="fade" appear>
      <h1>Muddathir Dawood</h1>
      </transition>
      <transition name="slide-left" appear>
      <p style="text-align: end;">An Aspiring Full Stack Developer</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.container{
    /* background: url('../assets/images.jpg')no-repeat center center/cover; */
    min-height: 91vh;
    color: white;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
}

h1{
  font-size: 50px;
  font-weight: 300;
}

.slide-right-enter-from{
    opacity: 0;
    transform: translateX(-1500px);
}

.slide-right-enter-to{
    opacity: 1;
    transform: translateX(0px);
}

.slide-right-enter-active{
    transition: all 2s ease;
}

.slide-left-enter-from{
    opacity: 0;
    transform: translateX(1500px);
}

.slide-left-enter-to{
    opacity: 1;
    transform: translateX(0px);
}

.slide-left-enter-active{
    transition: all 2s ease;
}

.fade-enter-from{
    opacity: 0;
    transform: scale(0.1);
}

.fade-enter-to{
    opacity: 1;
    transform: scale(1);
}

.fade-enter-active{
    transition: all 2s ease;
}


</style>