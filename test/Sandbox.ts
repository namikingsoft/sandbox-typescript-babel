import {Sandbox} from 'Sandbox'
const assert = require('power-assert')

describe('Sandbox', function() {

  describe('hello', () => {

    context('success', () => {
      it('should be return hello (name)', () => {
        const sandbox = new Sandbox()
        assert(sandbox.hello('world') === 'hello world')
      })
    })

    context('error', () => {
      it('should be return hello (name)', () => {
        const sandbox = new Sandbox()
        assert(sandbox.hello('world') === 'hello world!')
      })
    })
  })
})
