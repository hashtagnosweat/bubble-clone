<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref, reactive, onMounted, onUnmounted, defineProps } from 'vue';

const item = reactive({
  spaceBetween: 0,
  slidesPerView: 6,
});

const isSwiped = ref(false);

const onSlideChange = (swiper) => {
  const slideIndex = swiper.activeIndex;

  if (slideIndex > 0) {
    isSwiped.value = true;
  } else {
    isSwiped.value = false;
  }
};

const onResize = () => {
  if (window.innerWidth > 767) {
    item.spaceBetween = 50;
    item.slidesPerView = 6;
  } else {
    item.spaceBetween = -270;
    item.slidesPerView = 1;
  }
};

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
      <div class="slider-container">
        <div class="row">
          <span class="d-none d-sm-block is-swiped-text">{{ category }}</span>
          <span class="d-sm-none mobile-category-text">{{ category }}</span>
          <div class="left-card text-card" :class="{ 'd-none': isSwiped }">
            {{ category }}
          </div>
          <div class="product-swiper-container">
            <Swiper
              :slides-per-view="item.slidesPerView"
              :space-between="item.spaceBetween"
              initialSlide="0"
              @slideChange="onSlideChange"
            >
              <SwiperSlide
                v-for="(product, i) in products"
                :key="i"
                class="swiper-item"
              >
                <div class="card">
                  <img
                    :src="`/assets/products/${product.img}`"
                    class="card-image"
                  />
                  <div class="card-content">
                    <p class="card-title">{{ product.title }}</p>
                    <div class="price-wrapper">
                      <div class="actual-price">
                        <img
                          src="/assets/actual-price.svg"
                          alt=""
                          class="actual-price-img"
                        />
                        <p class="text-actual-price">
                          {{ product.actual_price }}
                        </p>
                      </div>
                      <div class="discounted-price">
                        <img
                          src="/assets/discounted-price.svg"
                          alt=""
                          class="discounted-price-img"
                        />
                        <p class="text-discounted-price">
                          {{ product.discounted_price }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
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
  display: flex;
  font: normal normal 900 22px/26px Poppins, serif;

  padding: 16px 123px 16px 16px;
  align-items: center;
}

.product-swiper-container {
  padding-left: 215px;
  padding-top: 35px;
  display: flex;
  align-items: center;
}

.is-swiped-text {
  position: absolute;
  color: #252262;
  font: normal normal 900 22px/26px Poppins, serif;
  padding-bottom: 20px;
}

.card {
  min-width: 180px;
  max-height: 283px;
  border-radius: 15px;
  cursor: pointer;
}

.card-image {
  border-radius: 15px 15px 0 0;
  object-fit: cover;
  width: 100%;
  display: block;
}
.card-content .card-title {
  font: normal normal 400 12px/26px Poppins, serif;
}

.card-content .text-actual-price,
.text-discounted-price {
  font: normal normal bold 13px/26px Poppins, serif;
}
.price-wrapper {
  display: flex;
  padding-left: 10px;
  gap: 20px;
}

.actual-price,
.discounted-price {
  display: flex;
}
.text-actual-price,
.text-discounted-price {
  padding-left: 10px;
  font-weight: bold;
}

.text-actual-price {
  text-decoration: line-through;
  color: #aab0b0;
}

.actual-price-img {
  height: 16px;
  width: 16px;
}
.discounted-price-img {
  height: 24px;
  width: 24px;
}

.text-discounted-price {
  color: #2aa7df;
  padding-bottom: 0;
  margin: 0px;
}

.card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 10px 16px 0 16px;
  max-height: 5.7em;
}

.swiper {
  width: 100%;
  overflow: visible !important;
}

@media screen and (max-width: 1023px) {
  /* Tablet and smaller desktop styles */
}

@media screen and (max-width: 767px) {
  /* Mobile styles */
  .left-card {
    display: none;
  }
  .product-swiper-container {
    width: auto;
    padding-left: 15px;
    padding-top: 35px;
    display: flex;
    align-items: center;
  }

  .card {
    max-width: 180px;
    max-height: 283px;
    border-radius: 15px;
    margin-top: -20px;
    overflow: hidden;
  }

  .card-image {
    border-radius: 15px 15px 0 0;
    object-fit: cover;
    width: 180px;
    display: block;
  }

  .mobile-category-text {
    color: #252262;
    font: normal normal 900 16px/26px Poppins, serif;
  }
}
</style>
