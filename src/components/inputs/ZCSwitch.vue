<template>
  <v-flex :class="$attrs.class">
    <v-switch
      v-bind="$attrs"
      v-on="$listeners"
      v-model="innerValue"
    ></v-switch>
  </v-flex>
</template>
<script>
export default {
  name: 'zc-switch',
  props: {
    // must be included in props
    value: {
      type: null,
    }
  },
  data: () => ({
    innerValue: false
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