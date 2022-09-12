<template>
  <div class="container">
    <form class="d-flex justify-content-center mb-4">
        <input class="form-control" type="search" placeholder="Search by Name of Projects" id="search" v-model="search">
    </form>
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
  data(){
    return{
        search: ''
    }
  },
    computed:{
        projects(){
           return this.$store.state.projects?.filter(projects => {
          let isMatch = true;
          if (!projects.title.toLowerCase().includes(this.search.toLowerCase())) {
              isMatch = false;
          }
          return isMatch
        })
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
                delay: el.dataset.index * 0.6
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

input{
    width: 35%;
    border-radius: 0;
    border: 1px solid #ff5e14;
    background-color: #222;
    color: white;
}

input[type="search"]{
    background-color: #222;
    color: white;
    border: 1px solid #ff5e14;
}

@media (max-width:769px){
    input{
        width: 50%;
    }
}

@media (max-width:426px){
    input{
        width: 75%;
    }
}

</style>