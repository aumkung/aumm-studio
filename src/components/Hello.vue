<template>
  <div class="hello">
    <h1>{{ $store.getters.getFullname }}</h1>
    <p>{{ $store.getters.getPosition }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  padding-top: 2rem;
  p {
    font-weight: bold;
  }
}
</style>
