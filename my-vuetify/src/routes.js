
import Mark from './components/marklogic/Mark.vue';
import Mongo from './components/mongodb/Mongo.vue';
import Migrate from "./components/marklogic/Migrate.vue";
import Search from "./components/marklogic/Search.vue";
import SearchMongo from "./components/mongodb/Search.vue";

export const routes = [
    {path : '/',component : Mark,
        children : [
            {path:'',component : Migrate},
        ]
    },
    {path : '/marklogic',component : Mark,
        children : [
            {path:'',component : Migrate},
            {path:'migrate',component : Migrate},
            {path:'search',component : Search}
        ]
    },
    {path : '/mongo',component : Mongo,
        children : [
            {path:'',component : SearchMongo},
            {path:'search',component : SearchMongo}
        ]
    }
];