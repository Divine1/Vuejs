<template>
    
    <div>
        <h2>Slide3</h2>
        <agile :arrows="false" :speed="750" :timing="'linear'" :fade="true" :autoplay="true" :pauseOnHover="true">
            <div class="slide slide--1"></div>
            <div class="slide slide--2"></div>
            <div class="slide slide--3"></div>
        </agile>
    </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
.agile__dots {
    bottom: 0;
    display: block;
    left: 10px;
    position: absolute;
    width: 30px;
}

.agile__dot {
    margin-bottom: 10px;
}

.agile__dot button {
    background-color: transparent;
    border: 1px solid #fff;
    margin-top: 10px;
}

.agile__dot button:hover {
    background-color: #fff;
}

.agile__dot--current button {
    background-color: #fff;
}

.slide {
    background-position: center;
    background-size: cover;
    height: 500px;
}

.slide--1 {
     background-image: url(../../images/1.jpg);
}
.slide--2 {
     background-image: url(../../images/2.jpg);
}
.slide--3 {
     background-image: url(../../images/3.jpg);
}
</style>
