import { mount, shallowMount, createLocalVue, Wrapper } from '@vue/test-utils'
import User from '@/store/modules/User'
import Vuex, { Store } from 'vuex'
import Dashboard from '@/Dashboard.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import ApolloPlugin from '@/plugins/vue-apollo'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

describe('main::Dashboard.vue', () => {
  let store: Store<unknown>
  let router: VueRouter
  let loggedIn: boolean

  beforeEach(() => {
    store = new Vuex.Store(User)
    router = new VueRouter({})
  })

  describe('user is a visitor', () => {
    it('should mount', () => {
      const dashboard = shallowMount(Dashboard, { store, localVue })
      expect(dashboard.html()).toBeTruthy()
    })

    it('should have user not logged in', () => {
      expect(store.getters.isUserLoggedIn).toEqual(false)
    })
  })

  describe('user is logged in', () => {
    let dash: Wrapper<Dashboard>

    beforeEach(async () => {
      ApolloPlugin.onLogin = jest.fn().mockResolvedValue(true)
      ApolloPlugin.onLogout = jest.fn().mockResolvedValue(true)
      store.commit('setUser', { ownerUuid: 'ouuid', token: 'token' })
      axios.get = jest.fn().mockResolvedValueOnce({ data: { owner_uuid: 'ouuid', token: 'token' } })
      dash = shallowMount(Dashboard, {
        store,
        router,
        localVue,
        mocks: {
          $apollo: {
            provider: {
              defaultClient: jest.fn()
            }
          }
        }
      })
    })

    it('should be loggedIn', () => {
      expect.assertions(5)
      expect(dash.html()).toBeTruthy()
      expect(store.getters.isUserLoggedIn).toEqual(true)

      dash.vm.$nextTick(() => {
        expect(dash.vm).toHaveProperty('initialized', true)
        expect(dash.vm).toHaveProperty('getGraphQLToken', 'token')
        expect(ApolloPlugin.onLogin).toBeCalled()
      })
    })

    it('should not be loggedIn anymore', () => {
      expect.assertions(5)
      expect(store.getters.isUserLoggedIn).toEqual(true)
      store.commit('setUser', { ownerUuid: undefined, token: undefined })
      expect(store.getters.isUserLoggedIn).toEqual(false)
      expect(store.getters.getToken).toEqual(undefined)
      dash.vm.$nextTick(() => {
        expect(dash.vm).toHaveProperty('getGraphQLToken', undefined)
        expect(dash.vm).toHaveProperty('initialized', true)
      })
    })
  })
})
