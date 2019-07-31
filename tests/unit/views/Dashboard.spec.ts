import { mount } from '@vue/test-utils'
import Dashboard from '@/views/Dashboard.vue'

describe('Dashboard.vue', () => {
  it('should display an HelloWorld message', () => {
    const dashboard = mount(Dashboard)
    expect(dashboard.html()).toBeTruthy()
  })
})
