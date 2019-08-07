import { shallowMount, createLocalVue } from '@vue/test-utils'
import Initializer from '@/views/Initializer.vue'

const localVue = createLocalVue()

describe('Initializer.vue', () => {
  it('should assign url', () => {
    expect.assertions(1)
    window.location.assign = jest.fn()
    const dashboard = shallowMount(Initializer)
    const vm = dashboard.vm as any
    vm.loginWithGitHub()
    expect(window.location.assign).toHaveBeenCalled()
  })
})
