import Homepage from './components/body/Homepage.vue';
import Corepage from './components/body/Corepage.vue';
import Courses from './components/body/corepage/Courses.vue';
import Elearning from './components/body/corepage/Elearning.vue';
import Projects from './components/body/corepage/Projects.vue';
import Makerspace from './components/body/corepage/Makerspace.vue';
import Workshops from './components/body/corepage/Workshops.vue';
import Competitions from './components/body/corepage/Competitions.vue';
import Careers from './components/body/corepage/Careers.vue';
import Aboutus from './components/body/corepage/Aboutus.vue';

export const routes = [
    {path : '',component : Homepage},
     /* {path : '/courses',component : Corepage},  */
     {
        path : '/tab', component : Corepage,
        children : [
            {path : 'courses',component: Courses},
            {path : 'projects',component: Projects},
            {path : 'makerspace',component: Makerspace},
            {path : 'workshops',component: Workshops},
            {path : 'competitions',component: Competitions},
            {path : 'careers',component: Careers},
            {path : 'aboutus',component: Aboutus},
            {path : 'elearning',component: Elearning},
            
        ]
    }

];