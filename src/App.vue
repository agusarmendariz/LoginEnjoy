<template> 
  <div id="app">
    <nav>
      <router-link to='/'>login</router-link> 
      <router-link to='/dashboard'>dashboard</router-link>
    </nav>
    <router-view> </router-view>
  </div>
</template>

<style>

</style>

<script>

import login from './components/Login.vue'
import dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
   login, dashboard   
  },
  data(){
    return{
    
    }
  },
  methods: {
 
  },

}

</script>
