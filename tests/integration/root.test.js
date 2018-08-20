const http = require('http');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

process.env.TESTING = true;

describe('[Integration] Root', () => {

    let server;

    before(() => {
        server = http.createServer(app);
        server.listen(50001, () => {
            /*eslint-disable */
            console.info('Test server listening at 50032');
            /*eslint-enable */
        });
    });

    it('should return 200 OK', done => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.be.deep.equal(200);
                expect(res).to.be.json;
                done();
            });
    });
});