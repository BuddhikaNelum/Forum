<template>
    <v-container>
        <reply v-for="reply in replies" :key="reply.id" :data="reply"></reply>
    </v-container>
</template>

<script>
    import reply from './reply'
    export default {
        name: "replies",
        props:['replies'],
        components:{reply}
    }
</script>

<style scoped>

</style>