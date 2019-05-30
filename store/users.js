export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async fetchUsers({commit}) {
    try {
      // const users = await this.$axios.$get('http://jsonplaceholder.typicode.com/users')
      const users = await fetch(`http://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
      commit('setUsers', users)
    } catch (e) {
      throw e
    }
    
  },

  async fetchUserById({}, userId) {
    try {
      return await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      // .then(json => console.log(json))
    } catch (e) {
      throw e
    }

  }
}

export const getters = {
  users: state => state.users
}