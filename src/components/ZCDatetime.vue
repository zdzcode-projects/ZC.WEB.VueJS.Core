<template>
  <div>
    <v-text-field type="text" v-bind="$attrs"      
      v-bind:value="value"
      v-on="inputListeners"></v-text-field>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: ["value"],
  computed: {
    inputListeners: function() {
      var vm = this;      
      return Object.assign(
        {},        
        this.$listeners,
        {
          input: function(value) {
            vm.$emit("input", value);
          }
        }
      );
    }
  }
}
</script>
