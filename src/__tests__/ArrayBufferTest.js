import getBuffer from '../ArrayBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('test get stoned', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
