<template>
    <div>
        <v-card color="lighten-2">
            <v-responsive width="100%" height="450px">
                <v-container fill-height>
                    <v-layout align-center>
                        <v-flex style="text-align:center">
                            <h3 class="display-3 light-blue--text ">
                                {{$t('welcome.title',{app:'Ogmios'})}}
                            </h3>
                            <span class="subheading grey--text">
                                {{ $t('welcome.content')}}
                            </span>
                            <v-divider class="my-3"></v-divider>
                            <div class="title mb-3 grey--text">{{$t('welcome.call_to_action')}}</div>
                            <v-btn
                                    large
                                    color="primary"
                                    class="mx-0"
                                    to="/login"
                            >
                                {{$t('welcome.action_button')}}
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-responsive>
        </v-card>
    </div>
</template>
