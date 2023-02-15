<template>
  <div class="about">
    <h1>This is an about page {{name }}</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <form @submit.prevent="checkForm">
      <div>
        <label for="name" ref="nameElement">
          Name
        </label>
        <input v-model="name" type="text" name="" id="name">        
      </div>
      <div class="form-row">
        <p>
          Skills
        </p>
        <label for="">
          CSS
        </label>
        <input v-model="skills" value="css" type="checkbox">
        <label for="">
          HTML
        </label>
        <input v-model="skills" value="html" type="checkbox">
        <label for="">
          JS
        </label>
        <input v-model="skills" value="JS" type="checkbox">
      </div>
      <div>
        {{ skills }}
      </div>
      <button type="submit">
        Send
      </button>
    </form>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default{
  name:'AboutView',
  components:{
    HelloWorld
  },
  data(){
    return{
      name: '',
      skills:[]
    }
  },
  methods:{
    checkForm(){
      alert(1111);
      this.$refs.nameElement.classList.add('form-control');
    }
  }
}
</script>
