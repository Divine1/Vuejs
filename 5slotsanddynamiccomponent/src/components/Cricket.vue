<template>
    <div>
        <h2>Cricket</h2>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name : "Cricket",
  destroyed(){
    console.log("in cricket destroyed()");
  },
  deactivated(){
    console.log("in cricket deactivated()");
  },
  activated(){
      console.log("in cricket activated()");
  }
}
</script>
