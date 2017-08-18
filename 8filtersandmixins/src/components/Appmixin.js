export const Appmixin = {
    data () {
        return {
          lastName : 'CANADA',
          multiply : 27
        }
      },
      filters : {
        localTouppercase(value){
          return value.toUpperCase();
        }
      },
      computed : {
        multiplyit(){
          console.log("multiply it : ");
          return this.multiply * 2;
        }
      }
};