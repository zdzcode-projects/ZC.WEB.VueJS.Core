<template>
  <v-flex :class="$attrs.class">
    <ValidationProvider :name="$attrs.label" :rules="rules">
      <v-combobox
        slot-scope="{ errors, valid }"
        v-model="innerValue"
        :error-messages="errors"
        :success="valid"
        :items="list"             
        v-bind="$attrs"
        v-on="$listeners"
      ></v-combobox>
    </ValidationProvider>
  </v-flex>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationProvider
  },
  //props: ["value", "rules"],
  props: {
    rules: {
      type: [Object, String],
      default: ''
    },
    // must be included in props
    value: {
      type: null
    },
    endpoint: {
      type: null
    }
  },
  data: () => ({
    innerValue: '',
    list: []
  }),
  watch: {
    // Handles internal model changes.
    innerValue (newVal) {      
      if(!!newVal && (!!newVal.value || newVal.value == 0))
      {
        this.$emit('input', newVal.value);
      }
    },
    // Handles external model changes.
    value (newVal) {   
      if(newVal == null || (!!newVal && (!!newVal.value || newVal.value == 0)))
      {
        return;
      }

      if(!isNaN(Number.parseInt(newVal)))
      {
        this.innerValue = this.select(newVal); 
      }
      //this.innerValue = newVal;
    }
  },
  methods : {
    select(value){
      const vm = this;
      var selected = {};
      for(var i = 0; i < vm.list.length; i++)
      {
        if(value == vm.list[i].value)
        {
          selected = vm.list[i];
          break;
        }
      }
      return selected;              
    },
  },
  created () {
    const vm = this;
    vm.$axios.get(vm.endpoint).then(res => {
      vm.list = res.data;
      if (vm.value) {
        vm.innerValue = vm.select(vm.value);
      }
    });
  },
  mounted() {
    
  }
};
</script>