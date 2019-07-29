import { shallowMount, mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('should display an HelloWorld message', () => {
    const home = mount(Home)
    expect(home.html()).toBeTruthy()
  })
})
