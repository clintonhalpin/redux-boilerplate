import 'babel-polyfill';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import * as actionTypes from './../src/actions/';

describe('actions', () => {
  describe('Actions', () => {
    it('should expose fetch functions', () => {
      expect(actionTypes.fetchUserIfNeeded).toExist();
      expect(actionTypes.fetchEmojiIfNeeded).toExist();
    });
    it('should have async tests', () => {
        expect(true).toBe(false);
    });
  })
})

