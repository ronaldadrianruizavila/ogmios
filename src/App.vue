<template>
  <main>
    <v-app>
        <v-content>
            <guest-navigation/>
            <v-container class="mt-3 mb-3">
                <router-view/>
            </v-container>
            <app-footer/>
        </v-content>
    </v-app>
  </main>
</template>

<script>
    import GuestNavigation from './components/navigations/guest'
    import AppFooter from './components/Footer';

    export default {
        components:{
            GuestNavigation,
            AppFooter
        },
        name:'App'
    }
</script>
