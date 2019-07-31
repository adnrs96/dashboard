module.exports = {
  plugins: [
    require('tailwindcss')('tailwind.config.js'),
    require('autoprefixer')(),
    require('@fullhuman/postcss-purgecss')({
      content: ['./public/index.html', './src/App.vue', './src/**/*.vue'],
      defaultExtractor: content => content.match(/[a-zA-Z0-9-_:/]+/g)
    })
  ]
}
