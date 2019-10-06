<template>
    <fragment>
        <v-navigation-drawer
                app
                clipped
                :fixed="$vuetify.breakpoint.smAndDown"
                v-model="drawer">
            <v-toolbar v-if="$vuetify.breakpoint.smAndDown" flat dark color="primary">
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title class="title">
                            Ogmios
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-list>
                <v-list-group v-for="item in items" :key="item.title" :prepend-icon="item.icon" no-action
                              @click="$router.push(item.to)">
                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>{{item.title}}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
                    <v-list-tile
                            v-for="subItem in item.items"
                            :key="subItem.title"
                            @click="$router.push(subItem.to)"
                    >
                        <v-list-tile-content>
                            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-icon>{{ subItem.icon }}</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>
                <v-list-tile @click="logout">
                    <v-list-tile-action>
                        <v-icon color="primary">logout</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{$t('navigation.logout')}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider/>
                <v-spacer></v-spacer>
            </v-list>
            <v-footer v-if="$vuetify.breakpoint.smAndDown" absolute color="primary" dark height="auto">
                <v-list-tile @click="toggleDrawer">
                    <v-list-tile-action>
                        <v-icon large>arrow_left</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{$t('navigation.close_menu')}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-footer>
        </v-navigation-drawer>
        <v-toolbar
                app
                clipped-left
                :fixed="true"
                dark
                color="primary"
                class="elevation-10"
        >
            <v-toolbar-side-icon v-if="$vuetify.breakpoint.smAndDown" @click="toggleDrawer"/>

            <v-toolbar-title>
                <router-link
                        to="/"
                        style="color: #fff;text-decoration: none"
                >{{$route.name}}
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat to="/admin">{{$t('navigation.admin')}}</v-btn>
                <v-btn flat to="/shop">{{$t('navigation.shop')}}</v-btn>
                <v-btn flat @click="logout">{{$t('navigation.logout')}}</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </fragment>
</template>

<script>
    import navigationMixin from '../../mixins/navigations';

    export default {
        name: "admin",
        mixins: [
            navigationMixin
        ],
        data() {
            return {
                drawer: true,
                items: [
                    {
                        title: this.$t('navigation.admin'),
                        icon: 'store',
                        subgroup:false,
                        to: '/admin',
                        items: [
                            {title: this.$t('admin.users'), icon: 'face', to: '/admin/users'},
                            {title: this.$t('admin.products'), icon: 'shopping_basket', to: '/admin/products'}
                        ]
                    },
                    {title: this.$t('navigation.home'), icon: 'home', to: '/',subgroup:true},
                    {title: this.$t('navigation.shop'), icon: 'shopping_basket', to: '/shop',subgroup:true},
                ]
            }
        },
        methods: {}
    }
</script>
<style>
    .list--dense .list__group__header .icon {
        font-size: none;
    }
</style>
