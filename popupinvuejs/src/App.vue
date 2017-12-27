<template>
  <div>
    <div>Main page</div>
    <button @click="openpopup">Open popup</button>
    <popup :popupData="popupData" ></popup>
  </div>
</template>
<script>
  import Popup from'./Popup.vue';
  export default {
    components:{
      "popup" : Popup
    },
    data() {
      return {
        popupData : {
          "header" : "My popup",
          "body" : "hello world",
          "footer" : "divine inc.",
          "display" : "none"
        }
      }
    },
    methods : {
      openpopup(){
        this.popupData.display = "block";
      }
    },
    mounted(){
      this.popupData.display = "block";
    }
  }
</script>