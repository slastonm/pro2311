<template>
    <div class="overlay" @click.self="emmitData">
        <div class="modal">
            {{title}}
            <div>
                {{ info }}
            </div>
            <p>
                {{ propValue }}
            </p>
            <p>
                {{ fetchData }}
            </p>
            <button  @click.self="emmitData">
                Close modal
            </button>
        </div>        
    </div>

</template>

<script>
export default {
    name:'ModalWindow',
    props:['title', 'info', 'propValue'],
    data(){
        return{
            fetchData:''
        }
    },
    methods:{
        closeModal(){
            alert(111);
        },
        emmitData(){
            this.$emit('close')
        }
    },
    mounted(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => this.fetchData = json)
    }

}
</script>

<style lang="scss" scoped>
    .overlay{
        display: flex;
        position: fixed;
        top: 0;
        z-index: 1;
        background-color: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    .modal{
        width: 300px;
        background-color: #fff;
        padding: 50px;
        margin: auto;
        border: 2px solid red;
        &.discount{
            background-color: rgb(84, 195, 84);
        }
    }
</style>