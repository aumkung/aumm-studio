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
body {
  min-height: 100vh;
  background-color: #376194;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  height: 100vh;
}
#nav {
  // padding: 3rem 0;
  // text-align: center;
  @media (min-width: 1024px) {
    // padding: 4rem;
    // text-align: right;
  }
    position: absolute;
    top: 0;
    right: 0;
    padding: 4em 6em 1em 1em;
  a {
    font-weight: bold;
    color: #ffffff;
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
  text-align: center;
  margin-top: 6em;
}
.content-wraper {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #fff;
  max-width: 1024px;
  margin: 0 auto;
  padding: 5rem 0;
  position: relative;
  .header {
    position: absolute;
    top: 0;
    height: 80px;
    width: 100%;
    background-color: #416b9e;
    border-top-left-radius: 19px;
    border-top-right-radius: 19px;
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.1);
  }
}
</style>
