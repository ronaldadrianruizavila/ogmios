<template>
    <div>
        <v-toolbar
                app
                dark
                color="primary"
        >
            <v-toolbar-side-icon @click="toggleDrawer"/>

            <v-toolbar-title>
                <router-link
                        to="/"
                        style="color: #fff;text-decoration: none"
                >{{$route.name}}
                </router-link>
            </v-toolbar-title>

            <v-spacer/>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat to="/login">{{$t('navigation.login')}}</v-btn>
                <v-btn flat to="/register">{{$t('navigation.register')}}</v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-navigation-drawer fixed temporary
                              v-model="drawer">
            <v-toolbar flat dark color="primary">
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title class="title">
                            Ogmios
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-list class="pt-4">

                <v-list-tile v-for="item in items" :key="item.title" @click="$router.push(item.to)">
                    <v-list-tile-action>
                        <v-icon color="primary" >{{item.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{item.title}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-divider/>
                <v-spacer></v-spacer>
            </v-list>
                <v-footer fixed color="primary" dark height="auto">
                    <v-list-tile @click="toggleDrawer" >
                        <v-list-tile-action>
                            <v-icon>arrow_back</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{$t('navigation.close_menu')}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-footer>
        </v-navigation-drawer>
    </div>
</template>

<script>
    import navigationMixin from '../../mixins/navigations';
    export default {
        name: "guest",
        mixins:[
            navigationMixin
        ],
        data() {
            return {
                drawer: false,
                items: [
                    {title: this.$t('navigation.home'), icon: 'home', to: '/'},
                    {title: this.$t('navigation.login'), icon: 'forward', to: '/login'},
                    {title: this.$t('navigation.register'), icon: 'account_circle', to: '/register'}
                ]
            }
        }
    }
</script>