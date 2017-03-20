const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Tri';
		var text = 'Testing generateMessage';
		var result = generateMessage(from, text);

		expect(result).toInclude({from, text});
		expect(result.createdAt).toBeA('number');
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Tri';
		var latitude = 1234;
		var longitude = 4321;
		var url = `http://google.com/maps?q=${latitude},${longitude}`;
		var result = generateLocationMessage(from, latitude, longitude);

		expect(result.url).toBe(url);
		expect(result).toInclude({from, url});
	});
});
