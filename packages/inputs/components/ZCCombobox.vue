<template>
  <v-flex :class="$attrs.class">
    <v-combobox
      v-bind="$attrs"
      v-on="$listeners"
    ></v-combobox>
    >
  </v-flex>
</template>

<script>
export default {
  name: 'zc-combobox',
  data() {
    return {
    }
  },
}
</script>
