<template>
<div class="container">
  <Testemonial-card  v-for="testimonial in testimonials" :key="testimonial" :testimonial="testimonial"/>
</div>  
</template>

<script>
import TestemonialCard from '@/components/TestemonialCard.vue'
export default {
  components: { TestemonialCard },
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


</style>