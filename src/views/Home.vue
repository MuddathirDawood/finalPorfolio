<template>
  <div class="container">
    <div id="box">
      <transition name="fade" appear>
      <p style="text-align: start;">I am</p>
      </transition>
      <transition name="fade" appear>
      <h1>Muddathir Dawood</h1>
      </transition>
      <transition name="fade" appear>
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
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

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
  font-weight: 200;
  font-family: 'Audiowide', cursive;
  -webkit-text-stroke: 1.2px #f95407;
}

p{
  margin-bottom: 0;
  font-family: 'Audiowide', cursive;

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
    transition: all 2.5s ease;
}

#box{
  animation: scale 3s ease-in-out infinite;
}

@keyframes scale{
	0%{
		transform: scale(1);
	}
	50%{
		transform: scale(1.05);
	}
	100%{
		transform:  scale(1);
	}
}

</style>