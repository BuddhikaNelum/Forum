<template>
    <v-container>
        <v-form @submit.prevent="create">

            <v-text-field
                    v-model="form.title"
                    label="Title"
                    type="text"
                    required
            ></v-text-field>

            <!--<v-select-->
            <!--:items="categories"-->
            <!--v-mode="form.category_id"-->
            <!--item-text="name"-->
            <!--item-value="id"-->
            <!--label="Category"-->
            <!--autocomplete-->
            <!--&gt;</v-select>-->

            <v-autocomplete
                    :items="categories"
                    v-model="form.category_id"
                    item-text="name"
                    item-value="id"
                    label="Category"
            ></v-autocomplete>

            <v-btn color="green" type="submit">Create</v-btn>

        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "create",
        data() {
            return {
                form :{
                    title:null,
                    category_id:null
                },
                categories:{}
            }
        },
        created(){
            axios.get('/api/category')
                .then(res => this.categories = res.data.data)
        },
        methods:{
            create(){

            }
        }
    }
</script>

<style scoped>

</style>