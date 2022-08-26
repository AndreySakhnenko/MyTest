<template>
  <HeaderTest
    :tabs="burgerMenu"
    :defPage="hamburgerMenu()"
  ></HeaderTest>
  <main>
    <transition :name="transitionName">
      <router-view v-slot="{ Component, route }">
        <transition
          :enter-active-class="route.meta.enterClass"
          :leave-active-class="route.meta.leaveClass"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </transition>
  </main>
</template>
<script>
import HeaderTest from "./components/HeaderTest.vue";
export default {
  components: {
    HeaderTest,
  },
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #e5e5e5;
  min-height: 882px;
}
.fade_enter-from,
.fade_leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in;
}
</style>