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
    justify-content: center;
    align-items: center;
    padding-top: 50px;
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

</style>