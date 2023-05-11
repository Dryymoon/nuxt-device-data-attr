import kebabCase from 'lodash/kebabCase';
import mapKeys from 'lodash/mapKeys';
import mapValues from 'lodash/mapValues';
import pickBy from 'lodash/pickBy';

export default function (ctx) {
  if (!ctx.$device) throw new Error('Plugin device-data-attr.js require @nuxt/device plugin');

  ctx.app.mixins = ctx.app.mixins || [];

  ctx.app.mixins.push({
    created() {
      this._deviceDataAttrMeta = this.$meta().addApp('device-data-attr');
      this._deviceDataAttrUpdate();
    },
    watch: {
      $device: {
        handler() {
          this._deviceDataAttrUpdate();
        },
        deep: true
      }
    },
    methods: {
      _deviceDataAttrUpdate() {
        let attrs = pickBy(this.$device, (v, k) => k.startsWith('is'));
        attrs = pickBy(attrs, v => v);
        attrs = mapValues(attrs, () => '');
        attrs = mapKeys(attrs, (v, k) => kebabCase(k));
        attrs = { ['is-device']: '', ...attrs };

        this._deviceDataAttrMeta.set({ bodyAttrs: attrs, });
      }
    }
  });
}
