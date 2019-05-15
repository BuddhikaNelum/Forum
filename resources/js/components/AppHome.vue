<template>
   <div>
       <toolbar></toolbar>
       <app-footer></app-footer>
   </div>
</template>

<script>
    import toolbar from './Toolbar'
    import AppFooter from "./AppFooter";
    export default {
        name: "AppHome",
        components:{toolbar, AppFooter}
    }
</script>

<style scoped>

</style>