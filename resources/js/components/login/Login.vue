<template>
    <v-container>
                <v-form @submit.prevent="login">

                    <v-text-field
                            v-model="form.email"
                    label="E-mail"
                    type="email"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="form.password"
                    label="Password"
                    type="password"
                    required
            ></v-text-field>

            <v-btn color="green" type="submit">Login</v-btn>

            <router-link to="/signup">
                <v-btn color="yellow">Sign Up</v-btn>
            </router-link>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                form :{
                    email:null,
                    password:null
                }
            }
        },
        methods:{
         login(){
             User.login(this.form)
             this.$router.push({name:'forum'})
         }
        }
    }
</script>

<style scoped>

</style>