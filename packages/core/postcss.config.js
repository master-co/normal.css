module.exports = {
    plugins: [
        require('cssnano'),
        require('postcss-combine-duplicated-selectors'),
        require('postcss-import'),
    ]
}