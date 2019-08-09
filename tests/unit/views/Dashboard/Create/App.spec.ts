import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@/views/Dashboard/Create/App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

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

  it('call create should call apollo mutate', async () => {
    const getters: any = {
      getOwnerUuid: () => (''),
      getToken: () => ('')
    }
    const view = shallowMount(App, {
      localVue,
      router: new VueRouter({
        routes: [{
          name: 'dashboard',
          path: ''
        }]
      }),
      store: new Vuex.Store({
        getters
      }),
      mocks: {
        $apollo: {
          mutate: jest.fn().mockResolvedValue({})
        }
      }
    })
    const vm = view.vm as any
    vm.name = 'hello'
    const res = await vm.create()
    expect(vm.$apollo.mutate).toHaveBeenCalled()
    expect(vm).toHaveProperty('error', false)
    expect(vm).toHaveProperty('error', false)
    expect(vm.$route).toHaveProperty('name', 'dashboard')
    expect(res).toBe(undefined)
  })

  it('call create should call apollo mutate -- reject', async () => {
    const getters: any = {
      getOwnerUuid: () => (''),
      getToken: () => ('')
    }
    const view = shallowMount(App, {
      localVue,
      router: new VueRouter({
        routes: [{
          name: 'dashboard',
          path: ''
        }]
      }),
      store: new Vuex.Store({
        getters
      }),
      mocks: {
        $apollo: {
          mutate: jest.fn().mockRejectedValue({ graphQLErrors: [{ constraint: 'apps_owner_uuid_name_key' }] })
        }
      }
    })
    const vm = view.vm as any
    vm.name = 'hello'
    await vm.create()
    expect(vm.$apollo.mutate).toHaveBeenCalled()
    expect(vm).toHaveProperty('error', true)
  })

  it('call create should call apollo mutate -- reject with undefined error', async () => {
    expect.assertions(3)
    const getters: any = {
      getOwnerUuid: () => (''),
      getToken: () => ('')
    }
    const view = shallowMount(App, {
      localVue,
      router: new VueRouter({
        routes: [{
          name: 'dashboard',
          path: ''
        }]
      }),
      store: new Vuex.Store({
        getters
      }),
      mocks: {
        $apollo: {
          mutate: jest.fn().mockRejectedValue({ graphQLErrors: [{ constraint: '' }] })
        }
      }
    })
    const vm = view.vm as any
    vm.name = 'hello'
    await vm.create()
    expect(vm.$apollo.mutate).toHaveBeenCalled()
    expect(vm).toHaveProperty('error', true)
    await new Promise(resolve => {
      setTimeout(() => {
        expect(vm).toHaveProperty('error', false)
        resolve()
      }, 450)
    })
  })

  it('call create should call apollo mutate -- reject without errors', async () => {
    const view = shallowMount(App, {
      mocks: {
        $apollo: {
          mutate: jest.fn()
        }
      }
    })
    const vm = view.vm as any
    vm.name = 'hello'
    vm.error = true
    await vm.create()
    expect(vm.$apollo.mutate).not.toHaveBeenCalled()
    expect(vm).toHaveProperty('error', true)
  })

  it('call generateAwesomeWord should affect name', async () => {
    const view = shallowMount(App, {
      localVue,
      mocks: {
        $apollo: {
          query: jest.fn().mockResolvedValue({ data: { generateAwesomeWord: 'world' } })
        }
      }
    })
    const vm = view.vm as any
    vm.name = 'hello'
    expect(vm).toHaveProperty('name', 'hello')
    await vm.generateAwesomeWord()
    expect(vm.$apollo.query).toHaveBeenCalled()
    expect(vm).toHaveProperty('name', 'world')
  })

  it('call generateAwesomeWord should affect name', async () => {
    const view = shallowMount(App, {
      localVue,
      mocks: {
        $apollo: {
          query: jest.fn().mockResolvedValue({ data: { generateAwesomeWord: undefined } })
        }
      }
    })
    const vm = view.vm as any
    vm.name = 'hello'
    expect(vm).toHaveProperty('name', 'hello')
    await vm.generateAwesomeWord()
    expect(vm.$apollo.query).toHaveBeenCalled()
    expect(vm).toHaveProperty('name', '')
  })

  it('call generateAwesomeWord should fail', async () => {
    const view = shallowMount(App, {
      localVue,
      mocks: {
        $apollo: {
          query: jest.fn().mockRejectedValue(undefined)
        }
      }
    })
    const vm = view.vm as any
    vm.name = 'hello'
    expect(vm).toHaveProperty('name', 'hello')
    await vm.generateAwesomeWord()
    expect(vm.$apollo.query).toHaveBeenCalled()
    expect(vm).toHaveProperty('name', 'hello')
  })
})
