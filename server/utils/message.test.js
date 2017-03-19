const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Tri';
		var text = 'Testing generateMessage';
		var result = generateMessage(from, text);

		expect(result).toInclude({from, text});
		expect(result.createdAt).toBeA('number');
	});
});
