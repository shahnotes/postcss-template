module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-import'),
        require('precss'),
        require('postcss-preset-env')({
            stage: 1,
        }),
        require('postcss-assets')({
            loadPaths: [
                './resources/images',
            ],
        }),
        require('cssnano')({
            preset: 'default',
        }),
    ]
}