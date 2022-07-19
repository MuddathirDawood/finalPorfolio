<template>
<header>
   <img src="../assets/Logo.png" alt="" style="width: 70px; height: 70px"> 
  <div class="navigation">
    <ul>
        <li class="list" @click="active" :class="{active: isActive}">
            <router-link to="/">
                <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                <span class="text">Home</span>
            </router-link>
        </li>
        <li class="list" @click="active2" :class="{active: isActive2}">
            <router-link to="/about">
                <span class="icon"><ion-icon name="help-outline"></ion-icon></span>
                <span class="text">About</span>
            </router-link>
        </li>
        <li class="list" @click="active3" :class="{active: isActive3}">
            <a href="#">
                <span class="icon"><ion-icon name="code-slash-outline"></ion-icon></span>
                <span class="text">Projects</span>
            </a>
        </li>
        <li class="list" @click="active4" :class="{active: isActive4}">
            <a href="#">
                <span class="icon"><ion-icon name="people-outline"></ion-icon></span>
                <span class="text">Testimonials</span>
            </a>
        </li>
        <li class="list" @click="active5" :class="{active: isActive5}">
            <router-link to="/contact">
                <span class="icon"><ion-icon name="call-outline"></ion-icon></span>
                <span class="text">Contact</span>
            </router-link>
        </li> 
        <div class="indicator"></div>                               
    </ul>
  </div>
</header>
</template>

<script>
export default {
    data(){
        return{
            isActive: true,
            isActive2: false,
            isActive3: false,
            isActive4: false,
            isActive5: false,
        }
    },
    methods:{
        active(){
            this.isActive = !this.isActive
            this.isActive2 = false
            this.isActive3 = false
            this.isActive4 = false
            this.isActive5 = false
        },
        active2(){
            this.isActive2 = !this.isActive2
            this.isActive = false
            this.isActive3 = false
            this.isActive4 = false
            this.isActive5 = false            
        },
        active3(){
            this.isActive3 = !this.isActive3
            this.isActive2 = false
            this.isActive = false
            this.isActive4 = false
            this.isActive5 = false            
        },
        active4(){
            this.isActive4 = !this.isActive4
            this.isActive2 = false
            this.isActive3 = false
            this.isActive = false
            this.isActive5 = false            
        },
        active5(){
            this.isActive5 = !this.isActive5
            this.isActive2 = false
            this.isActive3 = false
            this.isActive4 = false
            this.isActive = false            
        }                        
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header{
    min-width: 98vw;
    background-color: #151414;
    display: flex;
    justify-content: center;
}

body{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.navigation{
    position: relative;
    width: 400px;
    height: 70px;
    background-color: #151414;
    display: flex;
    justify-content: center !important;
    align-items: center;
    font-family: 'Poppins', sans-serif;
}

.navigation ul{
    display: flex;
    width: 350px;
}

.navigation ul li{
    position: relative;
    list-style: none;
    width: 70px;
    height: 70px;
    z-index: 1;
}

.navigation ul li a{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
}

.navigation ul li a .icon{
    position: relative;
    display: block;
    line-height: 75px;
    font-size: 1.5em;
    text-align: center;
    transition: 0.5s;
    color: #ff5e14;
}

.navigation ul li.active a .icon{
    transform: translateY(32px);
}

.navigation ul li .text{
    position: absolute;
    color: #ff5e14;
    font-weight: 400;
    font-size: 0.85em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    opacity: 0;
    transform: translateY(-20px);
}

.navigation ul li.active a .text{
    opacity: 1;
    transform: translateY(-10px);
}

.indicator{
    position: absolute;
    top: 50%;
    width: 70px;
    height: 70px;
    background-color: #151414;
    border-radius: 50%;
    border: 6px solid black;
    transition: 0.5s;
}

.indicator::before{
    content: '';
    position: absolute;
    bottom: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-bottom-right-radius: 20px;
    box-shadow: 1px 10px 0 0 black;
}

.indicator::after{
    content: '';
    position: absolute;
    bottom: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-bottom-left-radius: 20px;
    box-shadow: -1px 10px 0 0 black;
}

.navigation ul li:nth-child(1).active ~ .indicator{
    transform: translateX(calc(70px * 0));
}

.navigation ul li:nth-child(2).active ~ .indicator{
    transform: translateX(calc(70px * 1));
}

.navigation ul li:nth-child(3).active ~ .indicator{
    transform: translateX(calc(70px * 2));
}

.navigation ul li:nth-child(4).active ~ .indicator{
    transform: translateX(calc(70px * 3));
}

.navigation ul li:nth-child(5).active ~ .indicator{
    transform: translateX(calc(70px * 4));
}
</style>