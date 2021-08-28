<template>
  <v-flex :class="$attrs.class">
    <v-text-field v-bind="$attrs"
      type="password"
        v-on="$listeners"></v-text-field>
  </v-flex>
</template>

<script>
export default {
  name: 'zc-password'
}
</script>