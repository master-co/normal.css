
module.exports = {
    plugins: [
        require('cssnano'),
        require('postcss-combine-duplicated-selectors'),
        require('postcss-import'),
        require('postcss-assign-layer').default([
            { include: '**/*.css', layerName: 'base' }
        ])
    ]
}