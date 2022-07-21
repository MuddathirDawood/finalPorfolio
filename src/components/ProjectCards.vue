<template>
          <div>
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