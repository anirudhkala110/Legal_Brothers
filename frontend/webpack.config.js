const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // Other webpack configurations...

    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src', 'contactDetails.json'),
                    to: path.resolve(__dirname, 'src'),
                },
            ],
        }),
    ],
};
