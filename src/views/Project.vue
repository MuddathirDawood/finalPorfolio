<template>
<div class="container">
        <div class="project-card">
            <transition appear @before-enter="beforeEnterL" @enter="enterL">
                <div class="project-image">
                    <img :src="project[0].image" alt="">
                </div>
            </transition>
            <transition appear @before-enter="beforeEnterR" @enter="enterR">
            <div class="project-info">
                <router-link to="/projects">
                    <!-- <p id="back"><ion-icon name="arrow-back-outline"></ion-icon>Back</p> -->
                    <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Back</span>
                    </button>
                </router-link>
                <div class="project-details">
                    <span class="mb-4">{{project[0].tools}}</span>
                    <span style="color: white">Title:</span>
                </div>
                <h1 class="project-title">{{project[0].title}}</h1>
                <p class="project-text">
                    {{project[0].description}}
                </p>
                <a :href="project[0].links.github" class="project-links" target="blank"><span>GitHub</span><i></i></a>
                <a :href="project[0].links.live" class="project-links" target="blank"><span>Live</span><i></i></a>
            </div>
            </transition>
        </div>

</div>
</template>

<script>
import gsap from 'gsap'

export default {
    props:['id'],
    computed:{
        project(){
            return this.$store.state.projects.filter(project =>{
                return project.id == this.id 
            })
        }
    },
        setup(){
        const beforeEnterL=(el)=>{
            el.style.opacity = 0;
        }

        const enterL = (el, done) =>{
            gsap.to(el,{
                opacity: 1,
                duration: 1.5,
                onComplete: done,
                delay: 1
            })
        }

        const beforeEnterR=(el)=>{
            el.style.opacity = 0;
            el.style.transform = 'translateX(-150px)';
        }

        const enterR = (el, done) =>{
            gsap.to(el,{
                opacity: 1,
                x: 0,
                duration: 2,
                onComplete: done,
                delay: 1.5
            })
        }        

        return {beforeEnterL, enterL, beforeEnterR, enterR}
    }
}
</script>

<style scoped>
.container{
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 25px 25px 25px;
}

img{
    width: 600px;
    height: 250px;
}



.project-info>a{
    text-decoration: none;
}

.project-card{
    width: 100%;
    padding: 50px;
    margin: 50px;
    background: #222;
    display: flex;
    align-items: center;
    box-shadow: #ff5e14 10px 5px 25px;
}

.project-image{
    min-width: 560px;
    min-height: 500px;
    height: 30rem;
    transform: translateX(-80px) !important;
    position: relative;
    border: #ff5e14 2px solid;
}

.project-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: all 1s ease;
}

.project-details span{
    display: block;
    color: rgba(255, 255, 255, 0.5);
    font-size: 22px;
    font-weight: 600;
    margin: 7px 0;
}

.project-title{
    font-size: 35px;
    margin: 0 0 32px;
    text-transform: uppercase;
    color: #ff5e14;
}

.project-text{
    margin-bottom: 48px;
    font-size: 22px;
    color: rgba(255, 255, 255, 0.8);
}

/* .project-links{
    display: inline-block;
    padding: 15px 35px;
    margin-right: 5px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 19px;
    color: #fff;
    background-image: linear-gradient(to right,#ff5e14 0%, #672100 100%);
    text-decoration: none;
} */

@media (max-width:868px){
    .project-card{
        max-width: 100vw;
    }
}

@media (max-width:768px){
    .container{
        padding-top: 100px;
        padding-bottom: 50px;
    }
    .project-card{
        max-width: 100vw;
        /* padding-top: 100px; */
        flex-direction: column;
        padding: 25px;
    }
    .project-image{
        min-width: 100%;
        max-width: 100%;
        transform: translate(0, -8rem) !important;
    }
    .project-info{
        width: 100%;
        font-size: 20px;
        margin-bottom: 40px;
    }
    button.learn-more .button-text {
        top: -7px;
    }

}

/* Back Button */
button {
 position: relative;
 display: inline-block;
 cursor: pointer;
 outline: none;
 border: 0;
 vertical-align: middle;
 text-decoration: none;
 background: transparent;
 padding: 0;
 font-size: inherit;
 font-family: inherit;
}

button.learn-more {
 width: 12rem;
 height: auto;
}

button.learn-more .circle {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: relative;
 display: block;
 margin: 0;
 width: 3rem;
 height: 3rem;
 background: #282936;
 border-radius: 1.625rem;
}

button.learn-more .circle .icon {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: absolute;
 top: 0;
 bottom: 0;
 margin: auto;
 background: #fff;
}

button.learn-more .circle .icon.arrow {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 left: 0.625rem;
 width: 1.125rem;
 height: 0.125rem;
 background: none;
}

button.learn-more .circle .icon.arrow::before {
 position: absolute;
 content: "";
 top: -0.29rem;
 right: 0.0625rem;
 width: 0.625rem;
 height: 0.625rem;
 border-top: 0.125rem solid #fff;
 border-right: 0.125rem solid #fff;
 transform: rotate(225deg);
}

button.learn-more .button-text {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: absolute;
 top: -2px;
 left: 0;
 right: 0;
 bottom: 0;
 padding: 0.75rem 0;
 margin: 0 0 0 1.85rem;
 color: white;
 font-weight: 700;
 line-height: 1.6;
 text-align: center;
 text-transform: uppercase;
}

button:hover .circle {
 width: 100%;
}

button:hover .circle .icon.arrow {
 transform: translate(1rem, 0);
}

button:hover .button-text {
 color: #ff5e14;
}

@media (max-width:467px){
    .project-links{
        margin-top: 5px;
    }
}

.project-links{
  display: inline-block;
  position: relative;
  background: black;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1em;
  letter-spacing: 0.1em;
  padding: 10px 30px;
  transition: 0.5s;
  width: 180px;
  text-align: center;
  margin-right: 5px;
}

.project-links:hover{
  letter-spacing: 0.25em;
  background-color: #ff5e14;
  color: #ff5e14;
  box-shadow: 0 0 10px #ff5e14;
}

.project-links::before{
  content: '';
  position: absolute;
  inset: 2px;
  background: #222;
}

.project-links span{
  position: relative;
  z-index: 2;
}

.project-links i{
  position: absolute;
  inset: 0;
  display: block;
}

.project-links i::before{
  content: '';
  position: absolute;
  top: -3.5px;
  left: 80%;
  width: 20px;
  height: 10px;
  border: 2px solid #ff5e14;
  background: rgb(0, 0, 0); 
  transform: translateX(-50%);
  transition: 0.6s; 
}

.project-links:hover i::before{
  width: 25px;
  left: 10%;
}

.project-links i::after{
  content: '';
  position: absolute;
  bottom: -3.5px;
  left: 10%;
  width: 20px;
  height: 10px;
  border: 2px solid #ff5e14;
  background: rgb(0, 0, 0); 
  transform: translateX(-50%);
  transition: 0.6s; 
}

.project-links:hover i::after{
  width: 25px;
  left: 80%;
}

</style>