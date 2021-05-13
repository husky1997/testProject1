<template>
    <div class="helper">
        <span class="left">{{unFinishedTodoLength}} items left</span>
        <span class="tads">
            <!-- key:用v-for循环出来的html节点都要给唯一的key标明，指定key，下次循环
            数组里有数据变动，如果key相同，会复用节点，不会生成新结点覆盖之前
             -->
            <span 
                v-for="state in states"
                :key="state"
                :class="[state , filter === state ? 'actived' : '']"
                @click="toggleFilter(state)"
            >
                {{state}}
            </span>

            <span class="clear" @click="clearAllCompleted">clearAllCompleted</span>
        </span>
    </div>
</template>
<script>
    export default{
        props:{
            filter:{
                type: String,
                // 必须进行传值
                required:true,
            },
            todos:{
                type: Array,
                required:true
            }
        },
        data(){
            return{
                states: ['all','active','completed']
            }
        },
        //计算数据变化新的没有完成的值
        computed:{
            unFinishedTodoLength(){
                return this.todos.filter(todo => !todo.completed).length
            }
        },
        methods:{
            clearAllCompleted(){
                this.$emit('clearAllCompleted','')
            },
            toggleFilter(state){
                this.$emit('toggle',state)
            }
        }
    }

</script>
<style lang="stylus" scoped>
    .helper {
    font-weight 100
    display flex
    justify-content space-between
    padding 5px 0
    line-height 30px
    background-color #fff
    font-size 14px
    font-smoothing antialiased
    }
    .left .clear .tabs {
        padding 0 10px
        box-sizing border-box
    }
    .left .clear {
        width 150px
    }
    .left {
        text-align left
    }
    .clear {
        text-align right
        cursor pointer
    }
    .tabs { 
        width 200px
        display flex
        justify-content space-around
        * {
            display inline-block
            padding 0 10px
            cursor pointer
            border 1px solid rgba(175,47,47,0)
            &.active {
                border-color rgba(175,47,47,0.4)
                border-radius 5px
            }
        }
    }   
</style>