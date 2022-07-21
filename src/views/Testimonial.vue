<template>
<div class="container">
  <div class="card">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
  <div>
    <img src="https://i.postimg.cc/NLqf4xgW/Jared.jpg" alt="Jared Isaacs" class="profile" />
    <h2 style="font-size:10px">Cameron Stemmet<span>Colleague</span></h2>
    <p>Muddathir is one of the easiest people I've ever had the pleasure of working with. His adaptability and helpfulness is unmatched and is always ready to help his colleagues with great advice and a smile. I would absolutely recommend him to any and every organization because i believe he would flourish under any adversity as well as the personality to work well with anyone. He also has the leadership qualities that would be valuable under any circumstances.  It's been a pleasure to call him a colleague and friend.</p>
    <a href="https://github.com/AkutoBlade" class="github" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/jared-isaacs-854514245/" class="linkedin" target="_blank">LinkedIn</a>
  </div>
</div>  
  <div class="card">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
  <div>
    <img src="https://i.postimg.cc/NLqf4xgW/Jared.jpg" alt="Jared Isaacs" class="profile" />
    <h2>Jared Isaacs<span>Colleague</span></h2>
    <p>Muddathir is a helpful colleague who helped me and several other colleagues with our problems and when he focuses on a project he will be determined to finish it as quickly as possible.He will be a valuable asset.</p>
    <a href="https://github.com/AkutoBlade" class="github" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/jared-isaacs-854514245/" class="linkedin" target="_blank">LinkedIn</a>
  </div>
</div>
<div class="card">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg" alt="sample74" />
  <div>
    <img src="https://i.postimg.cc/XqgDHj34/Hannah1.jpg" alt="Hannah Dalwai" class="profile" />
    <h2>Hannah Dalwai<span>Assistant Lecturer</span></h2>
    <p>Muddathir is a developer with unlimited potential and a great eye for design. He is always ready to help his colleagues when needed. It is a pleasure watching his skill grow with each project he is given. He will add an enormous amount of value to any team.</p>
    <a href="https://github.com/HannahDalwai" class="github" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/hannah-dalwai-029396216/" class="linkedin" target="_blank">LinkedIn</a>
  </div>
</div>
<div class="card">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg" alt="sample69" />
  <div>
    <img src="https://i.postimg.cc/63vwTvKq/Daniel-3-1.jpg" alt="Daniel Fredericks" class="profile" />
    <h2>Daniel Fredericks<span>Colleague</span></h2>
    <p>Muddathir has a very broad understanding of coding and is able to adapt to any situation seemingly with ease. It is easy to see that a lot of work is put into understanding concepts and applying them in his tasks. He works well with others, is great to be around and is an all out great guy. I believe that he will be an asset to anyone that hires him.</p>
    <a href="https://github.com/DanielJamesF" class="github" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/daniel-fredericks-85744023a/" class="linkedin" target="_blank">LinkedIn</a>
  </div>
</div>
<div class="card">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample76.jpg" alt="sample69" />
  <div>
    <img src="https://i.postimg.cc/RF1Sv4F6/joel1.jpg" alt="Joel Mukanya" class="profile" />
    <h2>Joel Mukanya<span>Lecturer</span></h2>
    <p>Muddathir is a very creative, well-behaved student, he enjoys working with his classmates and does well working on his project. He has learned many new tricks for Web Development. I am quite happy with the effort he puts into his work. It's a pleasure to see his projects which he worked on so far. I recommend him</p>
    <a href="https://github.com/joelmukanya" class="github" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/joel-tshimanga-mukanya-b4b27834/" class="linkedin" target="_blank">LinkedIn</a>
  </div>
</div>
<div class="card">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample86.jpg" alt="sample69" />
  <div>
    <img src="https://i.postimg.cc/rFKkjNJD/Clayton-3.jpg" alt="Clayton Adonis" class="profile" />
    <h2>Clayton Adonis<span>Colleague</span></h2>
    <p>Muddathir always helps his colleagues with problems simple or huge. He has helped me with several of my problems and evrytime I learn something new when he fixes my problems. It's a pleasure to be his colleague and see how hard he works. I highly recommend him</p>
    <a href="https://github.com/Clayton0205" class="github" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/clayton-adonis-798612238/" class="linkedin" target="_blank">LinkedIn</a>
  </div>
</div>
</div>
</template>

<script>
export default {

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