<template>
  <header class="header">
    <div class="header_container container" @mouseout="hoverOut()">
      <div class="header_langs">
        <div class="header_lang lang_active" @mouseover="hoverIn()">
          <a class="header_lang__link">
            <img src="../img/👅.svg" />
          </a>
        </div>
        <div
          class="header_lang"
          :class="{ active: isActive }"
          :style="{ display: displayActive }"
        >
          <a class="header_lang__link"><span>RU</span></a>
        </div>
        <div
          class="header_lang"
          :class="{ active: isActive }"
          :style="{ display: displayActive }"
        >
          <a class="header_lang__link"> <span>UA</span></a>
        </div>
      </div>
      <router-link :to="{ name: 'home' }" class="header_logo">
        <a href="#" class="header_logo__link">
          <svg>
            <use xlink:href="../img/sprite.svg#icon1"></use>
          </svg>
        </a>
      </router-link>
      <BurgerMenu></BurgerMenu>
    </div>
  </header>
</template>

<script>
import BurgerMenu from "./BurgerMenu.vue";
export default {
  components: {
    BurgerMenu,
  },
  data() {
    return {
      isActive: false,
      displayActive: "none",
      burgerMenu: false,
    };
  },
  methods: {
    hamburgerMenu() {
      this.burgerMenu = !this.burgerMenu;
    },
    hoverIn() {
      this.isActive = true;
      this.displayActive = "flex";
    },
    hoverOut() {
      this.isActive = false;
      this.displayActive = "none";
    },
  },
};
</script>

<style lang="scss">
.header_lang.lang_active {
  transition: all 5s ease-in-out !important;
}
.active {
  transition: all 5s ease-in-out !important;
}
.container {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
}
.header {
  &_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    padding-bottom: 0;
  }
  &_langs {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  &_lang {
    width: 38px;
    height: 38px;
    border: 1px solid rgba($color: #ffffff, $alpha: 0.12);
    border-radius: 50%;
    padding: 10px 11px 7px 9px;
    &__link {
      display: inline-block;
      //padding: 10px 11px 7px 12px;
      cursor: pointer;
      & > img {
        width: 15px;
        height: 21px;
        object-fit: cover;
      }
    }
  }
  &_logo {
    max-width: 83px;
    width: 100%;
    height: 46px;
    &__link {
      display: inline-block;
      height: 100%;
      & > svg {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 2s ease-in-out;
        fill: white;
        &:hover {
          fill: black;
        }
      }
    }
  }
}
</style>