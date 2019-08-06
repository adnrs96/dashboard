import Loader from '@/components/Loader.vue'
import { mount } from '@vue/test-utils'

describe('Loader.vue', () => {
  it('should display a loading view', () => {
    const loader = mount(Loader)
    expect(loader.html()).toBeTruthy()
  })
})
