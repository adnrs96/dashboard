import { mount } from '@vue/test-utils'
import App from '@/views/Dashboard/Create/App.vue'

describe('App.vue', () => {
  it('should mount', () => {
    const view = mount(App)

    expect(view.html()).toBeTruthy()
  })
})
