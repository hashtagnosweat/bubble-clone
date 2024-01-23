<script setup>
import Header from './components/Header.vue';
import HomeView from './views/HomeView.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <a href="#" class="scrolltop" id="scroll-top">
    <i class="bx bx-up-arrow-alt scrolltop__icon btn btn-danger"></i>
  </a>

  <Header />
  <HomeView />
  <Footer />
</template>

<style scoped></style>
