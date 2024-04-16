<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import MarqueeText from "vue-marquee-text-component";

const stocks = ref([
  { symbol: "ATRL", price: 399.98, change: "+5.16%" },
  { symbol: "AVN", price: 60.6, change: "+0.24%" },
  { symbol: "BAFL", price: 53.35, change: "-0.05%" },
  { symbol: "BAHL", price: 86.89, change: "-1.65%" },
  { symbol: "BIPL", price: 22.99, change: "-0.36%" },
  { symbol: "BNWM", price: 25.78, change: "-0.21%" },
]);

const hovered = ref(null);
const paused = ref(false);
const showMarquee = ref(true);

const setHovered = (symbol: any) => {
  hovered.value = symbol;
  if (symbol) {
    paused.value = true;
  } else {
    paused.value = false;
  }
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  // Check if the top area of the navbar is transparent
  if (window.scrollY > 60) {
    // Hide the marquee
    showMarquee.value = false;
  } else {
    // Show the marquee
    showMarquee.value = true;
  }
};
</script>

<template>
  <MarqueeText
    class="marquee"
    :paused="paused"
    :duration="30"
    v-if="showMarquee"
  >
    <div
      v-for="(stock, index) in stocks"
      :class="{
        'stock-item': true,

        hovered: hovered === stock.symbol && index,
      }"
      @mouseover="setHovered(stock.symbol)"
      @mouseleave="setHovered(null)"
    >
      {{ stock.symbol }}
      <span
        :class="{
          up: stock.change.includes('+'),
          down: stock.change.includes('-'),
        }"
        class="price"
      >
        {{ stock.price }}
      </span>
      <span
        :class="{
          up: stock.change.includes('+'),
          down: stock.change.includes('-'),
        }"
        class="icon"
      >
        <span v-if="stock.change.includes('+')">▲ </span>
        <span v-if="stock.change.includes('-')">▼ </span>
      </span>

      <span
        :class="{
          up: stock.change.includes('+'),
          down: stock.change.includes('-'),
        }"
        class="change"
        >({{ stock.change }})</span
      >
    </div>
  </MarqueeText>
</template>

<style scoped lang="scss">
.marquee {
  height: 30px;
  background-color: #2d3748;
  align-self: center;
  gap: 30px;
}

.stock-item {
  display: inline-block;
  padding-right: 20px; /* Adjust as needed */
  cursor: pointer;
  margin-top: 2px;
  margin-right: 10px;
  color: white;
  font-weight: 500;
  .icon {
    margin-left: 2px;
    font-size: 16px;
    text-align: center;
  }
  .price {
    margin-left: 5px;
  }
  .change {
    margin-left: 2px;
    font-size: 14px;
  }
}

.up {
  color: green;
}

.down {
  color: red;
}
</style>
