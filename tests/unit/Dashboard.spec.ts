import { mount, shallowMount, createLocalVue, Wrapper } from '@vue/test-utils'
import User from '@/store/modules/User'
import Vuex, { Store } from 'vuex'
import Dashboard from '@/Dashboard.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import ApolloPlugin from '@/plugins/vue-apollo'
import { resolve } from 'path'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

describe('main::Dashboard.vue', () => {
  let store: Store<unknown>
  let router: VueRouter
  let loggedIn: boolean

  beforeEach(() => {
    store = new Vuex.Store(User)
    router = new VueRouter({
      routes: [{
        name: 'dashboard',
        path: '/'
      }, {
        name: 'new',
        path: '/new'
      }]
    })
  })

  describe('user is a visitor', () => {
    it('should mount', () => {
      const dashboard = shallowMount(Dashboard, { store, localVue })
      expect(dashboard.html()).toBeTruthy()
    })

    it('should have user not logged in', async () => {
      const dashboard = shallowMount(Dashboard, { store, localVue })
      const vm = dashboard.vm as any
      const loggedIn = await vm.fetchUser()
      expect(loggedIn).toEqual(false)
      expect(vm.initialized).toEqual(true)
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
            },
            query: jest.fn().mockImplementation(() => ({ data: { allApps: { totalCount: 0 } } }))
          }
        }
      })
    })

    it('should be loggedIn', async () => {
      expect.assertions(5)
      expect(dash.html()).toBeTruthy()
      expect(store.getters.isUserLoggedIn).toEqual(true)
      const vm = dash.vm as any
      vm.appsCount = jest.fn().mockResolvedValue(0)
      await vm.checkApps()
      dash.vm.$nextTick(() => {
        expect(dash.vm).toHaveProperty('initialized', true)
        expect(dash.vm).toHaveProperty('getGraphQLToken', 'token')
        expect(ApolloPlugin.onLogin).toBeCalled()
      })
    })

    it('should not be loggedIn anymore', async () => {
      expect.assertions(6)
      expect(store.getters.isUserLoggedIn).toEqual(true)
      store.commit('setUser', { ownerUuid: undefined, token: undefined })
      expect(store.getters.isUserLoggedIn).toEqual(false)
      expect(store.getters.getToken).toEqual(undefined)
      const vm = dash.vm as any
      vm.appsCount = jest.fn().mockResolvedValue(0)
      vm.fetchUser = jest.fn().mockResolvedValue(false)
      const isLoggedIn = await vm.fetchUser()
      expect(isLoggedIn).toBeFalsy()
      dash.vm.$nextTick(() => {
        expect(dash.vm).toHaveProperty('getGraphQLToken', undefined)
        expect(dash.vm).toHaveProperty('initialized', true)
      })
    })

    it('should call checkApps with lock = false', async () => {
      expect.assertions(2)
      expect(store.getters.isUserLoggedIn).toEqual(true)
      const vm = dash.vm as any
      vm.appsCount = jest.fn().mockResolvedValue(1)
      await vm.checkApps()
      expect(dash.vm).toHaveProperty('lock', false)
    })

    it('should call checkApps with lock = true', async () => {
      expect.assertions(2)
      expect(store.getters.isUserLoggedIn).toEqual(true)
      const vm = dash.vm as any
      vm.appsCount = jest.fn().mockResolvedValue(0)
      await vm.checkApps()
      expect(dash.vm).toHaveProperty('lock', true)
    })

    it('should call routeUpdated then checkApps', async () => {
      expect.assertions(2)
      expect(store.getters.isUserLoggedIn).toEqual(true)
      const vm = dash.vm as any
      vm.lock = true
      await vm.routeUpdated({ name: 'h' }, { name: 'h' })
      expect(dash.vm).toHaveProperty('lock', true)
    })
  })
})
