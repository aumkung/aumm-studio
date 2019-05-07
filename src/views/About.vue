<template>
  <div class="about">
    <div class="circle">
      <a href="https://www.linkedin.com/in/tassanai-singprom-40bb16140/" title="linkedin">
        <img class="logo-brand" src="../assets/LinkedIn.png" alt="linkedin">
      </a>
      <a href="https://github.com/aumkung" title="github">
        <img class="logo-brand" src="../assets/GitHub.png" alt="github">
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .logo-brand {
    width: 100%;
    max-width: 250px;
  }
  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    flex-direction: column-reverse;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
</style>
