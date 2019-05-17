<template>
    <div class="mt-3">
        <v-card>
            <v-card-title>
                <div class="headline">{{data.user}}</div>
                <div class="ml-2">{{data.created_at}}</div>
            </v-card-title>

            <v-card-text v-html="data.reply"></v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "reply",
        props:['data']
    }
</script>

<style scoped>

</style>