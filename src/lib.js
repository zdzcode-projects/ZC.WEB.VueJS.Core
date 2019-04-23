import ZCDataTable from './components/ZCDataTable'
import hello from './components/hello'
import hello2 from './components/hello2'

// plugin.js


// This exports the plugin object.
export default {
  // The install method will be called with the Vue constructor as         
  // the first argument, along with possible options
  install(Vue, options) {
    // Add or modify global methods or properties.
    //Vue.yourMethod = (value) => value
    // Add a component or directive to your plugin, so it will be installed globally to your project.
    Vue.component('ZCDataTable', ZCDataTable)
    Vue.component('hello', hello)
    Vue.component('hello2', hello2)
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
