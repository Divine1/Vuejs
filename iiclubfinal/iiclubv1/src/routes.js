import Mainpage from './components/mainpage/Mainpage.vue';
import Other from './components/otherpages/Other.vue';

export const routes = [
    {path : "", component :Mainpage},
    {path : "/other", component :Other}
];