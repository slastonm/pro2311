const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue! test',
      price: 100,
      currency:'$',
      showInfo:true,
      link:"https://prog.academy/",
      src:'123.webp',
      users:[
        {
            name:'Bob',
            age:30,
            isAdmin:true
        },
        {
            name:'Tom',
            age:33,
            isAdmin:true
        },        {
            name:'Jane',
            age:32,
            isAdmin:false
        }
      ]
    }
  },
  methods:{
    handlerEvent(e){
        alert(e);
    },
    changeMessage(value){
        this.message = value;
    },
    toggleShowInfo(){
        this.showInfo = !this.showInfo;
    },
    adminMode(user){
        user.isAdmin = !user.isAdmin
    }
  },
  computed:{
    justAdmin(){
        return this.users.filter((user)=>user.isAdmin);
    }
    }
    
}).mount('#app')