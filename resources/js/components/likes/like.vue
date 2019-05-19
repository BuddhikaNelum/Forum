<template>
    <div>
        <v-btn icon @click="likeIt">
            <v-icon :color="color">thumb_up</v-icon> {{count}}
        </v-btn>
    </div>
</template>

<script>
    export default {
        props:['content'],
        name: "like",
        data(){
          return {
              liked:this.content.liked,
              count:this.content.like_count
          }
        },
        computed:{
          color(){
              return this.liked ? 'blue' : 'blue lighten-4';
          }
        },
        methods:{
            likeIt(){
                if(User.loggedIn()){
                    this.liked ? this.decr() : this.inr()
                    this.liked = !this.liked
                }
            },
            inr(){
                axios.post(`/api/like/${this.content.id}`)
                    .then(res => this.count++)
            },
            decr(){
                axios.delete(`/api/like/${this.content.id}`)
                    .then(res => this.count--)
            },
        }
    }
</script>

<style scoped>

</style>