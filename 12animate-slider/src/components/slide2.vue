<template>
    <div>
        <h2>Slide2</h2>
        <agile :infinite="false">
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
.agile__dots {
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
}

.agile__dot button {
    background-color: transparent;
    border: 1px solid #fff;
}

.agile__dot button:hover {
    background-color: #fff;
}

.agile__dot--current button {
    background-color: #fff;
}

.agile__arrow {
    height: 100%;
    top: 0;
    width: 80px;
}

.agile__arrow:hover {
    background-color: rgba(0, 0, 0, 0.5);
}

.agile__arrow:hover #arrow-svg {
    fill: #fff;
}

.agile__arrow[disabled] {
    display: none;
}

.agile__arrow #arrow-svg {
    fill: rgba(255, 255, 255, 0.4);
    height: 25px;
}

.slide {
    background-position: center;
    background-size: cover;
    height: 500px;
}

.slide:before {
    background-color: rgba(0, 0, 0, 0.2);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
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
.slide--4 {
    background-image: url(../../images/4.jpg);
}
</style>
