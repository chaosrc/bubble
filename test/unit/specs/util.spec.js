import Vector from '@/util/Vector'
import assert from 'assert'

describe('vector', () => {
  it('new vector', () => {
    let v1 = new Vector(10, 20)
    assert.equal(10, v1.x)
    assert.equal(20, v1.y)

    let v2 = new Vector({x: 3, y: 4})
    assert.equal(3, v2.x)
    assert.equal(4, v2.y)

    assert.equal(5, v2.length)
    assert.ok(v2.normalize().length <= 1)
    console.log(v2.length)
    assert.ok(v2.length > 0.98)

    assert.ok(v2.dot(v1))
  })
})
