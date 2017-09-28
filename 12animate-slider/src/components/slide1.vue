<template>
    <div>
      <h2>Slide1</h2>
      <agile :arrows="false" :autoplay="true">
        <div class="slide slide--1">
          <h3>slide 1</h3>
        </div>
        <div class="slide slide--2">
          <h3>slide 2</h3>
        </div>
        <div class="slide slide--3">
          <h3>slide 3</h3>
        </div>
        <div class="slide slide--4">
          <h3>slide 4</h3>
        </div>
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
.slide {
  color: #fff;
  height: 300px;
  position: relative;
}
.slide--1 {
  background-color: #f1c40f;
}
.slide--2 {
  background-color: green;
}
.slide--3 {
  background-color: blue;
}
.slide--4 {
  background-color: orange;
}
.slide h3 {
  font-size: 32px;
  font-weight: 300;
  left: 50%;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>
