<template>
  <div>
    <v-checkbox type="text" v-bind="$attrs"      
      v-bind:value="value"
      v-on="inputListeners"></v-checkbox>
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
