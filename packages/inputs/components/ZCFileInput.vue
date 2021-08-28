<template>
  <v-flex>
    <v-file-input
    v-model="innerValue"
      v-bind="$attrs"
      v-on="$listeners"
    ></v-file-input>
    {{innerValue}}
  </v-flex>
</template>

<script>
export default {
  name: 'zc-file-input',
  props: {
    // must be included in props
    value: {
      type: null,
    }
  },
  data: () => ({
    innerValue: null
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit("input", newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    }
  },
  created() {
    this.innerValue = this.value;
  }
}
</script>
