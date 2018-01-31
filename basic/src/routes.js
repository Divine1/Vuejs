import Animal from './components/Animal.vue';
import Plant from './components/Plant.vue';
import Planet from './components/Planet.vue';

export const routes = [
    {path : '',component : Animal},
    {path : '/plant',component : Plant},
    {path : '/planet',component : Planet}
];