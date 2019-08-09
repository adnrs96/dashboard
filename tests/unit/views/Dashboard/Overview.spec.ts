import { mount } from '@vue/test-utils'
import Overview from '@/views/Dashboard/Overview.vue'

describe('Overview.vue', () => {
  it('should mount', () => {
    const view = mount(Overview, {
      stubs: {
        ApolloQuery: true
      }
    })

    expect(view.html()).toBeTruthy()
  })
})
