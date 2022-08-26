<template>
  <button
    type="button"
    class="hamburger"
    :class="{ active: burgerMenu }"
    @click.prevent="hamburgerMenu"
  >
    <span class="line"></span>
    <span class="line"></span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      burgerMenu: false,
    };
  },
  methods: {
    hamburgerMenu() {
      this.burgerMenu = !this.burgerMenu;
    },
  },
};
</script>

<style lang="scss">
.hamburger {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0 10px;
}
.hamburger .line {
  display: none;
  width: 22px;
  height: 1px;
  background-color: #000000;
  margin-block: 8px;
  transition: transform 0.5s;
  opacity: 0.25s;
  @media (max-width: 600px) {
    & {
      display: block;
    }
  }
}
.hamburger.active .line:nth-child(1) {
  transform: translateY(0) rotate(45deg);
}
.hamburger.active .line:nth-child(2) {
  transform: translateY(-9px) rotate(-45deg);
}
</style>