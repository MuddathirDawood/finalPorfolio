import { createStore } from 'vuex'

export default createStore({
  state: {
    projects:[
      {
        id:1,
        title:'Bootstrap Page Exercise',
        tools:'Bootstrap 5/CSS 3/HTML 5',
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
        tools:'Bootstrap 5/CSS 3/HTML 5',
        description:'This project one of the portfolios I made which was made with course assignment for Life Choices Academy',
        links:{
          github: 'https://github.com/MuddathirDawood/Portfolio',
          live: 'https://muddathir-dawood-porflioproject.netlify.app/'
        },
        image: 'https://i.postimg.cc/Jh6ZnF8r/Project2.jpg'
      },
      {
        id:3,
        title:'Website',
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
        title:'Calculator',
        tools:'Bootstrap 5/CSS 3/HTML 5/Javascript',
        description:'This was first made with no functionality then months later after we learnt Javascript',
        links:{
          github: 'https://github.com/MuddathirDawood/Calculator',
          live: 'https://muddathir-calculator.netlify.app/'
        },
        image: 'https://i.postimg.cc/dQNBV4vt/Project4.png'
      },
      {
        id:5,
        title:'Properties List',
        tools:'Bootstrap 5/CSS 3/HTML 5/Javascript',
        description:'This was my first big assignment where we had to use everything we learnt in Javascript to create a complicated listing with a admin page',
        links:{
          github: 'https://github.com/MuddathirDawood/PropertiesList',
          live: 'https://muddathir-propertieslist.netlify.app/'
        },
        image: 'https://i.postimg.cc/brz8sqjW/Project5.jpg'
      },
      {
        id:6,
        title:'RGB To Hex',
        tools:'CSS 3/HTML 5/Javascript',
        description:'This project is a small side project to convert a rgb color code to a hex color code',
        links:{
          github: 'https://github.com/MuddathirDawood/JS-Tasks/tree/master/RGBtoHex',
          live: 'https://muddathir-rgbtohex.netlify.app/'
        },
        image: 'https://i.postimg.cc/qRP7NFZh/Screenshot-25.jpg'
      },
      {
        id:7,
        title:'Unlimited CMD',
        tools:'Vue.js/Node.js/Express.js/MySQL',
        description:'This project was a pair project where we were divided into a front-end and back-end members where I was the back-end for this project',
        links:{
          github: 'https://github.com/MuddathirDawood/UnlimitedCMD',
          live: 'https://unlimited-cmd.netlify.app/'
        },
        image: 'https://i.postimg.cc/tC9zxPWM/unlimited-CMD.jpg'
      },
      {
        id:8,
        title:'Destruction',
        tools:'Vue.js/Node.js/Express.js/MySQL',
        description:'This is the capstone project for Life Choices Coding Academy where we had to do a full stack project by ourselves',
        links:{
          github: 'https://github.com/MuddathirDawood/DestructionGUI',
          live: 'https://capstone-destruction.web.app/'
        },
        image: 'https://i.postimg.cc/KvfTTHD6/Destruction.jpg'
      },
      {
        id:9,
        title:'Quasaragram',
        tools:'Vue.js/Quasar/Firebase Databasing',
        description:'This is a simple instagram clone made using the vue.js framework Quasar',
        links:{
          github: 'https://github.com/MuddathirDawood/quasaragram',
          live: 'https://quasaragram.web.app/#/'
        },
        image: 'https://i.postimg.cc/tgbdF2Mp/Project-9.jpg'
      }                  
    ],
    testimonials:[
      {
        id:1,
        name:'Cameron Stemmet',
        relation: 'Colleague',
        message: 'Muddathir is one of the easiest people I\'ve ever had the pleasure of working with. His adaptability and helpfulness is unmatched and is always ready to help his colleagues with great advice and a smile. I would absolutely recommend him to any and every organization because i believe he would flourish under any adversity as well as the personality to work well with anyone. He also has the leadership qualities that would be valuable under any circumstances.  It\'s been a pleasure to call him a colleague and friend.',
        links:{
          github: 'https://github.com/Stemmet',
          linkedin: 'https://www.linkedin.com/in/cameron-stemmet-023286238/'
        },
        profile_img: 'https://i.postimg.cc/N0Qx4MCg/Cameron-3.jpg',
        back_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample55.jpg'
      },
      {
        id:2,
        name:'Jared Isaacs',
        relation: 'Colleague',
        message: 'Muddathir is a helpful colleague who helped me and several other colleagues with our problems and when he focuses on a project he will be determined to finish it as quickly as possible.He will be a valuable asset.',
        links:{
          github: 'https://github.com/AkutoBlade',
          linkedin: 'https://www.linkedin.com/in/jared-isaacs-854514245/'
        },
        profile_img: 'https://i.postimg.cc/NLqf4xgW/Jared.jpg',
        back_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
      },
      {
        id:3,
        name:'Hannah Dalwai',
        relation: 'Assistant Lecturer',
        message: 'Muddathir is a developer with unlimited potential and a great eye for design. He is always ready to help his colleagues when needed. It is a pleasure watching his skill grow with each project he is given. He will add an enormous amount of value to any team.',
        links:{
          github: 'https://github.com/HannahDalwai',
          linkedin: 'https://www.linkedin.com/in/hannah-dalwai-029396216/'
        },
        profile_img: 'https://i.postimg.cc/XqgDHj34/Hannah1.jpg',
        back_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg'
      },
      {
        id:4,
        name:'Daniel Fredericks',
        relation: 'Colleague',
        message: 'Muddathir has a very broad understanding of coding and is able to adapt to any situation seemingly with ease. It is easy to see that a lot of work is put into understanding concepts and applying them in his tasks. He works well with others, is great to be around and is an all out great guy. I believe that he will be an asset to anyone that hires him.',
        links:{
          github: 'https://github.com/DanielJamesF',
          linkedin: 'https://www.linkedin.com/in/daniel-fredericks-85744023a/'
        },
        profile_img: 'https://i.postimg.cc/63vwTvKq/Daniel-3-1.jpg',
        back_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg'
      },
      {
        id:5,
        name:'Joel Mukanya',
        relation: 'Lecturer',
        message: 'Muddathir is a very creative, well-behaved student, he enjoys working with his classmates and does well working on his project. He has learned many new tricks for Web Development. I am quite happy with the effort he puts into his work. It\'s a pleasure to see his projects which he worked on so far. I recommend him',
        links:{
          github: 'https://github.com/joelmukanya',
          linkedin: 'https://www.linkedin.com/in/joel-tshimanga-mukanya-b4b27834/'
        },
        profile_img: 'https://i.postimg.cc/RF1Sv4F6/joel1.jpg',
        back_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample76.jpg'
      },
      {
        id:6,
        name:'Saleem Ariefdien',
        relation: 'Colleague',
        message: 'Muddathir is well-behaved as well as a great individual. He has great time management skills and is always willing to help others indeed with their work. He is hardworking and responsible. He is extremely passionate about his work and it shows in any task he takes on and his attention to detail is impeccable. He works well in a team as well as individually and he would be a real talent to have at your company.',
        links:{
          github: 'https://github.com/Mogamat-S23',
          linkedin: 'https://www.linkedin.com/in/mogamat-saleem-ariefdien-808966196/'
        },
        profile_img: 'https://i.postimg.cc/6QnqtygC/Saleem-3.jpg',
        back_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample26.jpg'
      },
      {
        id:7,
        name:'Clayton Adonis',
        relation: 'Colleague',
        message: 'Muddathir always helps his colleagues with problems simple or huge. He has helped me with several of my problems and evrytime I learn something new when he fixes my problems. It\'s a pleasure to be his colleague and see how hard he works. I highly recommend him',
        links:{
          github: 'https://github.com/Clayton0205',
          linkedin: 'https://www.linkedin.com/in/clayton-adonis-798612238/'
        },
        profile_img: 'https://i.postimg.cc/rFKkjNJD/Clayton-3.jpg',
        back_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample86.jpg'
      },
      {
        id:7,
        name:'Amanda Gudlwa',
        relation: 'Colleague',
        message: 'Muddathir Dawood is a person who is a pleasure to work with, he knows how to lead, and also how to be in a position to take instruction. Muddathir is a good team player. He has good attention to detail. He knows how to stay focused and work on a task as well as keeping to deadlines. I would recomend Muddathir to be part of any team and given any responsibility.',
        links:{
          github: 'https://github.com/AmandaAzania',
          linkedin: 'https://www.linkedin.com/in/mandy-gudlwa-b79a96238/'
        },
        profile_img: 'https://i.postimg.cc/0NsmM3wK/Amanda-1.jpg',
        back_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample13.jpg'
      }                   
    ],
    education:[
      {
        faculty: 'Life Choices Coding Academy',
        years: 'Mar 2022',
        description: 'A Student that is doing a 12-month coding course where we learn back-end and front-end web developing and the software we use to do this is HTML5, CSS3, Bootstrap, JavaScript and more'
      },
      {
        faculty: 'Spine Road High School',
        years: '2017 - 2021',
        description: '5 years of High School Education with 3 years of majoring in Physical Sciences, Life Sciences, I.T and Pure Maths. I learnt a little bit of Delphi And SQL during my last three years of High School. Passed Matric in the year 2021 with a Bachelor Pass'        
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
