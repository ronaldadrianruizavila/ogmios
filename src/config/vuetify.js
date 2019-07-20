import Vue from "vue";
import Vuetify from "vuetify";
import colors from "vuetify/es5/util/colors";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.darken1,
    secondary: colors.blue.lighten4,
    accent: colors.indigo.base,
    error: colors.red.accent3
  }
});
