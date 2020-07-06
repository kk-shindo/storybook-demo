const path = require('path')
const rootPath = path.resolve(__dirname, '../')
console.log(rootPath)

module.exports = ({ config }) => {
  config.resolve.alias['@'] = rootPath
  config.resolve.alias['~'] = rootPath

  config.module.rules.push(
    {
      test: /\.s?css$/,
      loaders: [
        'style-loader',
        'css-loader',
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              './assets/scss/style.scss'
            ],
            include: path.resolve(__dirname, '../')
          }
        }
      ]
    },
    {
      test: /\.vue$/,
      loader: 'storybook-addon-vue-info/loader',
      enforce: 'post'
    },
    {
      test: /\.stories\.jsx?$/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      enforce: 'pre',
    }
  )

  return config
}
