<template>
  <v-flex :class="$attrs.class">
    <ValidationProvider :name="$attrs.label" :rules="rules">
      <v-combobox
        slot-scope="{ errors, valid }"
        v-model="innerValue"
        :error-messages="errors"
        :success="valid"
        v-bind="$attrs"
        v-on="$listeners"
      ></v-combobox>
    </ValidationProvider>
  </v-flex>
</template>

<script>
import axios from 'axios'
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
    innerValue: ''
  }),
  watch: {
    // Handles internal model changes.
    innerValue (newVal) {
      this.$emit('input', newVal);
    },
    // Handles external model changes.
    value (newVal) {
      this.innerValue = newVal;
    }
  },
  created () {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
  mounted() {
    
  }
};
</script>