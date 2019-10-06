<template>
    <v-layout row>
        <v-flex xs12 sm12 style="margin-left: 15px">
            <router-view></router-view>
        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        name: 'admin-home',
        data() {
            return {
            }
        }
    }
</script>
