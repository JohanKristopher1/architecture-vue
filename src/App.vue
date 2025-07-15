<template>
<div id="app">
  <HeaderComponents />
  <main>
    <router-view></router-view>
  </main>
  <FooterComponents />
</div>
</template>

<script>
import FooterComponents from './components/FooterComponents.vue';
import HeaderComponents from './components/HeaderComponents.vue';



export default {
  name: 'App',
  components: {HeaderComponents, FooterComponents}
}
</script>

<style>
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  color: #6C6C6C;
 }
</style>
