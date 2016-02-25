import 'babel-polyfill';
import expect from 'expect';
import makeAction from './../src/util/makeAction';

describe('util', () => {
  describe('Make Action', () => {
    it('should return an action creator', () => {

      const output = makeAction('FOO_REQUEST')();
      const expected = {
        type: 'FOO_REQUEST'
      };
      expect(output).toEqual(expected);
    });
    it('should return an action creator with args', () => {
      const output = makeAction('FOO_REQUEST', { name: 'clint' })();
      const expected = {
        type: 'FOO_REQUEST',
        name: 'clint'
      };
      expect(output).toEqual(expected);
    });
  })
})