<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref, reactive, onMounted, onUnmounted, defineProps } from 'vue';

const item = reactive({
  slidesPerView: 2,
  spaceBetween: -20,
});

const isSwiped = ref(false);

const onSlideChange = (swiper) => {
  const slideIndex = swiper.activeIndex;

  isSwiped.value = slideIndex > 0 ? true : false;
};

onMounted(() => {
  window.addEventListener('resize', onResize);
  onResize();
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});

const onResize = () => {
  const width = window.innerWidth;

  if (width > 1024) {
    item.spaceBetween = 120;
    item.slidesPerView = 6;
  } else if (width > 769) {
    item.spaceBetween = 10;
    item.slidesPerView = 3;
  } else if (width > 481) {
    item.spaceBetween = 20;
    item.slidesPerView = 3;
  }
};

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
                class="swiper-item w-fit"
              >
                <div class="shadow item-card">
                  <img
                    :src="`/assets/products/${product.img}`"
                    class="card-image"
                  />
                  <div class="card-content">
                    <span class="card-title">{{ product.title }}</span>
                    <div class="price-wrapper">
                      <div class="actual-price">
                        <img
                          src="/assets/actual-price.svg"
                          alt=""
                          class="actual-price-img"
                        />
                        <span class="text-actual-price">
                          {{ product.actual_price }}
                        </span>
                      </div>
                      <div class="discounted-price">
                        <img
                          src="/assets/discounted-price.svg"
                          alt=""
                          class="discounted-price-img"
                        />
                        <span class="text-discounted-price">
                          {{ product.discounted_price }}
                        </span>
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
.is-swiped-text {
  position: absolute;
  color: #252262;
  font: normal normal 900 22px/26px Poppins, serif;
  padding-bottom: 20px;
}

.product-swiper-container {
  padding-left: 215px;
  padding-top: 35px;
  display: flex;
  align-items: center;
}
.item-card {
  width: 179px;
  height: 283px;
  border-radius: 16px;
  padding-bottom: 2px;
  cursor: pointer;
  background-color: white;
}

.card-image {
  border-radius: 16px 16px 0 0;
  object-fit: cover;
  width: 100%;
  display: block;
}
.card-content .card-title {
  font: normal normal 400 12px/22px Poppins, serif;
}

.card-content .text-actual-price,
.text-discounted-price {
  font: normal normal bold 13px/18px Poppins, serif;
}
.price-wrapper {
  display: flex;
  padding: 0 10px;
  gap: 10px;
}

.actual-price,
.discounted-price {
  display: flex;
  align-items: center;
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
}

.card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 10px 16px 8px 16px;
  max-height: 5em;
  margin-bottom: 5px;
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
    display: flex;
    width: 100%;
    padding-left: 16px;
    margin-top: 1px;
    align-items: center;
  }

  .swiper-slide {
    box-sizing: border-box;
  }

  .item-card {
    width: 140px;
    max-height: 213px;
    border-radius: 16px;
    margin-top: -20px;
    overflow: hidden;
  }

  .card-image {
    border-radius: 15px 15px 0 0;
    object-fit: cover;
    width: 140px;
    height: 140px;
    display: block;
  }

  .mobile-category-text {
    color: #252262;
    font-weight: 500;
    font-size: 16px;
    margin-left: 5px;
  }

  .card-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding: 5px 10px;
    margin-bottom: 5px;
    max-height: 4em;
  }

  .card-content .card-title {
    font-size: 10px;
    line-height: 1.6;
    font-weight: 400;
  }

  .text-actual-price,
  .text-discounted-price {
    padding-left: 4px;
    font-weight: bold;
  }

  .discounted-price-img {
    height: 16px;
    width: 16px;
  }
}
</style>
