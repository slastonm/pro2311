<template>
  <div class="home">
    <h3>
      Hello vue
    </h3>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="toggleModal">
      Show modal
    </button>
    <div v-if="modalIs">
      <ModalWindow 
      info="Component info" 
      title="Hello props value" 
      :propValue="true"
      @close="toggleModal"/>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ModalWindow from '@/components/ModalWindow.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ModalWindow
  },
  data(){
    return{
      modalIs:false
    }
  },
  methods:{
    toggleModal(){
      this.modalIs = !this.modalIs
    }
  }
}
</script>
<style lang="scss" scoped>
  h3{
    color:red;
  }
</style>
