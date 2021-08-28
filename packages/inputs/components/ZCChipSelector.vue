<template>
  <v-flex :class="$attrs.class">
      <v-row justify="center">
        <v-col cols="12" sm="12" md="12" lg="12">
          {{ $attrs.label }}
          <div class="pa-4">
            <v-chip-group
            v-model="innerValue"
              active-class="primary--text"
              column
              :mandatory="mandatory"
            >
              <v-chip filter outlined v-for="tag in itens" :key="tag">
                {{ tag }}
              </v-chip>
            </v-chip-group>
          </div>
        </v-col>
      </v-row>
  </v-flex>
</template>

<script>
export default {
  name: "zc-chip-selector",
  methods: {
    labelText(field) {}
  },
  components: {
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
    itens: {
      type: Array,
      default: []
    }
  },
  data: () => ({
    innerValue: "",
    tags: ["Sócio", "Gerente"]
  }),
  computed: {
    mandatory: {
      get() {
        return this.rules.indexOf("required") > -1;
      }
    }
  },
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit("input", newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    }
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  }
};
</script>

<style>
/*
.styled-input {
  height: 40px;
  font-size: 20pt;
}
.styled-input label[for] {
  height: 40px;
  font-size: 20pt;
}
*/
</style>
