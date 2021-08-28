<template>
  <v-flex :class="$attrs.class">
      <v-text-field
        slot-scope="{ errors, valid }"
        v-model="innerValue"
        :error-messages="errors"
        :success="valid"
        v-bind="$attrs"
        :name="fieldname"
        data-vv-delay="300"
        v-on="$listeners"
        autocomplete="section-blue one-time-code"
      ></v-text-field>
  </v-flex>
</template>

<script>

export default {
  name: 'zc-email',
  components: {
  },
  //props: ["value", "rules"],
  props: {
    rules: {
      type: [Object, String],
      default: "email"
    },
    // must be included in props
    value: {
      type: null
    },
    fieldref: {
      type: null
    },
    fieldname: {
      type: null
    }
  },
  data: () => ({
    innerValue: ""
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      if (typeof this.value == "string") {
        this.innerValue = newVal.trim();
      }
      else
      {
        this.$emit("input", newVal);
      }
    },
    // Handles external model changes.
    value(newVal) {
      if (typeof this.value == "string") {
        this.innerValue = newVal.trim();
      }
    }
  },
  created() {
    if (typeof this.value == "string") {
      this.innerValue = this.value.trim();
    }
  }
};
</script>