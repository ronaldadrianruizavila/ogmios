<template>
    <v-app>
        <guest-navigation/>
        <v-content>
            <v-container class="mt-3 mb-3">
                <router-view/>
            </v-container>
        </v-content>
        <app-footer/>
    </v-app>
</template>

<script>
    import GuestNavigation from './components/navigations/guest'
    import AppFooter from './components/Footer';

    export default {
        components: {
            GuestNavigation,
            AppFooter
        },
        name: 'App'
    }
</script>
