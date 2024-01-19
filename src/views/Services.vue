<script setup lang="ts">
  import { useMetaRoute } from '@/composables';
  import {SERVICES} from "@/config/servives.config";

  useMetaRoute();
</script>

<template>

  <div class="tile notification-tile is-parent is-vertical is-8">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="is-flex is-horizontal-center">
            <figure class="image is-132x132">
<!--              <font-awesome-icon-->
<!--                class="vue-svg"-->
<!--                :icon="['fab', 'vuejs']"-->
<!--              />-->
              <img src="../icons/dimitriaka.gr.png">
            </figure>
          </div>
          <h1 class="title">Οι υπηρεσίες μας</h1>
<!--          <div><span class="title">ασδασδα</span></div>-->
          <div><p class="subtitle">Μπορούμε να σας βοηθήσουμε με τις παρακάτω υπηρεσίες</p></div>
          <hr>
          <p
            v-for="({ bold_text, description }, index) in SERVICES"
            :key="index"
            class="service"
          >
            <font-awesome-icon icon="check" />
            {{ description }}
            <b v-if="bold_text">
              {{ bold_text }}
            </b>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
