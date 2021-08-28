'use strict';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

// import * as components from './components/index'
// var components = {}
// install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true; // For each matching file name...

  requireComponent.keys().forEach(function (fileName) {
    // Get the component config
    var componentConfig = requireComponent(fileName); // Get the PascalCase version of the component name

    var componentName = fileName.split('/').pop().replace(/\.\w+$/, ''); // console.log((componentConfig.default || componentConfig).hasOwnProperty('name'))// ? componentConfig.name : componentName);
    // console.log(componentName)
    // console.log(componentConfig.default.name)
    // components[componentName] = componentConfig.default || componentConfig
    // Globally register the component

    Vue.component(componentName, componentConfig.default || componentConfig);
    Vue.component(componentConfig.default.name, componentConfig.default || componentConfig);
  }); // Register Global event to show AppMessage, related to AppSnackbar
  // https://medium.com/@panzelva/writing-modals-for-vue-js-callable-from-anywhere-6994d180451

  this.EventBus = new Vue();
  Vue.prototype.$appMessage = {
    show: function show(params) {
      plugin.EventBus.$emit('app-message-show', params);
    }
  };
} // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install when vue is found

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof commonjsGlobal !== 'undefined') {
  GlobalVue = commonjsGlobal.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

var requireComponent = commonjsRequire.context( // Look for files in the current directory
'./components', // Do not look in subdirectories
true, // Only include "_base-" prefixed .vue files
/[\w-]+\.vue$/); // Default export is library as a whole, registered via Vue.use()


var index_esm = plugin;

module.exports = index_esm;
