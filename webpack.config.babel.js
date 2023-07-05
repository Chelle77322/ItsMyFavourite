import { merge } from 'webpack-merge';
import productionConfig from "./webpack/webpack.prod.config.js";
import developmentConfig from "./webpack/webpack.dev.config.js";
import webpackBaseConfig from './webpack/webpack.base.config.js';

export default  () =>

merge(webpackBaseConfig,productionConfig, developmentConfig)



