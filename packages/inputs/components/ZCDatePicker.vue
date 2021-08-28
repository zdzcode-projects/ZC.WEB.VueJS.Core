<template>
  <v-flex :class="$attrs.class  + ' px-2'">
    <v-dialog
      ref="dialog"
      v-model="modal"
      :return-value.sync="date"
      persistent
      width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-bind="$attrs"
          v-model="date"
          prepend-icon="mdi-calendar"
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="picker" scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="$refs.dialog.save(date)">
          OK
        </v-btn>
      </v-date-picker>
    </v-dialog>
  </v-flex>
</template>

<script>
export default {
  name: 'zc-date-picker',
  props: {
    // must be included in props
    value: {
      type: null,
    },
  },
  data: () => ({
    date: '',
    modal: false,
    picker: '',
  }),
  watch: {
    picker(newVal) {
      this.date = newVal ? this.$moment(newVal).format('DD/MM/YYYY') : ''

      this.$emit('input', new Date(newVal))
    },
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
