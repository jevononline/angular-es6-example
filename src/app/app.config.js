import ApiConfig from './app.api.config';
import ApiProductionConfig from './app.api.production.config.js';

export default Object.assign({
    //config
    fractionSize:2
}, ENV === 'production' ? ApiProductionConfig : ApiConfig);