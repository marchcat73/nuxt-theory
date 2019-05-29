<template>
  <form>
    <h1>Login</h1>
    <div class="form-group">
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
      <input type="password" class="form-control">
    </div>

    <button class="btn btn-primary">Login</button>
    <br>
    <nuxt-link to="/">home</nuxt-link>
  </form>
</template>

<script>
export default {
  layout: 'empty'
}
</script>


<style scoped>
  form {
    width: 600px;
  }
</style>

