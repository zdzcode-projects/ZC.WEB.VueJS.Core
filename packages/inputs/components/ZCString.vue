<template>
  <v-flex :class="$attrs.class + ' px-2'">
    <v-text-field
      v-bind="$attrs"
      v-on="$listeners"
      v-model="innerValue"
      :error="hasError"
      :error-messages="errors"
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
  name: "zc-string",
  mixins: [ZCInputMixin],
};
</script>