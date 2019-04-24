<template>
  <!-- <v-flex :class="$attrs.class"> -->
  <v-data-table
    :headers="headers"
    :items="list"
    :pagination.sync="pagination"
    :total-items="totalDesserts"
    :loading="loading"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td v-for="(item, index) in headers" :key="index">{{getValue(props.item, item)}}</td>
      <td class="justify-center layout px-0">
        <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
      </td>
    </template>
  </v-data-table>
  <!-- </v-flex> -->
</template>

<script>
//import { ValidationProvider } from "vee-validate";

export default {
  components: {
    //ValidationProvider
  },
  //props: ["value", "rules"],
  props: {
    rules: {
      type: [Object, String],
      default: ""
    },
    // must be included in props
    value: {
      type: null
    },
    endpoint: {
      type: null
    },
    headers: {
      default: []
    }
  },
  data: () => ({
    innerValue: "",
    list: [],
    dialog: false,

    editedIndex: -1,
    editedItem: {
      enumStatusIndicacao: 0,
      valorContratado: 0
    },
    Afiliados: [],
    EnumStatusIndicacao: [],

    totalDesserts: 0,
    desserts: [],
    loading: false,
    pagination: {
      rowsPerPage: 25
    }
    //headers: []
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      if (!!newVal && (!!newVal.value || newVal.value == 0)) {
        this.$emit("input", newVal.value);
      }
    },
    // Handles external model changes.
    value(newVal) {
      if (
        newVal == null ||
        (!!newVal && (!!newVal.value || newVal.value == 0))
      ) {
        return;
      }

      if (!isNaN(Number.parseInt(newVal))) {
        this.innerValue = this.select(newVal);
      }
      //this.innerValue = newVal;
    }
  },
  methods: {
    getValue(item, def) {
      if (!!def.type) {
        switch (def.type.toLowerCase()) {
          case "enum":
            return this.$store.state.datadictionary[def.typeName][
              item[def.value]
            ].text;
        }
      }
      return item[def.value];
    },
    select(value) {
      const vm = this;
      var selected = {};
      for (var i = 0; i < vm.list.length; i++) {
        if (value == vm.list[i].value) {
          selected = vm.list[i];
          break;
        }
      }
      return selected;
    }
  },
  created() {
    const vm = this;
    vm.$axios.get(vm.endpoint).then(res => {
      vm.list = res.data.value;

      if (!!vm.list && !!vm.list.length && !vm.headers.length) {
        for (var key in vm.list[0]) {
          vm.headers.push({
            text: key,
            value: key,
            sortable: true
          });
        }
      }

      if (vm.value) {
        vm.innerValue = vm.select(vm.value);
      }
    });
  },
  mounted() {
    
  }
};
</script>