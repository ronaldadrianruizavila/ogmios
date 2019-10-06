<template>
    <v-app>
        <guest-navigation v-if="role === 'guest'" />
        <admin-navigation v-if="role === 'admin'"></admin-navigation>
        <v-content>
            <v-container  v-if="$store.state.loaded" class="mt-3 mb-3">
                <router-view/>
            </v-container>
            <v-container v-else fill-heigth>
                <v-layout flex align-center justify-center>
                    <v-progress-circular indeterminate :size="100" color="primary" :width="10"></v-progress-circular>
                </v-layout>
            </v-container>
        </v-content>
        <app-footer/>
    </v-app>
</template>

<script>
    import GuestNavigation from './components/navigations/guest'
    import AdminNavigation from './components/navigations/admin'
    import AppFooter from './components/Footer';
    import {mapGetters} from 'vuex';

    export default {
        components: {
            GuestNavigation,
            AdminNavigation,
            AppFooter
        },
        name: 'App',
        computed:{
            ...mapGetters(['role'])
        }
    }
</script>
