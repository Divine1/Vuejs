import Cricket from './components/Cricket.vue';
import Football from './components/Football.vue';
import Basketball from './components/Basketball.vue';
import Sports from './components/Sports.vue';
export const routes = [
    {
        path: '/cricket',
        component: Cricket
    },
    {
        path: '/football',
        component: Football
    },
    {
        path: '/basketball',
        component: Basketball
    },
    {
        path: '',
        component: Sports
    }
];