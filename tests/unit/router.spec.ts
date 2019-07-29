describe('router.ts', () => {
  it('should have routes', () => {
    const router = require('../../src/router')
    expect(router.default.options.routes).toBeDefined()
    console.log(router.default.options.routes)
  })
})
