<template>
    <v-footer app fixed clipped height="auto">
        <v-card
            flat
            width="100%"
            tile
            class="primary lighten-1 white--text text-xs-center">
            <v-card-text class="white--text">
                &copy;{{new Date().getFullYear()}} - <strong>Ogmios</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: "app-footer"
    }
</script>

<style scoped>

</style>