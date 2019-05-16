<template>
    <v-card>
        <v-card-title primary-title>
            <div>
                <router-link :to="data.path">
                    <h3 class="headline mb-0">
                        {{data.title}}
                    </h3>
                </router-link>

                <div class="grey--text">
                    {{data.user}} said {{data.created_at}}
                </div>

            </div>
        </v-card-title>

        <v-card-text>
           {{data.body}}
        </v-card-text>

    </v-card>
</template>

<script>
    export default {
        name: "question",
        props:['data']
    }
</script>

<style scoped>

</style>