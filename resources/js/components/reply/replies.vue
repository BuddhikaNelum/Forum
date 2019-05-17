<template>

        <div>
                <reply v-for="reply in content" :key="reply.id" v-if="replies" :data="reply"></reply>
        </div>

</template>

<script>
    import reply from './reply'
    export default {
        name: "replies",
        props:['replies'],

        data(){
            return{
                content:this.replies
            }
        },

        components:{reply},

        created() {
            this.listen()
        },
        methods:{
            listen(){
                EventBus.$on('newReply', (reply)=>{
                    this.content.unshift(reply)
                    window.scroll(0,0)
                })
            }
        }
    }
</script>

<style scoped>

</style>