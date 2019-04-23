import ZCDataTable from './components/ZCDataTable'


import zcbirthdaydate from './components/ZCBirthdaydate.vue'
import zccep from './components/ZCCep.vue.vue'
// import zccheckbox from './components/zccheckbox.vue'
// import zccnpj from './components/zccnpj.vue'
// import zccolor from './components/zccolor.vue'
// import zccombobox from './components/zccombobox.vue'
// import zccomboboxserver from './components/zccomboboxserver.vue'
// import zccpf from './components/zccpf.vue'
// import zccpfcnpj from './components/zccpfcnpj.vue'
// import zcdate from './components/zcdate.vue'
// import zcdatetime from './components/zcdatetime.vue'
// import zcemail from './components/zcemail.vue'
// import zcemailconfirmation from './components/zcemailconfirmation.vue'
// import zcfile from './components/zcfile.vue'
// import zcmoney from './components/zcmoney.vue'
// import zcnumber from './components/zcnumber.vue'
// import zcpassword from './components/zcpassword.vue'
// import zcpasswordconfirmation from './components/zcpasswordconfirmation.vue'
// import zcphone from './components/zcphone.vue'
// import zcselect from './components/zcselect.vue'
// import zcslider from './components/zcslider.vue'
// import zcstring from './components/ZCString.vuezcstring.vue'
// import zcswitch from './components/zcswitch.vue'
// import zctextarea from './components/zctextarea.vue'
// import zctime from './components/zctime.vue'

const components = {
  ZCDataTable,


  zcbirthdaydate,
  zccep,
  //   zccheckbox,
  //   zccnpj,
  //   zccolor,
  //   zccombobox,
  //   zccomboboxserver,
  //   zccpf,
  //   zccpfcnpj,
  //   zcdate,
  //   zcdatetime,
  //   zcemail,
  //   zcemailconfirmation,
  //   zcfile,
  //   zcmoney,
  //   zcnumber,
  //   zcpassword,
  //   zcpasswordconfirmation,
  //   zcphone,
  //   zcselect,
  //   zcslider,
  //   zcstring,
  //   zcswitch,
  //   zctextarea,
  //   zctime,
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
