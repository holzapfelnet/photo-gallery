<template>
  <div class="header-container">
    <div class="header-left">
      <header>
        <span>Sebastian Holzapfel Photography 1234</span>
      </header>
    </div>
    <div class="header-right">
      <nav>
        <router-link to="/">Gallery</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  width: 100%;
  max-width: 1500px;
  text-align: center;
  z-index: 1000;
  font-size: 1.2rem;
  color: #555;
  font-family: 'Oswald', sans-serif;
  
  font-weight: 400;
  height: 50px;
  border-bottom: 1px solid #e1e1e1;
  margin-top: 8px;
}

.header-left {
  float: left;
  height: 100%;
  text-transform: uppercase;
  line-height: 50px;
}

.header-right {
  float: right;
  height: 100%;
  line-height: 20px;
}


nav {
  padding: 15px;
}

nav a {
  font-weight: bold;
  color: #777;
}

nav a.router-link-exact-active {
  color: #111;
}
</style>
