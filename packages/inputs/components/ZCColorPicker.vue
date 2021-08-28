<template>
  <v-flex :class="$attrs.class + ' px-2'">
    <v-text-field
      v-bind="$attrs"
      v-on="$listeners"
      v-model="innerValue"
      @click:prepend="modal = true"
    >
      <template v-slot:prepend>
        <v-icon @click="modal = true" :color="innerValue"> mdi-palette </v-icon>
      </template>
    </v-text-field>
    <v-dialog
      ref="dialog"
      v-model="modal"
      :return-value.sync="innerValue"
      persistent
      width="290px"
    >
      <v-color-picker
        v-model="pickerValue"
        dot-size="25"
        hide-mode-switch
        mode="hexa"
      >
      </v-color-picker>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false"> Cancelar </v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(pickerValue)">
        OK
      </v-btn>
    </v-dialog>
  </v-flex>
</template>

<script>
export default {
  name: 'zc-color-picker',
  props: {
    // must be included in props
    value: {
      type: null,
    },
  },
  data() {
    return {
      showColorPicker: true,
      innerValue: '',
      pickerValue: '',
      modal: false,
    }
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