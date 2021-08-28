// For demo build bundle
module.exports = {
  publicPath: '/zc-web-vuejs-core/',
  chainWebpack: config => {
    config.plugin('VuetifyLoaderPlugin').tap(args => [{
      match (originalTag, { kebabTag, camelTag, path, component }) {
        if (kebabTag.startsWith('core-')) {
          return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
        }
      }
    }])

    config.externals({
      'moment': 'moment',
      'vuetify': 'vuetify'
    })
  }
}
