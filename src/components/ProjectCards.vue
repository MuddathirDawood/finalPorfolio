<template>
            <div class="card my-3">
              <img :src="project.image" alt="" class="postImg">
              <div class="card-desc">
                <p> Project Name: <br>{{project.title}}</p>
                <router-link :to="{name: 'project', params:{id: project.id}}">
                    <span id="postButton">See more</span><i></i>
                </router-link> 
              </div>
            </div>
</template>

<script>
export default {
    props: ['projects'],
    data(){
        return{
            project: this.projects
        }
    }
}
</script>

<style scoped>
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

@media (max-width:426px){
    .card{
      width: 100%;
      height: 175px;
    }
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
/* #postButton{
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
} */

a{
  position: relative;
  background: black;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 0.1em;
  padding: 10px 30px;
  transition: 0.5s;
  width: 180px;
  text-align: center;
}

a:hover{
  letter-spacing: 0.25em;
  background-color: #ff5e14;
  color: #ff5e14;
  box-shadow: 0 0 10px #ff5e14;
}

a::before{
  content: '';
  position: absolute;
  inset: 2px;
  background: #222;
}

a span{
  position: relative;
  z-index: 2;
}

a i{
  position: absolute;
  inset: 0;
  display: block;
}

a i::before{
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

a:hover i::before{
  width: 25px;
  left: 10%;
}

a i::after{
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

a:hover i::after{
  width: 25px;
  left: 80%;
}

.card:hover .card-desc {
  opacity: 1;
  height: 100%;
  width: 100%;
}
</style>