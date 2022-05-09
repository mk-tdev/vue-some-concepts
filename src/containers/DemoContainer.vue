<template>
  <div class="demo-container">
    <slot name="header">
      <h1>Demo Container Default</h1>
    </slot>
    <slot name="body">
      <h1>Demo Container Default</h1>
    </slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["applicationName"],
  name: "DemoContainer",
  components: {},
};
</script>

<style lang="css" scoped>
.demo-container {
  padding: 1rem;
  margin: 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
section {
  padding: 10px;
}
.footer {
  text-align: right;
}
</style>
