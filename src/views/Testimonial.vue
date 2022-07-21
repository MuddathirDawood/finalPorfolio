<template>
<div class="container">
  <div class="card" v-for="testimonial in testimonials" :key="testimonial">
  <img :src="testimonial.back_image" alt="sample87" />
  <div>
    <img :src="testimonial.profile_img" alt="Cameron Stemmet" class="profile" />
    <h2>{{testimonial.name}}<span>{{testimonial.relation}}</span></h2>
    <p>{{testimonial.message}}</p>
    <a :href="testimonial.links.github" class="github" target="_blank">GitHub</a>
    <a :href="testimonial.links.linkedin" class="linkedin" target="_blank">LinkedIn</a>
  </div>
</div>  

</div>
</template>

<script>
export default {
    computed:{
      testimonials(){
        return this.$store.state.testimonials
      }
    }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,600);
.container{
    display: flex;
    flex-flow: row wrap;
    min-height: 110vh;
    min-width: 100vw;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
}

.card {
  font-family: 'Roboto', Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 230px;
  max-width: 325px;
  width: 100%;
  color: #ffffff;
  border: #ff5e14 2px groove;
  text-align: left;
  line-height: 1.4em;
  background-color: black;
}
.card * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
#piece{
  max-width: 100%;
  height: 225px;
  vertical-align: top;
  opacity: 0.85;
  background-color: #222;
}
.card div {
  width: 100%;
  background-color: black;
  padding: 25px;
  position: relative;
}
.card div:before {
  position: absolute;
  content: '';
  bottom: 100%;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 55px 0 0 400px;
  border-color: transparent transparent transparent black;
}
.card div a {
  padding: 5px;
  border: 1px solid #ffffff;
  color: #ffffff;
  font-size: 0.7em;
  text-transform: uppercase;
  margin: 10px 0;
  display: inline-block;
  opacity: 0.65;
  width: 47%;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
}
.card div a:hover {
  opacity: 1;
}
.card .profile {
  border-radius: 50px;
  position: absolute;
  bottom: 100%;
  left: 25px;
  z-index: 1;
  max-height: 90px;
  max-width: 90px;
  opacity: 1;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}
.card .github {
  margin-right: 4%;
  border-left-color: #ff5e14;
  border-top-color: #ff5e14;
  color: #ff5e14;
  background-image: linear-gradient(90deg, #ff5e14, white);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
}

.card .linkedin {
  border-right-color: #ff5e14;
  border-bottom-color: #ff5e14;
  color: #ff5e14;
  background-image: linear-gradient(90deg, white, #ff5e14);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
}

.card h2 {
  margin: 0 0 5px;
  font-size: 30px;
  font-weight: 300;
}
.card h2 span {
  display: block;
  font-size: 0.5em;
  color: #ff5e14;
}
.card p {
  margin: 0 0 10px;
  font-size: 0.8em;
  padding-right: 15px;
  letter-spacing: 1px;
  overflow-y: auto;
  max-height: 140px;
  opacity: 0.8;
}

</style>