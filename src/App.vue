<template>
  <div id="app">
    <Login />
  </div>
</template>
<script>
import Login from "./components/Login.vue";
import Dashboard from "./components/Dashboard.vue"
export default {
  name: "App",
  components: {
    Login,
    Dashboard,
  },
};
</script>




