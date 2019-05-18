<template>
    <div>
        <v-btn icon @clik="likeIt">
            <v-icon color="blue">thumb_up</v-icon> {{count}}
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "like",
        data(){
          return {
              liked:false,
              count:0
          }
        },
        methods:{
            likeIt(){
                if(User.loggedIn()){
                    this.liked ? this.inr() : this.decr()
                    this.liked = !this.liked
                }
            },
            inr(){
                this.count ++
            },
            decr(){
                this.count --
            },
        }
    }
</script>

<style scoped>

</style>