import { createStore } from 'vuex'

export default createStore({
  state: {
    projects:[
      {
        id:1,
        title:'bootstrap_page_exercise',
        tools:'Bootstrap 5, CSS3, HTML5',
        description:'This project is the combination of HTML5 and CSS3, it consists mostly of Bootstrap',
        links:{
          github: 'https://github.com/MuddathirDawood/bootstrap_page_exercise',
          live: 'https://bootstrap-page-exercise.netlify.app/'
        },
        image: 'https://i.postimg.cc/76yWZbnM/Project1.png'
      },
      {
        id:2,
        title:'Portfolio',
        tools:'Bootstrap 5, CSS3, HTML5',
        description:'This project one of the portfolios I made which was mt mid course assignment for Life Choices Academy',
        links:{
          github: 'https://github.com/MuddathirDawood/Portfolio',
          live: 'https://muddathir-dawood-porflioproject.netlify.app/'
        },
        image: 'https://i.postimg.cc/Jh6ZnF8r/Project2.jpg'
      },
      {
        id:3,
        title:'website',
        tools:'HTML5',
        description:'This project is a compilation of HTML5 Tags that I learnt recently that time',
        links:{
          github: 'https://github.com/MuddathirDawood/website',
          live: 'https://muddathir-website.netlify.app/'
        },
        image: 'https://i.postimg.cc/5NvCW32r/Project3.png'
      },
      {
        id:4,
        title:'calculator',
        tools:'Bootstrap 5, CSS3, HTML5, Javascript',
        description:'This was first made with no functionality then months later after we learnt Javascript',
        links:{
          github: 'https://github.com/MuddathirDawood/Calculator',
          live: 'https://muddathir-calculator.netlify.app/'
        },
        image: 'https://i.postimg.cc/dQNBV4vt/Project4.png'
      },
      {
        id:5,
        title:'PropertiesList',
        tools:'Bootstrap 5, CSS3, HTML5, Javascript',
        description:'This was my first big assignment where we had to use everything we learnt in Javascript to create a complicated listing with a admin page',
        links:{
          github: 'https://github.com/MuddathirDawood/PropertiesList',
          live: 'https://muddathir-propertieslist.netlify.app/'
        },
        image: 'https://i.postimg.cc/brz8sqjW/Project5.jpg'
      }      
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
