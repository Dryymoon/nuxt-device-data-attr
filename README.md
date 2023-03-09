# nuxt-device-data-attr

This nuxt module add additional css selectors on body tag for resolve device.
```html
<body is-desktop is-desktop-or-tablet>
  <style>
    [is-desktop] .someClass {
      color: red;
    }
  </style>
  <div class="someClass">
    This should be red colored on desktop device
  </div>  
</body>
```

## Available css selectors:
* is-desktop
* is-mobile
* is-tablet
* is-mobile-or-tablet
* is-desktop-or-tablet
* is-ios
* is-windows
* is-mac-os
* is-android
* is-firefox
* is-edge
* is-chrome
* is-samsung
* is-crawler

## Setup

1. Add `nuxt-device-data-attr` dependency to your project

```bash
npm install --save-dev nuxt-device-data-attr
```

2. Add `nuxt-device-data-attr` to the `buildModules` section of `nuxt.config.js`

```js
export default {
  buildModules: [
    'nuxt-device-data-attr',
  ]
}
```

⚠️ If you are using Nuxt **< v2.9** you have to install the module as a `dependency` (No `--dev` or `--save-dev` flags) and use `modules` section in `nuxt.config.js` instead of `buildModules`.

## License

[MIT License](./LICENSE)

Copyright (c) Igor Pylypenko
# nuxt-device-data-attr
