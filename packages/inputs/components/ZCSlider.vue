<template>
  <v-flex :class="$attrs.class">
    <v-slider
      v-bind="$attrs"
      v-on="$listeners"
    ></v-slider>
  </v-flex>
</template>
<script>
export default {
  name: 'zc-slider'
}
</script>