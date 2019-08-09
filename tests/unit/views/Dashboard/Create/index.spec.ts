import { mount } from '@vue/test-utils'
import Create from '@/views/Dashboard/Create/index.vue'

describe('Create.vue', () => {
  it('should mount', () => {
    const view = mount(Create)

    expect(view.html()).toBeTruthy()
  })
})
