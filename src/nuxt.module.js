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

  this.options.plugins.push(
    require.resolve('./nuxt-device-data-attr.plugin.js'),
  );
};

module.exports.meta = require('../package.json');
