import 'babel-polyfill'
import expect from 'expect'
import { permalinkRequest } from './../src/actions';


describe('Actions', () => {
  describe('Permalink', () => {

    it('should request data for permalink', () => {
      let sampleUID = '2b2b';
      let action = permalinkRequest(sampleUID);
      expect(action.type).toBe('PERMALINK_REQUEST');
      expect(action.UID).toBe(sampleUID);
    });

  });

});