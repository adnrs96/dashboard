module.exports = {
  plugins: [
    require('tailwindcss')('tailwind.config.js'),
    require('autoprefixer')(),
    process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
      content: ['./public/index.html', './src/Dashboard.vue', './src/**/*.vue'],
      defaultExtractor: content => content.match(/[a-zA-Z0-9-_:/]+/g)
    })
  ]
}
