import { mount } from '@vue/test-utils'
import Overview from '@/views/Dashboard/Overview.vue'

describe('Overview.vue', () => {
  it('should mount', () => {
    const view = mount(Overview)

    expect(view.html()).toBeTruthy()
  })
})
