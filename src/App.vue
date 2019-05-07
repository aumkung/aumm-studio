<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="container">
      <div class="content">
        <div class="content-wraper">
          <div class="header"></div>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #3EA4F2;
  height: 100vh;
}
#nav {
  padding: 3rem 0;
  text-align: center;
  @media (min-width: 1024px) {
    padding: 4rem;
    text-align: right;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 50px;
    text-decoration: none;
    &.router-link-exact-active {
      color: #fff;
    }
    &:hover {
      color: #fff;
    }
  }
}
.container {
    width: 100%;
}
.content {
    padding: 105px 0;
    margin: 55px auto;
}
.content-wraper {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  // box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  max-width: 1024px;
  margin: 0 auto;
  padding: 5rem 0;
  position: relative;
  .header {
    position: absolute;
    content: '';
    top: 0;
    height: 80px;
    width: 100%;
    background-color: #5BB1F3;
    border-top-left-radius: 19px;
    border-top-right-radius: 19px;
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.1);
  }
}
</style>
