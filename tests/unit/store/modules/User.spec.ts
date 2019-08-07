import User from '@/store/modules/User'
import { createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import axios from 'axios'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Store::User', () => {
  let store: Store<unknown>

  beforeEach(() => {
    store = new Vuex.Store(User)
    axios.delete = jest.fn().mockResolvedValue(undefined)
  })

  describe('visitor', () => {
    it('getOwnerUuid should be undefined', () => {
      expect.assertions(1)
      expect(store.getters.getOwnerUuid).toEqual(undefined)
    })
    it('getToken should be undefined', () => {
      expect.assertions(1)
      expect(store.getters.getToken).toEqual(undefined)
    })
    it('isUserLoggedIn should be false', () => {
      expect.assertions(1)
      expect(store.getters.isUserLoggedIn).toEqual(false)
    })
  })

  describe('user is { ownerUuid: ouuid, token: token }', () => {
    beforeAll(() => {
      store.commit('setUser', { ownerUuid: 'ouuid', token: 'token' })
    })
    it('getOwnerUuid should be ouuid', () => {
      expect.assertions(1)
      expect(store.getters.getOwnerUuid).toEqual('ouuid')
    })
    it('getToken should be token', () => {
      expect.assertions(1)
      expect(store.getters.getToken).toEqual('token')
    })
    it('isUserLoggedIn should be true', () => {
      expect.assertions(1)
      expect(store.getters.isUserLoggedIn).toEqual(true)
    })
  })

  describe('logoutUser', () => {
    beforeEach(() => {
      store.commit('setUser', { ownerUuid: 'ouuid', token: 'token' })
    })
    it('should resolve and user ownerUuid be undefined', async () => {
      expect.assertions(4)
      expect(store.getters.getOwnerUuid).toEqual('ouuid')
      const res = await store.dispatch('logoutUser')
      expect(res).toEqual(true)
      expect(store.getters.getOwnerUuid).toEqual(undefined)
      expect(store.getters.isUserLoggedIn).toEqual(false)
    })
    it('should resolve to false, letting the user as is', async () => {
      axios.delete = jest.fn().mockRejectedValueOnce(undefined)
      expect.assertions(4)
      expect(store.getters.getOwnerUuid).toEqual('ouuid')
      const res = await store.dispatch('logoutUser')
      expect(res).toEqual(false)
      expect(store.getters.getOwnerUuid).toEqual('ouuid')
      expect(store.getters.isUserLoggedIn).toEqual(true)
    })
  })

  describe('fetchUser', () => {
    beforeEach(() => {
      store.commit('setUser', { ownerUuid: undefined, token: undefined })
    })
    it('should resolve and user ownerUuid be ouuid', async () => {
      axios.get = jest.fn().mockResolvedValueOnce({ data: { owner_uuid: 'ouuid', token: 'token' } })
      expect.assertions(4)
      expect(store.getters.getOwnerUuid).toEqual(undefined)
      const res = await store.dispatch('fetchUser')
      expect(res).toEqual(true)
      expect(store.getters.getOwnerUuid).toEqual('ouuid')
      expect(store.getters.isUserLoggedIn).toEqual(true)
    })
    it('should resolve to false, letting the user undefined', async () => {
      axios.get = jest.fn().mockResolvedValueOnce({ data: {} })
      expect.assertions(4)
      expect(store.getters.getOwnerUuid).toEqual(undefined)
      const res = await store.dispatch('fetchUser')
      expect(res).toEqual(false)
      expect(store.getters.getOwnerUuid).toEqual(undefined)
      expect(store.getters.isUserLoggedIn).toEqual(false)
    })
    it('should reject to false, letting the user undefined', async () => {
      axios.get = jest.fn().mockRejectedValue(undefined)
      expect.assertions(4)
      expect(store.getters.getOwnerUuid).toEqual(undefined)
      const res = await store.dispatch('fetchUser')
      expect(res).toEqual(false)
      expect(store.getters.getOwnerUuid).toEqual(undefined)
      expect(store.getters.isUserLoggedIn).toEqual(false)
    })
  })
})
