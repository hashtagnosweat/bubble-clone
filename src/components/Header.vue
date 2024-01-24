<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isPopupContainerVisible = ref(false);
const isPopupSearchVisible = ref(false);

const showPopupCategory = () => {
  isPopupContainerVisible.value = true;
};

const hidePopupCategory = () => {
  isPopupContainerVisible.value = false;
};

const showPopupSearch = () => {
  isPopupSearchVisible.value = true;
};

const hidePopupSearch = () => {
  isPopupSearchVisible.value = false;
};
</script>

<template>
  <header class="clearfix fixed-header">
    <nav class="navbar navbar-expand-lg p-0">
      <div class="main-header">
        <a class="navbar-brand" href="#">
          <img src="/assets/bubble-store.svg" alt="Icon" width="146" />
        </a>

        <ul class="d-none d-sm-block navbar-nav mr-auto">
          <li class="nav-item">
            <a
              class="nav-link text-white"
              @mouseover="showPopupCategory()"
              href="#"
              >Categories</a
            >
          </li>
        </ul>

        <form
          class="d-none d-sm-block ps-5 pe-3 my-2 my-lg-0"
          @click="showPopupSearch()"
        >
          <input
            class="search-input ps-4 mr-sm-2"
            type="search"
            placeholder="Search something..."
          />
        </form>

        <ul class="navbar-nav pe-md-3 ml-auto">
          <li class="d-block d-sm-none nav-item">
            <a class="nav-link" href="#">
              <img
                src="/assets/navbar-search.svg"
                alt="Icon Search"
                width="26"
                height="26"
              />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img
                src="/assets/navbar-cart.svg"
                alt="Icon Cart"
                width="26"
                height="26"
              />
            </a>
          </li>
          <li class="d-none d-sm-block nav-item">
            <a class="nav-link" href="#">
              <img
                src="/assets/navbar-favorite.svg"
                alt="Icon Favorite"
                width="26"
                height="26"
              />
            </a>
          </li>
        </ul>

        <button
          class="d-none d-sm-block btn login-btn my-2 my-sm-0 fw-semibold"
          type="submit"
        >
          Login
        </button>
      </div>
    </nav>

    <div class="popup-search" v-if="isPopupSearchVisible">
      <div class="popup-search-wrapper">
        <div class="parent-search-container">
          <p class="popup-search-title">Top Searches</p>
          <div class="popup-results">
            <ul>
              <li>Lego</li>
              <li>Slime</li>
              <li>Roblox</li>
              <li>Pokemon</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div
    class="overlay"
    v-if="isPopupContainerVisible || isPopupSearchVisible"
    @mouseover="hidePopupCategory()"
    @click="hidePopupSearch()"
  ></div>
  <div class="popup-container" v-if="isPopupContainerVisible">
    <div class="popup-container-wrapper">
      <div class="parent-category-container">
        <div class="parent-category-items"><span>Basketball</span></div>
        <div class="parent-category-items"><span>Nintendo Game</span></div>
        <div class="parent-category-items">
          <span>Food, Snacks and Chips</span>
        </div>
        <div class="parent-category-items"><span>BTS Merchandise</span></div>
        <div class="parent-category-items"><span>Beyblade</span></div>
        <div class="parent-category-items"><span>Pencils</span></div>
        <div class="parent-category-items"><span>Bags</span></div>
        <div class="parent-category-items"><span>Pencil Cases</span></div>
        <div class="parent-category-items"><span>Lego</span></div>
        <div class="parent-category-items"><span>Pokemon</span></div>
        <div class="parent-category-items">
          <span>Harry Potter Merchandise</span>
        </div>
        <div class="parent-category-items"><span>Gift Cards</span></div>
        <div class="parent-category-items"><span>Roblox</span></div>
        <div class="parent-category-items"><span>Notebooks</span></div>
        <div class="parent-category-items">
          <span>Nerf Guns and Accessories</span>
        </div>
        <div class="parent-category-items"><span>Squishies</span></div>
        <div class="parent-category-items">
          <span>Blackpink Merchandise</span>
        </div>
        <div class="parent-category-items">
          <span>Watches and Smartwatches</span>
        </div>
        <div class="parent-category-items"><span>Board Games</span></div>
        <div class="parent-category-items"><span>Slime</span></div>
      </div>

      <div class="list-category-container">
        <p class="category-title fw-bold">Basketball</p>
        <div class="category-list-items">
          <div class="category-container-items"><span>Hoop</span></div>
          <div class="category-container-items"><span>Shoes</span></div>
          <div class="category-container-items"><span>Jersey</span></div>
          <div class="category-container-items"><span>Pump</span></div>
          <div class="category-container-items"><span>Net</span></div>
          <div class="category-container-items"><span>Bag</span></div>
          <div class="category-container-items"><span>Training Cone</span></div>
          <div class="category-container-items"><span>Rebounder</span></div>
          <div class="category-container-items">
            <span>Shooting Sleeve</span>
          </div>
          <div class="category-container-items">
            <span>Training Dribble Gloves</span>
          </div>
          <div class="category-container-items"><span>Mouthguard</span></div>
          <div class="category-container-items"><span>Knee Pads</span></div>
          <div class="category-container-items">
            <span>Training Weighted Ball</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fixed-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.navbar-brand {
  display: flex;
  align-items: center;
}
.main-header {
  background-color: #204999;
  display: flex;
  height: 80px;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.search-input {
  width: 664px;
  height: 32px;
  border-radius: 10px;
  border: 2px solid #fafafa;
}

.login-btn {
  background: #f8ffff 0 0 padding-box;
  border-radius: 15px;
  padding: 0 16px;
  height: 32px;
  cursor: pointer;
}

.popup-search {
  position: fixed;
  top: 70px;
  left: 53.3%;
  transform: translate(-50%);
  width: 670px;
  height: auto;
  background-color: #fafafa;
  display: flex;
  z-index: 99;
  border-radius: 15px;
}

.popup-search-wrapper {
  display: flex;
  gap: 20px;
  padding: 25px 30px;
  width: 100%;
}

.popup-search-title {
  font: normal normal bold 20px/26px Poppins, serif;
  color: #252262;
}

.popup-results {
  font: normal normal normal 16px/26px Poppins, serif;
  color: #252262;
}

.popup-results ul li {
  padding: 10px 0;
}

.popup-container {
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translate(-50%);
  width: 1200px;
  height: 550px;
  background-color: #fafafa;
  display: flex;
  z-index: 99;
  border-radius: 15px;
}

.popup-container-wrapper {
  display: flex;
  gap: 20px;
  padding: 25px 50px;
  width: 100%;
}

.parent-category-container {
  max-height: 550px;
  width: 350px;
  overflow-y: auto;
}
.parent-category-items {
  padding-top: 10px;
}

.list-category-container {
  padding: 10px 20px;
}
.category-list-items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.category-title {
  color: #262262;
}

.category-container-items {
  width: 100%;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 98;
}

@media screen and (max-width: 1023px) {
  /* Tablet and smaller desktop styles */
}

@media screen and (max-width: 767px) {
  /* Mobile styles */

  .fixed-header {
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1000;
  }

  .main-header {
    height: 50px;
    padding: 0 15px;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-nav {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
}
</style>
