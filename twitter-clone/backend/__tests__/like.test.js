const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

const Tweet = require('./../src/models/Tweet');
const server = require('../src/server');

chai.use(chaiHttp);

describe('Like Tweet', () => {
	let tweet = null;

	beforeEach((done) => {
		tweet = {
			author: 'Samuel Silva',
			content: 'Testing tweet',
		};

		chai.request(server)
			.post('/tweets')
			.send(tweet)
			.end((err, res) => {
				tweet = res.body;

				done();
			});
	});

	afterEach((done) => {
		Tweet.deleteMany({}, (err) => {
			if (err) {
				console.error(err);
			}
			done();
		});
	});

	it('should update like property of the new tweet', (done) => {
		chai.request(server)
			.post(`/likes/${tweet._id}`)
			.send()
			.end((err, res) => {
				expect(res).have.status(200);
				expect(res.body).to.be.a('object');
				expect(res.body).to.have.property('likes').eql(1);

				done();
			});
	});
});
