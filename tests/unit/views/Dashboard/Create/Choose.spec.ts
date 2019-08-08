import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Choose from '@/views/Dashboard/Create/Choose.vue'
import VueRouter from 'vue-router'

describe('Choose.vue', () => {
  it('should mount', () => {
    const view = mount(Choose)

    expect(view.html()).toBeTruthy()
  })

  describe(`.goTo(path: string)`, () => {
    it('should redirect to the hub', () => {
      expect.assertions(1)

      window.location.assign = jest.fn()
      const view = shallowMount(Choose)
      const vm = view.vm as any
      vm.goTo('submit-microservice')

      expect(window.location.assign).toHaveBeenCalled()
    })

    it('should redirect to the new-app route', () => {
      expect.assertions(1)

      const localVue = createLocalVue()
      localVue.use(VueRouter)
      const $router = new VueRouter()
      const view = shallowMount(Choose, {
        mocks: {
          $router
        }
      })
      const vm = view.vm as any
      $router.push = jest.fn()

      vm.goTo('new-app')

      expect($router.push).toHaveBeenCalled()
    })
  })
})
