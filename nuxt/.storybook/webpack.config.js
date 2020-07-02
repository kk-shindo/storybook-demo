const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = ({ config }) => {
  config.resolve.alias['@'] = rootPath
  config.resolve.alias['~'] = rootPath

  config.module.rules.push({
    test: /\.s?css$/,
    loaders: [
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            './assets/scss/0_base/*.scss'
          ],
          include: path.resolve(__dirname, '../')
        }
      }
    ]
  })

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post'
  })

  return config
}
