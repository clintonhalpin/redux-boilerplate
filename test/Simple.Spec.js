import 'babel-polyfill'
import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Simple from './../src/components/Simple'

function setup() {
  let renderer = TestUtils.createRenderer()
  renderer.render(<Simple />)
  let output = renderer.getRenderOutput()

  return {
    output,
    renderer
  }
}

describe('components', () => {
  describe('Simple', () => {
    it('should render correctly', () => {
      const { output } = setup()
      expect(output.type).toBe('header')
      expect(output.props.className).toBe('header')
    })
  })
})