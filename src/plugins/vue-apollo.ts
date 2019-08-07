import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { createApolloClient, restartWebsockets } from 'vue-cli-plugin-apollo/graphql-client'
import { ApolloClient } from 'apollo-client'
import { SubscriptionClient } from 'subscriptions-transport-ws'

if (!process || process.env.NODE_ENV !== 'test') {
  Vue.use(VueApollo)
}

const AUTH_TOKEN = 'storyscript-dashboard'

const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || 'https://api.storyscript.io/graphql'
export const filesRoot = process.env.VUE_APP_FILES_ROOT || httpEndpoint.substr(0, httpEndpoint.indexOf('/graphql'))

Vue.prototype.$filesRoot = filesRoot

const defaultOptions = {
  httpEndpoint,
  wsEndpoint: process.env.VUE_APP_GRAPHQL_WS || 'ws://api.storyscript.io/graphql',
  tokenName: AUTH_TOKEN,
  persisting: false,
  websocketsOnly: false,
  ssr: true
}

export interface MyApolloClient<TCacheShape> extends ApolloClient<TCacheShape> {
  wsClient: SubscriptionClient
}

// Call this in the Vue app file
export function createProvider (options = {}) {
  // Create apollo client
  const { apolloClient, wsClient } = createApolloClient({
    ...defaultOptions,
    ...options
  })
  const mApolloClient = apolloClient as MyApolloClient<unknown>
  mApolloClient.wsClient = wsClient

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        fetchPolicy: 'cache-and-network'
      }
    },
    errorHandler (error) {
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message)
    }
  })

  return apolloProvider
}

// Manually call this when user log in
export async function onLogin (apolloClient: MyApolloClient<unknown>, token: string | undefined) {
  if (!apolloClient) return
  if (typeof localStorage !== 'undefined' && token) {
    localStorage.setItem(AUTH_TOKEN, token)
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
  try {
    await apolloClient.resetStore()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (login)', 'color: orange;', e.message)
  }
}

// Manually call this when user log out
export async function onLogout (apolloClient: MyApolloClient<unknown>) {
  if (!apolloClient) return
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(AUTH_TOKEN)
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
  try {
    await apolloClient.resetStore()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (logout)', 'color: orange;', e.message)
  }
}

export default {
  onLogin,
  onLogout
}
