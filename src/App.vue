<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
body {
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  padding: 15px 0;
  margin: 0;
  //font-family: Source Sans Pro;
  font-size: 16px;
  line-height: 20px;

  color: #3F3F3F;
}

*, *::after, *::before {
  box-sizing: border-box;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

button {
  border: none;
  box-shadow: none;
}

img {
  width: 100%;
  height: auto;
}

h1, h2, p {
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  padding: 0 15px;
}
</style>
