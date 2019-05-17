<template>
    <div class="mt-3">
        <v-card>
            <v-card-title>
                <div class="headline">{{data.user}}</div>
                <div class="ml-2">{{data.created_at}}</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text v-html="data.reply"></v-card-text>

            <v-divider></v-divider>

            <v-card-actions v-if="own">

                <v-btn icon small >
                    <v-icon color="orange">edit</v-icon>
                </v-btn>

                <v-btn icon small @click="destroy">
                    <v-icon color="red">delete</v-icon>
                </v-btn>

            </v-card-actions>

        </v-card>
    </div>
</template>

<script>
    export default {
        name: "reply",
        props:['data', 'index'],

        computed:{
            own(){
                return User.own(this.data.user_id)
            }
        },
        methods:{
            destroy(){
                EventBus.$emit('deleteReply', this.index)
            }
        }
    }
</script>

<style scoped>

</style>