<template>
<div>
<div class="container">
  <div class="row">
    <div class="col">
    <date-picker v-model="time1" valueType="format"></date-picker>
    <date-picker v-model="time2" type="datetime"></date-picker>
    <date-picker v-model="time3" range></date-picker>
    </div>
    <div class="col">
    
    </div>
    
  </div>
  <div class="row">
    <div class="col">

    

    </div>
    
    
  </div>




</div>




</div>







</template>



<script>
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';

  export default {
    name:"dashboard",
    components: { DatePicker },
    data() {
      
      return {
        time1: null,
        time2: null,
        time3: null,
      };
    },
  };
</script>



</script>