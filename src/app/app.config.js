import ApiConfig from './app.api.config';
import ApiBuildConfig from './app.api.build.config.js';

export default Object.assign({
    //config
    fractionSize: 2
}, Object.assign(ApiConfig, ApiBuildConfig)[ENV]);