<template>
<div class="container">
    <div class="row content">
        <div class="col-md-5">
            <img src="https://i.postimg.cc/yd2mtrVd/Muddathir-1.jpg" alt="">
        </div>
        <div class="col-md-7" style="text-align: center;"> 
            <h1>About Me</h1>
            <div class="container-bio">
              <h2 class="h2work">Bio</h2>
              I am an optimistic person who will help my peers to the best of my ability. I'm patient and hard-working to the point where I can fully divert all my attention to my work.
              Ever since I started doing coding in 2019, I grew a passion for coding. Then a relative of mine introduced me to Full Stack Developing, which motivated me. I then made it my goal to become a Full Stack Developer. <br>
              A few hobbies of mine include:
              <ul>
                <li>Video Games</li>
                <li>Reading</li>
                <li>Watching Anime</li>
              </ul>              
            </div>
            <div id="divider"></div>
            <div id="skills">
                <div class="row skills" >
                    <div class="col-6" id="borderR">
                        <h5>Technical skills</h5>
                                      <div class="row pb-2">
                <div class="col-12"><p class="progresstext">
                  HTML
                  <span id="nbr">%</span></p>
                  <div class="progress bg-secondary" style="height: 8px;">
                      <div class="progress-bar" style="width:75%; height: 8px;"></div>
                  </div>               
                </div>
              </div>
              <div class="row py-2">
                <div class="col-12"><p class="progresstext">
                  CSS
                  <span id="nbr2">%</span></p>
                  <div class="progress bg-secondary" style="height: 8px;">
                      <div class="progress-bar" style="width:60%; height: 8px;"></div>
                  </div>               
                </div>
              </div>
              <div class="row py-2">
                <div class="col-12"><p class="progresstext">
                  Bootstrap
                  <span id="nbr3">%</span></p>
                  <div class="progress bg-secondary" style="height: 8px;">
                      <div class="progress-bar" style="width:55%; height: 8px;"></div>
                  </div>               
                </div>
              </div>
              <div class="row py-2">
                <div class="col-12"><p class="progresstext">
                  SQL
                  <span id="nbr4">%</span></p>
                  <div class="progress bg-secondary" style="height: 8px;">
                      <div class="progress-bar" style="width:35%; height: 8px;"></div>
                  </div>               
                </div>
              </div>
              <div class="row py-2">
                <div class="col-12"><p class="progresstext">
                  Delphi
                  <span id="nbr5">%</span></p>
                  <div class="progress bg-secondary" style="height: 8px;">
                      <div class="progress-bar" style="width:85%; height: 8px;"></div>
                  </div>               
                </div>
              </div>
              <div class="row pt-2">
                <div class="col-12"><p class="progresstext">
                  Vue
                  <span id="nbr6">%</span></p>
                  <div class="progress bg-secondary" style="height: 8px;">
                      <div class="progress-bar" style="width:20%; height: 8px;"></div>
                  </div>               
                </div>
              </div>
                    </div>
                    <div class="col-6"> 
                        <h5>Soft Skills</h5>
                            <ul id="soft">
                              <li>Problem-solving</li>
                              <li>Time Management</li>
                              <li>Stress Management</li>
                              <li>Adaptability</li>
                              <li>Active Listener</li>
                              <li>Team Player Attitude</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <header>
    <h1>Education</h1>
</header>
<ul class="timeline">
  <!-- Item 1 -->
  <li>
    <div class="direction-r">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">Life Choices Code Academy</span>
        <span class="time-wrapper"><span class="time">Mar 2022</span></span>
      </div>
      <div class="desc">A Student that is doing a 12-month coding course where we learn back-end and front-end web developing and the software we use to do this is HTML5, CSS3, Bootstrap, JavaScript and more</div>
    </div>
  </li>

  <!-- Item 2 -->
  <li>
    <div class="direction-l">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">Spine Road High School</span>
        <span class="time-wrapper"><span class="time">2017 - 2021</span></span>
      </div>
      <div class="desc">5 years of High School Education with 3 years of majoring in Physical Sciences, Life Sciences, I.T and Pure Maths. I learnt a little bit of Delphi And SQL during my last three years of High School. Passed Matric in the year 2021 with a Bachelor Pass</div>
    </div>
  </li>

  <!-- Item 3 -->
  <li>
    <div class="direction-r">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">Lorem Occaecat.</span>
        <span class="time-wrapper"><span class="time">July 2014</span></span>
      </div>
      <div class="desc">Lorem ipsum Minim labore Ut cupidatat quis qui deserunt proident fugiat pariatur cillum cupidatat reprehenderit sit id dolor consectetur ut.</div>
    </div>
  </li>
</ul>
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
    min-height: 110vh;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    gap: 50px;
    padding-bottom: 50px;
}

@media (max-width:768px){
    .container{
        min-height: 150vh;
    }
}

.content{
    margin: auto;
    width: 80%;
    height: auto;
    z-index: 5;
    background: black;
    border: 1px black solid;
    border-radius: 35px;
    display: flex;
    flex-direction: row;
}

.col-md-5{
    padding: 0;
}

.col-md-7{
    padding-left: 25px;
    padding-right: 25px;
}

img{
    height: auto;
    width: 100%;
    border-right: 1px black solid;
    /* border-radius: 35px; */
}

.container-bio{
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: white;
  text-align: start;
}

.container-bio ul{
  list-style: none;
  margin-left: 10px;
}

.container-bio ul>li::before{
  content: '✓ ';
  color: #ff5e14;
}

#soft{
    list-style: none;
    margin-left: 10px;
    text-align: start;
    color: white;
}

#soft>li{
    margin-top: 25px;
}

#soft>li::before{
    content: '※';
    color: #ff5e14;
    margin-right: 20px;
}

h1{
  color: white;
  text-shadow: 0 0 10px #ff5e14;
  font-size: 40px;
  font-weight: 300;
}

h5{
  color: white;
  text-shadow: 0 0 10px #ff5e14;
  font-size: 20px;
  font-weight: 300;  
}

#borderR{
    border-right: white 1px solid;
}

#divider{
    margin-left: 11%;
    width: 80%;
    height: 1px;
    background-color: white;
}

#skills{
    margin-top: 25px;
}

.skills{
    display: flex;
    flex-direction: row;
}

.progress-bar{
    background-color: #ff5e14;
}

.progresstext{
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
  color: white;
}

.progress-bar{
  animation: progress 1500ms ease-in 1;
}

@keyframes progress{
    from{
      width: 0%;
    }
}

@property --num1 {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

@property --num2 {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

@property --num3 {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

@property --num4 {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

@property --num5 {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

@property --num6 {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}


#nbr {
  counter-reset: num1 var(--num1);
  animation: animate 1750ms forwards ease;
}

#nbr:before {
  content: counter(num1);
}

#nbr2 {
  counter-reset: num2 var(--num2);
  animation: animate 1750ms forwards ease;
}

#nbr2:before {
  content: counter(num2);
}

#nbr3 {
  counter-reset: num3 var(--num3);
  animation: animate 1750ms forwards ease;
}

#nbr3:before {
  content: counter(num3);
}

#nbr4 {
  counter-reset: num4 var(--num4);
  animation: animate 1750ms forwards ease;
}

#nbr4:before {
  content: counter(num4);
}

#nbr5 {
  counter-reset: num5 var(--num5);
  animation: animate 1750ms forwards ease;
}

#nbr5:before {
  content: counter(num5);
}

#nbr6 {
  counter-reset: num6 var(--num6);
  animation: animate 1750ms forwards ease;
}

#nbr6:before {
  content: counter(num6);
}

@keyframes animate {
  to {
    --num1: 75;
    --num2: 60;
    --num3: 55;
    --num4: 35;
    --num5: 85;
    --num6: 20;
  }
}

/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Timeline /////////////////////////////////////////////////////////////////*/
@import url(https://fonts.googleapis.com/css?family=Raleway:400,900);

body{
  font-family: 'Raleway', sans-serif;
  color: #333;
}

header h1{
  text-align: center;
  font-weight: bold;
  margin-top: 0;
}
  
 header p{
   text-align: center;
   margin-bottom: 0;
 }

.hexa{
  border: 0px;
  float: left;
  text-align: center;
  height: 35px;
  width: 60px;
  font-size: 22px;
  background: #222;
  color: white;
  position: relative;
  margin-top: 15px;
}

.hexa:before{
  content: ""; 
  position: absolute; 
  left: 0; 
  width: 0; 
  height: 0;
  border-bottom: 15px solid #f0f0f0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  top: -15px;
}

.hexa:after{
  content: ""; 
  position: absolute; 
  left: 0; 
  width: 0; 
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 15px solid #f0f0f0;
  bottom: -15px;
}

.timeline {
  position: relative;
  padding: 0;
  width: 100%;
  margin-top: 75px;
  list-style-type: none;
}

.timeline:before {
  position: absolute;
  left: 50%;
  top: 0;
  content: ' ';
  display: block;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  background: rgb(213,213,213);
  background: -moz-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(30,87,153,1)), color-stop(100%,rgba(125,185,232,1)));
  background: -webkit-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: -o-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: -ms-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: linear-gradient(to bottom, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  z-index: 5;
}

.timeline li {
  padding: 2em 0;
}

.timeline .hexa{
  width: 16px;
  height: 10px;
  position: absolute;
  background: #ff5e14;
  z-index: 5;
  left: 0;
  right: 0;
  margin-left:auto;
  margin-right:auto;
  top: -30px;
  margin-top: 0;
}

.timeline .hexa:before {
  border-bottom: 4px solid #ff5e14;
  border-left-width: 8px;
  border-right-width: 8px;
  top: -4px;
}

.timeline .hexa:after {
  border-left-width: 8px;
  border-right-width: 8px;
  border-top: 4px solid #ff5e14;
  bottom: -4px;
}

.direction-l,
.direction-r {
  float: none;
  width: 100%;
  text-align: center;
}

.flag-wrapper {
  text-align: center;
  position: relative;
}

.flag {
  position: relative;
  display: inline;
  background: #222;
  color: white;
  font-weight: 600;
  z-index: 15;
  padding: 6px 10px;
  text-align: left;
  border-radius: 5px;
  border: #ff5e14 1px solid;
}

.direction-l .flag:after,
.direction-r .flag:after {
  content: "";
  position: absolute;
  left: 50%;
  top: -15px;
  height: 0;
  width: 0;
  margin-left: -8px;
  border: solid transparent;
  border-bottom-color: #222;
  border-width: 8px;
  pointer-events: none;
}

.time-wrapper {
  display: block;
  position: relative;
  margin: 4px 0 0 0;
  z-index: 14;
  line-height: 1em;
  vertical-align: middle;
  color: #fff;
}

.direction-l .time-wrapper {
  float: none;
}

.direction-r .time-wrapper {
  float: none;
}

.time {
  background: #ff5e14;
  display: inline-block;
  padding: 8px;
}

.desc {
  position: relative;
  margin: 1em 0 0 0;
  padding: 1em;
  background: #222;
  color: white;
  -webkit-box-shadow: 0 0 1px rgba(0,0,0,0.20);
  -moz-box-shadow: 0 0 1px rgba(0,0,0,0.20);
  box-shadow: 0 0 1px rgba(0,0,0,0.20);
  z-index: 15;
}

.direction-l .desc,
.direction-r .desc {
  position: relative;
  margin: 1em 1em 0 1em;
  padding: 1em;
  z-index: 15;
}

@media(min-width: 768px){
  .timeline {
    width: 660px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .timeline li:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  
  .timeline .hexa {
    left: -28px;
    right: auto;
    top: 8px;
  }

  .timeline .direction-l .hexa {
    left: auto;
    right: -28px;
  }

  .direction-l {
    position: relative;
    width: 310px;
    float: left;
    text-align: right;
  }

  .direction-r {
    position: relative;
    width: 310px;
    float: right;
    text-align: left;
  }

  .flag-wrapper {
    display: inline-block;
  }
  
  .flag {
    font-size: 18px;
  }

  .direction-l .flag:after {
    left: auto;
    right: -16px;
    top: 50%;
    margin-top: -8px;
    border: solid transparent;
    border-left-color: #222;
    border-width: 8px;
  }

  .direction-r .flag:after {
    top: 50%;
    margin-top: -8px;
    border: solid transparent;
    border-right-color: #222;
    border-width: 8px;
    left: -8px;
  }

  .time-wrapper {
    display: inline;
    vertical-align: middle;
    margin: 0;
  }

  .direction-l .time-wrapper {
    float: left;
  }

  .direction-r .time-wrapper {
    float: right;
  }

  .time {
    padding: 5px 10px;
  }

  .direction-r .desc {
    margin: 1em 0 0 0.75em;
  }
}

@media(min-width: 992px){
  .timeline {
    width: 800px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .direction-l {
    position: relative;
    width: 380px;
    float: left;
    text-align: right;
  }

  .direction-r {
    position: relative;
    width: 380px;
    float: right;
    text-align: left;
  }
}
</style>