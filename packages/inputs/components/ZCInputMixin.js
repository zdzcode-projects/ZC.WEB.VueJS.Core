import useVuelidate from "@vuelidate/core";

import * as validators from '@vuelidate/validators'

export default {
    setup() {
        return { v$: useVuelidate() };
    },
    props: {
        value: {
            type: [String],
            default: null,
        },
        validationRules: {
            type: String,
            default: null,
        },
    },
    data: () => ({
        innerValue: null,
        hasError: false,
        errors: [],
    }),
    watch: {
        // Handles internal model changes.
        innerValue(newVal) {
            this.$emit("input", newVal);
        },
        // Handles external model changes.
        value(newVal) {
            this.innerValue = newVal;
        },
    },
    computed: {
        innerValueRules: function () {
            if (this.validationRules == null || this.validationRules == undefined) {
                return {};
            } else {
                var rulesObject = {};
                var rules = this.validationRules.split("|");

                for (var i = 0; i < rules.length; i++) {
                    switch (rules[i]) {
                        case "required":
                            rulesObject.required = validators.required;
                            break;
                        case "email":
                            rulesObject.email = validators.email;
                            break;
                    }
                }
                return rulesObject;
            }
        },
    },
    methods: {
        async validate() {
            this.hasError = this.getError();
            this.errors = this.getErrorMessages();
        },
        getError() {
            if (this.v$ == null || this.v$ == undefined) {
                return false;
            } else if (this.v$.hasOwnProperty("innerValue")) {
                return this.v$.innerValue.$invalid;
            }
        },
        getErrorMessages() {
            if (this.v$ == null || this.v$ == undefined) {
                return [];
            } else if (this.v$.hasOwnProperty("innerValue")) {
                var errorMessages = []
                for (var i = 0; i < this.v$.$silentErrors.length; i++) {
                    errorMessages.push(this.$t(this.v$.$silentErrors[i].$validator));//.$message);
                }
                return errorMessages;
            }
        },
        clearValidation() {
            this.hasError = false;
            this.errors = [];
        }
    },
    validations() {
        return {
            innerValue: this.innerValueRules, //[ required, email ],
        };
    },
    created() {
        this.innerValue = this.value;
    },
}