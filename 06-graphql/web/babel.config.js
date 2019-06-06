module.exports = {
    presets: [
        "@babel/preset-react",
        [
            "@babel/preset-env",
            {
                // see .browserslistrc
                useBuiltIns: "entry",
                corejs: 3
            }
        ]
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-regenerator"
    ]
};
