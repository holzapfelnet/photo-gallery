<template>
  <AppHeader />
  <main>
    <router-view/>
  </main>
  <AppFooter />
</template>


<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: "Oswald", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
}

body {
  margin: 0;
}


main {
  flex: 1;
  margin-top: 10px; /* Platz für den fixierten Header schaffen */
  padding: 1em;
  max-width: 1500px;
  width: 100%;
}
</style>
