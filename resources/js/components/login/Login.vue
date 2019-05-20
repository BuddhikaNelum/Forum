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

            <v-btn color="green" @click="successAlert" type="submit">Login</v-btn>

            <router-link to="/signup">
                <v-btn color="yellow">Sign Up</v-btn>
            </router-link>
        </v-form>
    </v-container>
</template>

<script>
    import * as Swal from "sweetalert2";

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
        created() {
            if(User.loggedIn()){
                this.successAlert()
                this.$router.push({name:'forum'})
            }
        },
        methods:{
         login(){
             User.login(this.form)
         },
            successAlert(){
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });

                Toast.fire({
                    type: 'success',
                    title: 'Logged in successfully'
                })
            },
            errorAlert(){
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });

                Toast.fire({
                    type: 'error',
                    title: 'Somthing went wrong'
                })
            },
        }
    }
</script>

<style scoped>

</style>