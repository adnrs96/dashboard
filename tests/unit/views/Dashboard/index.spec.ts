import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import Dashboard from '@/views/Dashboard/index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Dashboard.vue', () => {
  let store: Store<unknown>
  let actions

  beforeEach(() => {
    actions = {
      logoutUser: jest.fn().mockResolvedValue(true)
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('should display an HelloWorld message', () => {
    const dashboard = shallowMount(Dashboard, {
      store,
      localVue,
      stubs: {
        RouterView: '<div id="router" />'
      }
    })
    expect(dashboard.html()).toBeTruthy()
  })
})
