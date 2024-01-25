<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
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

const chunkSize = 2;
const rows = [];
for (let i = 0; i < props.products.length; i += chunkSize) {
  rows.push(props.products.slice(i, i + chunkSize));
}

console.log(rows);
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
              <div class="mb-2 image-wrapper">
                <img :src="`/assets/${product.img}`" class="thumbnail-image" />
              </div>
              <span class="thumbnail-name">{{ product.name }}</span>
            </div>
          </div>
        </div>

        <div class="d-block d-sm-none mobile-swiper-container">
          <Swiper :slides-per-view="3" :space-between="0">
            <SwiperSlide v-for="(row, index) in rows" :key="index">
              <div class="mobile-category">
                <div class="mobile-grid-container">
                  <div
                    v-for="product in row"
                    :key="idx"
                    class="mobile-grid-item"
                  >
                    <div class="mb-2 image-wrapper">
                      <img
                        :src="`/assets/${product.img}`"
                        class="thumbnail-image"
                      />
                    </div>
                    <span class="thumbnail-name">{{ product.name }}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
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

.thumbnail-image {
  width: 80px;
  height: 80px;
}

.thumbnail-image,
.thumbnail-name {
  cursor: pointer;
}
.thumbnail-name {
  margin: 10px 0;
  color: #262262;
  font-weight: 500;
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
    display: none;
    padding: 20px 8px;
    align-items: center;
  }

  .mobile-category-text {
    color: #252262;
    font-weight: 500;
    font-size: 16px;
    margin-left: 5px;
  }

  .swiper {
    width: 100%;
    overflow: visible !important;
  }

  .image-wrapper {
    height: 80px;
    width: 80px;
    margin: 0 15px;
  }

  .mobile-grid-container {
    padding-top: 15px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }

  .mobile-grid-item {
    text-align: center;
    height: 138px;
  }

  .mobile-grid-item img {
    width: 80px;
    height: 80px;
  }

  .thumbnail-name {
    margin: 10px 0px;
    font-size: 14px;
    color: #262262;
    font-weight: bold;
  }
}
</style>
