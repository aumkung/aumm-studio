<template>
  <div class="Pm">
    <!-- <h1>{{ $store.getters.getMessage }}</h1> -->
  </div>
</template>

<script>
export default {
  name: 'Pm',
  mounted () {
      this.$store.dispatch('fetchData')
  }
}
</script>
