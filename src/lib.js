import ZCDataTable from './components/ZCDataTable'


import ZCBirthdaydate from './components/ZCBirthdaydate.vue'
import ZCCep from './components/ZCCep.vue'
import ZCCheckbox from './components/ZCCheckbox.vue'
import ZCCnpj from './components/ZCCnpj.vue'
import ZCColor from './components/ZCColor.vue'
import ZCCombobox from './components/ZCCombobox.vue'
import ZCComboboxserver from './components/ZCComboboxserver.vue'
import ZCCpf from './components/ZCCpf.vue'
import ZCCpfCnpj from './components/ZCCpfCnpj.vue'
import ZCDate from './components/ZCDate.vue'
import ZCDatetime from './components/ZCDatetime.vue'
import ZCEmail from './components/ZCEmail.vue'
import ZCEmailConfirmation from './components/ZCEmailConfirmation.vue'
import ZCFile from './components/ZCFile.vue'
import ZCMoney from './components/ZCMoney.vue'
import ZCNumber from './components/ZCNumber.vue'
import ZCPassword from './components/ZCPassword.vue'
import ZCPasswordConfirmation from './components/ZCPasswordConfirmation.vue'
import ZCPhone from './components/ZCPhone.vue'
import ZCSelect from './components/ZCSelect.vue'
import ZCSlider from './components/ZCSlider.vue'
import ZCString from './components/ZCString.vue'
import ZCSwitch from './components/ZCSwitch.vue'
import ZCTextarea from './components/ZCTextarea.vue'
import ZCTime from './components/ZCTime.vue'

const components = {
  ZCDataTable,

  ZCBirthdaydate,
  ZCCep,
  ZCCheckbox,
  ZCCnpj,
  ZCColor,
  ZCCombobox,
  ZCComboboxserver,
  ZCCpf,
  ZCCpfCnpj,
  ZCDate,
  ZCDatetime,
  ZCEmail,
  ZCEmailConfirmation,
  ZCFile,
  ZCMoney,
  ZCNumber,
  ZCPassword,
  ZCPasswordConfirmation,
  ZCPhone,
  ZCSelect,
  ZCSlider,
  ZCString,
  ZCSwitch,
  ZCTextarea,
  ZCTime,
}


// This exports the plugin object.
export default {
  // The install method will be called with the Vue constructor as         
  // the first argument, along with possible options
  install(Vue, options) {
    // Add or modify global methods or properties.
    //Vue.yourMethod = (value) => value
    // Add a component or directive to your plugin, so it will be installed globally to your project.

    Object.entries(components).forEach(([name, component]) => {
      Vue.component(name, component)
    })

    // Add `Vue.mixin()` to inject options to all components.
    // Vue.mixin({
    //   // Add component lifecycle hooks or properties.
    //   created() {
    //     console.log('Hello from created hook!')
    //   }
    // })
    // // Add Vue instance methods by attaching them to Vue.prototype.
    // Vue.property.$myProperty = 'This is a Vue instance property.'
  }
}
