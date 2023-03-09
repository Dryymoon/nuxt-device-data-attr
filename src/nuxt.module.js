const {isArray, isPlainObject, isEmpty, get} = require('lodash');

module.exports = function () {
  this.options.device = {
    refreshOnResize: true,
    // get nuxtConfig.modules: {['@nuxtjs/device', { refreshOnResize: true }]}
    ...((this.modules || []).filter(it =>
      isArray(it)
      && (it[0] === '@nuxtjs/device')
      && isPlainObject(it[1])
      && !isEmpty(it[1])
    ) || [])[1],
    // get nuxtConfig.device: { refreshOnResize: true };
    ...this.options.device
  }

  this.requireModule('@nuxtjs/device');

  const template = this.addTemplate({
    fileName: 'nuxt-device-data-attr.plugin.js',
    src: require('path').resolve(__dirname, 'nuxt-device-data-attr.plugin.js')
  });
  const plugin = { src: require('path').join(this.options.buildDir, template.dst) };

  this.options.plugins.push(plugin);
};

module.exports.meta = require('../package.json');
