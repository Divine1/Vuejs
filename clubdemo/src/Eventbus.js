import Vue from 'vue';
import {coursejson} from './jsonInput/courses';
import {makerspacejson} from './jsonInput/makerspace';
import {competitionsjson} from './jsonInput/competitions';
import {workshopsjson} from './jsonInput/workshops';


export const eventBus = new Vue(
    {
        data(){
            return {
                courses: coursejson,
                  makerspace: makerspacejson,
                  competitions: competitionsjson,
                  workshops: workshopsjson
            }
        },
        methods : {
            chooseHeaderRedirectionUrl(key,routerInstance){
                
                console.log("test event bus triggered");
                var yourchoice = this.getValueFromKey(key);
                routerInstance.push({path : "/tab/"+yourchoice, query : {key : key}});

            },
            getCourseCategories(key){
                return (this.getObjectFromKey(key)).find((category) => (category.id == key));
            },
            getValueFromKey(key){
                if(key.indexOf("courses") >=0){
                    return "courses";
                }
                else if(key.indexOf("makerspace") >=0){
                    return "makerspace";
                }
                else if(key.indexOf("competition") >=0){
                   return "competitions";
                }
                else if(key.indexOf("workshop") >=0){
                    return "workshops";
                }
                else if(key.indexOf("careers") >=0){
                    return "careers";
                }
                else if(key.indexOf("aboutus") >=0){
                    return "aboutus";
                }
                else if(key.indexOf("projects") >=0){
                    return "projects";
                }
                else if(key.indexOf("elearning") >=0){
                    return "elearning";
                }
                
            },
            getObjectFromKey(key){
                if(key.indexOf("courses") >=0){
                    return this.courses;
                }
                else if(key.indexOf("makerspace") >=0){
                    return this.makerspace;
                }
                else if(key.indexOf("competition") >=0){
                   return this.competitions;
                }
                else if(key.indexOf("workshop") >=0){
                    return this.workshops;
                }
                else if(key.indexOf("careers") >=0){
                    return "careers";
                }
                else if(key.indexOf("aboutus") >=0){
                    return "aboutus";
                }
                else if(key.indexOf("projects") >=0){
                    return "projects";
                }
            }
        }
    
    });

