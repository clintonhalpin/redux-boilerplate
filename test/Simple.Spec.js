import 'babel-polyfill'
import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Simple from './../src/components/Simple'

function setup() {
  let props = {
    addTodo: expect.createSpy()
  }

  let renderer = TestUtils.createRenderer()
  renderer.render(<Simple {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
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