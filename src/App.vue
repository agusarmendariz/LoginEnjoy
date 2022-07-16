<template>
  <div id="app">
    <nav>
      <router-link to="/">login</router-link> |
      <router-link to="/dashboard">dashboard</router-link>
    </nav>
    <router-view> </router-view>
  </div>
</template>

<style>

</style>

<script>
import axios from 'axios';

export default {
  name: 'App',
  components: {
      
  },
  data(){
    return{
    
    }
  },
  methods: {
    optenerUsuarios(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>this.usuarios=res.data)
    }
  },
  mounted() {
    this.optenerUsuarios()
  },
}

</script>
