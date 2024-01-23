<script setup>
import FooterData from '../../data/constants';
import { ref, onMounted, onUnmounted } from 'vue';

const isMobile = ref(false);

const onResize = () => {
  if (window.innerWidth < 767) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', onResize);
  onResize();
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});

const footer_categories = FooterData.footer_categories;
const footer_support = FooterData.footer_support;
console.log(footer_support);

const displayedCategories = () => {
  const limit = isMobile.value ? 10 : footer_categories.length;

  return footer_categories.slice(0, limit);
};
</script>

<template>
  <footer class="footer">
    <div class="footer-circle">
      <img src="../assets/footer-circle.svg" alt="" />
    </div>
    <div class="footer-circle-small">
      <img src="../assets/footer-circle-small.svg" alt="" width="100" />
    </div>
    <div class="footer-container">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="../assets/bubble-store.svg" alt="" />
        </div>
        <p class="copyright pt-3 text-white">
          Copyright © 2024 Geniebook. All Rights Reserved
        </p>
      </div>

      <div class="content-container">
        <div class="left-container">
          <div class="text-white">
            <p class="content-title">Popular Categories</p>
          </div>
          <div class="category-container">
            <div
              v-for="(category, index) in displayedCategories()"
              :key="index"
              class="category-item"
            >
              <ul>
                <li>
                  {{ category }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="text-white">
            <p class="content-title">Support & Help Center</p>
          </div>
          <div class="support-container">
            <div
              v-for="(item, index) in footer_support"
              :key="index"
              class="support-item"
            >
              <ul>
                <li>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="d-block d-sm-none mobile-footer-brand">
        <div class="mobile-footer-logo">
          <img src="../assets/bubble-store.svg" alt="" width="160" />
        </div>
        <p class="mobile-copyright pt-1 text-white">
          Copyright © 2024 Geniebook. All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer {
  background-color: #204999;
  width: 100%;
  height: 360px;
  display: flex;
  position: relative;
  bottom: 0;
}

.footer-container {
  margin: 32px 190px;
  width: 100%;
}

.copyright {
  font-size: 12px;
}

.category-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.category-item {
  color: white;
  padding: 2px 60px 0 0;
  font-size: 16px;
}
.support-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

.support-item {
  color: white;
  padding: 2px 0;
}

.content-container {
  font-size: 14px;
  display: flex;
}

.content-title {
  color: white;
  font-size: 16px;
  font-weight: 800;
  margin: 10px 0;
}

.footer-circle {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 300px;
  overflow: hidden;
}

.footer-circle-small {
  display: none;
}

@media screen and (max-width: 1023px) {
  /* Tablet and smaller desktop styles */
}

@media screen and (max-width: 767px) {
  /* Mobile styles */
  .footer {
    background-color: #204999;
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    bottom: 0;
  }

  .footer-container {
    margin: 32px 15px;
    width: 100%;
  }

  .footer-circle {
    display: none;
  }

  .footer-brand {
    display: none;
  }
  .mobile-footer-brand {
    margin: 50px 0 0 120px;
  }

  .mobile-copyright {
    font-size: 11px;
  }
  .footer-circle-small {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .category-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .category-item {
    color: white;
    padding: 10px 10px;
  }

  .right-container .content-title {
    padding-top: 40px;
    display: flex;
    justify-content: center;
  }

  .support-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .support-item {
    color: white;
    padding: 2px 0;
    width: 100%;
    margin: auto;
    justify-content: space-evenly;
    display: flex;
  }
  .content-container {
    font-size: 14px;
    display: block;
  }
}
</style>
