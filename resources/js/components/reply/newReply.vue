<template>
   <div class="mt-4">
      <markdown-editor v-model="body"></markdown-editor>
      <v-btn color="green" class="mb-5" dark @click="submit">
         Reply
      </v-btn>
   </div>
</template>

<script>
    export default {
        name: "newReply",
        props:['questionSlug'],
        data(){
            return {
                body:null
            }
        },
        methods:{
            submit(){
                axios.post(`/api/question/${this.questionSlug}/reply`,{body:this.body})
                    .then(res => {
                        this.body = ''
                        EventBus.$emit('newReply',res.data.reply)
                    })
            }
        }
    }
</script>

<style scoped>

</style>