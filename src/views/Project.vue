<template>
<div class="container">
    <div class="project-card">
        <div class="project-image">
            <img src="../assets/2966386.png" alt="">
        </div>
        <div class="project-info">
            <div class="project-details">
                <span>CSS/HTML</span>
                <span>Title</span>
            </div>
            <h1 class="project-title">Yo</h1>
            <p class="project-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam totam officiis odio praesentium perspiciatis sunt minus ad sapiente consequatur provident!
            </p>
            <a href="" class="project-link1">GIT</a>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
}

img{
    width: 600px;
    height: 250px;
}

.project-card{
    width: 100%;
    max-width: 98rem;
    padding: 5rem;
    background: #fff;
    box-shadow: 0 1.4rem 8rem rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    border-radius: 0.8rem; 
}

.project-image{
    min-width: 35rem;
    min-height: 35rem;
    height: 30rem;
    transform: translateX(-8rem);
    position: relative;
}

.project-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 0.8rem;
}

.project-details span{
    display: block;
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.6rem;
    font-weight: 600;
    margin: 0.5rem 0;
}

.project-title{
    font-size: 2.5rem;
    margin: 1.5rem 0 2rem;
    text-transform: uppercase;
    color: #ff5e14;
}

.project-text{
    margin-bottom: 3rem;
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.7);
}

.project-link1{
    display: inline-block;
    padding: 1.5rem 3rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 1.2rem;
    color: #fff;
    background-image: linear-gradient(to right,#ff5e14 0%, #e34800 100%);
    border-radius: 0.8rem;
    text-decoration: none;
}

@media (max-width:868px){
    .project-card{
        max-width: 70rem;
    }
}

@media (max-width:768px){
    .project-card{
        max-width: 2.5rem;
        flex-direction: column;
    }
    .project-image{
        min-width: 100%;
        max-width: 100%;
        transform: translate(0, -8rem);
    }
}

</style>