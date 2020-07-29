module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'Vodafone Produktselektor Breitband App',
    themeColor: '#e60000', // Vodafone red
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js',
      // ...other Workbox options... like Icon locations?
    }
  }
}