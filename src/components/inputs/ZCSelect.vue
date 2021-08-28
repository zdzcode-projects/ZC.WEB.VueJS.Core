<template>
  <v-flex :class="$attrs.class + ' px-2'">
    <v-select v-bind="$attrs" v-on="$listeners" v-model="innerValue"></v-select>
  </v-flex>
</template>
<script>
export default {
  name: 'zc-select',
  props: {
    rules: {
      type: [Object, String],
      default: '',
    },
    // must be included in props
    value: {
      type: [Number, String, Object, Array],
    },
    // Concatenar resultado
    concat: {
      type: Boolean,
      default: false,
    },
    concatChar: {
      type: String,
      default: ',',
    },
    returnObject: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    innerValue: null,
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
    

      if (newVal == undefined || newVal == null) {
        this.$emit('input', null)
      } else if (Array.isArray(newVal)) {
        if (
          this != null &&
          this.$attrs != null &&
          this.$attrs.hasOwnProperty('multiple') &&
          this.concat
        ) {
          this.$emit('input', newVal.join(this.concatChar))
        } else if (this.returnObject) {
          this.$emit('input', newVal)
        } else {
          var valueList = []
          for (var i = 0; i < newVal.length; i++) {
            valueList.push(this.getValue(newVal[i]))
          }
          this.$emit('input', valueList)
        }
      } else {
        switch (typeof newVal) {
          case 'object':
            this.$emit(
              'input',
              this.returnObject ? newVal : this.getValue(newVal)
            )
            break
          case 'number':
            this.$emit('input', newVal)
            break
          case 'string':
            this.$emit('input', newVal)
            break
        }
      }

      // else if (!!newVal && (!!newVal.value || newVal.value == 0)) {
      //   if (this.returnObject) {
      //     this.$emit('input', newVal)
      //   } else {
      //     this.$emit('input', newVal[this.$attrs['item-value']])
      //   }
      // } else if (!!this.$attrs['item-value']) {
      //   if (this.returnObject) {
      //     this.$emit('input', newVal)
      //   } else {
      //     //this.$emit('input', newVal[this.$attrs['item-value']])
      //   }
      //}
    },
    // Handles external model changes.
    value(newVal) {
      this.updateValue(newVal)
      },
  },
  methods: {
    updateValue(newVal) {

      if (
        this != null &&
        this.$attrs != null &&
        this.$attrs.items.length > 0 &&
        newVal != this.innerValue
      ) {
        if (newVal == null) {
          this.innerValue = null
        } else if (Array.isArray(newVal)) {
          var items = this.getValueList(newVal)

          if (newVal.length !== items.length) {
            this.innerValue = items
          } else {
            const array2Sorted = newVal.slice().sort()

            if (
              !items
                .slice()
                .sort()
                .every(function (value, index) {
                  return value === array2Sorted[index]
                })
            ) {
              this.innerValue = items
            }
          }
        } else if (
          this != null &&
          this.$attrs != null &&
          this.$attrs.hasOwnProperty('multiple') &&
          this.concat
        ) {
          this.innerValue = newVal.split(this.concatChar)
        }
        // else if(newVal != this.getValue(this.innerValue)) {

        // }
        else {
          
          switch (typeof newVal) {
            case 'object':
              this.innerValue = newVal
              break
            case 'number':
              this.innerValue = this.select(newVal)
              break
            case 'string':
              this.innerValue = this.select(newVal)
              break
          }
        }
      }
    },
    select(value) {
      const vm = this
      var selected = {}
      for (var i = 0; i < vm.$attrs.items.length; i++) {
        if (value + '' === this.getValue(vm.$attrs.items[i]) + '') {
          selected = vm.$attrs.items[i]
          break
        }
      }
      return selected
    },
    getValue(item) {
      if (item == null) {
        return null
      }
      const vm = this

      switch (typeof item) {
        case 'object':
          if (!vm.$attrs['item-value']) {
            return item.value
          } else {
            return item[vm.$attrs['item-value']]
          }
          break
        case 'string':
        case 'number':
          return item
      }
    },
    getValueList(list) {
      if (Array.isArray(list)) {
        var items = []
        for (var i = 0; i < list.length; i++) {
          var item = null
          switch (typeof list[i]) {
            case 'object':
              items.push(this.getValue(list[i]))
              break
            case 'number':
              items.push(list[i])
              break
            case 'string':
              items.push(list[i])
              break
          }
        }

        return items
      }
    },
  },
  created() {
    this.updateValue(this.value);
  }
}
</script>