<template>
  <div class="card">
  <img :src="testimonial.back_image" alt="background img" />
  <div>
    <img :src="testimonial.profile_img" :alt="testimonial.name" class="profile" />
    <h2>{{testimonial.name}}<span>{{testimonial.relation}}</span></h2>
    <p>{{testimonial.message}}</p>
    <button class="mx-3">
      <a :href="testimonial.links.github" class="github" target="_blank">GitHub</a>
    </button>
    <button class="mx-3">
      <a :href="testimonial.links.linkedin" class="linkedin" target="_blank">LinkedIn</a>
    </button>
  </div>
  </div>
</template>

<script>
export default {
    props:['testimonial'],
    data(){
        return{
            testimonial: this.testimonial
        }
    }
}
</script>

<style scoped>
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

a{
  text-decoration: none;
  color: white;
}

button {
 height: 40px;
 padding: 0 10px 0 10px;
 border: 2px solid #ff5e14;
 position: relative;
 overflow: hidden;
 background-color: transparent;
 text-align: center;
 text-transform: uppercase;
 font-size: 14px;
 transition: .3s;
 z-index: 1;
 font-family: inherit;
 letter-spacing: 2px;
}

button::before {
 content: '';
 width: 0;
 height: 300%;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%) rotate(45deg);
 background: #ff5e14;
 transition: .5s ease;
 display: block;
 z-index: -1;
}

button:hover::before {
 width: 105%;
}

button:hover a{
 color: black;
}

@media (max-width: 400px){
  button{
    margin-top: 10px;
    margin-left: 25% !important;
  }
}

</style>