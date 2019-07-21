<template>
    <div>
        <v-form class="mt-4" id="nativeForm" v-model="valid">
            <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    :counter="10"
                    :label="$t('auth.email')"
                    name="email"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    :counter="10"
                    :label="$t('auth.password')"
                    name="password"
                    type="password"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="passwordConfirmation"
                    :rules="passwordConfirmationRules"
                    :counter="10"
                    :label="$t('auth.password_confirmation')"
                    name="passwordConfirmation"
                    type="password"
                    v-if="action == 'register'"
                    required
            ></v-text-field>
            <v-btn class="mt-4"
                   :disabled="!valid"
                   :block="$vuetify.breakpoint.smAndDown"
                   round
                   @click="submit"
                   color="primary" dark>
                {{$t(`${action}.submit`)}}
            </v-btn>
        </v-form>
    </div>
</template>

<script>
    export default {
        name: "auth-form",
        props: {
            action: ''
        },
        data() {
            return {
                valid: false,
                email: '',
                emailRules: [
                    (v) => !!v || this.$t('validations.required', {field: 'E-mail'}),
                    (v) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) || this.$t('validations.email', {field: 'E-mail'}),
                ],
                password: '',
                passwordRules: [
                    (v) => !!v || this.$t('validations.required', {field: 'Password'}),
                    (v) => v.length >= 6 || this.$t('validations.minLength', {field: 'Password', length: 6})
                ],
                passwordConfirmation: '',
                passwordConfirmationRules: [
                    (v) => !!v || this.$t('validations.required', {field: 'Password'}),
                    (v) => v.length >= 6 || this.$t('validations.minLength', {field: 'Password', length: 6}),
                    (v) => v === this.password || this.$t('validations.password_confirmation', {field: 'Password', length: 6})
                ]
            }
        },
        methods: {
            submit() {
                this.$emit('process', {email: this.email, password: this.password})
            }
        }
    }
</script>

<style scoped>

</style>