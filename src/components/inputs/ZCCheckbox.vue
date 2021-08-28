<template>
  <v-flex :class="$attrs.class">
    <v-checkbox v-bind="$attrs" v-on="$listeners" v-model="innerValue">
    </v-checkbox>
  </v-flex>
</template>

<script>
export default {
  name: 'zc-checkbox',
  props: {
    // must be included in props
    value: {
      type: null,
    },
  },
  data: () => ({
    innerValue: false,
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit('input', newVal)
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal
    },
  },
  created() {
    this.innerValue = this.value
  },
}
</script>
