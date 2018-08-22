const cors = require('cors');
const bodyParser = require('body-parser');
const swagger = require('./middlewares/swagger.middleware');

module.exports = (app) => {
    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
    swagger(app);
};
