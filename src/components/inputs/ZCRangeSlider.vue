<template>
  <v-flex :class="$attrs.class">
    <v-range-slider
      v-bind="$attrs"
      v-on="$listeners"
    ></v-range-slider>
  </v-flex>
</template>
<script>
export default {
  name: 'zc-range-slider'
}
</script>