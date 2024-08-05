<template>
  <div id="app">
    <Header />
    <div id="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/HeaderComponent.vue'; 
import Footer from './components/FooterComponent.vue';

export default {
  components: {
    Header,
    Footer
  },
};
</script>


