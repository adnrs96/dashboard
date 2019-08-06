import axios from 'axios'

const state = {
  ownerUuid: undefined,
  token: undefined
}

const getters = {
  getOwnerUuid (state: any) {
    return state.ownerUuid
  },
  getToken (state: any) {
    return state.token
  },
  isUserLoggedIn (state: any) {
    return state.ownerUuid !== undefined && state.token !== undefined
  }
}

const mutations = {
  setUser (state: any, { ownerUuid, token }: { ownerUuid: string, token: string }) {
    state.ownerUuid = ownerUuid
    state.token = token
  }
}

const actions = {
  fetchUser ({ commit }: { commit: Function }) {
    return new Promise(resolve => {
      axios.get(`${process.env.VUE_APP_API_BASE_URL}user`, { withCredentials: true }).then((res) => {
        if (res.data.owner_uuid && res.data.token) {
          commit('setUser', { ownerUuid: res.data.owner_uuid, token: res.data.token })
          resolve(true)
        } else {
          commit('setUser', { ownerUuid: undefined, token: undefined })
          resolve(false)
        }
      }).catch(() => resolve(false))
    })
  },
  logoutUser ({ commit }: { commit: Function }) {
    return new Promise(resolve => {
      axios.delete(`${process.env.VUE_APP_API_BASE_URL}user`, { withCredentials: true }).then((res) => {
        commit('setUser', { ownerUuid: undefined, token: undefined })
        resolve(true)
      }).catch(() => resolve(false))
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
