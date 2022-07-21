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
                <a :href="project[0].links.github" class="project-link1" target="blank">GitHub</a>
                <a :href="project[0].links.live" class="project-link1" target="blank">Live</a>
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
            el.style.transform = 'translateX(-450px)';
        }

        const enterL = (el, done) =>{
            gsap.to(el,{
                opacity: 1,
                x: -80,
                duration: 1.5,
                onComplete: done,
                delay: 1
            })
        }

        const beforeEnterR=(el)=>{
            el.style.opacity = 0;
            el.style.transform = 'translateX(450px)';
        }

        const enterR = (el, done) =>{
            gsap.to(el,{
                opacity: 1,
                x: 0,
                duration: 1.5,
                onComplete: done,
                delay: 1
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
    transform: translateX(-80px);
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
    font-size: 40px;
    margin: 0 0 32px;
    text-transform: uppercase;
    color: #ff5e14;
}

.project-text{
    margin-bottom: 48px;
    font-size: 22px;
    color: rgba(255, 255, 255, 0.8);
}

.project-link1{
    display: inline-block;
    padding: 15px 35px;
    margin-right: 5px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 19px;
    color: #fff;
    background-image: linear-gradient(to right,#ff5e14 0%, #672100 100%);
    text-decoration: none;
}

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
    }
    .project-image{
        min-width: 100%;
        max-width: 100%;
        transform: translate(0, -8rem);
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
 transform: rotate(45deg);
}

button.learn-more .button-text {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: absolute;
 top: 0;
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
 background: #fff;
 transform: translate(1rem, 0);
}

button:hover .button-text {
 color: #ff5e14;
}

</style>