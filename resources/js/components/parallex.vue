<template>
    <v-parallax
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="650"
    >
        <v-layout
                align-center
                column
                justify-center
        >
            <h1 class="display-2 font-weight-thin mb-3">Linux Users Sri Lanka</h1>
            <h4 class="subheading">Decide.. Commit.. Succeed</h4>



            <h2 class="mt-5">"You need the right people with you, not the best people" </h2><h3>Jack Ma</h3>

            <Ribbon
                    text='Fork me on GitHub'
                    url='https://github.com/BuddhikaNelum/Forum'
                    position='right-bottom'
                    color='#DA0011'
                    fixed />

        </v-layout>
    </v-parallax>
</template>
<script>
    import Ribbon from 'vue-ribbon';

    export default {
        name: "parallex",
        components: {
            Ribbon,
        },
    }
</script>

<style scoped>

</style>