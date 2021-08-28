<template>
  <v-flex :class="$attrs.class + ' px-2'">
    <v-combobox
      v-bind="$attrs"
      v-on="$listeners"
      v-model="innerValue"
      :items="list"
    ></v-combobox>
  </v-flex>
</template>

<script>
export default {
  name: 'zc-combobox-server',
  props: {
    rules: {
      type: [Object, String],
      default: '',
    },
    // must be included in props
    value: {
      type: [Number, String, Object, Array],
    },
    endpoint: {
      type: String,
    },
    returnObject: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    innerValue: null,
    list: [],
  }),
  async fetch() {
    const vm = this

    try {
      this.innerValue = null
      this.list = []

      let res = await this.$axios.get(vm.endpoint)

      if (Array.isArray(res.data)) {
        vm.list = res.data
      } else if (
        res.data.hasOwnProperty('value') &&
        Array.isArray(res.data.value)
      ) {
        vm.list = res.data.value
      }

      if (vm.value != null && vm.value != undefined) {
        let item = vm.select(vm.value)

        vm.innerValue = item
      }
    } catch (err) {}
  },
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      if (newVal == undefined || newVal == null) {
        this.$emit('input', null)
      } else if (Array.isArray(newVal)) {
        if (this.returnObject) {
          this.$emit('input', newVal)
        } else {
          var valueList = []
          for (var i = 0; i < newVal.length; i++) {
            valueList.push(this.getValue(newVal[i]))
          }
          this.$emit('input', valueList)
        }
      } else
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
      if (this.list.length > 0 && newVal != this.innerValue) {
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
        }
        // else if(newVal != this.getValue(this.innerValue)) {

        // }
        else {
          var item = null
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
    endpoint() {
      this.$fetch()
    },
    list(newVal) {
      if (this.innerValue != null) {
      }
    },
  },
  methods: {
    select(value) {
      const vm = this
      var selected = {}
      for (var i = 0; i < vm.list.length; i++) {
        if (value + '' === this.getValue(vm.list[i]) + '') {
          selected = vm.list[i]
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
      if (!vm.$attrs['item-value']) {
        return item.value
      } else {
        return item[vm.$attrs['item-value']]
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
}
</script>
