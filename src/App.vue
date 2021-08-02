<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
hmtl, body, #app {
  height: 100%;
}

body {
  background-color: #F7DAD9;
}

#app {
  text-align: center;
}

.error {
  color: red;
}

</style>
