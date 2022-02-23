const { merge } = require("webpack-merge");
const commonWebpackConfig = require("./webpack.common.js");
 
module.exports = ({ ENV }) => {
 const envWebpackConfig = require(`./webpack.${ENV}.js`);
 return merge(commonWebpackConfig, envWebpackConfig);
};