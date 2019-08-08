import { mount } from '@vue/test-utils'
import Choose from '@/views/Dashboard/Create/Choose.vue'

describe('Choose.vue', () => {
  it('should mount', () => {
    const view = mount(Choose)

    expect(view.html()).toBeTruthy()
  })
})
