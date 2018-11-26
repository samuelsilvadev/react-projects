const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

const Tweet = require('./../src/models/Tweet');
const server = require('../src/server');

chai.use(chaiHttp);

describe('Tweet', () => {
	beforeEach((done) => {
		Tweet.deleteMany({}, (err) => {
			if (err) {
				console.error(err);
			}
			done();
		});
	});

	describe('/GET Tweets', () => {
		it('should get all tweets', (done) => {
			chai.request(server)
				.get('/tweets')
				.end((err, res) => {
					expect(res).have.status(200);
					expect(res.body).to.be.a('array');
					expect(res.body.length).to.be.eql(0);

					done();
				});
		});
	});


	describe('/POST Tweets', () => {
		it('should insert a new tweet correctly', (done) => {
			const tweet = {
				author: 'Samuel Silva',
				content: 'Testing tweet',
			};

			chai.request(server)
				.post('/tweets')
				.send(tweet)
				.end((err, res) => {
					expect(res).have.status(200);
					expect(res.body).to.be.a('object');
					expect(res.body).to.have.property('likes').eql(0);
					expect(res.body).to.have.property('author').eql(tweet.author);
					expect(res.body).to.have.property('content').eql(tweet.content);

					done();
				});
		});
	});
});
