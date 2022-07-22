<template>
  <div class="container">
    <transition-group
     tag="div"
     appear
     @before-enter="beforeEnter"
     @enter="enter"
     >
      <project-cards  v-for="(project, index) in projects" :key="project" :data-index="index" :projects="project"/>
    </transition-group>
  </div>
</template>

<script>
import gsap from 'gsap'
import ProjectCards from '@/components/ProjectCards.vue'

export default {
  components: { ProjectCards },
    computed:{
        projects(){
           return this.$store.state.projects
        }
    },
    setup(){
        const beforeEnter=(el)=>{
            el.style.opacity = 0;
            el.style.transform = 'translateY(-450px)';
        }

        const enter = (el, done) =>{
            gsap.to(el,{
                opacity: 1,
                y: 0,
                duration: 1.5,
                onComplete: done,
                delay: el.dataset.index * 0.8
            })
        }

        return {beforeEnter, enter}
    }
}
</script>

<style scoped>
.container{
    min-height: 100vh;
    min-width: 100vw;
    padding-top: 50px;
    padding-bottom: 50px;
    /* display: flex;
    flex-flow: row wrap;
    justify-content: center; */
}

.container>div{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* min-width: 100vw; */
    min-height: 100vh;
    gap: 50px;
}
@media (max-width: 426px){
    .container>div{
        min-width: 100%;
        gap: 10px;
    }
}

</style>