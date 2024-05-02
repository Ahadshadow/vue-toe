<script setup lang="ts">
import { ref, unref } from "vue";
import { useSharedTheme, Theme } from "@/composables";

const focused = ref(false);
const { theme, setTheme, themeCls } = useSharedTheme();

function removeFocus() {
  focused.value = false;
}

function toggleTheme() {
  focused.value = true;
  setTheme(unref(theme) === Theme.PRIMARY ? Theme.SECONDARY : Theme.PRIMARY);
}
</script>

<template>
  <div
    id="theme-toggle"
    :class="themeCls"
    @click="toggleTheme"
    v-click-outside="removeFocus"
  >
    <div class="theme-toggle-track">
      <div>
        <font-awesome-icon icon="sun" />
      </div>
      <div>
        <font-awesome-icon icon="moon" />
      </div>
    </div>
    <div class="theme-toggle-numb" />
  </div>
</template>

<style lang="scss">
#theme-toggle {
  cursor: pointer;
  user-select: none;
  position: relative;
  touch-action: pan-x;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;

  &.primary-theme > .theme-toggle-numb {
    transform: translateX(31px);
  }

  > .theme-toggle-track {
    width: 58px;
    height: 28px;
    border-radius: 30px;
    background-color: #4d4d4d;

    > div {
      height: 100%;
      position: absolute;

      &:first-of-type {
        left: 8px;
      }

      &:last-of-type {
        right: 8px;
      }
    }
  }

  .theme-toggle-numb {
    left: 0px;
    top: 1.5px;
    width: 25px;
    height: 25px;
    position: absolute;
    border-radius: 50%;
    box-sizing: border-box;
    transform: translateX(2.5px);
    border: 0.5px solid #4d4d4d;
    background-color: #fafafa;
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
      box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1),
      border 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    will-change: transform, box-shadow, border;
  }
}
</style>
