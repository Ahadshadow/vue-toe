<script setup lang="ts">
  import { VueSEO } from '@/icons';
  import ToggleTheme from './ToggleTheme.vue';
</script>

<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-wrapper">
      <div class="brand-wrapper" >
        <VueSEO
          role="img"
          width="162"
          height="65"
          id="vue-seo-logo"
          aria-hidden="true"
        />
      </div>
      <div class="navbar-routes">
        <RouterLink
          :to="{ name: 'Home' }"
          class="navbar-item"
        >
          <span>Αρχική</span>
        </RouterLink>

        <RouterLink
          :to="{ name: 'Trends' }"
          class="navbar-item"
        >
          <span>Τάσεις</span>
        </RouterLink>

        <RouterLink
          :to="{ name: 'Services' }"
          class="navbar-item"
        >
          <span>Υπηρεσίες</span>
        </RouterLink>

        <RouterLink
          :to="{ name: 'About' }"
          class="navbar-item"
        >
          <span>Σχετικά</span>
        </RouterLink>

        <div class="seperator" />

        <div class="social-btn">
          <a target="_blank" href="https://facebook.com/dimitriaka.gr"><font-awesome-icon :icon="['fab', 'facebook']" style="color:white; margin: 0 5px"/></a>
          <a target="_blank" href="https://instagram.com/dimitriaka.gr"><font-awesome-icon :icon="['fab', 'instagram']" style="color:white ; margin: 0 5px"/></a>
        </div>

        <div class="navbar-theme-toggle">
          <ToggleTheme />
        </div>
      </div>
    </div>
  </nav>
</template>
