<template>
  <router-link :to="{ name: 'home' }" class="link_btn">
    <button class="btn">Back</button>
  </router-link>
</template>
<script>
export default {
  components: {},
};
</script>

<style lang="scss">
.link_btn{
  padding: 15px;
}
.btn{
  color: black;
  font-size: 20px;
  border: 0;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  transition: all 1s ease-in-out;
  &:hover{
    background-color: gold;
    color: blue;
  }
}
</style>