<template>
  <v-flex :class="$attrs.class">
    <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
    >
    <template v-slot:activator="{ on }">
    <ValidationProvider :name="$attrs.label" :rules="rules">
      <v-text-field
        slot-scope="{ errors, valid }"
        v-model="value"
        :error-messages="errors"
        :success="valid"
        readonly
        prepend-icon="event"
        v-bind="$attrs"
        v-on="on"
      ></v-text-field>
    </ValidationProvider>
    </template>
    <v-date-picker
      ref="picker"
      v-model="value"
      :max="new Date().toISOString().substr(0, 10)"
      min="1950-01-01"
      @change="save"
    ></v-date-picker>
    </v-menu>
  </v-flex>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationProvider
  },
  //props: ["value", "rules"],
  props: {
    rules: {
      type: [Object, String],
      default: ''
    },
    // must be included in props
    value: {
      type: null
    }
  },
  data: () => ({
    date: null,
    menu: false
  }),
  watch: {
    // Handles internal model changes.
    innerValue (newVal) {
      this.$emit('input', newVal);
    },
    // Handles external model changes.
    value (newVal) {
        this.value = newVal;
      this.date = newVal;
      this.$emit('input', newVal);
    },
    menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
  },
  methods: {
      save (date) {
        this.$refs.menu.save(date)
      }
    },
  created () {
    if (this.value) {
      this.date = this.value;
    }
  }
};
</script>