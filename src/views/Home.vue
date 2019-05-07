<template>
  <div class="home">
    <img class="logo" alt="Profile logo" src="../assets/profile.jpg">
    <hello-component></hello-component>
  </div>
</template>
<script>
import HelloComponent from '@/components/Hello.vue'

export default {
  name: 'home',
  components: {
    HelloComponent
  }
}
</script>

<style lang="scss" scoped>
  .logo {
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 250px;
    border-radius: 50%;
    position: relative;
    margin-top: -215px;
    @media (min-width: 768px) {
      max-width: 350px;
    }
  }
</style>
