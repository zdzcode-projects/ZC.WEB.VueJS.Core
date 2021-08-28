<template>
  <v-flex :class="$attrs.class">
    <v-autocomplete v-bind="$attrs" v-on="$listeners"> </v-autocomplete>
  </v-flex>
</template>

<script>
export default {
  name: 'zc-autocomplete'
}
</script>
