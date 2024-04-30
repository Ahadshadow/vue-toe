<script setup lang="ts">
import { watch, unref, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useGtag } from "vue-gtag-next";
import { useSharedTheme } from "@/composables";
import { useMeta, useActiveMeta } from "vue-meta";
import {
  Navbar,
  AppFooter,
  BackToTop,
  TopStockBar,
  AdminLayout,
} from "@/components";

const router = useRouter();
const { pageview } = useGtag();
const activeMeta = useActiveMeta();
const { themeCls } = useSharedTheme();

import { useStore } from "vuex";

const store = useStore();
const isAdmin = computed(() => store.state.isAdmin);
const routeCurrrent = ref();

defineExpose({ isAdmin });
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
    routeCurrrent.value = path;

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

  <RouterView v-slot="{ Component, route }">
    <template v-if="isAdmin">
      <AdminLayout :route="route">
        <!-- <transition mode="out-in" :name="(route.meta.transition as string)"> -->
        <component :is="Component" />
        <!-- </transition> -->
      </AdminLayout>
    </template>

    <template v-else>
      <Navbar />
      <transition mode="out-in" :name="(route.meta.transition as string)">
        <component :is="Component" />
      </transition>
      <BackToTop />
      <AppFooter />
    </template>
  </RouterView>
</template>
