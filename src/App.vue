<script setup lang="ts">
import { watch, unref, ref } from "vue";
import { useRouter } from "vue-router";
import { useGtag } from "vue-gtag-next";
import { useSharedTheme } from "@/composables";
import { useMeta, useActiveMeta } from "vue-meta";
import { Navbar, AppFooter, BackToTop, TopStockBar } from "@/components";

const router = useRouter();
const { pageview } = useGtag();
const activeMeta = useActiveMeta();
const { themeCls } = useSharedTheme();

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

const setHovered = (symbol: any) => {
  hovered.value = symbol;
  if (symbol) {
    paused.value = true;
  } else {
    paused.value = false;
  }
};

useMeta({
  charset: "utf8",
  og: {
    locale: "en_US",
    type: "website",
    site_name: "VueSeoFriendlySpa",
  },
  htmlAttrs: {
    amp: true,
    lang: ["en"],
  },
});

function trackPageView() {
  setTimeout(() => {
    const { currentRoute, getRoutes } = router;
    const { path } = unref(currentRoute);
    const isValidPath = getRoutes().some((x) => x.path === path);
    if (isValidPath) {
      pageview(path);
    }
  }, 10);
}

watch(
  () => activeMeta,
  () => trackPageView(),
  { deep: true }
);

watch(themeCls, (value) => {
  document.body.className = value;
});
</script>

<template>
  <metainfo>
    <template #title="{ content }">
      {{ `VueSeoFriendlySpa | ${content}` }}
    </template>
  </metainfo>
  <Navbar />
  <RouterView v-slot="{ Component, route }">
    <transition mode="out-in" :name="(route.meta.transition as string)">
      <component :is="Component" />
    </transition>
  </RouterView>
  <BackToTop />
  <AppFooter />
</template>
