const express = require('express');
const supertest = require('supertest');

const {
    expect
} = require('chai');

const swagger = require('../../src/middlewares/swagger.middleware');

describe('[Route] /docs', () => {

    let app;
    let request;

    before(() => {
        app = express();
        swagger(app);
    });

    it('should return documentation page', (done) => {
        request = supertest(app);

        request
            .get('/docs')
            .redirects(1)
            .expect(200)
            .expect('Content-Type', 'text/html; charset=UTF-8')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res.text).to.not.be.empty;
                done();
            });
    });
});