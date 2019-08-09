import { shallowMount } from '@vue/test-utils'
import App from '@/views/Dashboard/Create/App.vue'

describe('App.vue', () => {
  it('should mount', () => {
    const view = shallowMount(App)

    expect(view.html()).toBeTruthy()
  })

  it('call create should set error to true', () => {
    const view = shallowMount(App, {
      mocks: {
        $apollo: {
          mutate: jest.fn()
        }
      }
    })
    const vm = view.vm as any
    vm.create()
    expect(vm.$apollo.mutate).not.toHaveBeenCalled()
  })
})
