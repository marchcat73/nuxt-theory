<template>
  <div>
    <h1>{{user.name}}</h1>
    <hr>
    <b>{{user.email}}</b>
  </div>
</template>

<script>
export default {
  validate({params}) {
    console.log(params)
    return /^\d+$/.test(params.id)
  },
  async asyncData({store, params, error}) {
    try {
      const user = await store.dispatch('users/fetchUserById', params.id)
      return {user}
    } catch (e) {
      error(e)
    }
  }
}
</script>

