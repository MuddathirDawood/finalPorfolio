<template>
  <div class="container">
    <transition-group
     tag="div"
     appear
     @before-enter="beforeEnter"
     @enter="enter"
     >
        <div v-for="(project, index) in projects" :key="project" :data-index="index">
            <div class="card my-3">
              <img :src="project.image" alt="" class="postImg">
              <div class="card-desc">
                <p> Project Name: <br>{{project.title}}</p>
                <router-link :to="{name: 'project', params:{id: project.id}}">
                    <button id="postButton">See more</button>
                </router-link> 
              </div>
            </div>
        </div>
    </transition-group>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
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
    min-width: 100vw;
    min-height: 100vh;
    gap: 50px;
}

.postImg{
  border-radius: 0;
  width: 100%;
  height: 100%;
}

.card{
    background: #ff5e14;
    border-radius: 0;
    width: 700px;
    height: 350px;
    border: #ff5e14 1px solid;
}

/* .card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: relative;
} */
.card-desc {
  display: block;
  font-size: 1.2rem;
  position: absolute;
  height: 100%;
  width: 0;
  left: 0;
  opacity: 0;
  padding: 18px 8%;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  transition: 1s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#postButton{
  width: 25%;
  align-self: center;
  margin-top: 25px;
  font-size: 16px;
  background-color: transparent;
  border-right-color: #ff5e14;
  border-bottom-color: #ff5e14;
  border-left-color: white;
  border-top-color: white;  
  color: white;
  transition: all 1s ease-out;
}

#postButton:hover{
  margin-right: 4%;
  border-left-color: #ff5e14;
  border-top-color: #ff5e14;
  border-right-color: white;
  border-bottom-color: white;   
  color: #ff5e14;
  transition: all 1s ease-in;
}

.card:hover .card-desc {
  opacity: 1;
  height: 100%;
  width: 100%;
}
</style>