import Logo from '@/components/Logo.vue'
import { mount } from '@vue/test-utils'

describe('Logo.vue', () => {
  it('should display a logo', () => {
    const logo = mount(Logo)
    expect(logo.html()).toBeTruthy()
  })
})
