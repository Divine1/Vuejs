<template>
    <div>
        <h2>Football</h2>
        <slot name="slot1"></slot>
        <slot name="slot2">Hello , this is test slot</slot>
        <!-- <slot></slot> -->
    </div>
</template>

<script>
export default {
  name : "Football",
  destroyed(){
    console.log("in Football destroyed()");
  },
  deactivated(){
    console.log("in Football deactivated()");
  },
  activated(){
      console.log("in Football activated()");
  }
}
</script>
