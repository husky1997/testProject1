<template>
   <div id="app">
       <div id="cover"></div>
       <Header></Header>
       <todo></todo>
       <Footer></Footer>
       
   </div>
</template>
<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.vue'
import Todo  from './todo/todo.vue'
export default {
    // 声明组件
    components:{
        Header,
        Footer,
        Todo,
    },
   data() {
        return{
            

        }
    }
}
</script>
// 样式只在该组件生效
<style lang="stylus" scoped>
    #app{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    #cover{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #999;
        z-index -1
    }

    
</style>
