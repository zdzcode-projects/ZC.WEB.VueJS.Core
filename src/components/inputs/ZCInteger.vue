<template>
  <v-flex :class="$attrs.class  + ' px-2'">
    <v-text-field
      type="number"
      step="1"
      v-bind="$attrs"
      v-on="$listeners"
      v-model.number="innerValue"
    >
    </v-text-field>
  </v-flex>
</template>

<script>
export default {
  name: 'zc-integer',
  props: {
    value: {
      type: [Number, String],
      default: null,
    },
    data: () => ({
      innerValue: null,
    }),
  },
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
<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>