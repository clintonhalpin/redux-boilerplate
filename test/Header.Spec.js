import 'babel-polyfill';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Header from './../src/components/Header';

function setup() {
  let renderer = TestUtils.createRenderer()
  renderer.render(<Header />)
  let output = renderer.getRenderOutput()

  return {
    output,
    renderer
  }
}

describe('components', () => {
  describe('Header', () => {
    it('should render', () => {
      const { output } = setup();
      expect(output.type).toBe('div');
    });
    it('should dynamically set a title', () => {
      let renderer = TestUtils.createRenderer()
      renderer.render(<Header title='Fun' />)
      let output = renderer.getRenderOutput()
      let expected = 'Fun';
      expect(output).toIncludeJSX('Fun');
    })
  })
})