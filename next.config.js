// const withSourceMaps = require('@zeit/next-source-maps')

// module.exports = withSourceMaps({
//     webpack(config, options) {
//         return config
//     }
// })

// https://github.com/vercel/next.js/issues/5307 - solution here

module.exports = {
    webpack(config, _) {
        config.devtool = 'eval-source-map';
        return config;
    }
}

// tsconfig.json

// {
//     "compilerOptions": {
//      ...
//         "sourceMap": true
//     },
//   ...
// }