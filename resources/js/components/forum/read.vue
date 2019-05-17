<template>

    <div v-if="question">

        <edit-question
                v-if="editing"
                :data = question
        ></edit-question>

            <show-question
                    v-else
                    :data = question
            ></show-question>

        <v-container>
            <replies :question="question"></replies>

            <new-reply :questionSlug="question.slug"></new-reply>
        </v-container>

    </div>

</template>

<script>
    import ShowQuestion from './ShowQuestion'
    import editQuestion from './editQuestion'
    import replies from '../reply/replies'
    import newReply from '../reply/newReply'
    export default {
        name: "read",
        components:{ShowQuestion, editQuestion, replies, newReply},
        data(){
          return {
              question: null,
              editing:false
          }
        },
        created(){

            this.listen()
            this.getQuestion()
        },
        methods:{
            listen(){
                EventBus.$on('startEditing',()=>{
                    this.editing = true
                })

                EventBus.$on('cancelEditing',()=>{
                    this.editing = false
                })
            },
            getQuestion(){
                axios.get(`/api/question/${this.$route.params.slug}`)
                    .then(res => this.question = res.data.data)
            }
        }
    }
</script>

<style scoped>

</style>