<template>
        <v-footer
                dark
                height="auto"
                class="layout"
        >
            <v-card
                    class="flex"
                    flat
                    tile
            >

                <v-card-actions class="indigo lighten-1 justify-center">
                    <p>  &copy; 2019 — Made with ❤ By <a href="https://buddhikanelum.github.io/" target="_blank" style="color: white">BuddhikaNelum</a> </p>
                </v-card-actions>
            </v-card>
        </v-footer>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style scoped>
    .layout{
        position: absolute;
        bottom: 0;
        width: 100%;
    }
</style>