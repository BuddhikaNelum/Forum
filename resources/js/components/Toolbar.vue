<template>
        <v-toolbar color="indigo lighten-1" dark>
            <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
            <v-toolbar-title>
                <router-link class="white--text text" to="/"><img src="https://img.icons8.com/color/48/000000/linux.png"></router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="hidden-sm-and-down">

                <router-link class="text"
                        v-for="item in items"
                        :key="item.title"
                        :to="item.to"
                        v-if="item.show">
                    <v-btn flat>{{item.title}}</v-btn>
                </router-link>

            </div>
        </v-toolbar>
</template>

<script>
    export default {
        name: "Toolbar",
        data(){
            return {
                items: [
                    {title : 'Forum', to:'/forum',show:true},
                    {title : 'Ask Question', to:'/ask',show: User.loggedIn()},
                    {title : 'Category', to:'/category',show: User.admin()},
                    {title : 'Login', to:'/login',show: !User.loggedIn()},
                    {title : 'Logout', to:'/logout',show: User.loggedIn()},
                ]
            }
        },
        created() {
            EventBus.$on('logout', () => {
                User.logout()
            })
        }
    }
</script>

<style scoped>
    .text{
        text-decoration: none;
    }
</style>