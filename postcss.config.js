module.exports = {
    parser: 'sugarss',
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss-nested'),
        require('postcss-import'),
        require('postcss-preset-env'),
        require('cssnano')
    ]
}