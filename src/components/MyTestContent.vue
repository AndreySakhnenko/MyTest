<template>
  <div class="hero_container container">
    <div class="hero_color"></div>
    <div class="hero_content">
      <div class="hero_content__blocks">
        <router-link :to="{ name: 'test' }">
          <p
            class="hero_text hero_text__left"
            :class="{ active: burgerMenu }"
            v-show="!burgerMenu"
          >
            where?
          </p>
        </router-link>
        <div class="hero_block">
          <h2 class="hero_title">
            <span class="hero_title__right">FULL-CYCLE</span>
          </h2>
          <h2 class="hero_title">
            <span class="hero_title__left">EVENT AGENCY</span>
          </h2>
        </div>
        <router-link :to="{ name: 'test' }">
          <p class="hero_text hero_text__right">what?</p>
        </router-link>
      </div>
      <div class="hero_content__image">
        <img src="../img/showreelshowreelshowreel.svg" />
        <div class="elips"></div>
      </div>
    </div>
    <router-link :to="{ name: 'test' }">
      <p class="hero_text text_bottom hero_text__bottom">who?</p>
    </router-link>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.elips {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: black;
  position: absolute;
  left: 88%;
}
.hero {
  &_container {
    padding: 72px 19px;
    text-align: center;
    position: relative;
  }
  &_content {
    position: relative;
    &__blocks {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 60px;
      padding-top: 176px;
    }
    &__image {
      max-width: 500px;
      width: 100%;
      margin: 0 auto 126px;
      display: flex;
      justify-content: end;
      position: relative;
      text-align: center;
      align-items: center;
      & > img {
        transition: all 3s ease-in;
        cursor: pointer;
        &:hover {
          transform: rotate(-90deg);
        }
      }
    }
  }
  &_color {
    width: 580px;
    height: 580px;
    background-color: #ffcb46;
    filter: blur(76px);
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    @media screen and (max-width: 1024px) {
      width: 482px;
      height: 482px;
    }
    @media screen and (max-width: 768px) {
      width: 482px;
      height: 482px;
    }
    @media screen and (max-width: 375px) {
      width: 294px;
      height: 294px;
    }
  }
  &_block {
    max-width: 1023px;
    width: 100%;
    min-height: 180px;
    transition: all 5s ease-in;
    position: relative;
    @media screen and (max-width: 1024px) {
      max-width: 724px;
    }
    @media screen and (max-width: 768px) {
      max-width: 568px;
    }
    @media screen and (max-width: 375px) {
      max-width: 333px;
    }
  }
  &_title {
    font-weight: 700;
    font-size: 82px;
    line-height: 110%;
    text-align: center;
    text-transform: uppercase;
    color: #373737;
    display: block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    font-family: " Grtsk Giga";

    @media screen and (max-width: 1024px) {
      font-size: 58px;
      line-height: 64px;
    }
    @media screen and (max-width: 768px) {
      font-size: 34px;
      line-height: 37px;
    }
    @media screen and (max-width: 375px) {
      font-size: 34px;
      line-height: 37px;
    }
    &__right {
      display: inline-block;
      padding-left: 100%;
      animation: scroll-right 15s infinite linear;
    }
    &__left {
      display: inline-block;
      padding-left: 100%;
      animation: scroll-left 15s infinite linear;
    }
  }
  &_text {
    font-size: 16px;
    line-height: 140%;
    color: #373737;
    cursor: pointer;
    display: inline-block;
    transition: all 0.5s ease-out;
    font-family: " Grtsk Giga";
    &__left {
      transform: rotate(-90deg);
      &::after {
        position: absolute;
        writing-mode: vertical-rl;
        left: 0;
        width: 0;
        bottom: 0;
        height: 2px;
        background-color: white;
        content: "";
        transition: width 0.3s ease-out;
      }
      &:hover {
        color: white;
      }
      &:hover::after {
        writing-mode: vertical-rl;
        width: 100%;
      }
      &:focus:after {
        writing-mode: vertical-rl;
        width: 100%;
      }
    }
    &__right {
      transform: rotate(90deg);
      &::after {
        position: absolute;
        writing-mode: vertical-rl;
        left: 0;
        width: 0;
        bottom: 0;
        height: 2px;
        background-color: white;
        content: "";
        transition: width 0.3s ease-out;
      }
      &:hover {
        color: white;
      }
      &:hover::after {
        writing-mode: vertical-rl;
        width: 100%;
      }
      &:focus:after {
        writing-mode: vertical-rl;
        width: 100%;
      }
    }
    &__bottom {
      position: relative;
      &::after {
        position: absolute;
        left: 0;
        width: 0;
        bottom: 0;
        height: 2px;
        background-color: white;
        content: "";
        transition: all 0.5s ease-out;
      }
      &:hover {
        color: white;
      }
      &:hover::after {
        width: 100%;
      }
      &:focus:after {
        width: 100%;
      }
    }
  }
}
@keyframes scroll-right {
  0% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes scroll-left {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>