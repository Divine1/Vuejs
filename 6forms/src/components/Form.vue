<template>
    <div>
        <div>
            <h1>Form elements</h1>
            <div>
                <div>
                    <div>Gender </div>
                    <div>
                        <input type="radio" value="male" v-model="genderRadio"/> Male
                        <input type="radio" value="female" v-model="genderRadio"/> Female
                    </div>
                </div>
                <div>
                    <div>What do you know?</div>
                    <div>
                        <input type="checkbox" value="css" v-model="yourKnowledge"/>CSS
                        <input type="checkbox" value="js" v-model="yourKnowledge"/>JS
                        <input type="checkbox" value="java" v-model="yourKnowledge"/>JAVA
                        <input type="checkbox" value="mysql" v-model="yourKnowledge"/>MYSQL
                        <input type="checkbox" value="php" v-model="yourKnowledge"/>PHP
                        <input type="checkbox" value="laravel" v-model="yourKnowledge"/>LARAVEL
                        <input type="checkbox" value="vue" v-model="yourKnowledge"/>VUE
                    </div>
                </div>
                <div>
                    City
                    <select v-model="cityselect">
                        <option value="chennai">Chennai</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                        <option value="hyderabad">Hyderabad</option>
                    </select>
                </div>
                <div>
                    Ocean
                    <select v-model="oceanselected">
                         <option v-for="(ocean,i) in oceanselectitems" v-bind:value="ocean" 
                        :key="i" >
                            {{ocean}}
                        </option>
                        
                    </select>
                </div>
                <div>
                    <div>Food you like</div>
                    <select v-model="foodMulti" multiple>
                        <option>Chicken</option>
                        <option>Mutton</option>
                        <option>Steak</option>
                        <option>Vegetable</option>
                    </select>
                </div>
            </div>
        </div>
        <div>
            <h1>Print Form elements</h1>
            <div>Gender - {{genderRadio}}</div>
            <div>What do you know?
                <ul>
                    <li v-for="(row,i) in yourKnowledge" :key="i">
                        {{row}} - {{i}}
                    </li>
                </ul>
            </div>
            <div>
                City - {{cityselect}}
            </div>
            <div>
                Oceans - {{oceanselected}}
            </div>
            <div>
                Food you like - {{foodMulti}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            genderRadio : 'male',
            yourKnowledge : [],
            cityselect : 'mumbai',
            oceanselectitems : ['Artic','Indian','Pacific','Atlantic'],
            oceanselected : 'Indian',
            foodMulti : []
        };
    }
}
</script>
<style>

</style>
