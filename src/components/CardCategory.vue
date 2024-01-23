<script setup>
import { reactive, onMounted, onUnmounted, defineProps } from 'vue';

const item = reactive({
  count: 0,
});

const onResize = () => {
  if (window.innerWidth > 1000) {
    item.count = 7;
  } else {
    item.count = 3;
  }
};

// useEffect
onMounted(() => {
  window.addEventListener('resize', onResize);
  onResize();
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});

const props = defineProps({
  category: String,
  products: Array,
});
</script>

<template>
  <div class="card-wrapper">
    <div class="container">
      <div class="row">
        <span class="d-block d-sm-none mobile-category-text">{{
          category
        }}</span>
        <div class="left-card text-card">{{ category }}</div>
        <div class="right-side">
          <div class="grid-container">
            <div v-for="product in products" class="grid-item">
              <div class="image-wrapper">
                <img
                  :src="`src/assets/${product.img}`"
                  class="thumbnail-image"
                />
              </div>
              <p class="thumbnail-name">{{ product.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left-card {
  background-color: #ecebf8;
  border-radius: 20px;
  position: absolute;
  z-index: 0;
  width: 321px;
  height: 352px;
}

.text-card {
  color: #252262;
  font: normal normal 900 22px/26px Poppins, serif;
  display: flex;
  padding: 16px 123px 16px 16px;
  align-items: center;
}
.right-side {
  padding-left: 500px;
  padding-top: 35px;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 60%;
}

.grid-item {
  text-align: center;
}

.image-wrapper {
  border-radius: 20px;
  margin: 0 15px;
  box-shadow: 3px 3px 6px rgba(14, 40, 52, 0.14902);
  background-color: white;
}

.grid-item img {
  width: 80px;
  height: 80px;
}

.thumbnail-image,
.thumbnail-name {
  cursor: pointer;
}
.grid-item p {
  margin: 10px 0px 0;
}

@media screen and (max-width: 1023px) {
  /* Tablet and smaller desktop styles */
}

@media screen and (max-width: 767px) {
  /* Mobile styles */
  .left-card {
    display: none;
  }
  .right-side {
    display: flex;
    padding: 20px 8px;
    align-items: center;
  }

  .mobile-category-text {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
