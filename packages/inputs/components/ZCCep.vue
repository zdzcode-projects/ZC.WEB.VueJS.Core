<template>
  <v-flex :class="$attrs.class + ' px-2'">
    <v-text-field
      v-bind="$attrs"
      v-on="$listeners"
      :label="label"
      v-model="innerValue"
      :error="hasError"
      :error-messages="errors"
      v-mask="'#####-###'"
      @blur="validate"
      @input="clearValidation"
      autocomplete="section-blue one-time-code"
    >
      <template v-slot:append>
        <slot name="append"></slot>
      </template>
      <template v-slot:append-outer>
        <slot name="append-outer"></slot>
      </template>
    </v-text-field>
  </v-flex>
</template>

<script>
import ZCInputMixin from "./ZCInputMixin.js";

export default {
  name: "zc-cep",
  mixins: [ZCInputMixin],
  computed: {
    label: function() {
      return this.$attrs.label != null && 
              this.$attrs.label != undefined && 
              this.$attrs.label != '' && 
              this.$attrs.label.length > 0 ? this.$attrs.label : 'CEP';
    }
  }
};
</script>