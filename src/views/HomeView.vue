<script setup>
import CardSlider from '../components/CardSlider.vue';
import CardCategory from '../components/CardCategory.vue';
import DataProps from '../../data/constants.js';
</script>

<template>
  <main>
    <div class="home-wrapper">
      <div class="card-container">
        <CardSlider
          category="Trending Items"
          :products="DataProps.trending_items"
        />
        <CardSlider
          category="New Products"
          :products="DataProps.new_products"
        />
        <CardCategory
          category="Search By Categories"
          :products="DataProps.categories"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.home-wrapper {
  margin: 104px 0px 58px 174px;
}

.card-container {
  display: flex;
  flex-direction: column;
  gap: 58px;
}

@media screen and (max-width: 1023px) {
  /* Tablet and smaller desktop styles */
}

@media screen and (max-width: 767px) {
  /* Mobile styles */
  .home-wrapper {
    margin: 60px 0px 58px 0px;
  }

  .card-container {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
}
</style>
