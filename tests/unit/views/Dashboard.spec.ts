import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import VueApollo from 'vue-apollo'
import Dashboard from '@/views/Dashboard.vue'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueApollo)

describe('Dashboard.vue', () => {
  let store: Store<unknown>
  let getters

  beforeEach(() => {
    getters = {
      getOwnerUuid: jest.fn()
    }
    store = new Vuex.Store({
      getters
    })
  })

  it('should display an HelloWorld message', () => {
    const dashboard = shallowMount(Dashboard, { store, localVue })
    expect(dashboard.html()).toBeTruthy()
  })
})
